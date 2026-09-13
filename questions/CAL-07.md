# CAL-07 遮蔽

- status: complete
- verified_at: 2026-09-14
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA ATOMICA「ガンマ線遮へい」、IAEA Radiation Oncology Physics、IAEA Basic Professional Training Course Module II、NRA公式過去問を主要根拠とした。NRAの直近第58・57・56回「放射線の測定及び放射線障害の防止に関する技術」を確認対象とし、過去問本文は転載せず、遮蔽計算の論点を新規問題へ変換した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-07（指数減衰、半価層、1/10価層、多層遮蔽）。単一エネルギー光子の理想化した減衰は `I=I0 exp(-μx)`、半価層は `HVL=ln2/μ`、1/10価層は `TVL=ln10/μ` とする。したがって `TVL/HVL=ln10/ln2≈3.322`。多層遮蔽では各層の透過率を乗算し、線減弱係数表現なら `I/I0=exp[-Σ(μi xi)]` とする。IAEA Module IIの使用済燃料遮蔽の保守的な1/10価層として、水60 cm、コンクリート25 cm、鋼10 cm、鉛5.6 cmを参照した。

## 主要参照資料

- JAEA ATOMICA「ガンマ線遮へい」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html
- IAEA, Radiation Oncology Physics: A Handbook for Teachers and Students: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- IAEA, Basic Professional Training Course, Module II: Radiation protection in nuclear facilities: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000480854.pdf
- NRA 第57回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000475647.pdf
- NRA 第56回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000472261.pdf

## 問題

### CAL-07-Q001
- 問題文: 単一エネルギーのγ線が厚さxの一様な遮蔽体を通過し、散乱線の寄与を無視できるとする。入射強度I0、透過強度I、線減弱係数μの関係として正しいものはどれか。
- 選択肢: ["I=I0 exp(-μx)", "I=I0(1-μx) を任意の厚さで常に用いる", "I=I0 exp(μx)", "I=I0/(μx)"]
- 正答選択肢: A
- 正答: I=I0 exp(-μx)
- 解説: 光子の理想化した狭いビームの減衰は指数関数 `I=I0 exp(-μx)` で表す。Bは指数関数の一次近似を任意厚さへ誤用しており、Cは厚さとともに増加、Dは指数減衰ではないため誤り。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html ; https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q002
- 問題文: 線減弱係数が0.20 cm^-1の遮蔽体を10 cm通過したとき、散乱を無視した透過率I/I0として最も近いものはどれか。
- 選択肢: ["0.865", "0.135", "0.200", "0.0200"]
- 正答選択肢: B
- 正答: 0.135
- 解説: 途中式: `I/I0=exp(-μx)=exp(-0.20 cm^-1×10 cm)=exp(-2)=0.1353`。透過率は無次元。検算: 正のμと厚さなので0より大きく1未満となる。0.865、0.200、0.0200はいずれも `exp(-2)` と一致しない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q003
- 問題文: 線減弱係数μ=0.150 cm^-1の遮蔽体の半価層として最も近いものはどれか。
- 選択肢: ["3.47 cm", "6.67 cm", "4.62 cm", "10.0 cm"]
- 正答選択肢: C
- 正答: 4.62 cm
- 解説: 途中式: `HVL=ln2/μ=0.6931/0.150 cm^-1=4.62 cm`。検算: `exp(-0.150×4.62)=約0.500`。3.47、6.67、10.0 cmでは透過率が1/2にならない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q004
- 問題文: 線減弱係数μ=0.250 cm^-1の遮蔽体の1/10価層として最も近いものはどれか。
- 選択肢: ["2.77 cm", "4.00 cm", "5.76 cm", "9.21 cm"]
- 正答選択肢: D
- 正答: 9.21 cm
- 解説: 途中式: `TVL=ln10/μ=2.3026/0.250 cm^-1=9.21 cm`。検算: `exp(-0.250×9.21)=約0.100`。他の厚さでは1/10にならない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q005
- 問題文: 同じ材料・同じ光子エネルギーについて、1/10価層TVLと半価層HVLの比TVL/HVLとして最も近いものはどれか。
- 選択肢: ["3.32", "2.00", "1.44", "10.0"]
- 正答選択肢: A
- 正答: 3.32
- 解説: 途中式: `TVL/HVL=(ln10/μ)/(ln2/μ)=ln10/ln2=2.3026/0.6931=3.322`。比は無次元。2.00、1.44、10.0は対数比と一致しない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q006
- 問題文: 半価層が4.0 cmの遮蔽材を4.0 cm設置した。遮蔽前の線量率が240 μSv/hのとき、理想化した透過後の線量率はどれか。
- 選択肢: ["60 μSv/h", "120 μSv/h", "180 μSv/h", "480 μSv/h"]
- 正答選択肢: B
- 正答: 120 μSv/h
- 解説: 途中式: 4.0 cmは1半価層なので `240 μSv/h×(1/2)=120 μSv/h`。検算: 半価層1層は強度を半分にする。60、180、480 μSv/hはいずれも1/2と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html
- verified: true

