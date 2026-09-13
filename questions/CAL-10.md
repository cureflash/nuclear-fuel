# CAL-10 実効線量

- status: complete
- verified_at: 2026-09-14
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA/ATOMICA「実効線量」「放射線荷重係数と組織荷重係数」を定義・計算式の根拠とした。2026-09-14時点でNRAはICRP 2007年勧告の国内法令等への取り入れを審議中と説明しているため、現行国内制度の係数を問う問題では1990年勧告ベースを用いた。NRAの第58・57・56回核燃料取扱主任者試験「放射線の測定及び放射線障害の防止に関する技術」を参照し、実効線量と等価線量の区別、部分被ばくからの実効線量計算という近年の出題論点を新規数値・新規選択肢へ変換した。過去問本文は転載していない。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-10（組織等価線量、組織加重係数、合算）。組織Tの等価線量を `H_T`、組織加重係数を `w_T` とすると、実効線量は `E=Σ(w_T×H_T)` で求める。`w_T` は無次元で、`H_T` と `E` の単位はSvである。複数組織の被ばくでは各組織の寄与 `w_T×H_T` を加算する。全組織が同一の等価線量を受け、組織加重係数の総和が1であれば、実効線量はその等価線量と等しくなる。

現行国内制度の組織加重係数を直接問う設問では、国内法令に取り込まれているICRP 1990年勧告ベースを用いる。主要値は、赤色骨髄・結腸・肺・胃が0.12、生殖腺0.20、膀胱・乳房・肝臓・食道・甲状腺が0.05、骨表面・皮膚が0.01である。ICRP 2007年勧告では一部が変更されているため、両者を混同しない。

## 主要参照資料

- JAEA/ATOMICA「実効線量」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html
- JAEA/ATOMICA「放射線荷重係数と組織荷重係数」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- NRA「放射線防護のための線量及び健康リスク評価の精度向上に関する研究（令和4年度～令和8年度）」: https://www.nra.go.jp/activity/anzen/bunya/bougo_risk.html
- NRA「令和4年度国際放射線防護調査事業報告会資料（1990年勧告・2007年勧告の組織加重係数比較）」: https://www.nra.go.jp/data/000447892.pdf
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000480854.pdf
- NRA 第57回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000475647.pdf
- NRA 第56回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000472261.pdf

## 問題

### CAL-10-Q001
- 問題文: 肺の等価線量が40 mSv、肺の組織加重係数が0.12であり、他の組織の等価線量を0とする。この被ばくの実効線量はいくらか。
- 選択肢: ["4.8 mSv", "40 mSv", "0.48 mSv", "48 mSv"]
- 正答選択肢: A
- 正答: 4.8 mSv
- 解説: 途中式: `E=w_T×H_T=0.12×40 mSv=4.8 mSv`。単位検算: `w_T` は無次元なので結果はmSv。他の3値は組織加重係数を掛けない、桁を誤る等で `E=Σ(w_T H_T)` と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q002
- 問題文: 甲状腺の等価線量が80 mSv、甲状腺の組織加重係数が0.05であり、他の組織の等価線量を0とする。この被ばくの実効線量はいくらか。
- 選択肢: ["1.6 mSv", "4.0 mSv", "16 mSv", "80 mSv"]
- 正答選択肢: B
- 正答: 4.0 mSv
- 解説: 途中式: `E=0.05×80 mSv=4.0 mSv`。単位検算: 無次元係数×mSv=mSv。1.6、16、80 mSvはいずれもこの積と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q003
- 問題文: 皮膚の等価線量が250 mSv、皮膚の組織加重係数が0.01であり、他の組織の等価線量を0とする。この被ばくの実効線量はいくらか。
- 選択肢: ["0.25 mSv", "25 mSv", "2.5 mSv", "250 mSv"]
- 正答選択肢: C
- 正答: 2.5 mSv
- 解説: 途中式: `E=0.01×250 mSv=2.5 mSv`。単位検算: 無次元係数×mSv=mSv。0.25、25、250 mSvは係数又は桁の扱いが条件と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q004
- 問題文: 生殖腺の等価線量が15 mSv、生殖腺の組織加重係数を0.20とし、他の組織の等価線量を0とする。この被ばくの実効線量はいくらか。
- 選択肢: ["0.75 mSv", "15 mSv", "75 mSv", "3.0 mSv"]
- 正答選択肢: D
- 正答: 3.0 mSv
- 解説: 途中式: `E=0.20×15 mSv=3.0 mSv`。単位検算: 無次元係数×mSv=mSv。0.75、15、75 mSvはいずれも式と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://www.nra.go.jp/data/000447892.pdf
- verified: true

