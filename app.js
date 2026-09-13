const STATUS_FILES = [1,2,3,4,5].map((n)=>`./status/worker-${n}.md`);
const CATEGORY_LABELS = Object.freeze({
  LAW:'法令', NUC:'核種・元素・核燃料物性', MAT:'燃料・材料', CYC:'核燃料サイクル',
  SAF:'臨界安全・施設安全', ACC:'事故・化学安全', RADL:'放射線防護・法定数値',
  RNUC:'放射線・核種データ', DET:'放射線測定器', WST:'放射性廃棄物',
  CAL:'計算演習', DES:'記述演習'
});
const LETTERS=['A','B','C','D'];
const categoryView=document.querySelector('[data-role="categories"]');
const bankStatus=document.querySelector('[data-role="bank-status"]');
const loadError=document.querySelector('[data-role="load-error"]');
const mixedButton=document.querySelector('[data-category="mixed"]');
const homeView=document.querySelector('[data-view="home"]');
const quizView=document.querySelector('[data-view="quiz"]');
const resultView=document.querySelector('[data-view="result"]');
const progressEl=document.querySelector('[data-role="progress"]');
const promptEl=document.querySelector('[data-role="prompt"]');
const choicesEl=document.querySelector('[data-role="choices"]');
const explanationEl=document.querySelector('[data-role="explanation"]');
const nextButton=document.querySelector('[data-action="next"]');
const resultEl=document.querySelector('[data-role="result"]');

let completedTopics=[];
const categoryCache=new Map();
let session=null;

