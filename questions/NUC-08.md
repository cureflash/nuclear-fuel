# NUC-08 ウラン化合物

- status: complete
- verified_at: 2026-09-13
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- numeric_authority:
  - UO2 融解温度: JAEA ATOMICA「発電用原子炉材料および燃料」2,865 ℃
  - UO2 比重: JAEA ATOMICA「二酸化ウラン」10.97
  - UF6 相状態: JAEA ATOMICA「六フッ化ウランの化学的有害性とその規制」大気圧で56.6 ℃以上では気相が安定、常温常圧では固体
  - UO2→UF4 転換温度: 日・IAEA保障措置協定追加議定書附属書II 300～500 ℃
- verification_note: UO2、U3O8、UO3、UO2F2、UF4、UF6、UC、UNについて、酸化数、物性、反応性、転換・再転換・燃料工程上の位置をJAEA、IAEA協定資料、DOE、IUPACで照合した。数値は上記authorityに固定した。各誤答肢は、同一資料に示された値・反応・工程と不一致であること、または問題文で明示した形式酸化数の電荷中性条件に反することを確認した。NRAの過去問題一覧で第58回（令和8年）、第57回（令和7年）、第56回（令和6年）の「核燃料物質の化学的性質及び物理的性質」を直近過去問として確認し、過去問本文は転載せず、ウラン化合物の基礎物性・工程・反応を独立した4択へ再構成した。

## 出題根拠

対象論点は UO2、U3O8、UO3、UO2F2、UF4、UF6、UC、UN の酸化数、物性、反応性、工程上の位置。直近の公開過去問はNRAの過去問題一覧で第58回（令和8年）まで公開されていることを確認した。問題文は過去問から転載せず、JAEA等の一次・公的資料に基づき新規作成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- JAEA ATOMICA「六フッ化ウランの化学的有害性とその規制」: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- JAEA ATOMICA「六フッ化ウランの製造（ウランの転換）」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- JAEA ATOMICA「二酸化ウランおよび金属ウランの製造」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-02.html
- JAEA ATOMICA「発電用原子炉材料および燃料」: https://atomica.jaea.go.jp/data/detail/dat_detail_02-08-01-05.html
- JAEA ATOMICA「二酸化ウラン」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html
- JAEA ATOMICA「試験研究炉用ウラン燃料」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-01-04.html
- JAEA 核不拡散・核セキュリティ総合支援センター「日・IAEA保障措置協定の追加議定書（附属書II）」: https://www.jaea.go.jp/04/iscn/archive/infcirc255a/infcirc255aii.html
- JAEA「窒化物燃料物性データベース」関連プレス発表: https://www.jaea.go.jp/02/press2019/p19101802/
- U.S. DOE「Uranium Carbide Fuel Pilot」: https://www.energy.gov/etec/uranium-carbide-fuel-pilot
- IUPAC Gold Book「oxidation state」: https://goldbook.iupac.org/terms/view/O04365

## 問題

### NUC-08-Q001
- 問題文: 中性化合物 UO2 について、O の酸化数を -2 として電荷中性から求めた U の形式酸化数はどれか。
- 選択肢: ["+4", "+3", "+5", "+6"]
- 正答選択肢: A
- 正答: +4
- 解説: UO2 全体の電荷は0なので、Uの酸化数をxとすると x+2(-2)=0。したがって x=+4 である。+3、+5、+6はいずれもこの化学式と与えたO=-2の条件で電荷中性を満たさない。
- 出典: https://goldbook.iupac.org/terms/view/O04365 ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html
- verified: true