### CAL-07-Q007
- 問題文: 半価層が6.0 cmの遮蔽材を18 cm設置した。遮蔽前の線量率が240 μSv/hのとき、透過後の線量率はどれか。
- 選択肢: ["120 μSv/h", "60 μSv/h", "30 μSv/h", "15 μSv/h"]
- 正答選択肢: C
- 正答: 30 μSv/h
- 解説: 途中式: `18/6=3` 半価層、したがって `240×(1/2)^3=240/8=30 μSv/h`。検算: 240→120→60→30 μSv/h。120、60、15 μSv/hは半価層数と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html
- verified: true

### CAL-07-Q008
- 問題文: 1/10価層が5.0 cmの遮蔽材を10 cm設置した。遮蔽前の線量率が5.0 mSv/hのとき、透過後の線量率はどれか。
- 選択肢: ["0.50 mSv/h", "0.0050 mSv/h", "0.25 mSv/h", "0.050 mSv/h"]
- 正答選択肢: D
- 正答: 0.050 mSv/h
- 解説: 途中式: `10/5=2` TVL、`5.0 mSv/h×10^-2=0.050 mSv/h`。検算: 2つの1/10価層で1/100。0.50は1 TVL、0.0050は3 TVL相当、0.25は1/20で誤り。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q009
- 問題文: 線減弱係数μ=0.300 cm^-1の遮蔽体で強度を遮蔽前の1/20にしたい。必要厚さとして最も近いものはどれか。
- 選択肢: ["10.0 cm", "6.67 cm", "4.62 cm", "20.0 cm"]
- 正答選択肢: A
- 正答: 10.0 cm
- 解説: 途中式: `1/20=exp(-0.300x)` より `x=ln20/0.300=2.9957/0.300=9.99 cm≈10.0 cm`。検算: `exp(-0.300×9.99)=0.0500`。他の厚さでは1/20にならない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q010
- 問題文: 半価層が2.0 cmの遮蔽材で強度を1/16にしたい。必要厚さはどれか。
- 選択肢: ["4.0 cm", "8.0 cm", "16 cm", "32 cm"]
- 正答選択肢: B
- 正答: 8.0 cm
- 解説: 途中式: `1/16=(1/2)^4` なので4半価層が必要。`4×2.0 cm=8.0 cm`。検算: 8.0 cmで4 HVL、透過率1/16。4.0、16、32 cmはそれぞれ必要半価層数と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html
- verified: true

### CAL-07-Q011
- 問題文: 1/10価層が4.0 cmの遮蔽材で強度を1/1000にしたい。必要厚さはどれか。
- 選択肢: ["4.0 cm", "8.0 cm", "12 cm", "40 cm"]
- 正答選択肢: C
- 正答: 12 cm
- 解説: 途中式: `1/1000=(1/10)^3` なので3 TVL。`3×4.0 cm=12 cm`。検算: 12 cmで3 TVL、透過率0.001。4、8、40 cmはそれぞれ1、2、10 TVLで誤り。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-07-Q012
- 問題文: 第1層がちょうど1半価層、第2層がちょうど1/10価層に相当する二層遮蔽を直列に置く。理想化した全透過率として正しいものはどれか。
- 選択肢: ["0.50", "0.10", "0.20", "0.050"]
- 正答選択肢: D
- 正答: 0.050
- 解説: 途中式: 多層遮蔽では透過率を乗算し、`(1/2)×(1/10)=1/20=0.050`。透過率は無次元。0.50と0.10は片方の層だけ、0.20は積ではない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q013
- 問題文: 遮蔽材Aの半価層は3.0 cm、遮蔽材Bの半価層は5.0 cmである。Aを6.0 cm、Bを5.0 cm重ね、遮蔽前80 μSv/hとしたときの透過後線量率はどれか。
- 選択肢: ["10 μSv/h", "20 μSv/h", "40 μSv/h", "5 μSv/h"]
- 正答選択肢: A
- 正答: 10 μSv/h
- 解説: 途中式: Aは2 HVLで透過率1/4、Bは1 HVLで1/2。全透過率 `1/4×1/2=1/8`。`80 μSv/h×1/8=10 μSv/h`。検算: 合計3半価層相当なので80→40→20→10。20、40、5 μSv/hは層数と一致しない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html
- verified: true

