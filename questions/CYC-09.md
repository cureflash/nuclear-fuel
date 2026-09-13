# CYC-09 再処理化学

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA/ATOMICAのPUREX溶媒抽出・再処理技術資料、JAEA「再処理プロセス・化学ハンドブック第3版」の公開解説、JAEAの溶媒劣化試験、日本原燃の再処理工場資料を主authorityとした。NRA「過去の資格試験問題」で第58回・第57回・第56回の「核燃料物質の取扱いに関する技術」の公開を確認し、過去問本文は転載せず、U/Pu酸化状態、酸化還元分離、分配係数、硝酸濃度、TBP錯体、溶媒劣化の論点を新規4択化した。

## 出題根拠

対象は `04_核燃料サイクル.md` の CYC-09（U/Pu酸化状態、酸化還元分離、分配係数、硝酸濃度、TBP錯体、溶媒劣化）。CYC-08の工程順序中心の問題との重複を避け、CYC-09では抽出平衡と酸化還元化学を中心にした。数値はJAEA/ATOMICAの公表値に固定し、共抽出時の硝酸濃度は約3 mol/L、分配係数 kd=4・有機相/水相等量の例では1段80%、2段累計96%を用いた。TBP/希釈剤組成の数値問題は、JAEAが東海再処理施設について明示する30 vol% TBP/70 vol% n-ドデカンに限定した。

## 主要資料

- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- JAEA/ATOMICA「溶媒抽出工程」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html
- JAEA/ATOMICA「再処理技術の現状」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- JAEA/ATOMICA「再処理プロセスと安全性についての基本的考え方」: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html
- JAEA/ATOMICA「使用済（廃）溶媒の処理」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-10.html
- JAEA「再処理技術の基盤強化に貢献するデータ集の完成―再処理プロセス・化学ハンドブック第3版―」: https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_8.html
- JAEA「MOX燃料の再処理に向けて―Pu精製工程における溶媒劣化とその影響―」: https://rdreview.jaea.go.jp/review_jp/2009/j2009_8_1.html
- 日本原燃「再処理工場 精製建屋内における希釈剤の漏えいについて（原因と対策）」: https://www.jnfl.co.jp/ja/release/press/2025/detail/20250730-1.html
- 日本原燃「再処理施設におけるアクティブ試験の項目及び内容」: https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html

## 問題

### CYC-09-Q001
- 問題文: PUREX法の共抽出工程で、TBPに抽出されやすい状態としてJAEA資料が示すウランとプルトニウムの酸化状態の組合せはどれか。
- 選択肢: ["U(VI)とPu(IV)", "U(IV)とPu(III)", "U(III)とPu(VI)", "U(VI)とPu(III)"]
- 正答選択肢: A
- 正答: U(VI)とPu(IV)
- 解説: PUREX共抽出では、U(VI)は硝酸ウラニルとして、PuはPu(IV)に調整してTBPへ抽出する。Pu(III)はTBPへの親和性が低く、むしろU/Pu分配時に水相へ移すための状態である。U(IV)は分配工程でPu(IV)をPu(III)へ還元する還元剤として利用されるので、他の組合せは共抽出時の状態を表さない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html / https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_8.html
- verified: true

### CYC-09-Q002
- 問題文: PUREX法のU/Pu分配で、プルトニウムを有機相から水相へ移すために行う酸化状態の変化はどれか。
- 選択肢: ["Pu(III)をPu(IV)へ酸化する", "Pu(IV)をPu(III)へ還元する", "Pu(IV)をPu(VI)へ酸化する", "Pu(III)をPu(VI)へ酸化する"]
- 正答選択肢: B
- 正答: Pu(IV)をPu(III)へ還元する
- 解説: Pu(IV)はTBPに抽出されやすいが、Pu(III)はTBPへの親和性が低い。そこで分配工程ではPu(IV)をPu(III)へ還元して水相へ移し、Uを有機相に残す。酸化方向またはPu(VI)への変化は、この分配操作の目的と逆である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html / https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html
- verified: true

