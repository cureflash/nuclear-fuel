# CAL-05 燃焼度・エネルギー

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA ATOMICAの燃焼度定義、核分裂1回当たり約200 MeV、1 MWd=8.64×10^10 J、235U 1 g全核分裂時の発生エネルギーに関する公的資料、およびJAEA-Research 2025-004の熱出力と200 MeV/核分裂の関係を主要根拠とした。NRA公式「過去の資格試験問題」で第58回・第57回・第56回の核燃料取扱主任者試験公開資料を確認し、過去問本文は転載せず新規4択へ再構成した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-05（MWd/t、発生エネルギー、核分裂数、燃料質量）。燃焼度を「核分裂反応で発生した熱エネルギー／燃料質量」として扱い、`B=E/M`、`E=B M`、`B=P t/M` を中心に、MWd/t・GWd/t・MWd/kgUの換算、MWd↔J、200 MeV/核分裂からの核分裂数、235Uの原子数と全核分裂時の等価エネルギーまでを網羅した。数値問題では、特記しない限り `1 d=86400 s`、`1 eV=1.602×10^-19 J`、`N_A=6.022×10^23 mol^-1`、235Uモル質量235 g/mol、核分裂1回当たり200 MeVを用いる。

## 主要参照資料

- JAEA ATOMICA「燃焼度」: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- JAEA ATOMICA「核分裂」: https://atomica.jaea.go.jp/dic/detail/dic_detail_760.html
- JAEA ATOMICA「原子核物理の基礎（4）核分裂反応」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- JAEA-Research 2025-004（熱出力を核分裂当たり200 MeVで規格化）: https://jopss.jaea.go.jp/pdfdata/JAEA-Research-2025-004.pdf
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000480853.pdf
- NRA 第57回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000475646.pdf
- NRA 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf

## 問題

### CAL-05-Q001
- 問題文: 燃焼度の定義として最も適切なものはどれか。
- 選択肢: ["原子炉内で核分裂により発生した熱エネルギーを燃料質量で除した量", "燃料中の235U濃縮度を照射日数で除した量", "原子炉の電気出力を燃料集合体数で除した量", "使用済燃料の崩壊熱を冷却期間で積分した量"]
- 正答選択肢: A
- 正答: 原子炉内で核分裂により発生した熱エネルギーを燃料質量で除した量
- 解説: JAEA ATOMICAは燃焼度を、燃料が炉内に滞在する期間中に核分裂反応で発生した熱エネルギーを単位燃料重量当たりで表したものとしている。Bは濃縮度、Cは比出力に近い概念、Dは崩壊熱積分であり燃焼度の定義ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q002
- 問題文: 燃料質量を M、核分裂で発生した熱エネルギーを E、燃焼度を B としたとき、基本関係式として正しいものはどれか。
- 選択肢: ["B=M/E", "B=E/M", "B=E×M", "B=E+M"]
- 正答選択肢: B
- 正答: B=E/M
- 解説: 燃焼度は単位燃料質量当たりの発生熱エネルギーなので `B=E/M`。したがって逆算は `E=BM`、`M=E/B` となる。他の3式は次元も一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q003
- 問題文: 燃焼度の単位換算として正しいものはどれか。
- 選択肢: ["1 GWd/t = 1000 MWd/kg", "1 GWd/t = 0.001 MWd/kg", "1 GWd/t = 1 MWd/kg", "1 GWd/t = 100 MWd/kg"]
- 正答選択肢: C
- 正答: 1 GWd/t = 1 MWd/kg
- 解説: 途中式: `1 GWd/t = 1000 MWd / 1000 kg = 1 MWd/kg`。単位はMWd/kg。検算: 45 GWd/tは45 MWd/kgとなり、IAEA等で用いられる高燃焼度燃料の表記とも整合する。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html ; https://data.iaea.org/en/dataset/halden-reactor-test-ifa-650-10-pwr1
- verified: true

