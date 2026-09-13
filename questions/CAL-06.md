# CAL-06 逆二乗

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA ATOMICA「放射線防護の三原則」、JAEA「線量率」、IAEA Basic Professional Training Course Module IIの点線源線量率・時間/距離防護、NRA公式過去問を主要根拠とした。NRA公式過去問一覧で第58～56回を確認し、第57回「放射線の測定及び放射線障害の防止に関する技術」第3問(1)に、137Cs標準線源の距離・照射時間・1 cm線量当量率定数を用いる計算が出題されていることを確認した。過去問本文は転載せず、数値・設定・選択肢を新規作成した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-06（点線源、距離と線量率、作業時間と線量）。等方的な点線源について、遮蔽・散乱・空気減衰を無視できる条件では線量率は距離の二乗に反比例し、`Ddot2=Ddot1(r1/r2)^2` とする。一定線量率下の被ばく線量は `D=Ddot t`。線量当量率定数 Γ と放射能 A を用いる問題では `Ddot=ΓA/r^2` を使う。IAEA Module IIでは、点線源として扱う目安を「対象までの距離が線源寸法の3倍を超える場合」としている。

## 主要参照資料

- JAEA ATOMICA「放射線防護の三原則」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- JAEA「線量率」原子力基本用語集: https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- IAEA, Basic Professional Training Course, Module II: Radiation protection in nuclear facilities: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第57回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000475647.pdf

## 問題