### NUC-08-Q002
- 問題文: 中性化合物 UO3 について、O の酸化数を -2 として電荷中性から求めた U の形式酸化数はどれか。
- 選択肢: ["+4", "+6", "+5", "+3"]
- 正答選択肢: B
- 正答: +6
- 解説: UO3 全体の電荷は0なので、Uの酸化数をxとすると x+3(-2)=0。したがって x=+6 である。+4、+5、+3では電荷中性を満たさない。
- 出典: https://goldbook.iupac.org/terms/view/O04365 ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### NUC-08-Q003
- 問題文: 中性化合物 U3O8 について、各Oを -2 として化学式全体の電荷中性から求めた U 1原子当たりの形式的な平均酸化数はどれか。
- 選択肢: ["+4", "+5", "+16/3", "+6"]
- 正答選択肢: C
- 正答: +16/3
- 解説: U3O8 全体の電荷は0なので、Uの平均酸化数をxとすると 3x+8(-2)=0、よって x=16/3 である。これは化学式から求める平均値であり、全U原子が同一の酸化状態であるという意味ではない。+4、+5、+6はいずれも3原子分の総和が+16にならない。JAEA資料ではU3O8はUO2製造の乾式法で現れ得る中間固体であり、研究炉燃料心材としての使用例も示されている。
- 出典: https://goldbook.iupac.org/terms/view/O04365 ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-02.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-01-04.html
- verified: true

### NUC-08-Q004
- 問題文: 中性化合物 UF4 について、F の酸化数を -1 として電荷中性から求めた U の形式酸化数はどれか。
- 選択肢: ["+6", "+5", "+3", "+4"]
- 正答選択肢: D
- 正答: +4
- 解説: UF4 全体の電荷は0なので、Uの酸化数をxとすると x+4(-1)=0。したがって x=+4 である。+6、+5、+3では電荷中性を満たさない。JAEAはUF4を六フッ化ウラン製造工程の中間化合物として示している。
- 出典: https://goldbook.iupac.org/terms/view/O04365 ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### NUC-08-Q005
- 問題文: 中性化合物 UF6 について、F の酸化数を -1 として電荷中性から求めた U の形式酸化数はどれか。
- 選択肢: ["+6", "+4", "+5", "+3"]
- 正答選択肢: A
- 正答: +6
- 解説: UF6 全体の電荷は0なので、Uの酸化数をxとすると x+6(-1)=0。したがって x=+6 である。+4、+5、+3では電荷中性を満たさない。
- 出典: https://goldbook.iupac.org/terms/view/O04365 ; https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- verified: true

### NUC-08-Q006
- 問題文: 中性化合物 UO2F2 について、O を -2、F を -1 として電荷中性から求めた U の形式酸化数はどれか。
- 選択肢: ["+4", "+6", "+5", "+8"]
- 正答選択肢: B
- 正答: +6
- 解説: UO2F2 全体の電荷は0なので、Uの酸化数をxとすると x+2(-2)+2(-1)=0。したがって x=+6 である。+4、+5、+8では電荷中性を満たさない。UO2F2はUF6の加水分解で生成するフッ化ウラニルである。
- 出典: https://goldbook.iupac.org/terms/view/O04365 ; https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- verified: true

### NUC-08-Q007
- 問題文: JAEA ATOMICA「発電用原子炉材料および燃料」に示される UO2 の融解温度として正しいものはどれか。
- 選択肢: ["565 ℃", "1,130 ℃", "2,865 ℃", "5,000 ℃"]
- 正答選択肢: C
- 正答: 2,865 ℃
- 解説: 同資料はUO2の融解温度を2,865℃としている。したがって同資料を数値authorityとする本問ではCのみが正しい。565℃、1,130℃、5,000℃はいずれも同資料のUO2融解温度ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_02-08-01-05.html
- verified: true

### NUC-08-Q008
- 問題文: JAEA ATOMICA「二酸化ウラン」に示される UO2 の比重として正しいものはどれか。
- 選択肢: ["1.097", "5.65", "8.40", "10.97"]
- 正答選択肢: D
- 正答: 10.97
- 解説: JAEA ATOMICAの二酸化ウラン項目はUO2の比重を10.97としている。したがってDのみが同資料の値と一致し、1.097、5.65、8.40はいずれも一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html
- verified: true

