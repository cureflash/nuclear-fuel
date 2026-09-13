# CYC-02 ウラン転換

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA/ATOMICA「六フッ化ウランの製造（ウランの転換）」「イエローケーキ（ウラン精鉱）の性質」「六フッ化ウランの化学的有害性とその規制」、JAEA人形峠環境技術センター「六フッ化ウランの有効利用」を主authorityとし、数値・反応式は当該資料またはDOE/EPA/NRCの公的資料に固定して照合した。NRA「過去の資格試験問題」で直近3回（第58回・第57回・第56回）の公開状況を確認し、過去問本文は転載していない。

## 出題根拠

対象は `04_核燃料サイクル.md` の CYC-02（精鉱、UO3/U3O8、UF4、UF6、フッ素化、UF6の揮発性と取扱い）。精鉱の化学形とU3O8、湿式転換での精製・UO3生成、UO3→UO2→UF4→UF6の工程、HF/F2によるフッ化、UF4の性状、UF6の捕集・充填・精製、相状態・昇華・三重点・液化条件、水分との反応、濃縮用化学形としての理由までを分散して作問した。数値は、ADU加熱温度をJAEA「イエローケーキ」、UO3還元・UF4生成・UF6生成・コールドトラップ温度をJAEA「六フッ化ウランの製造」、UF6の相状態・液化条件をDOE PEISに固定した。

## 主要資料

- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000480853.pdf
- 第57回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000475646.pdf
- 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf
- JAEA/ATOMICA「六フッ化ウランの製造（ウランの転換）」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- JAEA/ATOMICA「イエローケーキ（ウラン精鉱）の性質」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-01-03.html
- JAEA/ATOMICA「六フッ化ウランの化学的有害性とその規制」: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- JAEA人形峠環境技術センター「六フッ化ウランの有効利用」: https://www.jaea.go.jp/04/zningyo/profile1020.html
- U.S. NRC「Uranium Conversion」: https://www.nrc.gov/materials/fuel-cycle-fac/ur-conversion
- U.S. NRC「Uranium Enrichment」: https://www.nrc.gov/materials/fuel-cycle-fac/ur-enrichment
- U.S. DOE「Final PEIS for Alternative Strategies for the Long-Term Management and Use of Depleted Uranium Hexafluoride, Appendix」: https://www.energy.gov/sites/default/files/2021-07/eis-0269-vol2-appendices-depleted-duf6-1999-04.pdf
- U.S. EPA「Technical Resource Document: Extraction and Beneficiation of Ores and Minerals, Uranium」: https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/part9.pdf

## 問題

### CYC-02-Q001
- 問題文: ウラン転換工程の原料であるイエローケーキ（ウラン精鉱）の説明として最も適切なものはどれか。
- 選択肢: ["常に純粋なUO2だけからなる白色結晶である", "製錬で得られるウラン濃縮物で、化学形は製造条件により異なり、U3O8換算で扱われることがある", "濃縮済みUF6だけを固化した製品である", "常に純粋なUF4だけからなる緑色固体である"]
- 正答選択肢: B
- 正答: 製錬で得られるウラン濃縮物で、化学形は製造条件により異なり、U3O8換算で扱われることがある
- 解説: JAEAは、イエローケーキには重ウラン酸ナトリウム、重ウラン酸アンモニウム等の複数形態があり、含有ウランをU3O8換算で扱うと説明している。したがって純粋なUO2、濃縮UF6、純粋なUF4とする他の選択肢は誤りである。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-01-03.html
- verified: true

### CYC-02-Q002
- 問題文: JAEA資料で、重ウラン酸アンモニウム（ADU）を650～800℃に加熱したとき主に得られるとされるウラン酸化物はどれか。
- 選択肢: ["U3O8", "UO2", "UF4", "UF6"]
- 正答選択肢: A
- 正答: U3O8
- 解説: JAEAはADUを650～800℃に加熱するとU3O8になるとしている。UO2は後段の還元で得る酸化物、UF4とUF6はフッ化物であり、この加熱操作の生成物ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-01-03.html
- verified: true