### CAL-10-Q005
- 問題文: 赤色骨髄の等価線量が30 mSv、肺が20 mSvで、両組織の組織加重係数はいずれも0.12とする。他の組織の等価線量を0としたとき、実効線量はいくらか。
- 選択肢: ["6.0 mSv", "3.6 mSv", "2.4 mSv", "50 mSv"]
- 正答選択肢: A
- 正答: 6.0 mSv
- 解説: 途中式: 赤色骨髄の寄与は `0.12×30=3.6 mSv`、肺の寄与は `0.12×20=2.4 mSv`。よって `E=3.6+2.4=6.0 mSv`。単位検算: 各寄与はmSvで、同じ単位を加算する。3.6と2.4 mSvは一方の寄与だけ、50 mSvは等価線量の単純和である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q006
- 問題文: 胃の等価線量が25 mSvで組織加重係数0.12、肝臓の等価線量が40 mSvで組織加重係数0.05である。他の組織の等価線量を0としたとき、実効線量はいくらか。
- 選択肢: ["3.0 mSv", "5.0 mSv", "2.0 mSv", "65 mSv"]
- 正答選択肢: B
- 正答: 5.0 mSv
- 解説: 途中式: 胃 `0.12×25=3.0 mSv`、肝臓 `0.05×40=2.0 mSv`。合算して `E=3.0+2.0=5.0 mSv`。単位検算: 各項はmSv。3.0と2.0 mSvは片方のみ、65 mSvは等価線量の単純和である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q007
- 問題文: 肺の等価線量50 mSv・組織加重係数0.12、肝臓40 mSv・0.05、皮膚100 mSv・0.01である。他の組織の等価線量を0とすると、実効線量はいくらか。
- 選択肢: ["8.0 mSv", "8.5 mSv", "9.0 mSv", "190 mSv"]
- 正答選択肢: C
- 正答: 9.0 mSv
- 解説: 途中式: 肺 `50×0.12=6.0 mSv`、肝臓 `40×0.05=2.0 mSv`、皮膚 `100×0.01=1.0 mSv`。`E=6.0+2.0+1.0=9.0 mSv`。単位検算: 全項mSv。8.0 mSvは皮膚寄与を落とし、190 mSvは等価線量を単純加算している。8.5 mSvも式と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q008
- 問題文: 赤色骨髄20 mSv・組織加重係数0.12、結腸10 mSv・0.12、乳房30 mSv・0.05、皮膚50 mSv・0.01である。他の組織の等価線量を0とすると、実効線量はいくらか。
- 選択肢: ["4.6 mSv", "5.1 mSv", "6.0 mSv", "5.6 mSv"]
- 正答選択肢: D
- 正答: 5.6 mSv
- 解説: 途中式: `20×0.12=2.4`、`10×0.12=1.2`、`30×0.05=1.5`、`50×0.01=0.5` mSv。合計 `E=2.4+1.2+1.5+0.5=5.6 mSv`。単位検算: 各項mSv。4.6、5.1、6.0 mSvは4項の正しい和と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q009
- 問題文: 全身の各組織が一様に12 mSvの等価線量を受け、対象となる全組織の組織加重係数の総和が1.00である。実効線量はいくらか。
- 選択肢: ["12 mSv", "6 mSv", "1.2 mSv", "120 mSv"]
- 正答選択肢: A
- 正答: 12 mSv
- 解説: 途中式: `E=Σ(w_T×12 mSv)=12 mSv×Σw_T=12×1.00=12 mSv`。単位検算: `Σw_T` は無次元。全身一様被ばくでは組織加重係数の総和が1なので同じ等価線量になる。他の3値はこの関係を満たさない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q010
- 問題文: 全身の各組織が一様に0.80 mSvの等価線量を受け、対象となる全組織の組織加重係数の総和が1.00である。実効線量はいくらか。
- 選択肢: ["0.08 mSv", "0.80 mSv", "8.0 mSv", "80 mSv"]
- 正答選択肢: B
- 正答: 0.80 mSv
- 解説: 途中式: `E=0.80 mSv×Σw_T=0.80×1.00=0.80 mSv`。単位検算: 無次元の総和を掛けるのでmSvのまま。0.08、8.0、80 mSvはいずれも係数総和1.00と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q011
- 問題文: 肺だけが被ばくし、肺の組織加重係数を0.12とする。肺による実効線量への寄与が3.6 mSvであったとき、肺の等価線量はいくらか。
- 選択肢: ["3.6 mSv", "12 mSv", "30 mSv", "300 mSv"]
- 正答選択肢: C
- 正答: 30 mSv
- 解説: 途中式: `w_T×H_T=3.6 mSv` なので `H_T=3.6/0.12=30 mSv`。単位検算: mSv÷無次元=mSv。代入検算すると `0.12×30=3.6 mSv`。他の3値は逆代入して3.6 mSvにならない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q012
- 問題文: 甲状腺だけが被ばくし、甲状腺の組織加重係数を0.05とする。甲状腺による実効線量への寄与が2.5 mSvであったとき、甲状腺の等価線量はいくらか。
- 選択肢: ["12.5 mSv", "20 mSv", "10 mSv", "50 mSv"]
- 正答選択肢: D
- 正答: 50 mSv
- 解説: 途中式: `H_T=2.5 mSv/0.05=50 mSv`。単位検算: mSv÷無次元=mSv。代入すると `0.05×50=2.5 mSv`。12.5、20、10 mSvはいずれも逆代入で2.5 mSvにならない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q013
- 問題文: ある組織の等価線量が20 mSvで、その組織の実効線量への寄与が2.4 mSvであった。この組織に用いた組織加重係数はいくらか。
- 選択肢: ["0.12", "0.02", "0.05", "0.20"]
- 正答選択肢: A
- 正答: 0.12
- 解説: 途中式: `w_T=(2.4 mSv)/(20 mSv)=0.12`。単位検算: mSv/mSvで無次元。代入検算 `20×0.12=2.4 mSv`。0.02、0.05、0.20ではそれぞれ0.4、1.0、4.0 mSvとなり条件と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html
- verified: true