### NUC-08-Q009
- 問題文: UF6 を常温・大気圧に置いたとき、JAEA資料が安定としている物理状態はどれか。
- 選択肢: ["固体", "液体", "気体", "超臨界流体"]
- 正答選択肢: A
- 正答: 固体
- 解説: JAEAはUF6について常温・常圧では固体が安定と記載している。液体、気体、超臨界流体はこの条件での安定状態ではない。UF6は温度・圧力を制御することで固体・液体・気体の各状態を扱う。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### NUC-08-Q010
- 問題文: JAEA ATOMICA「六フッ化ウランの化学的有害性とその規制」に基づき、大気圧で UF6 の気相が安定になる温度の目安として正しいものはどれか。
- 選択肢: ["約36.6 ℃以上", "約56.6 ℃以上", "約96.6 ℃以上", "約156.6 ℃以上"]
- 正答選択肢: B
- 正答: 約56.6 ℃以上
- 解説: 同資料は、大気圧では56.6℃以上でUF6の気相が安定するとしている。したがってBのみが同資料の値と一致する。36.6、96.6、156.6℃はいずれも同資料の記載値ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- verified: true

### NUC-08-Q011
- 問題文: UF6 が空気中の水分と迅速に加水分解したとき、JAEAが示す主要生成物の組合せはどれか。
- 選択肢: ["UF4 と O2", "UO3 と F2", "UO2F2 と HF", "UO2 と F2"]
- 正答選択肢: C
- 正答: UO2F2 と HF
- 解説: JAEAはUF6の加水分解を UF6 + 2H2O → UO2F2 + 4HF と示している。したがって主要生成物はUO2F2とHFである。他の3組合せはこの公的資料が示すUF6加水分解生成物ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- verified: true

### NUC-08-Q012
- 問題文: JAEAがUF6漏えい時の空気中水分との反応として示す反応式はどれか。
- 選択肢: ["UF6 + H2O → UO2F2 + 2HF", "UF6 + 2H2O → UO2 + 6HF", "UF6 + 3H2O → UO3 + 6HF", "UF6 + 2H2O → UO2F2 + 4HF"]
- 正答選択肢: D
- 正答: UF6 + 2H2O → UO2F2 + 4HF
- 解説: JAEA ATOMICAはUF6漏えい時の迅速な加水分解反応を UF6 + 2H2O → UO2F2 + 4HF + 反応熱 と明記している。AはHFの係数が不足し、B・Cは同資料が示す漏えい時の加水分解生成物と異なるため、本問の条件ではDのみが正しい。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-03.html
- verified: true

### NUC-08-Q013
- 問題文: ウラン精鉱から濃縮工程で用いるUF6を製造する代表的な転換工程について、JAEAが示す化学形の順序として正しいものはどれか。
- 選択肢: ["UO2 → UF4 → UF6", "UF4 → UO2 → UF6", "UF6 → UF4 → UO2", "UF6 → UO2 → UF4"]
- 正答選択肢: A
- 正答: UO2 → UF4 → UF6
- 解説: JAEAはウラン精鉱からUF6を製造する転換で、UO2、UF4を経てUF6を製造すると説明している。したがってAが正しい。BはUF4とUO2の順序が逆、CとDはUF6を出発物質としており、UF6製造工程の順序ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html
- verified: true

### NUC-08-Q014
- 問題文: JAEA掲載の日・IAEA保障措置協定追加議定書附属書IIが示す、UO2をHFガスと反応させてUF4へ転換する温度範囲はどれか。
- 選択肢: ["50～100 ℃", "300～500 ℃", "800～1,000 ℃", "1,500～1,700 ℃"]
- 正答選択肢: B
- 正答: 300～500 ℃
- 解説: 同附属書IIの7.4は、UO2からUF4への転換を300～500℃でUO2とHFガスを反応させて行うとしている。したがってBのみが公的標準資料の範囲と一致し、他の3範囲は一致しない。
- 出典: https://www.jaea.go.jp/04/iscn/archive/infcirc255a/infcirc255aii.html
- verified: true

### NUC-08-Q015
- 問題文: UF4 から UF6 へ転換する一般的な工程で、JAEA資料が反応相手として示す物質はどれか。
- 選択肢: ["H2", "H2O", "F2", "NH3"]
- 正答選択肢: C
- 正答: F2
- 解説: JAEAは一般にUF4へフッ素を反応させてUF6を製造すると説明している。追加議定書附属書IIもUF4→UF6をフッ素との発熱反応としている。H2はUF6→UF4の還元に用いられ、H2OとNH3はこのUF4→UF6工程の反応相手ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-01.html ; https://www.jaea.go.jp/04/iscn/archive/infcirc255a/infcirc255aii.html
- verified: true