### CAL-06-Q001
- 問題文: 等方的な点線源について、遮蔽・散乱・空気減衰を無視する。距離 r1 での線量率を Ddot1、距離 r2 での線量率を Ddot2 とするとき、正しい関係式はどれか。
- 選択肢: ["Ddot2=Ddot1(r1/r2)^2", "Ddot2=Ddot1(r2/r1)^2", "Ddot2=Ddot1(r1/r2)", "Ddot2=Ddot1(r2/r1)"]
- 正答選択肢: A
- 正答: Ddot2=Ddot1(r1/r2)^2
- 解説: 点線源からの放射線は球面状に広がり、球面積が `4πr^2` に比例するため、線量率は `1/r^2` に比例する。したがって `Ddot2/Ddot1=(r1/r2)^2`。Bは距離が増えると線量率が増えるため逆、CとDは一次反比例であり点線源の式ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-06-Q002
- 問題文: 点線源から1.0 mで線量率が80 μSv/hである。2.0 mでの線量率として正しいものはどれか。
- 選択肢: ["40 μSv/h", "20 μSv/h", "10 μSv/h", "160 μSv/h"]
- 正答選択肢: B
- 正答: 20 μSv/h
- 解説: 途中式: `Ddot2=80×(1.0/2.0)^2=80/4=20 μSv/h`。単位はμSv/h。検算: 距離を2倍にすると点線源の線量率は1/4になるので80→20。40、10、160 μSv/hはいずれも逆二乗則を満たさない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q003
- 問題文: 点線源から1.0 mで線量率が45 μSv/hである。3.0 mでの線量率として正しいものはどれか。
- 選択肢: ["15 μSv/h", "9 μSv/h", "5 μSv/h", "135 μSv/h"]
- 正答選択肢: C
- 正答: 5 μSv/h
- 解説: 途中式: `Ddot2=45×(1/3)^2=45/9=5 μSv/h`。単位はμSv/h。検算: 距離3倍なら線量率は1/9。15は一次反比例、9は1/5、135は距離増加で増えており誤り。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q004
- 問題文: 点線源から4.0 mで線量率が12 μSv/hである。2.0 mまで近づいたときの線量率として正しいものはどれか。
- 選択肢: ["6 μSv/h", "24 μSv/h", "36 μSv/h", "48 μSv/h"]
- 正答選択肢: D
- 正答: 48 μSv/h
- 解説: 途中式: `Ddot2=12×(4/2)^2=12×4=48 μSv/h`。単位はμSv/h。検算: 距離を半分にすると線量率は4倍。6、24、36 μSv/hはいずれも逆二乗則と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q005
- 問題文: 点線源から2.0 mで線量率が36 μSv/hである。6.0 mでの線量率として正しいものはどれか。
- 選択肢: ["4 μSv/h", "6 μSv/h", "12 μSv/h", "108 μSv/h"]
- 正答選択肢: A
- 正答: 4 μSv/h
- 解説: 途中式: `Ddot2=36×(2/6)^2=36/9=4 μSv/h`。単位はμSv/h。検算: 距離は3倍なので線量率は1/9。6、12、108 μSv/hはこの比を満たさない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q006
- 問題文: 点線源から0.50 mで線量率が160 μSv/hである。2.0 mでの線量率として正しいものはどれか。
- 選択肢: ["40 μSv/h", "10 μSv/h", "20 μSv/h", "2.5 μSv/h"]
- 正答選択肢: B
- 正答: 10 μSv/h
- 解説: 途中式: `Ddot2=160×(0.50/2.0)^2=160×(1/4)^2=160/16=10 μSv/h`。単位はμSv/h。検算: 距離4倍なら線量率は1/16。40、20、2.5 μSv/hはいずれも比率が異なる。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q007
- 問題文: 点線源から3.0 mで線量率が8 μSv/hである。線量率を2 μSv/hまで下げるために必要な距離として正しいものはどれか。
- 選択肢: ["4.0 m", "4.5 m", "6.0 m", "12 m"]
- 正答選択肢: C
- 正答: 6.0 m
- 解説: 途中式: `2=8×(3/r)^2` より `(3/r)^2=1/4`、`r=6.0 m`。単位はm。検算: 距離を3→6 mの2倍にすると線量率は8→2 μSv/hの1/4。4.0、4.5、12 mでは2 μSv/hにならない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q008
- 問題文: 点線源から1.5 mで線量率が40 μSv/hである。線量率を10 μSv/hにする距離として正しいものはどれか。
- 選択肢: ["1.75 m", "2.0 m", "2.5 m", "3.0 m"]
- 正答選択肢: D
- 正答: 3.0 m
- 解説: 途中式: `10=40×(1.5/r)^2` より `(1.5/r)^2=1/4`、`r=3.0 m`。単位はm。検算: 距離2倍で線量率1/4。1.75、2.0、2.5 mはいずれも10 μSv/hを与えない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q009
- 問題文: 一定線量率18 μSv/hの場所で20分間作業した。受ける線量として正しいものはどれか。
- 選択肢: ["6 μSv", "9 μSv", "18 μSv", "360 μSv"]
- 正答選択肢: A
- 正答: 6 μSv
- 解説: 途中式: `20 min=20/60 h=1/3 h`、`D=18 μSv/h×1/3 h=6 μSv`。単位はμSv。検算: 1時間で18 μSvなので20分ではその1/3。9、18、360 μSvは時間換算または次元が不適切。
- 出典: https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q010
- 問題文: 一定線量率0.12 mSv/hの場所で15分間作業した。受ける線量として正しいものはどれか。
- 選択肢: ["0.012 mSv", "0.030 mSv", "0.060 mSv", "1.8 mSv"]
- 正答選択肢: B
- 正答: 0.030 mSv
- 解説: 途中式: `15 min=0.25 h`、`D=0.12 mSv/h×0.25 h=0.030 mSv`。単位はmSv。検算: 15分は1時間の1/4なので0.12の1/4。0.012、0.060、1.8 mSvは積と一致しない。
- 出典: https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q011
- 問題文: 線量率50 μSv/hの場所で、作業による線量を25 μSv以下にしたい。線量率が一定とすると最大作業時間として正しいものはどれか。
- 選択肢: ["15 min", "20 min", "30 min", "50 min"]
- 正答選択肢: C
- 正答: 30 min
- 解説: 途中式: `t=D/Ddot=25 μSv÷50 μSv/h=0.50 h=30 min`。単位はmin。検算: `50 μSv/h×0.50 h=25 μSv`。15、20分では25 μSv未満だが「最大」ではなく、50分では25 μSvを超える。
- 出典: https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87 ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q012
- 問題文: 線量率72 μSv/hの場所で、作業による線量を18 μSv以下にしたい。線量率が一定とすると最大作業時間として正しいものはどれか。
- 選択肢: ["5 min", "10 min", "12 min", "15 min"]
- 正答選択肢: D
- 正答: 15 min
- 解説: 途中式: `t=18/72 h=0.25 h=15 min`。単位はmin。検算: `72 μSv/h×0.25 h=18 μSv`。5、10、12分は上限に達せず「最大」ではない。
- 出典: https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87 ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html
- verified: true