### CAL-10-Q014
- 問題文: ある組織の等価線量が50 mSvで、その組織の実効線量への寄与が0.50 mSvであった。この組織に用いた組織加重係数はいくらか。
- 選択肢: ["0.10", "0.01", "0.05", "0.50"]
- 正答選択肢: B
- 正答: 0.01
- 解説: 途中式: `w_T=0.50/50=0.01`。単位検算: mSv/mSvで無次元。代入検算 `50×0.01=0.50 mSv`。0.10、0.05、0.50ではそれぞれ5.0、2.5、25 mSvとなり条件と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html
- verified: true

### CAL-10-Q015
- 問題文: 生殖腺と肺がそれぞれ10 mSvの等価線量を受けた。組織加重係数を生殖腺0.20、肺0.12とすると、生殖腺の実効線量寄与は肺の寄与より何mSv大きいか。
- 選択肢: ["3.2 mSv", "1.2 mSv", "0.8 mSv", "0.4 mSv"]
- 正答選択肢: C
- 正答: 0.8 mSv
- 解説: 途中式: 生殖腺は `10×0.20=2.0 mSv`、肺は `10×0.12=1.2 mSv`。差は `2.0-1.2=0.8 mSv`。単位検算: 両寄与ともmSvなので差もmSv。3.2 mSvは和、1.2 mSvは肺寄与そのもの、0.4 mSvは正しい差ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://www.nra.go.jp/data/000447892.pdf
- verified: true

