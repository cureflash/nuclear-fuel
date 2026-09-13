# NUC-04 トリウム燃料サイクル

- status: complete
- verified_at: 2026-09-12
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- numeric_authority:
  - 232Th half-life: JAEA ATOMICA「トリウム」の1.4×10^10年
  - 233Th half-life: IAEA 2026 Thorium Fuel Cycle資料の22.3分
  - 233Pa half-life: IAEA 2026 Thorium Fuel Cycle資料の27日
  - 233U half-life: IAEA Technical Reports Series No.473の1.592×10^5年
  - 232U half-life: IAEA NW-T-1.7 / IAEA-TECDOC-1529の68.9年
  - 208Tl gamma energy: IAEA-TECDOC-1450の約2.6 MeV
- numeric_note: IAEA-TECDOC-1450本文には232U半減期73.6年の旧値も残るため、本topicでは新しいIAEA資料で一致する68.9年を数値authorityとした。

## 出題根拠

対象論点は、232Th→233U、233Uの核分裂性、232U混入、娘核種γ線、取扱上の特徴。NRAの直近公開過去問を確認し、第56回「核燃料物質の化学的性質及び物理的性質」第1問(5)で、トリウム燃料サイクルの233U、生成核種上の利点、燃料製造時の取扱い上の問題が直接問われていることを確認した。過去問本文は転載せず、同じ知識領域を独立した4択問題へ再構成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第56回 核燃料物質の化学的性質及び物理的性質: https://www.nra.go.jp/data/000472259.pdf
- JAEA ATOMICA「トリウム」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1123.html
- JAEA ATOMICA「トリウムを用いた原子炉」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-04-11-01.html
- NRC Fertile material: https://www.nrc.gov/reading-rm/basic-ref/glossary/fertile-material
- IAEA 2026 Introduction of Innovative Nuclear Reactors and GEN-IV Concepts, Thorium Fuel Cycle: https://conferences.iaea.org/event/460/contributions/39511/attachments/22096/37991/2026-02-16_V.%20Kriventsev_IAEA%20Introduction%20of%20Innovative%20Nuclear%20Reactors%20and%20GEN-IV%20Concepts.pdf
- IAEA Thermophysical Properties of Materials for Nuclear Engineering: https://www-pub.iaea.org/MTCD/Publications/PDF/IAEA-THPH_web.pdf
- IAEA Technical Reports Series No.473: https://www-pub.iaea.org/MTCD/Publications/PDF/trs473_web.pdf
- IAEA-TECDOC-1450 Thorium Fuel Cycle — Potential Benefits and Challenges: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- IAEA Nuclear Energy Series No. NW-T-1.7: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf
- IAEA-TECDOC-1529 Management of Reprocessed Uranium: https://www-pub.iaea.org/MTCD/Publications/PDF/te_1529_web.pdf
- IAEA URAM-2018「Thorium as nuclear fuel: What, how and when?」: https://conferences.iaea.org/event/146/contributions/5192/

## 問題

### NUC-04-Q001
- 問題文: トリウム燃料サイクルで、親物質232Thから最終的に生成して燃料として利用する核分裂性核種はどれか。
- 選択肢: ["233U", "239Pu", "235U", "241Pu"]
- 正答選択肢: A
- 正答: 233U
- 解説: 232Thは中性子を吸収し、233Th、233Paを経て核分裂性の233Uへ転換される。NRCも232Thを233Uへ転換できるfertile materialとしている。
- 出典: https://www.nrc.gov/reading-rm/basic-ref/glossary/fertile-material ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1123.html
- verified: true

### NUC-04-Q002
- 問題文: 232Thが中性子を1個捕獲した直後に生成する核種はどれか。
- 選択肢: ["233Pa", "233Th", "233U", "232U"]
- 正答選択肢: B
- 正答: 233Th
- 解説: トリウム燃料サイクルの生成系列は232Th(n,γ)233Th→β−→233Pa→β−→233Uである。したがって中性子捕獲直後は233Thとなる。
- 出典: https://conferences.iaea.org/event/460/contributions/39511/attachments/22096/37991/2026-02-16_V.%20Kriventsev_IAEA%20Introduction%20of%20Innovative%20Nuclear%20Reactors%20and%20GEN-IV%20Concepts.pdf
- verified: true

