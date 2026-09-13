# CAL-03 理論密度

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEAの核燃料・再処理臨界安全データに示されたUO2/PuO2理論密度式と格子定数、JAEAの結晶格子教材、NIST/CIAAWのアボガドロ定数・原子量を主要根拠とした。NRA公式「過去の資格試験問題」で第58回・第57回・第56回を確認し、近年の関連論点として第57回のUO2/PuO2/(U,Pu)O2格子定数、第54回のUO2単位格子・理論密度、第55回のUO2ペレット密度・気孔率を参照した。過去問本文は転載せず、新規4択へ再構成した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-03（結晶格子、単位格子原子数、格子定数、モル質量、Avogadro数）。FCC/BCCの単位格子中原子数、蛍石型UO2の4式量/単位格子、理論密度式 `ρ = 4M/(N_A a^3)`、Åとcmの立方換算、格子定数と密度の相互計算、理論密度百分率・気孔率、単位体積当たり原子数、PuO2への適用までを網羅した。数値はJAEAの `a(UO2)=5.4700 Å`、`a(PuO2)=5.3960 Å`、NISTの `N_A=6.02214076×10^23 mol^-1`、CIAAW/NISTの原子量・同位体質量に固定した。

## 主要参照資料

- JAEA-Data/Code 2009-010「核燃料・再処理施設の臨界安全解析に用いる物性値等」: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- JAEA 福島廃炉安全工学研究所 Science Station「結晶格子」: https://fukushima.jaea.go.jp/pamphlet/science/science-station_c003_5.html
- JAEA ATOMICA「二酸化ウラン」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html
- JAEA ATOMICA「ウラン燃料とプルトニウム燃料の相違」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html
- NIST「SI Units – Amount of Substance」: https://www.nist.gov/pml/owm/si-units-amount-substance
- CIAAW「Atomic Weight of Uranium」: https://ciaaw.org/uranium.htm
- CIAAW「Abridged Standard Atomic Weights」: https://www.ciaaw.org/abridged-atomic-weights.htm
- NIST「Atomic Data for Plutonium」: https://physics.nist.gov/PhysRefData/Handbook/Tables/plutoniumtable1.htm
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第57回「核燃料物質の化学的性質及び物理的性質」: https://www.nra.go.jp/data/000475645.pdf
- NRA 第54回「核燃料物質の化学的性質及び物理的性質」: https://www.nra.go.jp/data/000384588.pdf
- NRA 第55回「核燃料物質の化学的性質及び物理的性質」: https://www.nra.go.jp/data/000424261.pdf

## 問題

### CAL-03-Q001
- 問題文: 蛍石型UO2の通常の立方単位格子について、UO2のモル質量を M [g/mol]、格子定数を a [cm]、アボガドロ定数を N_A [mol^-1] としたとき、理論密度 ρ [g/cm^3] を表す式はどれか。
- 選択肢: ["4M/(N_A a^3) [g/cm^3]", "M/(4N_A a^3) [g/cm^3]", "8M/(N_A a^3) [g/cm^3]", "M/(N_A a^2) [g/cm^3]"]
- 正答選択肢: A
- 正答: 4M/(N_A a^3) [g/cm^3]
- 解説: JAEAの核燃料・再処理臨界安全データはUO2-PuO2混合酸化物の理論密度を ρ=4M/(N_A a0^3) としている。蛍石型UO2の通常単位格子には4式量のUO2が入るため、単位格子質量は4M/N_A、体積はa^3である。Bは4を分母側に置き、Cは式量数を8とし、Dは体積をa^3でなくa^2としているため誤り。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- verified: true