### CAL-10-Q016
- 問題文: 組織加重係数0.05の組織について、実効線量への寄与を1.2 mSvとするには、その組織の等価線量はいくら必要か。
- 選択肢: ["6 mSv", "10 mSv", "20 mSv", "24 mSv"]
- 正答選択肢: D
- 正答: 24 mSv
- 解説: 途中式: `H_T=1.2 mSv/0.05=24 mSv`。単位検算: mSv÷無次元=mSv。代入検算 `24×0.05=1.2 mSv`。6、10、20 mSvでは寄与がそれぞれ0.30、0.50、1.0 mSvとなる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html
- verified: true

### CAL-10-Q017
- 問題文: 肺の等価線量が0.030 Sv、組織加重係数0.12、甲状腺の等価線量が40 mSv、組織加重係数0.05である。他の組織の等価線量を0とすると、実効線量はいくらか。
- 選択肢: ["5.6 mSv", "42 mSv", "3.6 mSv", "2.0 mSv"]
- 正答選択肢: A
- 正答: 5.6 mSv
- 解説: 途中式: `0.030 Sv=30 mSv`。肺 `30×0.12=3.6 mSv`、甲状腺 `40×0.05=2.0 mSv`、よって `E=3.6+2.0=5.6 mSv`。単位検算: SvをmSvにそろえてから加算する。42 mSvは等価線量の単純和、3.6と2.0 mSvは片方だけの寄与である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q018
- 問題文: 赤色骨髄の等価線量が800 μSvで組織加重係数0.12、皮膚の等価線量が2000 μSvで組織加重係数0.01である。他の組織の等価線量を0とすると、実効線量はいくらか。
- 選択肢: ["96 μSv", "116 μSv", "100 μSv", "2800 μSv"]
- 正答選択肢: B
- 正答: 116 μSv
- 解説: 途中式: 赤色骨髄 `800×0.12=96 μSv`、皮膚 `2000×0.01=20 μSv`。合計 `E=96+20=116 μSv`。単位検算: 両項ともμSv。96 μSvは赤色骨髄のみ、100 μSvと2800 μSvは式と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q019
- 問題文: 同じ作業者が、1回目に肺20 mSv、2回目に肺10 mSvと甲状腺20 mSvの等価線量を受けた。肺の組織加重係数0.12、甲状腺0.05とし、他の組織の等価線量を0とする。2回の実効線量の合計はいくらか。
- 選択肢: ["3.6 mSv", "4.4 mSv", "4.6 mSv", "50 mSv"]
- 正答選択肢: C
- 正答: 4.6 mSv
- 解説: 途中式: 1回目は `20×0.12=2.4 mSv`。2回目は `10×0.12+20×0.05=1.2+1.0=2.2 mSv`。合計 `2.4+2.2=4.6 mSv`。単位検算: 各回ともmSvで同一単位を加算する。3.6、4.4、50 mSvは各組織寄与の合算と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html
- verified: true

### CAL-10-Q020
- 問題文: 生殖腺、赤色骨髄、肺だけがそれぞれ60 mSvの等価線量を受けた。組織加重係数を順に0.20、0.12、0.12とし、他の組織の等価線量を0とする。実効線量はいくらか。
- 選択肢: ["7.2 mSv", "12 mSv", "44 mSv", "26.4 mSv"]
- 正答選択肢: D
- 正答: 26.4 mSv
- 解説: 途中式: 対象3組織の係数和は `0.20+0.12+0.12=0.44`。したがって `E=60 mSv×0.44=26.4 mSv`。別計算でも `12+7.2+7.2=26.4 mSv`。単位検算: 無次元係数×mSv=mSv。7.2、12 mSvは一部の寄与、44 mSvは係数和0.44の百分率表示を誤って線量とした値である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://www.nra.go.jp/data/000447892.pdf ; https://www.nra.go.jp/procedure/examination/kakomon.html
- verified: true