### CYC-09-Q003
- 問題文: JAEA資料がPUREX分配工程でPu(IV)をPu(III)へ還元するための還元剤として挙げている組合せはどれか。
- 選択肢: ["硝酸とn-ドデカン", "TBPと炭酸ナトリウム", "U(IV)（ウラナス）と硝酸ヒドロキシルアミン（HAN）", "DBPとMBP"]
- 正答選択肢: C
- 正答: U(IV)（ウラナス）と硝酸ヒドロキシルアミン（HAN）
- 解説: JAEAは、Pu還元剤として当初のスルファミン酸第一鉄に代わり、U(IV)（ウラナス）またはHANが用いられるようになったとしている。硝酸は工程溶液、n-ドデカンは希釈剤、TBPは抽出剤、炭酸ナトリウムは溶媒再生の洗浄剤、DBP・MBPはTBPの劣化生成物であり、同資料が示すPu還元剤の組合せではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q004
- 問題文: PUREX分配工程で還元剤とともにヒドラジンを用いる主目的として、JAEA資料に合致するものはどれか。
- 選択肢: ["TBPをn-ドデカンへ変換する", "硝酸ウラニルを沈殿させる", "Pu(III)をPu(IV)へ酸化する", "亜硝酸を分解し、Pu(III)やU(IV)の再酸化を抑える"]
- 正答選択肢: D
- 正答: 亜硝酸を分解し、Pu(III)やU(IV)の再酸化を抑える
- 解説: 硝酸から生じる亜硝酸はU(IV)やPu(III)を酸化してPu還元反応の効率を低下させるため、ヒドラジンを用いて亜硝酸を分解する。TBPの変換、ウラン沈殿、Pu(III)の酸化が主目的ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q005
- 問題文: PUREX分配工程で硝酸由来の亜硝酸が蓄積した場合に起こり得る作用として正しいものはどれか。
- 選択肢: ["U(IV)やPu(III)を酸化し、Pu還元分離の効率を低下させる", "Pu(IV)を選択的にPu(III)へ還元する", "TBPを直接n-ドデカンへ変える", "U(VI)を固体UO2として沈殿させる"]
- 正答選択肢: A
- 正答: U(IV)やPu(III)を酸化し、Pu還元分離の効率を低下させる
- 解説: JAEAは亜硝酸がU(IV)やPu(III)を酸化し、分配工程の還元反応効率を悪化させると説明している。このためヒドラジンによる亜硝酸分解が行われる。残る3選択肢はいずれも亜硝酸の役割として同資料に示されない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q006
- 問題文: 分配工程でPu(IV)をPu(III)へ還元した際のウランの挙動として正しいものはどれか。
- 選択肢: ["ウランも同時にPuと同じ還元剤でU金属となる", "ウランは還元剤と反応せず、主として有機相に留まる", "ウランは揮発して気相へ移る", "ウランはDBPへ化学変換される"]
- 正答選択肢: B
- 正答: ウランは還元剤と反応せず、主として有機相に留まる
- 解説: U/Pu分配ではPuだけを抽出されにくいPu(III)へ変えて水相へ移し、ウランは還元剤と反応せず有機相に残すことで相互分離する。金属化・揮発・DBPへの変換はいずれもこの分配操作では起こらない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html
- verified: true

### CYC-09-Q007
- 問題文: Pu(IV)をPu(III)へ還元すると水相へ移りやすくなる理由として最も適切なものはどれか。
- 選択肢: ["Pu(III)だけが気体になるため", "Pu(III)がn-ドデカンへ分解するため", "Pu(III)はPu(IV)よりTBPへの親和性が低いから", "Pu(III)が硝酸を完全に中和するから"]
- 正答選択肢: C
- 正答: Pu(III)はPu(IV)よりTBPへの親和性が低いから
- 解説: PUREXの酸化還元分離は酸化状態によるTBPへの親和性・分配挙動の差を利用する。Pu(III)は難抽出性となるため水相へ移る。気化、希釈剤への分解、硝酸の中和が理由ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html / https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html
- verified: true