### NUC-08-Q016
- 問題文: JAEA掲載の日・IAEA保障措置協定追加議定書附属書IIに基づき、UF6 を UF4 に転換するときの還元剤はどれか。
- 選択肢: ["O2", "HF", "F2", "H2"]
- 正答選択肢: D
- 正答: H2
- 解説: 同附属書IIの7.8はUF6からUF4への転換を水素による還元で行うとしている。O2、HF、F2は同項に示される還元剤ではない。なおF2は逆方向のUF4→UF6工程で用いられる。
- 出典: https://www.jaea.go.jp/04/iscn/archive/infcirc255a/infcirc255aii.html
- verified: true

### NUC-08-Q017
- 問題文: JAEAが示すUF6からUO2への湿式再転換で、UF6ガスを水中に導入した直後に生じるウラン化合物はどれか。
- 選択肢: ["UO2F2", "UF4", "UC", "UN"]
- 正答選択肢: A
- 正答: UO2F2
- 解説: JAEAはUF6を水中へ吹き込むとフッ化ウラニルUO2F2が生じ、その後アンモニア添加で重ウラン酸アンモニウムを生成する湿式法を示している。UF4、UC、UNはこの湿式再転換の当該段階で生成するとされていない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-02.html
- verified: true

### NUC-08-Q018
- 問題文: JAEAが示すUF6からUO2への湿式法で、重ウラン酸アンモニウムを洗浄・仮焼した後、水素還元の前に得られるウラン化合物はどれか。
- 選択肢: ["UO2F2", "UO3", "UF4", "UF6"]
- 正答選択肢: B
- 正答: UO3
- 解説: JAEAは重ウラン酸アンモニウムを洗浄・仮焼してUO3とし、次に反応塔で水素還元してUO2を製造するとしている。したがって水素還元前はUO3である。UO2F2はより前段の加水分解生成物、UF4とUF6はこの湿式法の当該段階の生成物ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-04-02-02.html
- verified: true

### NUC-08-Q019
- 問題文: 米国DOEの Uranium Carbide Fuel Pilot の説明に基づき、ウラン酸化物をUC（ウラン炭化物）へ変換するため反応させた材料はどれか。
- 選択肢: ["水蒸気", "フッ素", "黒鉛", "アンモニア"]
- 正答選択肢: C
- 正答: 黒鉛
- 解説: DOEは同パイロット設備で、ウラン酸化物を黒鉛と反応させてウラン炭化物へ変換し、その後ペレット化・加工・被覆管への組立てを行ったと説明している。水蒸気、フッ素、アンモニアは同資料が示すUC製造時の反応材料ではない。
- 出典: https://www.energy.gov/etec/uranium-carbide-fuel-pilot
- verified: true

### NUC-08-Q020
- 問題文: JAEAの窒化物燃料物性データベースに関する説明と整合するUN（窒化ウラン）の記述はどれか。
- 選択肢: ["UNはウラン濃縮用の揮発性フッ化物である", "UNは軽水炉で標準的に用いられる二酸化物燃料そのものである", "UNはウラン酸化物を黒鉛と反応させて得る炭化物である", "UNは窒化物燃料の一種で、JAEAはウラン窒化物燃料を軽水炉用事故耐性燃料候補の一つとして挙げ、UNの物性値を窒化物燃料データベースの補完にも用いている"]
- 正答選択肢: D
- 正答: UNは窒化物燃料の一種で、JAEAはウラン窒化物燃料を軽水炉用事故耐性燃料候補の一つとして挙げ、UNの物性値を窒化物燃料データベースの補完にも用いている
- 解説: UNは窒化ウランであり窒化物燃料に属する。JAEAはウランの窒化物燃料を軽水炉用事故耐性燃料候補の一つとして挙げ、PuやMA窒化物の物性値がない場合にUNやUN-PuN固溶体の報告値でデータベースを補完している。AはUF6、BはUO2、CはUCの説明に相当するため誤りである。
- 出典: https://www.jaea.go.jp/02/press2019/p19101802/
- verified: true