### CYC-02-Q003
- 問題文: 湿式の代表的なウラン転換法で、イエローケーキを硝酸に溶解した後、不純物除去のために行う操作として正しいものはどれか。
- 選択肢: ["遠心分離による235U濃縮", "UO2ペレットの焼結", "TBPを用いた溶媒抽出と、その後の水による逆抽出", "UF6のコールドトラップ捕集"]
- 正答選択肢: C
- 正答: TBPを用いた溶媒抽出と、その後の水による逆抽出
- 解説: JAEAの方法(1)では、硝酸溶解後にTBPを用いてウランを溶媒抽出し、水で逆抽出して精製硝酸ウラニル溶液を得る。遠心分離は濃縮、焼結は燃料加工、コールドトラップはUF6生成後の捕集であり、この段階の操作ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q004
- 問題文: JAEAが示す代表的な湿式転換法で、精製した硝酸ウラニル溶液を加熱・脱硝して得る物質はどれか。
- 選択肢: ["UF6", "UF4", "UO2", "UO3"]
- 正答選択肢: D
- 正答: UO3
- 解説: 精製硝酸ウラニル溶液は加熱・脱硝によりUO3となる。その後UO3を水素でUO2へ還元し、さらにHFでUF4、F2でUF6へ進むため、他の3物質はこの操作の直接生成物ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q005
- 問題文: 代表的なUF6転換工程で、UO3をUO2へ還元するために用いられる気体はどれか。
- 選択肢: ["水素", "フッ素", "フッ化水素", "酸素"]
- 正答選択肢: A
- 正答: 水素
- 解説: JAEAはUO3を水素（アンモニア分解ガス）で還元してUO2にするとしている。フッ化水素はUO2→UF4、フッ素はUF4→UF6に用いる。酸素は還元剤ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q006
- 問題文: JAEAが示す代表的転換法で、UO3を水素でUO2へ還元する反応温度として正しいものはどれか。
- 選択肢: ["100～150℃", "550～600℃", "900～950℃", "1400～1500℃"]
- 正答選択肢: B
- 正答: 550～600℃
- 解説: JAEAはUO3の水素還元を550～600℃で行うとしている。100～150℃、900～950℃、1400～1500℃はいずれも同資料が示すこの工程の温度範囲ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q007
- 問題文: 代表的なUF6転換工程で、UO2をUF4へ変換するために吹き込む気体はどれか。
- 選択肢: ["水素", "酸素", "フッ化水素", "窒素"]
- 正答選択肢: C
- 正答: フッ化水素
- 解説: UO2はHF（フッ化水素）と反応してUF4になる。水素はUO3→UO2の還元に使われ、酸素と窒素はこのUF4生成反応の反応剤ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html ; https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/part9.pdf
- verified: true