### CAL-03-Q002
- 問題文: 面心立方格子（FCC）の通常単位格子に含まれる格子点の実効個数はどれか。
- 選択肢: ["2 個/単位格子", "4 個/単位格子", "6 個/単位格子", "8 個/単位格子"]
- 正答選択肢: B
- 正答: 4 個/単位格子
- 解説: JAEAの結晶格子教材では、FCCは8頂点の寄与が8×1/8=1個、6面心の寄与が6×1/2=3個で合計4個である。AはBCCの個数、C・DはFCCの共有関係を正しく数えていない。
- 出典: https://fukushima.jaea.go.jp/pamphlet/science/science-station_c003_5.html
- verified: true

### CAL-03-Q003
- 問題文: 体心立方格子（BCC）の通常単位格子に含まれる格子点の実効個数はどれか。
- 選択肢: ["1 個/単位格子", "4 個/単位格子", "2 個/単位格子", "8 個/単位格子"]
- 正答選択肢: C
- 正答: 2 個/単位格子
- 解説: JAEAの結晶格子教材では、BCCは8頂点の寄与が8×1/8=1個、体心が1個で合計2個である。Aは体心原子を落としており、BはFCC、Dは頂点原子を共有せず数えた場合に相当する。
- 出典: https://fukushima.jaea.go.jp/pamphlet/science/science-station_c003_5.html
- verified: true

### CAL-03-Q004
- 問題文: 化学量論組成のUO2が蛍石型構造をとるとき、通常の立方単位格子に含まれるU原子とO原子の組合せとして正しいものはどれか。
- 選択肢: ["U 1個、O 2個", "U 2個、O 4個", "U 8個、O 4個", "U 4個、O 8個"]
- 正答選択肢: D
- 正答: U 4個、O 8個
- 解説: UO2ではUがFCC副格子を作るため通常単位格子中のUは4個で、化学量論比O/U=2よりOは8個となる。JAEA資料はUO2・PuO2が蛍石型の面心立方格子であることを示し、NRA第54回もUO2単位格子の原子数と理論密度を出題している。A・Bは最簡式または縮小した個数、Cは化学量論比が逆である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html ; https://www.nra.go.jp/data/000384588.pdf
- verified: true

### CAL-03-Q005
- 問題文: 化学量論組成UO2の通常の蛍石型単位格子に含まれるUO2式量（formula unit）の数はどれか。
- 選択肢: ["4 式量/単位格子", "2 式量/単位格子", "8 式量/単位格子", "12 式量/単位格子"]
- 正答選択肢: A
- 正答: 4 式量/単位格子
- 解説: 通常単位格子にはU原子4個とO原子8個があるため、UO2として4組、すなわち4式量である。理論密度式 ρ=4M/(N_Aa^3) の係数4とも一致する。B・C・DではU原子数またはO原子数と整合しない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html
- verified: true

### CAL-03-Q006
- 問題文: 現行SIで固定されているアボガドロ定数 N_A として正しい値はどれか。
- 選択肢: ["6.02214076×10^22 mol^-1", "6.02214076×10^23 mol^-1", "6.02214076×10^24 mol^-1", "6.02214076×10^23 g^-1"]
- 正答選択肢: B
- 正答: 6.02214076×10^23 mol^-1
- 解説: NISTは1 molが厳密に6.02214076×10^23個の要素粒子を含むとし、N_A=6.02214076×10^23 mol^-1を固定値としている。A・Cは10倍ずれ、Dは単位がmol^-1ではなくg^-1で誤り。
- 出典: https://www.nist.gov/pml/owm/si-units-amount-substance
- verified: true

### CAL-03-Q007
- 問題文: 格子定数 5.4700 Å をcmへ換算した値として正しいものはどれか。
- 選択肢: ["5.4700×10^-6 cm", "5.4700×10^-7 cm", "5.4700×10^-8 cm", "5.4700×10^-9 cm"]
- 正答選択肢: C
- 正答: 5.4700×10^-8 cm
- 解説: 1 Å=10^-10 m=10^-8 cmなので、5.4700 Å=5.4700×10^-8 cm。検算: 1 cm=10^8 Åより、5.4700×10^-8 cm×10^8 Å/cm=5.4700 Å。A・B・Dは10の指数が不一致。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://www.nra.go.jp/data/000424261.pdf
- verified: true