### CAL-07-Q014
- 問題文: 厚さxをcmで表し、指数 `-μx` を無次元にする場合、線減弱係数μの単位として正しいものはどれか。
- 選択肢: ["cm", "cm^-1", "cm^2", "g/cm^3"]
- 正答選択肢: B
- 正答: cm^-1
- 解説: `μx` は指数部なので無次元でなければならない。xがcmならμはcm^-1。cm、cm^2、g/cm^3では積μxが無次元にならない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q015
- 問題文: 厚さ5.0 cmの遮蔽体を通過した強度が入射強度の0.200になった。指数減衰を仮定した線減弱係数μとして最も近いものはどれか。
- 選択肢: ["0.139 cm^-1", "0.200 cm^-1", "0.322 cm^-1", "1.61 cm^-1"]
- 正答選択肢: C
- 正答: 0.322 cm^-1
- 解説: 途中式: `0.200=exp(-μ×5.0 cm)`、`μ=-ln(0.200)/5.0=1.6094/5.0=0.3219 cm^-1≈0.322 cm^-1`。検算: `exp(-0.322×5)=0.200`。他の係数では透過率0.200にならない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q016
- 問題文: ある遮蔽体8.0 cmで強度が入射強度の1/4になった。指数減衰し半価層が一定とすると、半価層はどれか。
- 選択肢: ["2.0 cm", "8.0 cm", "16 cm", "4.0 cm"]
- 正答選択肢: D
- 正答: 4.0 cm
- 解説: 途中式: `1/4=(1/2)^2` なので8.0 cmは2半価層。`HVL=8.0/2=4.0 cm`。検算: 4 cmで1/2、8 cmで1/4。2、8、16 cmでは条件を満たさない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q017
- 問題文: 第1層はμ1=0.100 cm^-1、厚さ5.0 cm、第2層はμ2=0.200 cm^-1、厚さ3.0 cmである。遮蔽前線量率90 μSv/hのとき、散乱を無視した透過後線量率として最も近いものはどれか。
- 選択肢: ["30.0 μSv/h", "45.0 μSv/h", "9.0 μSv/h", "60.0 μSv/h"]
- 正答選択肢: A
- 正答: 30.0 μSv/h
- 解説: 途中式: `I/I0=exp[-(μ1x1+μ2x2)]=exp[-(0.100×5.0+0.200×3.0)]=exp(-1.1)=0.3329`。`90 μSv/h×0.3329=29.96 μSv/h≈30.0 μSv/h`。検算: 0.3329は0～1。45.0、9.0、60.0 μSv/hは指数和から得られない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q018
- 問題文: 3半価層の遮蔽後に線量率2.0 μSv/hを測定した。理想化した遮蔽前線量率はどれか。
- 選択肢: ["8.0 μSv/h", "16 μSv/h", "6.0 μSv/h", "4.0 μSv/h"]
- 正答選択肢: B
- 正答: 16 μSv/h
- 解説: 途中式: 3 HVLの透過率は `(1/2)^3=1/8`。したがって `I0=2.0 μSv/h÷(1/8)=16 μSv/h`。検算: 16→8→4→2 μSv/h。8、6、4 μSv/hでは3半価層後に2 μSv/hとならない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1565.html
- verified: true