### CAL-05-Q004
- 問題文: 1 MWdをジュールに換算した値として正しいものはどれか。
- 選択肢: ["8.64×10^7 J", "3.60×10^9 J", "8.64×10^13 J", "8.64×10^10 J"]
- 正答選択肢: D
- 正答: 8.64×10^10 J
- 解説: 途中式: `1 MWd = 10^6 W × 86400 s = 8.64×10^10 J`。単位はJ。検算: JAEA ATOMICAの核分裂反応解説でも1 MWd=8.64×10^10 Jと示されている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q005
- 問題文: 燃料0.50 tが平均40 GWd/tまで燃焼した。核分裂により発生した熱エネルギーとして正しいものはどれか。
- 選択肢: ["20 GWd", "40 GWd", "80 GWd", "0.020 GWd"]
- 正答選択肢: A
- 正答: 20 GWd
- 解説: 途中式: `E=BM=40 GWd/t×0.50 t=20 GWd`。単位はGWd。検算: `20 GWd÷0.50 t=40 GWd/t` となり元の燃焼度に戻る。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q006
- 問題文: 熱出力1200 MWで30日間運転し、その期間に燃料20 tを同一の平均燃焼度計算に用いる。平均燃焼度増分として正しいものはどれか。
- 選択肢: ["600 MWd/t", "1800 MWd/t", "36000 MWd/t", "72 MWd/t"]
- 正答選択肢: B
- 正答: 1800 MWd/t
- 解説: 途中式: 発生熱エネルギーは `E=1200 MW×30 d=36000 MWd`、したがって `B=E/M=36000 MWd÷20 t=1800 MWd/t`。単位はMWd/t。検算: `1800 MWd/t×20 t=36000 MWd` で出力積分値と一致する。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q007
- 問題文: 発生熱エネルギーが900 GWd、平均燃焼度が45 GWd/tであった。対応する燃料質量として正しいものはどれか。
- 選択肢: ["5 t", "10 t", "20 t", "40 t"]
- 正答選択肢: C
- 正答: 20 t
- 解説: 途中式: `M=E/B=900 GWd÷45 GWd/t=20 t`。単位はt。検算: `45 GWd/t×20 t=900 GWd` で与えられたエネルギーに戻る。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q008
- 問題文: 燃料50 tを平均30 GWd/tまで燃焼させるため、熱出力2500 MWを一定とする。必要運転日数として正しいものはどれか。
- 選択肢: ["60 d", "300 d", "1200 d", "600 d"]
- 正答選択肢: D
- 正答: 600 d
- 解説: 途中式: 必要熱エネルギーは `E=30 GWd/t×50 t=1500 GWd=1.5×10^6 MWd`。したがって `t=E/P=1.5×10^6 MWd÷2500 MW=600 d`。検算: `2500 MW×600 d=1.5×10^6 MWd`、これを50 tで除すと30,000 MWd/t=30 GWd/t。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q009
- 問題文: 45000 MWd/tをGWd/tで表した値として正しいものはどれか。
- 選択肢: ["45 GWd/t", "4.5 GWd/t", "450 GWd/t", "0.045 GWd/t"]
- 正答選択肢: A
- 正答: 45 GWd/t
- 解説: 途中式: `45000 MWd/t ÷1000 =45 GWd/t`。単位はGWd/t。検算: `45×1000=45000 MWd/t` で元の値に戻る。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true

### CAL-05-Q010
- 問題文: 52 GWd/tをMWd/kgUで表した値として正しいものはどれか。
- 選択肢: ["0.052 MWd/kgU", "52 MWd/kgU", "52000 MWd/kgU", "5.2 MWd/kgU"]
- 正答選択肢: B
- 正答: 52 MWd/kgU
- 解説: 途中式: `52 GWd/t =52×1000 MWd/1000 kgU=52 MWd/kgU`。単位はMWd/kgU。検算: `52 MWd/kgU×1000 kg/t÷1000 MW/GW=52 GWd/t`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html ; https://data.iaea.org/en/dataset/halden-reactor-test-ifa-650-10-pwr1
- verified: true

### CAL-05-Q011
- 問題文: 10 GWdの熱エネルギーをジュールで表した値として正しいものはどれか。
- 選択肢: ["8.64×10^11 J", "8.64×10^12 J", "8.64×10^14 J", "8.64×10^17 J"]
- 正答選択肢: C
- 正答: 8.64×10^14 J
- 解説: 途中式: `10 GWd=10×10^9 W×86400 s=8.64×10^14 J`。単位はJ。検算: `8.64×10^14 J÷86400 s=1.00×10^10 W=10 GW`。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q012
- 問題文: 核分裂1回当たりの発生エネルギーを200 MeVとする。これをジュールに換算した値として正しいものはどれか。
- 選択肢: ["3.204×10^-15 J", "3.204×10^-9 J", "1.248×10^-12 J", "3.204×10^-11 J"]
- 正答選択肢: D
- 正答: 3.204×10^-11 J
- 解説: 途中式: `200 MeV=200×10^6 eV×1.602×10^-19 J/eV=3.204×10^-11 J`。単位はJ/核分裂。検算: `3.204×10^-11 J÷1.602×10^-19 J/eV=2.00×10^8 eV=200 MeV`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_760.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Research-2025-004.pdf
- verified: true