### CAL-03-Q008
- 問題文: 体積 165 Å^3 をcm^3へ換算した値として正しいものはどれか。
- 選択肢: ["1.65×10^-18 cm^3", "1.65×10^-20 cm^3", "1.65×10^-21 cm^3", "1.65×10^-22 cm^3"]
- 正答選択肢: D
- 正答: 1.65×10^-22 cm^3
- 解説: 1 Å=10^-8 cmなので、1 Å^3=(10^-8)^3=10^-24 cm^3。したがって165 Å^3=165×10^-24=1.65×10^-22 cm^3。検算: 1.65×10^-22 cm^3÷10^-24 cm^3/Å^3=165 Å^3。A～Cは立方換算の指数が誤る。
- 出典: https://www.nra.go.jp/data/000424261.pdf
- verified: true

### CAL-03-Q009
- 問題文: CIAAWの値としてUの標準原子量238.02891、Oの簡約標準原子量15.999を用いる。UO2のモル質量として最も適切なものはどれか。
- 選択肢: ["270.02691 g/mol", "254.02791 g/mol", "286.02591 g/mol", "238.06091 g/mol"]
- 正答選択肢: A
- 正答: 270.02691 g/mol
- 解説: 計算は M(UO2)=238.02891+2×15.999=270.02691 g/mol。検算: O2分は31.998 g/molなので、238.02891+31.998=270.02691 g/mol。BはOを1個、CはOを3個としており、DはO寄与を0.032程度と誤っている。
- 出典: https://ciaaw.org/uranium.htm ; https://www.ciaaw.org/abridged-atomic-weights.htm
- verified: true

### CAL-03-Q010
- 問題文: UO2の格子定数をJAEA資料の a=5.4700 Å とする。立方単位格子の体積 a^3 として最も適切なものはどれか。
- 選択肢: ["154.67 Å^3", "163.67 Å^3", "173.67 Å^3", "183.67 Å^3"]
- 正答選択肢: B
- 正答: 163.67 Å^3
- 解説: 計算は a^3=(5.4700 Å)^3=163.6673 Å^3≈163.67 Å^3。検算: 5.47^2≈29.92、これに5.47を掛けると約163.7となる。A・C・Dはいずれもこの立方計算と一致しない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- verified: true

### CAL-03-Q011
- 問題文: UO2のモル質量を270.02691 g/mol、アボガドロ定数を6.02214076×10^23 mol^-1とする。蛍石型通常単位格子1個の質量として最も適切なものはどれか。
- 選択肢: ["4.484×10^-22 g", "8.968×10^-22 g", "1.794×10^-21 g", "3.587×10^-21 g"]
- 正答選択肢: C
- 正答: 1.794×10^-21 g
- 解説: 単位格子にはUO2が4式量あるので、m_cell=4×270.02691/(6.02214076×10^23)=1.7936×10^-21 g≈1.794×10^-21 g。検算: 1 molあたり約270 g、1式量は約4.48×10^-22 g、その4倍で約1.79×10^-21 g。Aは1式量、Bは2式量、Dは8式量に相当する。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://www.nist.gov/pml/owm/si-units-amount-substance ; https://ciaaw.org/uranium.htm ; https://www.ciaaw.org/abridged-atomic-weights.htm
- verified: true