### NUC-04-Q003
- 問題文: 232Thから233Uが生成する主要系列として正しいものはどれか。
- 選択肢: ["232Th→232Pa→233Pa→233U", "232Th→233Th→233U→233Pa", "232Th→233Th→233Pa→233U", "232Th→233Pa→233Th→233U"]
- 正答選択肢: C
- 正答: 232Th→233Th→233Pa→233U
- 解説: 232Thは中性子捕獲で233Thとなり、233Thと233Paが順にβ−壊変して233Uへ至る。
- 出典: https://conferences.iaea.org/event/460/contributions/39511/attachments/22096/37991/2026-02-16_V.%20Kriventsev_IAEA%20Introduction%20of%20Innovative%20Nuclear%20Reactors%20and%20GEN-IV%20Concepts.pdf
- verified: true

### NUC-04-Q004
- 問題文: 233Thの半減期として最も近いものはどれか。
- 選択肢: ["約27日", "約68.9年", "約1.59×10^5年", "約22.3分"]
- 正答選択肢: D
- 正答: 約22.3分
- 解説: IAEAのトリウム燃料サイクル資料は233Thのβ−壊変半減期を22.3分としている。27日は次段の233Paの半減期である。
- 出典: https://conferences.iaea.org/event/460/contributions/39511/attachments/22096/37991/2026-02-16_V.%20Kriventsev_IAEA%20Introduction%20of%20Innovative%20Nuclear%20Reactors%20and%20GEN-IV%20Concepts.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/IAEA-THPH_web.pdf
- verified: true

### NUC-04-Q005
- 問題文: 233Paの半減期として最も近いものはどれか。
- 選択肢: ["約27日", "約22.3分", "約68.9年", "約1.59×10^5年"]
- 正答選択肢: A
- 正答: 約27日
- 解説: 233Paは約27日の半減期でβ−壊変して233Uとなる。IAEA NW-T-1.7でも、239Npの約2.3日に対し233Paは約27日と説明されている。
- 出典: https://conferences.iaea.org/event/460/contributions/39511/attachments/22096/37991/2026-02-16_V.%20Kriventsev_IAEA%20Introduction%20of%20Innovative%20Nuclear%20Reactors%20and%20GEN-IV%20Concepts.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf
- verified: true

### NUC-04-Q006
- 問題文: 熱中性子領域での233Uの性質として適切なものはどれか。
- 選択肢: ["親物質であり熱中性子では核分裂性ではない", "核分裂性核種として燃料に利用できる", "中性子を吸収すると必ず232Thへ戻る", "安定核種で放射性壊変しない"]
- 正答選択肢: B
- 正答: 核分裂性核種として燃料に利用できる
- 解説: JAEAは233Uを熱中性子領域で優れた核分裂性核種と説明している。232Thは親物質、233Uはそこから生成する核分裂性燃料である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-04-11-01.html ; https://www.nrc.gov/reading-rm/basic-ref/glossary/fertile-material
- verified: true

### NUC-04-Q007
- 問題文: 232Thを主体とするトリウム燃料サイクルの導入初期に、外部から核分裂性物質が必要となる主な理由はどれか。
- 選択肢: ["232Thは自発核分裂だけで十分な中性子を供給するため", "天然トリウムには大量の235Uが含まれるため", "232Th自体は親物質であり、233Uを生成するための中性子源となる初期核分裂性物質が必要なため", "233Uは中性子を全く放出しないため"]
- 正答選択肢: C
- 正答: 232Th自体は親物質であり、233Uを生成するための中性子源となる初期核分裂性物質が必要なため
- 解説: JAEAは、Thから233Uを製造する導入段階では235UまたはPuなどの核分裂中性子が必要と説明している。IAEAも天然Thには連鎖反応を開始できる十分な核分裂性物質がないとしている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-04-11-01.html ; https://conferences.iaea.org/event/146/contributions/5192/
- verified: true

### NUC-04-Q008
- 問題文: IAEAがいうトリウムの「open fuel cycle」の説明として適切なものはどれか。
- 選択肢: ["照射後に233Uを必ず化学分離して再利用する", "233Uを廃棄前にプルトニウムへ変換する", "232Thを照射せず直接熱中性子核分裂させる", "232Thを照射して生成した233Uを燃料中でそのまま核分裂利用し、233Uの化学分離を行わない"]
- 正答選択肢: D
- 正答: 232Thを照射して生成した233Uを燃料中でそのまま核分裂利用し、233Uの化学分離を行わない
- 解説: IAEA-TECDOC-1450はopen cycleを、232Thを照射し、生成した233Uをin situで核分裂させ、233Uの化学分離を伴わない方式としている。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- verified: true