### CAL-05-Q013
- 問題文: 1回の核分裂で200 MeV=3.204×10^-11 Jが発生するとする。1 Jを得るために必要な核分裂数として最も適切なものはどれか。
- 選択肢: ["3.12×10^10 回", "3.12×10^8 回", "6.24×10^18 回", "2.00×10^8 回"]
- 正答選択肢: A
- 正答: 3.12×10^10 回
- 解説: 途中式: `N=1 J÷(3.204×10^-11 J/回)=3.12×10^10 回`。単位は回。検算: `3.12×10^10×3.204×10^-11 J≈1.00 J`。JAEA ATOMICAの値とも一致する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q014
- 問題文: 1 MWd=8.64×10^10 J、核分裂1回当たり3.204×10^-11 Jとする。1 MWdを発生させる核分裂数として最も適切なものはどれか。
- 選択肢: ["2.70×10^18 回", "2.70×10^21 回", "3.20×10^23 回", "8.64×10^21 回"]
- 正答選択肢: B
- 正答: 2.70×10^21 回
- 解説: 途中式: `N=8.64×10^10 J÷3.204×10^-11 J/回=2.6966×10^21 回≈2.70×10^21 回`。単位は回。検算: `2.6966×10^21×3.204×10^-11 J=8.64×10^10 J=1 MWd`。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Research-2025-004.pdf
- verified: true

### CAL-05-Q015
- 問題文: 1.00×10^20回の核分裂が起こり、1回当たり200 MeV=3.204×10^-11 Jが放出されるとする。発生エネルギーとして正しいものはどれか。
- 選択肢: ["3.204×10^7 J", "3.204×10^8 J", "3.204×10^9 J", "3.204×10^11 J"]
- 正答選択肢: C
- 正答: 3.204×10^9 J
- 解説: 途中式: `E=N E_f=1.00×10^20 回×3.204×10^-11 J/回=3.204×10^9 J`。単位はJ。検算: `3.204×10^9 J÷3.204×10^-11 J/回=1.00×10^20 回`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_760.html
- verified: true

### CAL-05-Q016
- 問題文: 発生エネルギーが3.204×10^12 Jで、核分裂1回当たり3.204×10^-11 Jとする。核分裂数として正しいものはどれか。
- 選択肢: ["1.00×10^20 回", "1.00×10^21 回", "1.00×10^22 回", "1.00×10^23 回"]
- 正答選択肢: D
- 正答: 1.00×10^23 回
- 解説: 途中式: `N=3.204×10^12 J÷3.204×10^-11 J/回=1.00×10^23 回`。単位は回。検算: `1.00×10^23×3.204×10^-11 J=3.204×10^12 J`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_760.html
- verified: true

