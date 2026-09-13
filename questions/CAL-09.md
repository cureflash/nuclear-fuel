# CAL-09 内部被ばく

- status: complete
- verified_at: 2026-09-14
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: NRA「放射性物質を体内に取り込んだ場合の被ばく線量計算」およびJAEA/ATOMICA「職業人の内部被ばく線量係数」「空気汚染モニタリング」を、摂取量・線量係数・吸入空気中濃度の主要根拠とした。NRAの第58・57・56回核燃料取扱主任者試験「放射線の測定及び放射線障害の防止に関する技術」を確認し、第57回では預託実効線量と職業人の50年評価、第56回では内部被ばく評価に先立つ体内摂取量推定と空気中放射能濃度が直接問われている。過去問本文は転載せず、CAL-09の計算演習として新規数値問題へ変換した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-09（空気濃度×呼吸量×時間、摂取量、線量係数、単位換算）。吸入摂取量は、問題条件で空気中濃度を一定とみなすとき `I=C×V=C×b×t` とし、内部被ばくによる実効線量はNRAが示す `E=I×e` を用いる。ここで `I` は摂取量（Bq）、`e` は吸入摂取の実効線量係数（Sv/Bq又は問題文指定単位）。呼吸量・時間・濃度の単位を整合させてから計算し、Bq、Sv、mSv、μSvの換算を明示する。

## 主要参照資料

- NRA「Q6. 放射性物質を体内に取り込んでしまった場合、被ばく線量を計算するにはどうしたらよいのですか？」: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- JAEA/ATOMICA「職業人の内部被ばく線量係数」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- JAEA/ATOMICA「空気汚染モニタリング」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html
- JAEA/ATOMICA「内部被ばくの評価」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-04.html
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000480854.pdf
- NRA 第57回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000475647.pdf
- NRA 第56回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000472261.pdf

## 問題

### CAL-09-Q001
- 問題文: 空気中放射性物質濃度が120 Bq/m^3の場所で、呼吸量を1.2 m^3/hとして2.0 h作業した。吸入摂取量はいくらか。
- 選択肢: ["288 Bq", "144 Bq", "240 Bq", "360 Bq"]
- 正答選択肢: A
- 正答: 288 Bq
- 解説: 途中式: 吸入した空気量は `1.2 m^3/h×2.0 h=2.4 m^3`。したがって摂取量 `I=120 Bq/m^3×2.4 m^3=288 Bq`。単位検算: `(Bq/m^3)×m^3=Bq`。他の3値はこの積と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q002
- 問題文: 空気中放射性物質濃度が75 Bq/m^3、呼吸量が0.80 m^3/h、作業時間が3.0 hである。吸入摂取量はいくらか。
- 選択肢: ["60 Bq", "180 Bq", "225 Bq", "720 Bq"]
- 正答選択肢: B
- 正答: 180 Bq
- 解説: 途中式: 吸入空気量 `0.80×3.0=2.4 m^3`、摂取量 `I=75×2.4=180 Bq`。単位検算: `(Bq/m^3)×m^3=Bq`。60、225、720 Bqはいずれも条件から得られない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q003
- 問題文: 空気中放射性物質濃度が250 Bq/m^3の場所で、呼吸量15 L/minで40 min作業した。吸入摂取量はいくらか。
- 選択肢: ["10 Bq", "60 Bq", "150 Bq", "2250 Bq"]
- 正答選択肢: C
- 正答: 150 Bq
- 解説: 途中式: 呼吸量は `15 L/min×40 min=600 L=0.600 m^3`。よって `I=250 Bq/m^3×0.600 m^3=150 Bq`。検算: 1 m^3=1000 Lなので換算後の次元はBqとなる。他の選択肢はL→m^3換算又は積が誤り。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q004
- 問題文: 空気中放射性物質濃度が0.90 Bq/m^3、呼吸量18 L/min、作業時間5.0 hである。吸入摂取量はいくらか。
- 選択肢: ["0.162 Bq", "1.62 Bq", "3.24 Bq", "4.86 Bq"]
- 正答選択肢: D
- 正答: 4.86 Bq
- 解説: 途中式: `5.0 h=300 min`、吸入空気量 `18 L/min×300 min=5400 L=5.4 m^3`。したがって `I=0.90×5.4=4.86 Bq`。単位検算もBqとなる。他の3値は時間又は体積換算が一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q005
- 問題文: 空気中放射性物質濃度が0.030 Bq/L、呼吸量20 L/min、作業時間30 minである。吸入摂取量はいくらか。
- 選択肢: ["18 Bq", "0.018 Bq", "0.60 Bq", "600 Bq"]
- 正答選択肢: A
- 正答: 18 Bq
- 解説: 途中式: 吸入空気量 `20 L/min×30 min=600 L`。したがって `I=0.030 Bq/L×600 L=18 Bq`。同じL単位で計算するため追加換算は不要。0.018、0.60、600 Bqはいずれも積と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q006
- 問題文: 空気中放射性物質濃度が4.0×10^-4 Bq/cm^3、呼吸量1.0 m^3/h、作業時間0.50 hである。吸入摂取量はいくらか。
- 選択肢: ["0.20 Bq", "200 Bq", "400 Bq", "800 Bq"]
- 正答選択肢: B
- 正答: 200 Bq
- 解説: 途中式: `1 m^3=10^6 cm^3` より濃度は `4.0×10^-4×10^6=400 Bq/m^3`。吸入空気量は `1.0×0.50=0.50 m^3`。よって `I=400×0.50=200 Bq`。検算: `(Bq/m^3)×m^3=Bq`。他の3値は換算係数又は時間因子が誤り。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q007
- 問題文: 空気中放射性物質濃度が150 Bq/m^3、呼吸量1.5 m^3/h、作業時間24 minである。吸入摂取量はいくらか。
- 選択肢: ["36 Bq", "60 Bq", "90 Bq", "225 Bq"]
- 正答選択肢: C
- 正答: 90 Bq
- 解説: 途中式: `24 min=0.40 h`、吸入空気量 `1.5×0.40=0.60 m^3`。したがって `I=150×0.60=90 Bq`。検算: 1時間なら225 Bqなので、0.4時間ではその0.4倍の90 Bq。他の3値はこの比例関係を満たさない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q008
- 問題文: 空気中放射性物質濃度が2.0 kBq/m^3、呼吸量12 L/min、作業時間10 minである。吸入摂取量はいくらか。
- 選択肢: ["24 Bq", "120 Bq", "200 Bq", "240 Bq"]
- 正答選択肢: D
- 正答: 240 Bq
- 解説: 途中式: `2.0 kBq/m^3=2000 Bq/m^3`、吸入空気量 `12×10=120 L=0.120 m^3`。よって `I=2000×0.120=240 Bq`。単位検算もBqとなる。24、120、200 Bqはいずれも条件の積と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html
- verified: true