### CYC-09-Q008
- 問題文: JAEA資料が、Pu還元剤をスルファミン酸第一鉄からU(IV)やHANへ変更した効果として示すものはどれか。
- 選択肢: ["TBP濃度を100 vol%にできる", "硝酸を工程から完全に除ける", "Puを還元せずにU/Puを分離できる", "金属塩を含む廃液の発生を減らせる"]
- 正答選択肢: D
- 正答: 金属塩を含む廃液の発生を減らせる
- 解説: スルファミン酸第一鉄からU(IV)やHANへ移行したことで、JAEA資料は金属塩廃液が減少したとしている。TBPの純化、硝酸の全廃、酸化還元操作の不要化を意味しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q009
- 問題文: JAEA/ATOMICAが用いる分配係数 kd の定義として正しいものはどれか。
- 選択肢: ["kd = 有機相中の成分濃度 / 水相中の成分濃度", "kd = 水相中の成分濃度 / 有機相中の成分濃度", "kd = 有機相体積 / 水相体積", "kd = 抽出前濃度 / 抽出後の全相合計濃度"]
- 正答選択肢: A
- 正答: kd = 有機相中の成分濃度 / 水相中の成分濃度
- 解説: 分配係数kdは、平衡時の「溶媒相（有機相）中濃度／水溶液相中濃度」と定義される。逆数、相体積比、抽出前後の全量比ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html
- verified: true

### CYC-09-Q010
- 問題文: 分配係数 kd=4、平衡時の有機相と水相の体積が等しいとする。JAEA/ATOMICAの例と同じ条件で、1段の抽出後に溶質が有機相へ分配される割合はどれか。
- 選択肢: ["20%", "80%", "40%", "96%"]
- 正答選択肢: B
- 正答: 80%
- 解説: kd=Corg/Caq=4、両相体積が等しいので、有機相量:水相量=4:1。したがって有機相への割合は4/(4+1)=0.80=80%。20%は水相残留割合、96%は同じ条件で2段抽出したときの累計抽出率である。40%は分配係数と物質収支に合わない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html
- verified: true

### CYC-09-Q011
- 問題文: 分配係数 kd=4、有機相と水相を毎段等体積とし、1段目後の水相を同量の新しい有機相でさらに1回抽出する。初期溶質のうち2段までに有機相へ回収される累計割合はどれか。
- 選択肢: ["64%", "80%", "96%", "99.2%"]
- 正答選択肢: C
- 正答: 96%
- 解説: 1段ごとに水相へ残る割合は1/(4+1)=0.20。2段後の水相残留は0.20×0.20=0.04=4%なので、累計抽出率は100%-4%=96%。99.2%は同条件の3段後、80%は1段後、64%はこの物質収支に合わない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html
- verified: true

### CYC-09-Q012
- 問題文: JAEA/ATOMICAが分配係数 kd を支配する因子として列挙している組合せはどれか。
- 選択肢: ["燃料集合体の長さ、被覆管肉厚、燃焼炉出力だけ", "建屋面積、セル壁厚、クレーン容量だけ", "燃料ペレット直径、プレナム長、ヘリウム圧だけ", "元素の種類・原子価、水相の酸濃度、温度、溶媒組成など"]
- 正答選択肢: D
- 正答: 元素の種類・原子価、水相の酸濃度、温度、溶媒組成など
- 解説: 分配係数は化学平衡に関する量であり、元素の種類・原子価、酸濃度、温度、溶媒組成などに依存する。燃料棒や施設の幾何寸法そのものは、同資料がkdの支配因子として列挙するものではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html / https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_8.html
- verified: true

### CYC-09-Q013
- 問題文: JAEA資料がPUREX共抽出で通常最適と示す水相の硝酸濃度はおよそどれか。
- 選択肢: ["3 mol/L", "0.03 mol/L", "0.3 mol/L", "30 mol/L"]
- 正答選択肢: A
- 正答: 3 mol/L
- 解説: JAEAは、UO2(NO3)2・2TBPおよびPu(NO3)4・2TBPとしてU/Puを共抽出する際、通常は水相の硝酸濃度3 M（約3 mol/L）が最適としている。他の数値は同資料の値ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q014
- 問題文: Uを含むTBP有機相からUを水相へ逆抽出する操作として、JAEA/ATOMICAの説明に合致するものはどれか。
- 選択肢: ["硝酸濃度を極端に上げて有機相への分配をさらに強める", "水または希薄硝酸と接触させ、抽出平衡を水相側へ移す", "有機相をUF6に転換して遠心分離する", "DBPを添加してUを不可逆固定する"]
- 正答選択肢: B
- 正答: 水または希薄硝酸と接触させ、抽出平衡を水相側へ移す
- 解説: 水相の硝酸濃度を低くするとUの有機相への分配係数が低下するため、水または希薄硝酸との接触によってUを水相へ逆抽出できる。高酸度化は逆方向であり、UF6転換やDBP添加は逆抽出操作ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html / https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html
- verified: true