### CAL-07-Q019
- 問題文: 半価層が6.0 cmの遮蔽材について、同じ条件での1/10価層として最も近いものはどれか。
- 選択肢: ["13.8 cm", "18.0 cm", "19.9 cm", "60.0 cm"]
- 正答選択肢: C
- 正答: 19.9 cm
- 解説: 途中式: `TVL=HVL×ln10/ln2=6.0 cm×3.3219=19.93 cm≈19.9 cm`。検算: `2^(-19.93/6.0)=約0.100`。13.8、18.0、60.0 cmは1/10にならない。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q020
- 問題文: 1/10価層が10.0 cmの遮蔽材について、同じ条件での半価層として最も近いものはどれか。
- 選択肢: ["1.00 cm", "2.00 cm", "6.93 cm", "3.01 cm"]
- 正答選択肢: D
- 正答: 3.01 cm
- 解説: 途中式: `HVL=TVL×ln2/ln10=10.0 cm×0.30103=3.0103 cm≈3.01 cm`。検算: `10.0/3.0103=3.3219` でTVL/HVLの関係と一致する。1.00、2.00、6.93 cmは不一致。
- 出典: https://www-pub.iaea.org/mtcd/publications/pdf/pub1196_web.pdf
- verified: true

### CAL-07-Q021
- 問題文: IAEA Module IIの使用済燃料遮蔽の簡易評価で、コンクリートの1/10価層を25 cmとする。75 cmのコンクリートで、遮蔽前2.0 mSv/hを遮蔽したときの線量率はどれか。
- 選択肢: ["0.0020 mSv/h", "0.020 mSv/h", "0.20 mSv/h", "0.00020 mSv/h"]
- 正答選択肢: A
- 正答: 0.0020 mSv/h
- 解説: 途中式: `75/25=3` TVL、透過率 `10^-3`。`2.0 mSv/h×10^-3=0.0020 mSv/h`。検算: 0.0020 mSv/h=2.0 μSv/h。0.020、0.20、0.00020 mSv/hはそれぞれTVL数が合わない。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-07-Q022
- 問題文: IAEA Module IIの使用済燃料遮蔽の簡易評価で、鉛の1/10価層を5.6 cmとする。11.2 cmの鉛で、遮蔽前3.0 mSv/hを遮蔽したときの線量率はどれか。
- 選択肢: ["0.30 mSv/h", "0.030 mSv/h", "0.0030 mSv/h", "1.5 mSv/h"]
- 正答選択肢: B
- 正答: 0.030 mSv/h
- 解説: 途中式: `11.2/5.6=2` TVL、透過率 `10^-2`。`3.0 mSv/h×0.01=0.030 mSv/h`。検算: 0.30は1 TVL、0.0030は3 TVL、1.5は1/2で誤り。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-07-Q023
- 問題文: IAEA Module IIの使用済燃料遮蔽の簡易評価で、水の1/10価層を60 cmとする。180 cmの水で、遮蔽前1.0 Sv/hを遮蔽したときの線量率はどれか。
- 選択肢: ["100 mSv/h", "10 mSv/h", "1.0 mSv/h", "0.10 mSv/h"]
- 正答選択肢: C
- 正答: 1.0 mSv/h
- 解説: 途中式: `180/60=3` TVL、透過率 `10^-3`。`1.0 Sv/h×10^-3=0.001 Sv/h=1.0 mSv/h`。検算: 3 TVLで1/1000。100、10、0.10 mSv/hはそれぞれ減衰桁数が違う。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true

### CAL-07-Q024
- 問題文: IAEA Module IIの使用済燃料遮蔽の簡易評価で、鋼の1/10価層を10 cm、鉛を5.6 cmとする。鋼20 cmと鉛11.2 cmについて、それぞれの透過率の組合せとして正しいものはどれか。
- 選択肢: ["鋼0.10、鉛0.010", "鋼0.010、鉛0.10", "鋼0.0010、鉛0.010", "鋼0.010、鉛0.010"]
- 正答選択肢: D
- 正答: 鋼0.010、鉛0.010
- 解説: 途中式: 鋼は `20/10=2` TVL、鉛は `11.2/5.6=2` TVL。どちらも透過率 `10^-2=0.010`。透過率は無次元。A～Cはいずれかの材料のTVL数を誤っている。
- 出典: https://gnssn.iaea.org/main/bptc/BPTC%20Module%20Documents/Module02%20Radiation%20protection%20in%20nuclear%20facilities.pdf
- verified: true