### CAL-05-Q017
- 問題文: 235U 1.00 gに含まれる235U原子数として最も適切なものはどれか。アボガドロ定数を6.022×10^23 mol^-1とする。
- 選択肢: ["2.56×10^21 個", "6.02×10^23 個", "2.35×10^23 個", "1.42×10^26 個"]
- 正答選択肢: A
- 正答: 2.56×10^21 個
- 解説: 途中式: `N=(1.00 g/235 g mol^-1)×6.022×10^23 mol^-1=2.5626×10^21 個≈2.56×10^21 個`。単位は個。検算: `2.5626×10^21÷6.022×10^23 mol^-1×235 g/mol≈1.00 g`。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q018
- 問題文: 235U 1.00 gがすべて核分裂し、原子数2.5626×10^21個、1核分裂当たり3.204×10^-11 Jとする。発生エネルギーとして最も適切なものはどれか。
- 選択肢: ["8.21×10^7 J", "8.21×10^10 J", "8.21×10^13 J", "3.20×10^11 J"]
- 正答選択肢: B
- 正答: 8.21×10^10 J
- 解説: 途中式: `E=2.5626×10^21×3.204×10^-11 J=8.210×10^10 J≈8.21×10^10 J`。単位はJ。検算: `8.21×10^10 J÷3.204×10^-11 J/回≈2.56×10^21 回`。JAEA ATOMICAの「235U 1 g全核分裂で8.21×10^10 J」と一致する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q019
- 問題文: Q018の8.21×10^10 JをMWdに換算した値として最も適切なものはどれか。
- 選択肢: ["9.50 MWd", "0.0950 MWd", "0.950 MWd", "95.0 MWd"]
- 正答選択肢: C
- 正答: 0.950 MWd
- 解説: 途中式: `8.21×10^10 J÷8.64×10^10 J/MWd=0.950 MWd`。単位はMWd。検算: `0.950 MWd×8.64×10^10 J/MWd≈8.21×10^10 J`。したがって235U 1 g全核分裂は約1 MWdに相当する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q020
- 問題文: 235U 1 gの全核分裂で0.9503 MWdを発生すると近似する。1000 MWdを全て235U核分裂で得ると仮定したときの235U核分裂質量として最も適切なものはどれか。
- 選択肢: ["0.105 kg", "10.52 kg", "1052 kg", "1.052 kg"]
- 正答選択肢: D
- 正答: 1.052 kg
- 解説: 途中式: `m=1000 MWd÷0.9503 MWd/g=1052.3 g=1.052 kg`。単位はkg。検算: `1052.3 g×0.9503 MWd/g≈1000 MWd`。これは200 MeV/核分裂の近似に基づく等価核分裂質量である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q021
- 問題文: 燃料1.00 tから核分裂により4.32×10^15 Jの熱エネルギーが発生した。平均燃焼度として正しいものはどれか。
- 選択肢: ["50 GWd/t", "5 GWd/t", "500 GWd/t", "0.50 GWd/t"]
- 正答選択肢: A
- 正答: 50 GWd/t
- 解説: 途中式: `4.32×10^15 J÷8.64×10^13 J/GWd=50 GWd`。燃料1.00 tなので `B=50 GWd÷1.00 t=50 GWd/t`。検算: `50 GWd/t×1.00 t×8.64×10^13 J/GWd=4.32×10^15 J`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q022
- 問題文: 燃料2.00 tを平均30 GWd/tまで燃焼させた。全発生熱エネルギーを1核分裂200 MeV=3.204×10^-11 Jで割った核分裂数として最も適切なものはどれか。
- 選択肢: ["1.62×10^23 回", "1.62×10^26 回", "5.18×10^15 回", "2.70×10^21 回"]
- 正答選択肢: B
- 正答: 1.62×10^26 回
- 解説: 途中式: `E=30 GWd/t×2.00 t=60 GWd=60×8.64×10^13 J=5.184×10^15 J`。`N=5.184×10^15 J÷3.204×10^-11 J/回=1.618×10^26 回≈1.62×10^26 回`。検算: `1.618×10^26×3.204×10^-11 J≈5.184×10^15 J=60 GWd`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Research-2025-004.pdf
- verified: true

### CAL-05-Q023
- 問題文: 燃料1.00 tの平均燃焼度が45 GWd/tであった。この発生熱エネルギーを全て235Uの核分裂で得たと仮定し、235U 1 g全核分裂=0.9503 MWdとすると、等価な235U核分裂質量として最も適切なものはどれか。
- 選択肢: ["4.74 kg", "21.1 kg", "47.4 kg", "105 kg"]
- 正答選択肢: C
- 正答: 47.4 kg
- 解説: 途中式: `E=45 GWd/t×1.00 t=45 GWd=45000 MWd`。`m=45000 MWd÷0.9503 MWd/g=47354 g=47.4 kg`。単位はkg。検算: `47.354 kg×1000 g/kg×0.9503 MWd/g≈45000 MWd=45 GWd`。実炉では235UだけでなくPu核分裂等も寄与するため、これは指定仮定での等価核分裂質量である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-04.html
- verified: true

### CAL-05-Q024
- 問題文: 燃料1 t当たりの平均燃焼度48 GWd/tを1200日で達成した。期間平均の熱出力密度（燃料1 t当たり）として正しいものはどれか。
- 選択肢: ["4 MW/t", "20 MW/t", "400 MW/t", "40 MW/t"]
- 正答選択肢: D
- 正答: 40 MW/t
- 解説: 途中式: `48 GWd/t=48000 MWd/t` なので、平均比出力は `P/M=B/t=48000 MWd/t÷1200 d=40 MW/t`。単位はMW/t。検算: `40 MW/t×1200 d=48000 MWd/t=48 GWd/t`。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_566.html
- verified: true