### NUC-04-Q009
- 問題文: IAEAがいうトリウムの「closed fuel cycle」の説明として適切なものはどれか。
- 選択肢: ["照射済みトリウム燃料を再処理して233Uを回収し、233U含有燃料を再製造・再利用する", "照射済み燃料を再処理せず直接処分する", "天然トリウムから遠心分離で233Uを濃縮する", "232Thを233Uへ変換せずに繰り返し利用する"]
- 正答選択肢: A
- 正答: 照射済みトリウム燃料を再処理して233Uを回収し、233U含有燃料を再製造・再利用する
- 解説: IAEAはclosed cycleを、照射したThまたはTh系燃料を化学再処理して233Uを回収し、233U含有燃料を再製造・リサイクルする方式としている。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- verified: true

### NUC-04-Q010
- 問題文: 233Uの壊変と半減期の組合せとして適切なものはどれか。
- 選択肢: ["β−壊変、約27日", "α壊変、約1.592×10^5年", "α壊変、約68.9年", "β−壊変、約22.3分"]
- 正答選択肢: B
- 正答: α壊変、約1.592×10^5年
- 解説: IAEA Technical Reports Series No.473は233Uの半減期を1.592×10^5年、主要壊変をα壊変100%としている。娘核種は229Thである。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/trs473_web.pdf
- verified: true

### NUC-04-Q011
- 問題文: 本topicで採用する232Uの半減期として最も近いものはどれか。
- 選択肢: ["約22.3分", "約27日", "約68.9年", "約1.4×10^10年"]
- 正答選択肢: C
- 正答: 約68.9年
- 解説: IAEA NW-T-1.7とIAEA-TECDOC-1529は232Uの半減期を68.9年としている。本topicではこの新しい値を数値authorityとする。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/te_1529_web.pdf
- verified: true

### NUC-04-Q012
- 問題文: 再処理で回収した233Uに混在する232Uについて、化学分離の観点から正しい説明はどれか。
- 選択肢: ["酸化状態を変えれば完全に233Uから除去できる", "TBP抽出だけで232Uだけを選択的に除去できる", "228Thへ変換してからでないと233Uと共存しない", "同じ元素のウラン同位体であるため通常の化学分離では233Uから分離できない"]
- 正答選択肢: D
- 正答: 同じ元素のウラン同位体であるため通常の化学分離では233Uから分離できない
- 解説: IAEA-TECDOC-1450は、照射トリウムから生成した232Uは回収233Uから化学的に分離できないと説明している。このため232U由来の娘核種による放射線場が回収233Uの取扱いに影響する。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- verified: true

### NUC-04-Q013
- 問題文: 232Uの壊変系列で、回収233Uの取扱い時に特に強い高エネルギーγ線源として問題となる娘核種はどれか。
- 選択肢: ["208Tl", "233Pa", "239Np", "241Am"]
- 正答選択肢: A
- 正答: 208Tl
- 解説: IAEAは232U系列の短寿命娘核種のうち208Tlを特に重要な高エネルギーγ線源として挙げている。232Uの存在そのものだけでなく、娘核種の成長が取扱い上のγ線場を強くする。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- verified: true

### NUC-04-Q014
- 問題文: 208Tlが放出する代表的な高エネルギーγ線として最も近いものはどれか。
- 選択肢: ["約0.0595 MeV", "約2.6 MeV", "約0.662 MeV", "約1.17 MeV"]
- 正答選択肢: B
- 正答: 約2.6 MeV
- 解説: IAEA-TECDOC-1450は208Tlが約2.6 MeVの透過性の高いγ線を放出すると説明している。この強いγ線が遮へい・遠隔取扱い要求の主要因となる。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- verified: true

### NUC-04-Q015
- 問題文: トリウム燃料照射時の232U生成について適切な説明はどれか。
- 選択肢: ["232Uは天然トリウム中に大量に存在し、照射条件には依存しない", "232Uは233Uの化学精製時にのみ生成する", "232Th、233Pa、233Uなどに関係する(n,2n)反応経路で生成し、量は中性子スペクトルや照射条件の影響を受ける", "232Uは233Paのβ−壊変だけで必ず生成する"]
- 正答選択肢: C
- 正答: 232Th、233Pa、233Uなどに関係する(n,2n)反応経路で生成し、量は中性子スペクトルや照射条件の影響を受ける
- 解説: IAEA-TECDOC-1450は232Uが主に232Thの(n,2n)反応、さらに233Pa・233Uの(n,2n)反応から生成すると説明する。NW-T-1.7は232U汚染量が燃焼度や中性子スペクトルに依存するとしている。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf
- verified: true