### CAL-03-Q012
- 問題文: JAEAの a=5.4700 Å、UO2のモル質量270.02691 g/mol、N_A=6.02214076×10^23 mol^-1を用いる。化学量論組成UO2の理論密度として最も適切なものはどれか。
- 選択肢: ["2.74 g/cm^3", "5.48 g/cm^3", "21.92 g/cm^3", "10.96 g/cm^3"]
- 正答選択肢: D
- 正答: 10.96 g/cm^3
- 解説: ρ=4M/(N_Aa^3)。a^3=163.6673 Å^3=1.63667323×10^-22 cm^3、単位格子質量=1.79356×10^-21 gなので、ρ=1.79356×10^-21/1.63667×10^-22=10.9586 g/cm^3≈10.96 g/cm^3。検算としてJAEA ATOMICAのUO2比重10.97とも整合する。A・B・Cはそれぞれ式量数を誤った場合などの値である。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html ; https://www.nist.gov/pml/owm/si-units-amount-substance ; https://ciaaw.org/uranium.htm ; https://www.ciaaw.org/abridged-atomic-weights.htm
- verified: true

### CAL-03-Q013
- 問題文: UO2について、M=270.02691 g/mol、N_A=6.02214076×10^23 mol^-1、理論密度ρ=10.96 g/cm^3、単位格子中4式量とする。格子定数aとして最も適切なものはどれか。
- 選択肢: ["5.470 Å", "4.470 Å", "6.470 Å", "7.470 Å"]
- 正答選択肢: A
- 正答: 5.470 Å
- 解説: ρ=4M/(N_Aa^3)より a=[4M/(N_Aρ)]^(1/3)。代入すると a=5.4698×10^-8 cm=5.4698 Å≈5.470 Å。検算: JAEAのUO2格子定数5.4700 Åと一致する。B～Dを代入すると体積が大きく異なり10.96 g/cm^3にならない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://www.nist.gov/pml/owm/si-units-amount-substance
- verified: true

### CAL-03-Q014
- 問題文: 同じ組成・同じ単位格子内式量数の立方結晶で、格子定数だけが1.00%増加した。増加前の理論密度が10.96 g/cm^3のとき、増加後の理論密度として最も適切なものはどれか。
- 選択肢: ["10.85 g/cm^3", "10.64 g/cm^3", "10.96 g/cm^3", "11.29 g/cm^3"]
- 正答選択肢: B
- 正答: 10.64 g/cm^3
- 解説: 質量は一定で体積がa^3に比例するため、ρ'=10.96/(1.01)^3=10.638≈10.64 g/cm^3。検算: 体積は約3.03%増えるので密度は約2.94%低下し、10.96×0.9706≈10.64となる。Aは1%だけ減らした近似、Cは変化なし、Dは増減方向が逆。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- verified: true

### CAL-03-Q015
- 問題文: 同じ組成・同じ単位格子内式量数の立方結晶で、格子定数だけが0.50%減少した。変化前の理論密度が10.96 g/cm^3のとき、変化後の理論密度として最も適切なものはどれか。
- 選択肢: ["10.80 g/cm^3", "10.96 g/cm^3", "11.13 g/cm^3", "11.51 g/cm^3"]
- 正答選択肢: C
- 正答: 11.13 g/cm^3
- 解説: ρ'=10.96/(0.995)^3=11.126≈11.13 g/cm^3。検算: 格子定数0.5%低下なら体積は約1.49%低下し、密度は約1.52%増加するので10.96×1.0152≈11.13。Aは密度を逆に低下させ、Bは変化なし、Dは増加が過大。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- verified: true

### CAL-03-Q016
- 問題文: モル質量Mと格子定数aが同じ単体結晶を仮定する。通常単位格子がFCCの場合とBCCの場合の理論密度比 ρ_FCC/ρ_BCC はどれか。
- 選択肢: ["1/4", "1/2", "1", "2"]
- 正答選択肢: D
- 正答: 2
- 解説: 同じM,aならρ∝n（単位格子中の原子数）。JAEA教材よりFCCは4個、BCCは2個なので、ρ_FCC/ρ_BCC=4/2=2。検算として一般式ρ=nM/(N_Aa^3)のM,N_A,aは相殺される。A～Cは原子数比と一致しない。
- 出典: https://fukushima.jaea.go.jp/pamphlet/science/science-station_c003_5.html
- verified: true