### CYC-09-Q015
- 問題文: ウラン精製工程で、ウランをTBPに抽出されやすい状態へ調整する方法としてJAEA/ATOMICAが示すものはどれか。
- 選択肢: ["水相を強アルカリ性にする", "硝酸を完全に除去する", "硝酸濃度を上げる", "n-ドデカンを水へ置換する"]
- 正答選択肢: C
- 正答: 硝酸濃度を上げる
- 解説: JAEA/ATOMICAは精製設備で、プルトニウムは主として酸化反応により、ウランは硝酸濃度を上げることによりTBPに抽出されやすい状態へ調整するとしている。アルカリ化、硝酸除去、希釈剤を水へ置換する操作ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html
- verified: true

### CYC-09-Q016
- 問題文: UのTBP抽出に対する硝酸濃度の影響について、JAEA/ATOMICAの説明に合致するものはどれか。
- 選択肢: ["硝酸濃度が低下するとUの有機相への分配係数は必ず増大する", "硝酸濃度はUの分配係数に影響しない", "硝酸濃度が下がるとUは必ず気体になる", "硝酸濃度が低下するとUの有機相への分配係数は低下する"]
- 正答選択肢: D
- 正答: 硝酸濃度が低下するとUの有機相への分配係数は低下する
- 解説: ATOMICAは、水相の硝酸濃度が低下するとUの有機相への分配係数が低下すると説明し、この性質を逆抽出に利用している。増大・無影響・気化はいずれも同資料と矛盾する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-03.html
- verified: true

### CYC-09-Q017
- 問題文: PUREX共抽出でU(VI)がTBPと形成して有機相へ移る錯体として、JAEA資料に示されるものはどれか。
- 選択肢: ["UO2(NO3)2・2TBP", "UO2・TBP", "UF6・2TBP", "U3O8・2TBP"]
- 正答選択肢: A
- 正答: UO2(NO3)2・2TBP
- 解説: JAEAは硝酸ウラニルUO2(NO3)2がTBPと反応し、UO2(NO3)2・2TBPを形成して有機相へ抽出されると示す。UO2、UF6、U3O8をTBP錯体とした他の式はPUREX共抽出の記述と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q018
- 問題文: PUREX共抽出でPu(IV)がTBPと形成して有機相へ移る錯体として、JAEA資料に示されるものはどれか。
- 選択肢: ["PuO2・TBP", "Pu(NO3)4・2TBP", "PuF6・2TBP", "Pu2O3・2TBP"]
- 正答選択肢: B
- 正答: Pu(NO3)4・2TBP
- 解説: JAEAはPu(IV)の硝酸塩Pu(NO3)4が2分子のTBPと錯体Pu(NO3)4・2TBPを形成して有機相へ移ると示している。酸化物やフッ化物をTBP錯体とした他の式は同資料のPUREX抽出反応ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-09-Q019
- 問題文: PUREX有機溶媒中のn-ドデカンの役割として正しいものはどれか。
- 選択肢: ["Pu(IV)をPu(III)へ還元する還元剤", "U/Pu硝酸塩と直接錯体を作る主抽出剤", "TBPを希釈する炭化水素系希釈剤", "DBPを生成するための酸化剤"]
- 正答選択肢: C
- 正答: TBPを希釈する炭化水素系希釈剤
- 解説: TBPがU/Puを抽出する抽出剤で、n-ドデカンはTBPを希釈する炭化水素系希釈剤である。Pu還元剤でも主抽出剤でも酸化剤でもない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-04-01.html / https://www.jnfl.co.jp/ja/release/press/2025/detail/20250730-1.html
- verified: true