### CAL-06-Q013
- 問題文: 点線源から1.0 mで線量率が200 μSv/hである。4.0 mの位置で24分間作業したときの線量として正しいものはどれか。
- 選択肢: ["5 μSv", "10 μSv", "20 μSv", "80 μSv"]
- 正答選択肢: A
- 正答: 5 μSv
- 解説: 途中式: `Ddot=200×(1/4)^2=12.5 μSv/h`、`24 min=0.40 h`、`D=12.5×0.40=5 μSv`。単位はμSv。検算: 4 mでは1 mの1/16、24分は0.4 h。10、20、80 μSvはいずれも距離補正または時間補正が不整合。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q014
- 問題文: 点線源から2.0 mで線量率が90 μSv/hである。3.0 mの位置で30分間作業したときの線量として正しいものはどれか。
- 選択肢: ["10 μSv", "20 μSv", "30 μSv", "45 μSv"]
- 正答選択肢: B
- 正答: 20 μSv
- 解説: 途中式: `Ddot=90×(2/3)^2=90×4/9=40 μSv/h`、`30 min=0.50 h`、`D=40×0.50=20 μSv`。単位はμSv。検算: 3 mの線量率40 μSv/hの半時間分。10、30、45 μSvは積に一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q015
- 問題文: 点線源から0.50 mで線量率が320 μSv/hである。2.0 mの位置で45分間作業したときの線量として正しいものはどれか。
- 選択肢: ["5 μSv", "10 μSv", "15 μSv", "20 μSv"]
- 正答選択肢: C
- 正答: 15 μSv
- 解説: 途中式: `Ddot=320×(0.50/2.0)^2=320/16=20 μSv/h`、`45 min=0.75 h`、`D=20×0.75=15 μSv`。単位はμSv。検算: 距離4倍で線量率1/16、その3/4時間分。5、10、20 μSvは積と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q016
- 問題文: 点線源から1.0 mで線量率が100 μSv/hである。30分間の作業線量を10 μSv以下にするため、距離だけで調整する。必要な最小距離に最も近いものはどれか。
- 選択肢: ["1.41 m", "1.73 m", "2.00 m", "2.24 m"]
- 正答選択肢: D
- 正答: 2.24 m
- 解説: 途中式: 30分=0.50 hなので許容線量率は `10/0.50=20 μSv/h`。`20=100×(1/r)^2` より `r^2=5`、`r=√5=2.236... m≈2.24 m`。単位はm。検算: `100/2.24^2≈19.9 μSv/h`、0.5 hで約9.97 μSv。1.41、1.73、2.00 mでは10 μSvを超える。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q017
- 問題文: 点線源から2.0 mで線量率が20 μSv/hである。同じ線源から4.0 mの位置で1.0時間作業したときの線量として正しいものはどれか。
- 選択肢: ["5 μSv", "10 μSv", "20 μSv", "40 μSv"]
- 正答選択肢: A
- 正答: 5 μSv
- 解説: 途中式: `Ddot=20×(2/4)^2=5 μSv/h`、`D=5 μSv/h×1.0 h=5 μSv`。単位はμSv。検算: 距離2倍で線量率1/4。10、20、40 μSvは逆二乗補正後の1時間線量と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q018
- 問題文: 点線源から1.0 mで線量率が144 μSv/hである。20分間の作業線量を12 μSv以下にするために必要な最小距離として正しいものはどれか。
- 選択肢: ["1.5 m", "2.0 m", "2.5 m", "3.0 m"]
- 正答選択肢: B
- 正答: 2.0 m
- 解説: 途中式: `20 min=1/3 h`、許容線量率は `12÷(1/3)=36 μSv/h`。`36=144×(1/r)^2` より `r^2=4`、`r=2.0 m`。検算: 2 mで36 μSv/h、20分で12 μSv。1.5 mでは超過し、2.5・3.0 mは条件を満たすが最小ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q019
- 問題文: 点線源から2.0 mで線量率が25 μSv/hである。6.0 mの位置で60分間作業したときの線量として最も近いものはどれか。
- 選択肢: ["1.39 μSv", "2.00 μSv", "2.78 μSv", "8.33 μSv"]
- 正答選択肢: C
- 正答: 2.78 μSv
- 解説: 途中式: `Ddot=25×(2/6)^2=25/9=2.777... μSv/h`、60分=1 hなので `D=2.777... μSv≈2.78 μSv`。単位はμSv。検算: 距離3倍で線量率1/9。1.39、2.00、8.33 μSvはいずれも1時間線量と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1259.html ; https://www.jaea.go.jp/glossary/%E7%B7%9A%E9%87%8F%E7%8E%87
- verified: true