### CAL-03-Q017
- 問題文: 立方晶の単体について、モル質量100.0 g/mol、格子定数4.000 Å、理論密度10.38 g/cm^3、N_A=6.02214076×10^23 mol^-1である。通常単位格子に含まれる原子数nとして最も適切なものはどれか。
- 選択肢: ["4 個/単位格子", "1 個/単位格子", "2 個/単位格子", "8 個/単位格子"]
- 正答選択肢: A
- 正答: 4 個/単位格子
- 解説: n=ρN_Aa^3/M。a^3=(4.000×10^-8 cm)^3=6.400×10^-23 cm^3。n=10.38×6.02214076×10^23×6.400×10^-23/100.0=4.000程度となる。検算: n=4をρ=nM/(N_Aa^3)へ戻すと10.378 g/cm^3≈10.38。B・C・Dではそれぞれ約2.59、5.19、20.76 g/cm^3となる。
- 出典: https://fukushima.jaea.go.jp/pamphlet/science/science-station_c003_5.html ; https://www.nist.gov/pml/owm/si-units-amount-substance
- verified: true

### CAL-03-Q018
- 問題文: UO2単位格子の体積を165 Å^3、Uの原子量238、Oの原子量16.0、N_A=6.00×10^23 mol^-1、単位格子中4式量とする。この丸めたデータから求める理論密度として最も適切なものはどれか。
- 選択肢: ["5.45 g/cm^3", "10.91 g/cm^3", "16.36 g/cm^3", "21.82 g/cm^3"]
- 正答選択肢: B
- 正答: 10.91 g/cm^3
- 解説: M(UO2)=238+2×16.0=270 g/mol。単位格子質量=4×270/(6.00×10^23)=1.80×10^-21 g。体積=165×10^-24=1.65×10^-22 cm^3。したがってρ=1.80×10^-21/1.65×10^-22=10.909...≈10.91 g/cm^3。検算: JAEAの代表値10.97 g/cm^3に近い。Aは2式量、Dは8式量相当、Cは係数が不整合。
- 出典: https://www.nra.go.jp/data/000424261.pdf ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html
- verified: true

### CAL-03-Q019
- 問題文: あるUO2ペレットの実測密度が10.40 g/cm^3で、同じ組成の理論密度を10.91 g/cm^3とする。密度差を単純に気孔率P=1-ρ_meas/ρ_theoryで評価したとき、Pとして最も適切なものはどれか。
- 選択肢: ["2.3 %", "3.5 %", "4.7 %", "9.1 %"]
- 正答選択肢: C
- 正答: 4.7 %
- 解説: P=(1-10.40/10.91)×100=4.67%≈4.7%。検算: 10.91×(1-0.047)=10.397≈10.40 g/cm^3。A・Bは密度差0.51 g/cm^3を理論密度で割った値より小さく、Dはほぼ2倍である。NRA第55回には寸法・質量から得たUO2密度と単位格子情報から気孔率を求める論点があるが、本問は数値・文章を再構成している。
- 出典: https://www.nra.go.jp/data/000424261.pdf ; https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- verified: true

### CAL-03-Q020
- 問題文: UO2の理論密度を10.96 g/cm^3とする。ペレット密度が95.0%TD（theoretical density）であるとき、実測密度に相当する値として最も適切なものはどれか。
- 選択肢: ["9.86 g/cm^3", "10.00 g/cm^3", "10.96 g/cm^3", "10.41 g/cm^3"]
- 正答選択肢: D
- 正答: 10.41 g/cm^3
- 解説: ρ_meas=0.950×10.96=10.412 g/cm^3≈10.41 g/cm^3。検算: 10.41/10.96=0.9498≈95.0%。Aは90%程度、Bは91%程度、Cは100%TDである。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2232.html
- verified: true