### NUC-04-Q016
- 問題文: 232Uを含む回収233Uの再処理・再燃料化で必要性が高まる取扱方法はどれか。
- 選択肢: ["遮へいを設けず手作業のみで扱う", "一般化学実験室で開放操作する", "γ線を無視してα汚染だけを管理する", "十分な遮へいを伴う遠隔取扱い・遠隔燃料製造を行う"]
- 正答選択肢: D
- 正答: 十分な遮へいを伴う遠隔取扱い・遠隔燃料製造を行う
- 解説: 232U系列の短寿命娘核種が強いγ線場を形成するため、IAEAは再処理・再燃料化で遠隔取扱いと遮へいが必要になると説明している。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf
- verified: true

### NUC-04-Q017
- 問題文: IAEA NW-T-1.7が、232Th/233U燃料の製造設備について示す特徴として適切なものはどれか。
- 選択肢: ["α密閉性と十分な遮へいを備えたホットセルでの製造が必要となる", "通常の事務室で製造できる", "γ線遮へいは不要でグローブボックスだけで常に十分である", "232Uを化学除去してから無遮へいで製造する"]
- 正答選択肢: A
- 正答: α密閉性と十分な遮へいを備えたホットセルでの製造が必要となる
- 解説: IAEA NW-T-1.7は、233Uに232Uが混在し硬いγ線を伴うため、232Th/233U燃料製造にはalpha-tight hot cellsと十分な遮へいが必要と述べている。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf
- verified: true

### NUC-04-Q018
- 問題文: 結晶性ThO2を硝酸系で再処理する際の特徴として適切なものはどれか。
- 選択肢: ["UO2より常に容易に純硝酸へ溶解する", "純硝酸だけでは溶解しにくくフッ化物添加が有効だが、フッ化物は装置材料の腐食上の課題となる", "水だけで急速に溶解するため酸は不要である", "フッ化物添加はThO2溶解を必ず妨げる"]
- 正答選択肢: B
- 正答: 純硝酸だけでは溶解しにくくフッ化物添加が有効だが、フッ化物は装置材料の腐食上の課題となる
- 解説: IAEAは結晶性ThO2がUO2に比べ硝酸へ溶解しにくく、フッ化物添加が必要になる一方、フッ化物の腐食性・装置材料との不適合が課題になると説明している。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf ; https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf
- verified: true

### NUC-04-Q019
- 問題文: THOREXプロセスの目的として適切なものはどれか。
- 選択肢: ["ウラン濃縮で235Uだけを分離する", "使用済み軽水炉燃料からKrだけを回収する", "照射済みトリウム系燃料から233UとThを回収・再利用する", "232Uだけを233Uから同位体化学分離する"]
- 正答選択肢: C
- 正答: 照射済みトリウム系燃料から233UとThを回収・再利用する
- 解説: IAEA NW-T-1.7はTHOREXを233UおよびThの回収・リサイクルのためのトリウム系再処理プロセスとして説明している。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1822_web.pdf
- verified: true

### NUC-04-Q020
- 問題文: 232Th-233Uサイクルを238U-239Puサイクルと比べたとき、生成核種の観点から期待される特徴として適切なものはどれか。
- 選択肢: ["PuとNp・Am・Cmの生成量が必ず増大する", "233Uを利用すると核分裂生成物が一切生じない", "232Uを完全に生じないためγ線問題が消える", "Puおよび長寿命マイナーアクチノイドの生成量を少なくできる可能性がある"]
- 正答選択肢: D
- 正答: Puおよび長寿命マイナーアクチノイドの生成量を少なくできる可能性がある
- 解説: IAEA-TECDOC-1450は232Th-233Uサイクルでは238U-239PuサイクルよりPuおよび長寿命MA（Np、Am、Cm）の生成量が少なくなり得ると説明している。第56回試験でも生成核種の観点からの利点が論点化されている。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf ; https://www.nra.go.jp/data/000472259.pdf
- verified: true