### CYC-09-Q020
- 問題文: JAEAが東海再処理施設のPUREX溶媒として明示するTBPとn-ドデカンの体積組成はどれか。
- 選択肢: ["70 vol% TBP / 30 vol% n-ドデカン", "3 vol% TBP / 97 vol% n-ドデカン", "50 vol% TBP / 50 vol% n-ドデカン", "30 vol% TBP / 70 vol% n-ドデカン"]
- 正答選択肢: D
- 正答: 30 vol% TBP / 70 vol% n-ドデカン
- 解説: JAEAの東海再処理施設に関する溶媒劣化研究は、30 vol% TBP/70 vol% n-ドデカンをPUREX溶媒として明示している。残る組成は同資料の値と一致しない。施設を限定した数値問題であり、他施設へ一般化しない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2009/j2009_8_1.html
- verified: true

### CYC-09-Q021
- 問題文: TBPの劣化生成物について、JAEAが示す分解の進行順序として正しいものはどれか。
- 選択肢: ["TBP → DBP → MBP → リン酸", "TBP → MBP → DBP → n-ドデカン", "TBP → n-ドデカン → DBP → 硝酸", "TBP → Pu(NO3)4 → DBP → MBP"]
- 正答選択肢: A
- 正答: TBP → DBP → MBP → リン酸
- 解説: JAEAはTBPが放射線分解や加水分解によりDBPへ、DBPがMBPへ、さらにMBPがリン酸へ分解すると説明している。n-ドデカンやPu硝酸塩をこの逐次分解系列に含めた他の選択肢は誤りである。
- 出典: https://rdreview.jaea.go.jp/review_jp/2009/j2009_8_1.html
- verified: true

### CYC-09-Q022
- 問題文: PUREX溶媒中でTBPを劣化させDBP生成につながる要因として、JAEA資料に合致するものはどれか。
- 選択肢: ["可視光だけ", "放射線分解や酸・イオン触媒による加水分解", "遠心力だけ", "中性子吸収断面積だけ"]
- 正答選択肢: B
- 正答: 放射線分解や酸・イオン触媒による加水分解
- 解説: JAEAはTBPが放射線分解、イオン触媒や酸による加水分解などで劣化してDBPを生成するとしている。またATOMICAは放射線および硝酸による分解を説明している。可視光、遠心力、中性子吸収断面積だけをDBP生成要因とする記述はない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2009/j2009_8_1.html / https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-10.html
- verified: true

### CYC-09-Q023
- 問題文: TBP劣化でDBP濃度が高くなった場合のPu精製への影響として、JAEAの試験結果に合致するものはどれか。
- 選択肢: ["Puの希硝酸による逆抽出率が必ず100%になる", "DBPはPuと相互作用せず、工程に影響しない", "Puの希硝酸による逆抽出が悪化し、U/Puの廃液側への損失要因にもなる", "Puがすべて気体になって有機相から消失する"]
- 正答選択肢: C
- 正答: Puの希硝酸による逆抽出が悪化し、U/Puの廃液側への損失要因にもなる
- 解説: JAEAはDBP生成により回収対象U/Puの廃液側への移行が起こり得ること、またDBP濃度が高いほど希硝酸によるPu逆抽出率が悪化することを示している。DBP無影響、逆抽出率100%、Pu気化はいずれも同資料に反する。
- 出典: https://rdreview.jaea.go.jp/review_jp/2009/j2009_8_1.html / https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-10.html
- verified: true

### CYC-09-Q024
- 問題文: TBP分解生成物であるDBPやその金属錯体を溶媒から除去して再生する一般的な方法として、JAEA/ATOMICAが示すものはどれか。
- 選択肢: ["UF6ガスによるフッ素化", "高温で燃料ペレットと共焼結", "硝酸濃度を上げるだけでDBPを完全除去", "炭酸ナトリウムや水酸化ナトリウムを用いるアルカリ洗浄"]
- 正答選択肢: D
- 正答: 炭酸ナトリウムや水酸化ナトリウムを用いるアルカリ洗浄
- 解説: ATOMICAは、DBPおよびDBPとZr・Puなどとの錯体を除去して溶媒を再生するため、通常は炭酸ソーダ（炭酸ナトリウム）や苛性ソーダ（水酸化ナトリウム）によるアルカリ洗浄を採用すると説明している。フッ素化、焼結、硝酸濃度上昇だけによる除去は溶媒再生法ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-10.html / https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html
- verified: true