### CYC-02-Q008
- 問題文: UO2からUF4を生成する代表的なフッ化反応として正しいものはどれか。
- 選択肢: ["UO2 + HF → UF6 + H2O", "UO2 + 2HF → UF4 + H2", "UF4 + 2H2O → UO2 + 4HF", "UO2 + 4HF → UF4 + 2H2O"]
- 正答選択肢: D
- 正答: UO2 + 4HF → UF4 + 2H2O
- 解説: 公的資料に示される反応は UO2 + 4HF → UF4 + 2H2O で、原子数も釣り合う。Aは生成物とF数が不整合、BはFとO/Hの収支が合わず、Cは逆向きかつ式としてもこの転換工程を表さない。
- 出典: https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/part9.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q009
- 問題文: JAEAが示す代表的転換法で、UO2にHFを反応させてUF4を生成する工程の管理温度として正しいものはどれか。
- 選択肢: ["400～450℃", "50～100℃", "700～750℃", "1000～1050℃"]
- 正答選択肢: A
- 正答: 400～450℃
- 解説: JAEAはUO2とHFの反応が発熱反応であるため、温度を400～450℃に保つとしている。50～100℃、700～750℃、1000～1050℃はいずれも同資料が示す管理温度ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q010
- 問題文: UF4の外観・通称として正しいものはどれか。
- 選択肢: ["白色の気体で「ホワイトガス」と呼ばれる", "緑色の固体で「グリーンソルト」と呼ばれる", "黄色の液体で「イエローリカー」と呼ばれる", "黒色の金属で「ブラックウラン」と呼ばれる"]
- 正答選択肢: B
- 正答: 緑色の固体で「グリーンソルト」と呼ばれる
- 解説: JAEAはUF4を緑色の固体で、グリーンソルトとも呼ばれるとしている。白色気体、黄色液体、黒色金属という説明はいずれもUF4の説明ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q011
- 問題文: 代表的なUF6製造工程で、UF4をUF6へ変換するため一般に反応させる物質はどれか。
- 選択肢: ["水素", "水蒸気", "フッ素", "アンモニア"]
- 正答選択肢: C
- 正答: フッ素
- 解説: JAEAは一般にUF4へF2を反応させてUF6を製造するとしている。水素、水蒸気、アンモニアはこのUF4→UF6の直接反応剤ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html ; https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/part9.pdf
- verified: true

### CYC-02-Q012
- 問題文: UF4からUF6を得る代表的な反応式として正しいものはどれか。
- 選択肢: ["UF4 + H2 → UF6", "UF4 + 2HF → UF6 + H2", "UF4 + O2 → UF6", "UF4 + F2 → UF6"]
- 正答選択肢: D
- 正答: UF4 + F2 → UF6
- 解説: 公的資料に示される標準的なフッ素化反応は UF4 + F2 → UF6 である。H2、HF、O2を用いる他の式はこの標準反応を表さず、元素収支の点でもUF6生成式として成立しないものを含む。
- 出典: https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/part9.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q013
- 問題文: JAEAが示す代表的転換法で、UF4をF2でUF6にするフッ素化工程の管理温度として正しいものはどれか。
- 選択肢: ["450～500℃", "0～50℃", "150～200℃", "800～850℃"]
- 正答選択肢: A
- 正答: 450～500℃
- 解説: JAEAはUF6生成が発熱反応であり、UF4のフッ素化工程を450～500℃に管理するとしている。他の3範囲は同資料が示す当該工程の管理温度ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q014
- 問題文: JAEAが示す代表的転換法で、生成したUF6ガスをコールドトラップで固体として回収する際の冷却温度として正しいものはどれか。
- 選択肢: ["約+56℃", "約-18℃", "約+100℃", "約-196℃"]
- 正答選択肢: B
- 正答: 約-18℃
- 解説: JAEAは生成したUF6ガスをコールドトラップで約-18℃に冷却し、固体として回収するとしている。+56℃付近は大気圧での昇華温度、+100℃と-196℃は同資料が示す捕集温度ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q015
- 問題文: JAEA資料に基づくUF6のボンベ充填・出荷の流れとして正しいものはどれか。
- 選択肢: ["コールドトラップ中の固体UF6をそのまま粉砕し、開放容器へ移して出荷する", "UF6を常温大気圧で液体のまま保持し、袋詰めして出荷する", "コールドトラップ中のUF6を温度・圧力を上げて液化しボンベに充填した後、自然冷却して出荷する", "UF6を水に溶かしてからボンベに充填し、液体水溶液として出荷する"]
- 正答選択肢: C
- 正答: コールドトラップ中のUF6を温度・圧力を上げて液化しボンベに充填した後、自然冷却して出荷する
- 解説: JAEAはコールドトラップ中のUF6を液化してボンベへ充填するため温度・圧力を上げ、充填後は自然冷却して出荷するとしている。開放容器、水溶液、常温大気圧で液体保持という他の方法はUF6の物性・取扱いに反する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html ; https://www.nrc.gov/materials/fuel-cycle-fac/ur-conversion
- verified: true