### CAL-03-Q021
- 問題文: UO2の格子定数を5.4700 Å、通常単位格子中のUO2式量数を4とする。1式量あたりに割り当てられる平均結晶体積として最も適切なものはどれか。
- 選択肢: ["40.92 Å^3/式量", "81.83 Å^3/式量", "163.67 Å^3/式量", "654.67 Å^3/式量"]
- 正答選択肢: A
- 正答: 40.92 Å^3/式量
- 解説: 単位格子体積は5.4700^3=163.667 Å^3。これに4式量が含まれるので、163.667/4=40.9168≈40.92 Å^3/式量。検算: 40.92×4≈163.68 Å^3で元の単位格子体積に戻る。Bは2で割った値、Cは割っていない値、Dは4倍した値。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf
- verified: true

### CAL-03-Q022
- 問題文: 理想的なUO2結晶で格子定数a=5.4700 Åとする。1 cm^3中に含まれるU原子数として最も適切なものはどれか。通常単位格子中のU原子数は4とする。
- 選択肢: ["1.22×10^22 個/cm^3", "2.44×10^22 個/cm^3", "4.89×10^22 個/cm^3", "9.78×10^22 個/cm^3"]
- 正答選択肢: B
- 正答: 2.44×10^22 個/cm^3
- 解説: 単位格子体積は1.63667×10^-22 cm^3なので、単位体積あたりU原子数は4/(1.63667×10^-22)=2.44398×10^22 個/cm^3≈2.44×10^22。検算: これをN_Aで割ると約0.04058 mol-U/cm^3、UO2モル質量と組み合わせると約10.96 g/cm^3に対応する。AはU原子2個、CはO原子8個の場合の値、Dはその2倍。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://www.nist.gov/pml/owm/si-units-amount-substance
- verified: true

### CAL-03-Q023
- 問題文: 理想的なUO2結晶で格子定数a=5.4700 Åとする。1 cm^3中に含まれるO原子数として最も適切なものはどれか。通常単位格子中のO原子数は8とする。
- 選択肢: ["1.22×10^22 個/cm^3", "2.44×10^22 個/cm^3", "4.89×10^22 個/cm^3", "9.78×10^22 個/cm^3"]
- 正答選択肢: C
- 正答: 4.89×10^22 個/cm^3
- 解説: 単位格子体積は1.63667×10^-22 cm^3で、O原子は8個なので8/(1.63667×10^-22)=4.88796×10^22 個/cm^3≈4.89×10^22。検算: U原子数2.44×10^22個/cm^3のほぼ2倍で、UO2のO/U=2と一致する。A・B・Dはこの化学量論比と合わない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html
- verified: true

### CAL-03-Q024
- 問題文: 化学量論組成の239PuO2について、JAEA資料の格子定数a=5.3960 Å、239Puの相対原子質量239.052157、O=15.999、N_A=6.02214076×10^23 mol^-1、単位格子中4式量とする。理論密度として最も適切なものはどれか。
- 選択肢: ["9.46 g/cm^3", "10.46 g/cm^3", "12.46 g/cm^3", "11.46 g/cm^3"]
- 正答選択肢: D
- 正答: 11.46 g/cm^3
- 解説: M(239PuO2)=239.052157+2×15.999=271.050157 g/mol。a^3=(5.3960×10^-8 cm)^3=1.57114339×10^-22 cm^3。ρ=4×271.050157/(6.02214076×10^23×1.57114339×10^-22)=11.4589≈11.46 g/cm^3。検算: JAEAの式ρ=4M/(N_Aa^3)へ逆代入すると同値になる。A～Cはいずれも式から1 g/cm^3以上外れる。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Data-Code-2009-010.pdf ; https://physics.nist.gov/PhysRefData/Handbook/Tables/plutoniumtable1.htm ; https://www.ciaaw.org/abridged-atomic-weights.htm ; https://www.nist.gov/pml/owm/si-units-amount-substance
- verified: true