### CAL-10-Q021
- 問題文: 被ばくした複数組織の組織加重係数の合計が0.20で、それらの組織はいずれも75 mSvの等価線量を受け、その他の組織の等価線量は0である。実効線量はいくらか。
- 選択肢: ["15 mSv", "75 mSv", "3.75 mSv", "375 mSv"]
- 正答選択肢: A
- 正答: 15 mSv
- 解説: 途中式: 被ばくした各組織で `H_T=75 mSv` が共通なので `E=75 mSv×Σw_T=75×0.20=15 mSv`。単位検算: 無次元係数×mSv=mSv。75 mSvは組織荷重を無視、3.75と375 mSvは積と一致しない。採点キーワード: `E=Σ(w_T H_T)`、部分被ばく、組織加重係数の合計。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://www.nra.go.jp/procedure/examination/kakomon.html
- verified: true

### CAL-10-Q022
- 問題文: 組織Tの等価線量を `H_T`、組織加重係数を `w_T` とするとき、実効線量 `E` の定義式として正しいものはどれか。
- 選択肢: ["E=Σ(H_T/w_T)", "E=Σ(w_T×H_T)", "E=Σ(w_R×H_T)", "E=(ΣH_T)×(Σw_T)"]
- 正答選択肢: B
- 正答: E=Σ(w_T×H_T)
- 解説: 実効線量は、各臓器・組織の等価線量にその組織加重係数を乗じ、関連する全組織について合計した量である。Aは係数で除しており誤り、Cは組織加重係数ではなく放射線加重係数を再度用いており誤り、Dは一般には各組織の対応関係を失うため誤り。採点キーワード: 等価線量、組織加重係数、積、全組織の総和。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html
- verified: true

### CAL-10-Q023
- 問題文: 等価線量と実効線量の関係について正しい説明はどれか。
- 選択肢: ["等価線量と実効線量はいずれも臓器ごとの線量を荷重せず単純加算した量である", "等価線量は組織加重係数で臓器を重み付けした量で、実効線量は吸収線量そのものである", "組織の等価線量は放射線加重係数を考慮した量で、実効線量は各組織の等価線量を組織加重係数で重み付けして合算する", "実効線量は直接測定した値で、等価線量はそれを組織加重係数で除して求める"]
- 正答選択肢: C
- 正答: 組織の等価線量は放射線加重係数を考慮した量で、実効線量は各組織の等価線量を組織加重係数で重み付けして合算する
- 解説: JAEAは `H_T=Σ(w_R×D_TR)`、`E=Σ(w_T×H_T)` と整理している。Aは荷重を無視しており誤り、Bは放射線加重係数と組織加重係数の役割が逆、Dは実効線量を直接測定するという説明も算定関係も誤り。採点キーワード: 放射線加重係数、等価線量、組織加重係数、実効線量、合算。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-03.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-02-02.html
- verified: true

### CAL-10-Q024
- 問題文: 2026年9月時点の国内制度で用いられているICRP 1990年勧告ベースの組織加重係数について、生殖腺と乳房の組合せとして正しいものはどれか。
- 選択肢: ["生殖腺0.08、乳房0.12", "生殖腺0.20、乳房0.12", "生殖腺0.08、乳房0.05", "生殖腺0.20、乳房0.05"]
- 正答選択肢: D
- 正答: 生殖腺0.20、乳房0.05
- 解説: NRA資料では、1990年勧告の組織加重係数は生殖腺0.20、乳房0.05である。2007年勧告では生殖腺0.08、乳房0.12へ変更されている。NRAは2026年時点でも2007年勧告の国内法令等への取り入れを審議中としているため、現行国内制度を問う本問では1990年勧告ベースを用いる。Aは2007年勧告の組合せ、B・Cは両勧告を混在させた組合せであり誤り。採点キーワード: ICRP 1990年勧告、生殖腺0.20、乳房0.05、2007年勧告との区別。
- 出典: https://www.nra.go.jp/data/000447892.pdf ; https://www.nra.go.jp/activity/anzen/bunya/bougo_risk.html
- verified: true