### CYC-02-Q016
- 問題文: JAEAが示す、原料精鉱の不純物を最初には除去しない転換法におけるUF6精製法として正しいものはどれか。
- 選択肢: ["遠心分離で235Uだけを取り除く", "UF6を水と反応させて全量をUO2F2にし、そのまま製品とする", "UF6を固体のまま磁気分離する", "UF6を加熱して液体とし、蒸留塔で分別蒸留する"]
- 正答選択肢: D
- 正答: UF6を加熱して液体とし、蒸留塔で分別蒸留する
- 解説: JAEAの方法(3)では、不純物を含んだままUF6まで転換し、コールドトラップ捕集後に加熱・液化して分別蒸留で精製する。235U分離は濃縮であり、水との反応はUF6を加水分解する。磁気分離も示されていない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q017
- 問題文: 常温・大気圧付近でのUF6の状態として正しいものはどれか。
- 選択肢: ["白色系の固体", "常に液体", "常に気体", "金属ウランの溶融体"]
- 正答選択肢: A
- 正答: 白色系の固体
- 解説: JAEA人形峠はUF6を常温・大気圧で白色の固体としている。JAEAの転換資料も常温・大気圧で固体とする。したがって常温で液体・気体、金属ウランの溶融体という選択肢は誤りである。
- 出典: https://www.jaea.go.jp/04/zningyo/profile1020.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q018
- 問題文: 大気圧付近で固体UF6が昇華して気体になる温度の目安として最も適切なものはどれか。
- 選択肢: ["約0℃", "約56℃", "約100℃", "約250℃"]
- 正答選択肢: B
- 正答: 約56℃
- 解説: JAEAは常温・大気圧で固体のUF6が約56℃で昇華するとしている。DOE資料でも固体UF6の蒸気圧が約56℃で1 atmに達するとされる。0℃、100℃、250℃はこの条件での昇華温度ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html ; https://www.energy.gov/sites/default/files/2021-07/eis-0269-vol2-appendices-depleted-duf6-1999-04.pdf
- verified: true

### CYC-02-Q019
- 問題文: UF6の三重点温度として最も適切なものはどれか。
- 選択肢: ["約-18℃", "約25℃", "約64℃", "約100℃"]
- 正答選択肢: C
- 正答: 約64℃
- 解説: JAEAはUF6の三重点を64.02℃としており、DOE資料も約64℃としている。-18℃はコールドトラップ回収温度の例、25℃は常温付近、100℃は三重点温度ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html ; https://www.energy.gov/sites/default/files/2021-07/eis-0269-vol2-appendices-depleted-duf6-1999-04.pdf
- verified: true

### CYC-02-Q020
- 問題文: DOE資料に基づき、UF6を液体として取り扱うために必要な条件の説明として正しいものはどれか。
- 選択肢: ["0℃未満かつ真空にすれば液体になる", "約25℃・1 atmで安定な液体になる", "約56℃・1 atmで液体になる", "三重点温度約64℃を上回り、圧力もおおむね1.5 atmを上回る条件が必要である"]
- 正答選択肢: D
- 正答: 三重点温度約64℃を上回り、圧力もおおむね1.5 atmを上回る条件が必要である
- 解説: DOEは液体UF6の取扱いに64℃超かつ約1.5 atm超が必要としている。64℃未満では液相を安定に存在させられず、約56℃・1 atmでは固体から気体への昇華条件に近い。0℃未満や25℃・1 atmでは固体側である。
- 出典: https://www.energy.gov/sites/default/files/2021-07/eis-0269-vol2-appendices-depleted-duf6-1999-04.pdf
- verified: true