### CAL-09-Q009
- 問題文: ある放射性核種を500 Bq吸入摂取した。吸入摂取の実効線量係数が2.0×10^-8 Sv/Bqであるとき、預託実効線量はいくらか。
- 選択肢: ["10 μSv", "1 μSv", "100 μSv", "1000 μSv"]
- 正答選択肢: A
- 正答: 10 μSv
- 解説: 途中式: `E=I×e=500 Bq×2.0×10^-8 Sv/Bq=1.0×10^-5 Sv`。`1 Sv=10^6 μSv` より `10 μSv`。検算: Bqが約分されSvが残る。他の3値は10倍・1/10倍等で式と一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q010
- 問題文: ある放射性核種を2.5 kBq吸入摂取した。実効線量係数が4.0×10^-8 Sv/Bqであるとき、預託実効線量はいくらか。
- 選択肢: ["0.01 mSv", "0.10 mSv", "1.0 mSv", "10 mSv"]
- 正答選択肢: B
- 正答: 0.10 mSv
- 解説: 途中式: `2.5 kBq=2500 Bq`、`E=2500×4.0×10^-8=1.0×10^-4 Sv=0.10 mSv`。検算: `0.10 mSv=100 μSv`。他の3値は桁が一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q011
- 問題文: ある放射性核種の吸入摂取量が8.0×10^4 Bq、実効線量係数が3.0×10^-9 Sv/Bqである。預託実効線量はいくらか。
- 選択肢: ["0.024 mSv", "0.080 mSv", "0.24 mSv", "2.4 mSv"]
- 正答選択肢: C
- 正答: 0.24 mSv
- 解説: 途中式: `E=8.0×10^4×3.0×10^-9=2.4×10^-4 Sv`。`1 Sv=1000 mSv` より `0.24 mSv`。検算: 0.24 mSvは240 μSv。0.024、0.080、2.4 mSvは積と一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q012
- 問題文: ある放射性核種を6.0×10^3 Bq吸入摂取した。実効線量係数が1.5×10^-7 Sv/Bqであるとき、預託実効線量はいくらか。
- 選択肢: ["0.09 mSv", "0.60 mSv", "0.75 mSv", "0.90 mSv"]
- 正答選択肢: D
- 正答: 0.90 mSv
- 解説: 途中式: `E=6.0×10^3×1.5×10^-7=9.0×10^-4 Sv=0.90 mSv`。単位はBqが消えてSvとなる。0.09、0.60、0.75 mSvはいずれも積と一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q013
- 問題文: 預託実効線量が75 μSv、吸入摂取の実効線量係数が2.5×10^-8 Sv/Bqである。吸入摂取量はいくらか。
- 選択肢: ["3000 Bq", "300 Bq", "7500 Bq", "30000 Bq"]
- 正答選択肢: A
- 正答: 3000 Bq
- 解説: 途中式: `75 μSv=75×10^-6 Sv`。`I=E/e=(75×10^-6)/(2.5×10^-8)=3.0×10^3 Bq`。検算: `3000×2.5×10^-8=75×10^-6 Sv`。他の3値を代入すると75 μSvにならない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q014
- 問題文: 預託実効線量が0.30 mSv、吸入摂取の実効線量係数が6.0×10^-8 Sv/Bqである。吸入摂取量はいくらか。
- 選択肢: ["500 Bq", "5000 Bq", "18000 Bq", "50000 Bq"]
- 正答選択肢: B
- 正答: 5000 Bq
- 解説: 途中式: `0.30 mSv=3.0×10^-4 Sv`、`I=(3.0×10^-4)/(6.0×10^-8)=5.0×10^3 Bq`。検算: `5000×6.0×10^-8=3.0×10^-4 Sv=0.30 mSv`。他の値では一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q015
- 問題文: 預託実効線量が1.2 mSv、実効線量係数が4.0×10^-7 Sv/Bqである。摂取量はいくらか。
- 選択肢: ["300 Bq", "1200 Bq", "3000 Bq", "30000 Bq"]
- 正答選択肢: C
- 正答: 3000 Bq
- 解説: 途中式: `1.2 mSv=1.2×10^-3 Sv`、`I=(1.2×10^-3)/(4.0×10^-7)=3.0×10^3 Bq`。検算: `3000×4.0×10^-7=1.2×10^-3 Sv`。他の3値はこの逆算を満たさない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q016
- 問題文: 預託実効線量が84 μSv、実効線量係数が1.2×10^-8 Sv/Bqである。摂取量はいくらか。
- 選択肢: ["700 Bq", "1400 Bq", "3500 Bq", "7000 Bq"]
- 正答選択肢: D
- 正答: 7000 Bq
- 解説: 途中式: `84 μSv=84×10^-6 Sv`、`I=(84×10^-6)/(1.2×10^-8)=7.0×10^3 Bq`。検算: `7000×1.2×10^-8=84×10^-6 Sv`。他の3値では84 μSvにならない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q017
- 問題文: 空気中濃度40 Bq/m^3、呼吸量1.25 m^3/hの場所で2.0 h作業した。対象核種の吸入摂取実効線量係数が5.0×10^-8 Sv/Bqである。預託実効線量はいくらか。
- 選択肢: ["5.0 μSv", "2.5 μSv", "50 μSv", "500 μSv"]
- 正答選択肢: A
- 正答: 5.0 μSv
- 解説: 途中式: 吸入空気量 `1.25×2.0=2.5 m^3`、摂取量 `I=40×2.5=100 Bq`。`E=100×5.0×10^-8=5.0×10^-6 Sv=5.0 μSv`。検算: `C×呼吸量×時間×e` の単位はSv。他の3値はこの積と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q018
- 問題文: 空気中濃度0.020 Bq/Lの場所で、呼吸量18 L/minとして50 min作業した。実効線量係数が2.0×10^-7 Sv/Bqである。預託実効線量はいくらか。
- 選択肢: ["0.36 μSv", "3.6 μSv", "36 μSv", "360 μSv"]
- 正答選択肢: B
- 正答: 3.6 μSv
- 解説: 途中式: 吸入空気量 `18×50=900 L`、摂取量 `I=0.020×900=18 Bq`。`E=18×2.0×10^-7=3.6×10^-6 Sv=3.6 μSv`。同じL単位で濃度と呼吸量を扱える。他の値は積の桁が異なる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q019
- 問題文: 空気中濃度600 Bq/m^3、呼吸量0.90 m^3/hの場所で20 min作業した。実効線量係数が7.0×10^-8 Sv/Bqである。預託実効線量はいくらか。
- 選択肢: ["1.26 μSv", "7.0 μSv", "12.6 μSv", "42 μSv"]
- 正答選択肢: C
- 正答: 12.6 μSv
- 解説: 途中式: `20 min=1/3 h`、吸入空気量 `0.90×1/3=0.30 m^3`、摂取量 `I=600×0.30=180 Bq`。`E=180×7.0×10^-8=1.26×10^-5 Sv=12.6 μSv`。他の3値はこの連続計算を満たさない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q020
- 問題文: 空気中濃度1.5×10^-4 Bq/cm^3、呼吸量1.6 m^3/hの場所で45 min作業した。実効線量係数が2.5×10^-7 Sv/Bqである。預託実効線量はいくらか。
- 選択肢: ["4.5 μSv", "18 μSv", "25 μSv", "45 μSv"]
- 正答選択肢: D
- 正答: 45 μSv
- 解説: 途中式: `1.5×10^-4 Bq/cm^3=150 Bq/m^3`、`45 min=0.75 h`、吸入空気量 `1.6×0.75=1.2 m^3`。摂取量 `I=150×1.2=180 Bq`。`E=180×2.5×10^-7=4.5×10^-5 Sv=45 μSv`。他の3値は単位換算又は積が一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-06-03.html ; https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q021
- 問題文: 内部被ばくによる預託実効線量3.2×10^-6 SvをμSvで表した値はどれか。
- 選択肢: ["3.2 μSv", "0.0032 μSv", "320 μSv", "3200 μSv"]
- 正答選択肢: A
- 正答: 3.2 μSv
- 解説: 途中式: `1 Sv=10^6 μSv` なので `3.2×10^-6 Sv×10^6=3.2 μSv`。逆変換すると `3.2 μSv=3.2×10^-6 Sv` で一致する。他の3値は換算指数が誤り。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q022
- 問題文: 内部被ばくによる預託実効線量0.045 mSvをμSvで表した値はどれか。
- 選択肢: ["4.5 μSv", "45 μSv", "450 μSv", "4500 μSv"]
- 正答選択肢: B
- 正答: 45 μSv
- 解説: 途中式: `1 mSv=1000 μSv` より `0.045×1000=45 μSv`。検算: `45 μSv÷1000=0.045 mSv`。他の3値は換算係数が一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q023
- 問題文: 空気中濃度100 Bq/m^3、呼吸量1.0 m^3/h、実効線量係数2.0×10^-8 Sv/Bqとする。預託実効線量を20 μSv以下に抑えるため、同じ濃度が続く場所での作業時間の上限はいくらか。
- 選択肢: ["1 h", "5 h", "10 h", "100 h"]
- 正答選択肢: C
- 正答: 10 h
- 解説: 途中式: 1時間当たりの摂取量は `100×1.0=100 Bq/h`、線量率相当は `100×2.0×10^-8=2.0×10^-6 Sv/h=2.0 μSv/h`。したがって `t=20 μSv/(2.0 μSv/h)=10 h`。検算: 10 hなら摂取量1000 Bq、線量20 μSv。1、5、100 hは上限条件と一致しない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true

### CAL-09-Q024
- 問題文: 作業による預託実効線量が12 μSv、呼吸量1.2 m^3/h、作業時間2.0 h、実効線量係数5.0×10^-8 Sv/Bqであった。作業中の空気中濃度を一定とみなすと、その濃度はいくらか。
- 選択肢: ["5 Bq/m^3", "20 Bq/m^3", "50 Bq/m^3", "100 Bq/m^3"]
- 正答選択肢: D
- 正答: 100 Bq/m^3
- 解説: 途中式: `12 μSv=12×10^-6 Sv`。摂取量 `I=E/e=(12×10^-6)/(5.0×10^-8)=240 Bq`。吸入空気量 `1.2×2.0=2.4 m^3`。よって `C=240/2.4=100 Bq/m^3`。検算: `100×2.4×5.0×10^-8=12×10^-6 Sv`。他の3濃度では線量12 μSvにならない。
- 出典: https://www.nra.go.jp/activity/ri_kisei/shitsumon/shitsumon6.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-04-12.html
- verified: true