### CAL-06-Q020
- 問題文: 1 cm線量当量率定数 Γ=0.09 μSv・m^2/(MBq・h) のγ線点線源が40 MBqある。遮蔽・散乱を無視し、線源から0.60 mで12分間受ける線量として正しいものはどれか。
- 選択肢: ["0.50 μSv", "1.0 μSv", "4.0 μSv", "2.0 μSv"]
- 正答選択肢: D
- 正答: 2.0 μSv
- 解説: 途中式: `Ddot=ΓA/r^2=0.09×40/0.60^2=3.6/0.36=10 μSv/h`。`12 min=0.20 h` より `D=10×0.20=2.0 μSv`。単位はμSv。検算: 0.60 mでの線量率10 μSv/hの1/5時間分。0.50、1.0、4.0 μSvは式を満たさない。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf ; https://www.nra.go.jp/data/000475647.pdf
- verified: true

### CAL-06-Q021
- 問題文: 50 MBqのγ線点線源から0.50 mの位置で線量率が18 μSv/hであった。`Ddot=ΓA/r^2` とすると、線量当量率定数 Γ として正しいものはどれか。
- 選択肢: ["0.09 μSv・m^2/(MBq・h)", "0.18 μSv・m^2/(MBq・h)", "0.36 μSv・m^2/(MBq・h)", "0.90 μSv・m^2/(MBq・h)"]
- 正答選択肢: A
- 正答: 0.09 μSv・m^2/(MBq・h)
- 解説: 途中式: `Γ=Ddot r^2/A=18×0.50^2/50=18×0.25/50=4.5/50=0.09 μSv・m^2/(MBq・h)`。検算: `0.09×50/0.25=18 μSv/h`。0.18、0.36、0.90では与えられた18 μSv/hを再現しない。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-06-Q022
- 問題文: 線量当量率定数 Γ=0.09 μSv・m^2/(MBq・h) のγ線点線源について、2.0 mの位置で線量率が2.25 μSv/hである。線源の放射能として正しいものはどれか。
- 選択肢: ["25 MBq", "100 MBq", "225 MBq", "400 MBq"]
- 正答選択肢: B
- 正答: 100 MBq
- 解説: 途中式: `A=Ddot r^2/Γ=2.25×2.0^2/0.09=9/0.09=100 MBq`。単位はMBq。検算: `0.09×100/4=2.25 μSv/h`。25、225、400 MBqでは与えられた線量率にならない。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-06-Q023
- 問題文: 1 cm線量当量率定数 Γ=0.09 μSv・m^2/(MBq・h) の20 MBq点線源について、0.50 mの位置で30分間受ける線量として正しいものはどれか。
- 選択肢: ["0.90 μSv", "1.8 μSv", "3.6 μSv", "7.2 μSv"]
- 正答選択肢: C
- 正答: 3.6 μSv
- 解説: 途中式: `Ddot=0.09×20/0.50^2=1.8/0.25=7.2 μSv/h`。30分=0.50 hなので `D=7.2×0.50=3.6 μSv`。単位はμSv。検算: 7.2 μSv/hの半時間分。0.90、1.8、7.2 μSvは時間積分と一致しない。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf ; https://www.nra.go.jp/data/000475647.pdf
- verified: true

### CAL-06-Q024
- 問題文: IAEA Module IIの点線源近似の目安「対象までの距離が線源寸法の3倍を超える」を用いる。最大寸法8 cmの線源について、次の選択肢のうち基準を満たす最小の距離はどれか。
- 選択肢: ["8 cm", "16 cm", "24 cm", "30 cm"]
- 正答選択肢: D
- 正答: 30 cm
- 解説: 途中式: `3×8 cm=24 cm`。基準は「3倍を超える」なので24 cmちょうどでは足りず、選択肢中で最小の適合値は30 cm。単位はcm。検算: `30/8=3.75>3`。8、16、24 cmはいずれも比が3以下。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true