### CYC-02-Q021
- 問題文: UF6シリンダを加熱して固体UF6を液化する際、充填余裕を確保する必要がある主な物性上の理由はどれか。
- 選択肢: ["固体から液体になると密度が低下して体積が増え、満充填だと液圧による容器破損のおそれがある", "固体から液体になると体積が必ず半分になるため、容器内が真空になる", "液化するとUF6が自動的にUO2へ変わり、酸素が大量発生する", "液化すると235Uだけが沈降して臨界になる"]
- 正答選択肢: A
- 正答: 固体から液体になると密度が低下して体積が増え、満充填だと液圧による容器破損のおそれがある
- 解説: DOEはUF6が固体から液体になると密度が低下して体積が増えるため、液化時の膨張余地を確保しないとhydraulic ruptureのおそれがあると説明している。体積半減、自発的UO2化、235Uだけの沈降はいずれもこの現象ではない。
- 出典: https://www.energy.gov/sites/default/files/2021-07/eis-0269-vol2-appendices-depleted-duf6-1999-04.pdf
- verified: true

### CYC-02-Q022
- 問題文: UF6が空気中の水分と反応したときの主要生成物の組合せとして正しいものはどれか。
- 選択肢: ["UO2とH2", "UO2F2とHF", "UF4とO2", "U3O8とF2"]
- 正答選択肢: B
- 正答: UO2F2とHF
- 解説: JAEAはUF6が水分と迅速に加水分解し、UO2F2と腐食性・毒性の強いHFを生じるとしている（UF6 + 2H2O → UO2F2 + 4HF）。したがってUO2+H2、UF4+O2、U3O8+F2はいずれもこの加水分解の主要生成物ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html ; https://www.jaea.go.jp/04/zningyo/profile1020.html
- verified: true

### CYC-02-Q023
- 問題文: ウラン濃縮の供給物としてUF6が適する理由の説明として最も適切なものはどれか。
- 選択肢: ["UF6中では235Uだけが化学的に金属へ変わるから", "UF6は常温大気圧で液体なのでポンプだけで同位体が分離するから", "適切な温度条件で気体として扱え、フッ素は天然同位体が実質1種類なのでUF6分子の質量差が主にウラン同位体差を反映するから", "UF6にすると238Uが自発的に235Uへ壊変するから"]
- 正答選択肢: C
- 正答: 適切な温度条件で気体として扱え、フッ素は天然同位体が実質1種類なのでUF6分子の質量差が主にウラン同位体差を反映するから
- 解説: NRCはUF6が適切な条件で気体として扱えることを濃縮工程の前提としている。またフッ素は天然で実質1同位体のため、UF6分子間の質量差はウラン同位体差を利用できる。化学反応で235Uだけを金属化する、常温液体のまま分離する、238Uが235Uへ変わる、という説明はいずれも誤りである。
- 出典: https://www.nrc.gov/materials/fuel-cycle-fac/ur-enrichment ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### CYC-02-Q024
- 問題文: 天然ウラン精鉱をUF6にする「転換」と、その後の「濃縮」の違いとして正しいものはどれか。
- 選択肢: ["転換で235U濃度を上げ、濃縮では化学形だけを変える", "転換でも濃縮でも235U濃度は変化しない", "転換でUをPuへ核変換し、濃縮でPuを除去する", "転換は主として化学形をUF6へ変える工程で、天然ウランの同位体組成はそのまま次の濃縮工程へ送られ、濃縮で235U割合を高める"]
- 正答選択肢: D
- 正答: 転換は主として化学形をUF6へ変える工程で、天然ウランの同位体組成はそのまま次の濃縮工程へ送られ、濃縮で235U割合を高める
- 解説: NRCは転換施設でイエローケーキをUF6にし、そのUF6を濃縮施設へ送ると説明する。転換段階のウランは天然ウランで、同位体分離は後段の濃縮で行う。したがって転換と濃縮の役割を逆転させる説明、濃縮でも組成不変とする説明、Puへの核変換を伴う説明はいずれも誤りである。
- 出典: https://www.nrc.gov/materials/fuel-cycle-fac/ur-conversion ; https://www.nrc.gov/materials/fuel-cycle-fac/ur-enrichment
- verified: true