function show(view){homeView.hidden=view!==homeView;quizView.hidden=view!==quizView;resultView.hidden=view!==resultView}
function normalize(v){return String(v??'').trim().replace(/\s+/g,' ')}
function hashText(text){let h=2166136261;for(let i=0;i<text.length;i+=1){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(items,seed=Date.now()){const out=[...items];let state=(seed>>>0)||1;for(let i=out.length-1;i>0;i-=1){state=(Math.imul(state,1664525)+1013904223)>>>0;const j=state%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}

async function fetchText(url){const response=await fetch(url,{cache:'no-store'});if(!response.ok)throw new Error(`HTTP ${response.status}: ${url}`);return response.text()}
function parseCompleted(markdown){const match=/^- completed:\s*(.+)$/m.exec(markdown);if(!match)return[];const value=match[1].trim();if(!value||/^(none|done|なし)$/i.test(value))return[];return value.split(',').map((x)=>x.trim()).filter(Boolean)}
function parseChoices(value){if(!value)return null;try{const parsed=JSON.parse(value);if(!Array.isArray(parsed)||parsed.length!==4)return null;const choices=parsed.map(normalize);return choices.every(Boolean)&&new Set(choices).size===4?choices:null}catch{return null}}
function sourceUrls(value){return String(value??'').split(/\s*[;；]\s*/).map((x)=>x.trim()).filter((x)=>/^https?:\/\//.test(x))}

function parseTopic(markdown,requestedTopicId){
  const title=/^#\s+([A-Z]+-\d+)\s+(.+)$/m.exec(markdown);
  const topicId=requestedTopicId||title?.[1];
  const topicLabel=title?.[2]?.trim()||topicId;
  const chunks=markdown.split(/^###\s+/m).slice(1);
  const questions=[];
  for(const chunk of chunks){
    const lines=chunk.split('\n');
    const id=lines.shift()?.trim();
    if(!id||!id.startsWith(`${topicId}-Q`))continue;
    const fields=new Map();
    for(const line of lines){const match=/^-\s+([^:：]+)[:：]\s*(.*)$/.exec(line.trim());if(match)fields.set(match[1].trim(),match[2].trim())}
    if(!/^true$/i.test(fields.get('verified')??''))continue;
    const sentence=normalize(fields.get('問題文'));const answer=normalize(fields.get('正答'));
    if(!sentence||!answer)continue;
    const authored=parseChoices(fields.get('選択肢'));
    const correctLetter=normalize(fields.get('正答選択肢')).toUpperCase();
    let correctIndex=/^[ABCD]$/.test(correctLetter)?correctLetter.charCodeAt(0)-65:-1;
    if(authored&&correctIndex<0)correctIndex=authored.findIndex((choice)=>choice===answer);
    if(authored&&(correctIndex<0||authored[correctIndex]!==answer))continue;
    questions.push({id,topicId,topicLabel,sentence,answer,explanation:normalize(fields.get('解説')),sourceUrls:sourceUrls(fields.get('出典')),authoredChoices:authored,authoredCorrectIndex:correctIndex});
  }
  return questions;
}

function uniqueAnswers(questions){const seen=new Set();const out=[];for(const q of questions){if(q.answer&&!seen.has(q.answer)){seen.add(q.answer);out.push(q.answer)}}return out}
function materializeChoices(question,pool){
  if(question.authoredChoices)return{...question,choices:question.authoredChoices,correctIndex:question.authoredCorrectIndex,choiceAuthority:'authored'};
  const candidates=uniqueAnswers(pool).filter((value)=>value!==question.answer).sort((a,b)=>Math.abs(a.length-question.answer.length)-Math.abs(b.length-question.answer.length)||a.localeCompare(b,'ja'));
  if(candidates.length<3)return null;
  const offset=hashText(question.id)%candidates.length;const distractors=[];
  for(let i=0;distractors.length<3&&i<candidates.length;i+=1){const c=candidates[(offset+i)%candidates.length];if(!distractors.includes(c))distractors.push(c)}
  const correctIndex=hashText(`${question.id}:answer`)%4;const choices=[...distractors];choices.splice(correctIndex,0,question.answer);
  return{...question,choices,correctIndex,choiceAuthority:'derived'};
}

async function loadCategory(prefix){
  if(categoryCache.has(prefix))return categoryCache.get(prefix);
  const topics=completedTopics.filter((id)=>id.startsWith(`${prefix}-`));
  const docs=await Promise.all(topics.map(async(topicId)=>parseTopic(await fetchText(`./questions/${topicId}.md`),topicId)));
  const raw=docs.flat();const ready=raw.map((q)=>materializeChoices(q,raw)).filter(Boolean);
  categoryCache.set(prefix,ready);return ready;
}
async function loadAll(){const prefixes=[...new Set(completedTopics.map((id)=>id.split('-')[0]))];const groups=await Promise.all(prefixes.map(loadCategory));return groups.flat()}

function renderCategoryButtons(){
  categoryView.replaceChildren();
  const counts=new Map();for(const id of completedTopics){const prefix=id.split('-')[0];counts.set(prefix,(counts.get(prefix)||0)+1)}
  for(const [prefix,count] of counts){const button=document.createElement('button');button.type='button';button.textContent=`${CATEGORY_LABELS[prefix]||prefix}（${count}分野）`;button.addEventListener('click',()=>startCategory(prefix));categoryView.append(button)}
  mixedButton.disabled=completedTopics.length===0;
}

async function startCategory(prefix){
  setLoading(true,`${CATEGORY_LABELS[prefix]||prefix}を読み込み中です。`);
  try{const questions=await loadCategory(prefix);startSession(questions,8,CATEGORY_LABELS[prefix]||prefix)}catch(error){showError(error)}finally{setLoading(false)}
}
async function startMixed(){
  setLoading(true,'全分野を読み込み中です。');
  try{const questions=await loadAll();startSession(questions,10,'全分野ミックス')}catch(error){showError(error)}finally{setLoading(false)}
}
function startSession(questions,count,label){
  if(!questions.length)throw new Error('出題できる検証済み問題がありません。');
  const picked=shuffle(questions).slice(0,Math.min(count,questions.length));
  session={questions:picked,index:0,correct:0,answered:0,label,locked:false};show(quizView);renderQuestion();
}
function renderQuestion(){
  const question=session.questions[session.index];if(!question)return finish();session.locked=false;
  progressEl.textContent=`${session.label}　${session.index+1} / ${session.questions.length}`;
  promptEl.replaceChildren();const meta=document.createElement('span');meta.className='question-meta';meta.textContent=`${question.topicId} / ${question.topicLabel}`;const text=document.createElement('span');text.textContent=question.sentence;promptEl.append(meta,text);
  choicesEl.replaceChildren();question.choices.forEach((choice,index)=>{const button=document.createElement('button');button.type='button';button.className='choice';button.dataset.index=String(index);const letter=document.createElement('span');letter.className='choice-letter';letter.textContent=LETTERS[index];const body=document.createElement('span');body.className='choice-text';body.textContent=choice;button.append(letter,body);button.addEventListener('click',()=>submit(index));choicesEl.append(button)});
  explanationEl.hidden=true;explanationEl.replaceChildren();nextButton.hidden=true;
}
function submit(selectedIndex){
  if(session.locked)return;session.locked=true;const question=session.questions[session.index];const correct=selectedIndex===question.correctIndex;session.answered+=1;if(correct)session.correct+=1;
  [...choicesEl.children].forEach((button,index)=>{button.disabled=true;if(index===question.correctIndex)button.dataset.state='correct';else if(index===selectedIndex)button.dataset.state='wrong'});
  const card=document.createElement('div');card.className='answer-card';const title=document.createElement('h3');title.className=`answer-title ${correct?'correct':'wrong'}`;title.textContent=correct?'正解':'不正解';const answer=document.createElement('p');answer.className='answer-correct';answer.textContent=`正答：${LETTERS[question.correctIndex]} ${question.choices[question.correctIndex]}`;card.append(title,answer);
  if(question.explanation){const detail=document.createElement('p');detail.className='answer-detail';detail.textContent=question.explanation;card.append(detail)}
  if(question.sourceUrls.length){const list=document.createElement('ul');list.className='answer-sources';question.sourceUrls.forEach((url,i)=>{const li=document.createElement('li');const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=question.sourceUrls.length===1?'出典':`出典 ${i+1}`;li.append(a);list.append(li)});card.append(list)}
  explanationEl.append(card);explanationEl.hidden=false;nextButton.textContent=session.index+1===session.questions.length?'結果を見る':'次の問題';nextButton.hidden=false;
}
function next(){if(!session?.locked)return;session.index+=1;renderQuestion()}
function finish(){const accuracy=session.answered?Math.round(session.correct/session.answered*100):0;resultEl.textContent=`${session.correct} / ${session.answered} 正解（${accuracy}%）`;show(resultView)}
function setLoading(loading,message=''){for(const button of categoryView.querySelectorAll('button'))button.disabled=loading;mixedButton.disabled=loading||completedTopics.length===0;if(message)bankStatus.textContent=message}
function showError(error){loadError.textContent=error instanceof Error?error.message:String(error);loadError.hidden=false}

async function boot(){
  try{const statuses=await Promise.all(STATUS_FILES.map(fetchText));completedTopics=[...new Set(statuses.flatMap(parseCompleted))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));if(!completedTopics.length)throw new Error('完了topicが見つかりません。');renderCategoryButtons();bankStatus.textContent=`完了済み ${completedTopics.length}分野。選んだ分野の検証済み問題だけを出題します。`;loadError.hidden=true}catch(error){bankStatus.textContent='問題データを読み込めませんでした。';showError(error)}
}

mixedButton.addEventListener('click',startMixed);nextButton.addEventListener('click',next);document.querySelector('[data-action="home"]').addEventListener('click',()=>show(homeView));document.querySelector('[data-action="quit"]').addEventListener('click',()=>show(homeView));
show(homeView);await boot();
