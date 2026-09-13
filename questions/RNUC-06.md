# RNUC-06 LET

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- verification_note: `08_放射線・核種データ.md` の RNUC-06 に指定された LET の定義、低LET/高LET、飛程、ブラッグピーク、電離密度を、QST SIRABE・QST公式資料・JAEA ATOMICA・環境省「放射線による健康影響等に関する統一的な基礎資料」令和7年度版で照合した。NRAの直近公開過去問（第56～58回）も確認し、第56回ではLET、低LET/高LET、飛程終端のブラッグピークが直接論点となっていること、第58回でも高LET/低LETが放射線生物影響分野の選択肢に含まれることを確認した。過去問本文は転載せず独立した4択問題へ再構成した。各問は正答だけでなく3誤答肢も公的資料で反証でき、条件下で正解が1つに定まるものだけを `verified: true` とした。飛程の数値はQST公式資料の値に固定した。

## 出題根拠

対象論点は `08_放射線・核種データ.md` の RNUC-06 に指定された、LETの定義、低LET/高LET放射線、飛程、ブラッグピーク、電離密度である。RNUC-01の放射線一般分類、RNUC-07の生物影響との重複を避け、LETを軸にした線質、飛跡構造、飛程終端でのエネルギー付与を中心に構成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000480854.pdf
- NRA 第56回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000472261.pdf
- QST SIRABE「LET」: https://sirabe.nirs.qst.go.jp/sirabe/LET.html
- QST SIRABE「高LET放射線」: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html
- QST SIRABE「低LET放射線」: https://sirabe.nirs.qst.go.jp/sirabe/%E4%BD%8ELET%E6%94%BE%E5%B0%84%E7%B7%9A
- QST「用語集 な行・は行」: https://www.qst.go.jp/soshiki/104/24276.html
- QST「放射線の基本的な性質」: https://www.qst.go.jp/site/taka/2337.html
- QST病院「重粒子線治療とは」: https://www.qst.go.jp/site/hospital/rt-carbonion.html
- QST「治療ビーム研究開発グループ」: https://www.qst.go.jp/site/iqms/therapeutic-beam-research.html
- JAEA ATOMICA「LET」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2800.html
- JAEA ATOMICA「高LET放射線」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2790.html
- JAEA ATOMICA「低LET放射線」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2781.html
- JAEA ATOMICA「線エネルギー付与（LET）・生物学的効果比（RBE）・放射線荷重係数」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-02-02-11.html
- JAEA ATOMICA「重粒子線照射によるがんの治療」: https://atomica.jaea.go.jp/data/detail/dat_detail_08-02-02-01.html
- 環境省「放射線の種類と生物への影響力」: https://www.env.go.jp/chemi/rhm/current/01-03-07.html

## 問題

### RNUC-06-Q001
- 問題文: LET（線エネルギー付与）の定義として最も適切なものはどれか。
- 選択肢: ["放射線が媒質中の飛跡に沿って単位長さ当たりに媒質へ与えるエネルギー", "単位質量の物質が吸収した放射線エネルギー", "単位時間当たりの放射性壊変数", "放射線が物質中で完全に停止するまでの距離"]
- 正答選択肢: A
- 正答: 放射線が媒質中の飛跡に沿って単位長さ当たりに媒質へ与えるエネルギー
- 解説: LETは、放射線が媒質中を通過するとき、飛跡に沿った単位長さ当たりに媒質へ付与するエネルギーを表す。単位質量当たりの吸収エネルギーは吸収線量、単位時間当たりの壊変数は放射能、停止までの距離は飛程であり、いずれもLETとは異なる。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/LET.html; https://atomica.jaea.go.jp/dic/detail/dic_detail_2800.html
- verified: true

### RNUC-06-Q002
- 問題文: LETを表す際によく用いられる単位はどれか。
- 選択肢: ["Bq", "keV/μm", "Gy", "Sv"]
- 正答選択肢: B
- 正答: keV/μm
- 解説: QST SIRABEおよびJAEA ATOMICAでは、LETの単位として keV/μm がよく用いられる。Bqは放射能、Gyは吸収線量、Svは等価線量・実効線量等に用いる単位である。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/LET.html; https://atomica.jaea.go.jp/dic/detail/dic_detail_2790.html
- verified: true

### RNUC-06-Q003
- 問題文: 次のうち、低LET放射線の組合せとして適切なものはどれか。
- 選択肢: ["α線と炭素線", "α線と中性子線", "X線とγ線", "核分裂破片とα線"]
- 正答選択肢: C
- 正答: X線とγ線
- 解説: QST SIRABEとJAEA ATOMICAはいずれも、X線・γ線を代表的な低LET放射線としている。α線、重粒子、核分裂破片は高LET側に分類され、中性子線も高LET放射線として扱われる。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E4%BD%8ELET%E6%94%BE%E5%B0%84%E7%B7%9A; https://atomica.jaea.go.jp/dic/detail/dic_detail_2781.html
- verified: true

### RNUC-06-Q004
- 問題文: 次のうち、代表的な高LET放射線として最も適切なものはどれか。
- 選択肢: ["X線", "γ線", "β線", "α線"]
- 正答選択肢: D
- 正答: α線
- 解説: α線は飛跡に沿う電離密度が高い代表的な高LET放射線である。QST SIRABEではX線・γ線・β線を低LET放射線の例としている。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html; https://sirabe.nirs.qst.go.jp/sirabe/LET.html
- verified: true

### RNUC-06-Q005
- 問題文: 放射線の飛跡に沿う電離密度が高い状態を示す用語として最も適切なものはどれか。
- 選択肢: ["高LET", "低LET", "長半減期", "低放射能"]
- 正答選択肢: A
- 正答: 高LET
- 解説: ICRP用語を収録するQST SIRABEでは、高LETを「放射線の飛跡に沿って生じる単位長さあたりの電離密度が高いこと」と説明している。低LETはこれと逆に電離密度が低い。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html; https://sirabe.nirs.qst.go.jp/sirabe/%E4%BD%8ELET%E6%94%BE%E5%B0%84%E7%B7%9A
- verified: true

### RNUC-06-Q006
- 問題文: β線のLET分類として、QST SIRABEの説明に合うものはどれか。
- 選択肢: ["高LET放射線", "低LET放射線", "非電離放射線", "LETを定義できない放射線"]
- 正答選択肢: B
- 正答: 低LET放射線
- 解説: QST SIRABEは、X線、γ線、β線を単位長さ当たりのエネルギー付与率が小さい低LET放射線として挙げている。β線は電子による電離放射線であり、非電離放射線ではない。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/LET.html; https://www.env.go.jp/chemi/rhm/current/01-03-02.html
- verified: true

### RNUC-06-Q007
- 問題文: α線について、LETと電離密度の関係を正しく述べたものはどれか。
- 選択肢: ["低LETで電離密度も低い", "低LETだが電離密度は高い", "高LETで電離密度も高い", "高LETだが電離を起こさない"]
- 正答選択肢: C
- 正答: 高LETで電離密度も高い
- 解説: α線は高LET放射線の代表例で、組織内で局所的に高密度の電離を起こす。低LET放射線より飛跡に沿ったエネルギー付与が密である。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html; https://www.env.go.jp/chemi/rhm/current/01-03-07.html
- verified: true

### RNUC-06-Q008
- 問題文: 中性子線のLET分類について、公的資料の説明に合うものはどれか。
- 選択肢: ["電荷を持たないので必ず低LETに分類される", "電離放射線ではないためLETとは無関係である", "X線・γ線と同じく代表的な低LET放射線である", "高LET放射線として扱われる"]
- 正答選択肢: D
- 正答: 高LET放射線として扱われる
- 解説: QST SIRABEとJAEA ATOMICAはいずれも中性子線を高LET放射線として挙げている。中性子自体は非荷電粒子だが、物質との相互作用で生じる反跳荷電粒子などを通じて高密度のエネルギー付与を生じるため、高LET側として扱われる。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/LET.html; https://atomica.jaea.go.jp/dic/detail/dic_detail_2790.html; https://www.env.go.jp/chemi/rhm/current/01-03-07.html
- verified: true

### RNUC-06-Q009
- 問題文: 放射線の「飛程」の定義として正しいものはどれか。
- 選択肢: ["放射線が物質内でエネルギーを失って止まるまでの距離", "単位長さ当たりに媒質へ与えるエネルギー", "単位質量当たりに吸収されたエネルギー", "1秒間に起こる原子核壊変の数"]
- 正答選択肢: A
- 正答: 放射線が物質内でエネルギーを失って止まるまでの距離
- 解説: QST用語集では、飛程を「放射線が物質内でエネルギーを失って止まるまでの距離」と定義している。単位長さ当たりのエネルギー付与はLETであり、別の物理量である。
- 出典: https://www.qst.go.jp/soshiki/104/24276.html
- verified: true

### RNUC-06-Q010
- 問題文: QSTが示す生体組織中の代表的な飛程の目安として、α線に最も近いものはどれか。
- 選択肢: ["0.2～10 m", "100 μm未満", "数十 cm～数 m", "飛程を持たず無限に進む"]
- 正答選択肢: B
- 正答: 100 μm未満
- 解説: QSTは、放射線の飛程はエネルギー等に依存するとした上で、α線では100 μm未満、β線では0.2～10 mm程度と説明している。
- 出典: https://www.qst.go.jp/soshiki/104/24276.html; https://www.qst.go.jp/site/press/1203.html
- verified: true

### RNUC-06-Q011
- 問題文: QSTが示す生体組織中の代表的な飛程の目安として、β線に最も近いものはどれか。
- 選択肢: ["100 μm未満だけに限られる", "数十 m程度", "0.2～10 mm程度", "常にα線より短い"]
- 正答選択肢: C
- 正答: 0.2～10 mm程度
- 解説: QSTは、β線の飛程の目安を0.2～10 mmとしている。α線は100 μm未満であり、一般にこの目安ではβ線の方が長い。
- 出典: https://www.qst.go.jp/soshiki/104/24276.html; https://www.qst.go.jp/site/press/1203.html
- verified: true

### RNUC-06-Q012
- 問題文: α線とβ線の性質の比較として、公的資料の説明に最も合うものはどれか。
- 選択肢: ["α線はβ線より電離密度が低く、飛程も長い", "α線はβ線より電離密度が低いが、飛程は短い", "α線とβ線は電離密度も飛程も同じ", "α線はβ線より電離密度が高く、飛程は短い"]
- 正答選択肢: D
- 正答: α線はβ線より電離密度が高く、飛程は短い
- 解説: 環境省資料ではα線は組織内で高密度の電離を起こし、β線はα線より電離密度が低いとされる。QSTの飛程の目安ではα線は100 μm未満、β線は0.2～10 mmで、α線の方が短い。
- 出典: https://www.env.go.jp/chemi/rhm/current/01-03-07.html; https://www.qst.go.jp/soshiki/104/24276.html
- verified: true

### RNUC-06-Q013
- 問題文: ブラッグピークの説明として最も適切なものはどれか。
- 選択肢: ["陽子線などの粒子線が物質中で止まる直前に大きな線量を与えて形成するピーク", "X線の放射能が時間とともに指数関数的に減衰する現象", "γ線が物質表面だけで全エネルギーを失う現象", "放射性核種の壊変系列で放射能が最大になる時点"]
- 正答選択肢: A
- 正答: 陽子線などの粒子線が物質中で止まる直前に大きな線量を与えて形成するピーク
- 解説: QST用語集は、陽子線などの粒子線が物質中で止まる直前に大きな線量を与え、その線量分布のピークをブラッグピークと説明している。
- 出典: https://www.qst.go.jp/soshiki/104/24276.html; https://atomica.jaea.go.jp/data/detail/dat_detail_08-02-02-01.html
- verified: true

### RNUC-06-Q014
- 問題文: 深さ方向の線量分布にブラッグピークを形成する放射線として最も適切なものはどれか。
- 選択肢: ["診断用X線", "陽子線", "可視光", "γ線"]
- 正答選択肢: B
- 正答: 陽子線
- 解説: QSTとJAEAは、陽子線や重粒子線などの粒子線が一定深さでブラッグピークを形成すると説明している。X線・γ線は粒子線と異なる深部線量分布を示し、同様の終端ピークを形成しない。
- 出典: https://www.qst.go.jp/soshiki/104/24276.html; https://atomica.jaea.go.jp/data/detail/dat_detail_08-02-02-01.html
- verified: true

### RNUC-06-Q015
- 問題文: ブラッグピークが現れる位置について最も適切なものはどれか。
- 選択肢: ["粒子線が媒質へ入射する直前", "粒子線が入射した瞬間の表面だけ", "粒子線が止まる直前の飛程終端付近", "粒子線が物質を通過し終えた後の真空中"]
- 正答選択肢: C
- 正答: 粒子線が止まる直前の飛程終端付近
- 解説: ブラッグピークは、粒子線が媒質中で減速し、止まる直前にエネルギー付与が大きくなることで飛程終端付近に形成される。
- 出典: https://www.qst.go.jp/soshiki/104/24276.html; https://atomica.jaea.go.jp/data/detail/dat_detail_08-02-02-01.html
- verified: true

### RNUC-06-Q016
- 問題文: QSTが説明する炭素イオンを用いた重粒子線治療の深さ方向の特徴として正しいものはどれか。
- 選択肢: ["体表面でのみ線量が最大となり、深部では必ずゼロになる", "X線と全く同じ深さ線量分布を示す", "体内の全深さで線量が一定になる", "体内の一定深さに高線量域であるブラッグピークを形成する"]
- 正答選択肢: D
- 正答: 体内の一定深さに高線量域であるブラッグピークを形成する
- 解説: QST病院は、炭素イオンを用いる重粒子線が体内で高線量域（ブラッグピーク）を形成し、X線より病巣へ線量を集中しやすいことを特徴として挙げている。
- 出典: https://www.qst.go.jp/site/hospital/rt-carbonion.html
- verified: true

### RNUC-06-Q017
- 問題文: 粒子線がブラッグピークを形成する過程の説明として、JAEA資料に合うものはどれか。
- 選択肢: ["粒子が減速するにつれてエネルギー損失が大きくなり、一定深さで大きなエネルギー付与を生じる", "粒子は減速するほど媒質と相互作用しなくなる", "粒子は飛程終端でエネルギーを全く失わない", "粒子のエネルギー付与は深さに関係なく必ず一定である"]
- 正答選択肢: A
- 正答: 粒子が減速するにつれてエネルギー損失が大きくなり、一定深さで大きなエネルギー付与を生じる
- 解説: JAEA ATOMICAは、粒子線が進行速度を下げるにつれて急激にエネルギーを失い、一定深さで全エネルギーが吸収されてブラッグピークを形成すると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-02-02-01.html
- verified: true

### RNUC-06-Q018
- 問題文: LETが大きい放射線の飛跡の特徴として最も適切なものはどれか。
- 選択肢: ["単位長さ当たりの電離が少ない", "単位長さ当たりの電離が密である", "物質と相互作用せず電離を起こさない", "放射線の飛跡という概念と無関係である"]
- 正答選択肢: B
- 正答: 単位長さ当たりの電離が密である
- 解説: 高LETは飛跡に沿う単位長さ当たりのエネルギー付与が大きく、電離密度が高いことを意味する。低LETは逆に電離密度が低い。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html; https://www.env.go.jp/chemi/rhm/current/01-03-07.html
- verified: true

### RNUC-06-Q019
- 問題文: JAEA ATOMICAの高LET放射線の説明における、荷電粒子のLETの傾向として正しいものはどれか。
- 選択肢: ["粒子の電荷が大きいほどLETは必ず小さくなる", "粒子のエネルギーが低くなるほどLETは必ずゼロに近づく", "LETは粒子の電荷の二乗に比例し、エネルギーに反比例する傾向として説明される", "LETは粒子の電荷やエネルギーと無関係で一定である"]
- 正答選択肢: C
- 正答: LETは粒子の電荷の二乗に比例し、エネルギーに反比例する傾向として説明される
- 解説: JAEA ATOMICAの高LET放射線の用語解説では、LETは放射線の電荷の二乗に比例し、エネルギーに反比例すると説明されている。これは、重荷電粒子や減速した粒子で大きなLETとなりやすいことの理解に用いられる。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2790.html
- verified: true

### RNUC-06-Q020
- 問題文: 高LET放射線の生物作用について、QST SIRABEの説明に最も合うものはどれか。
- 選択肢: ["主として可視光として作用する", "DNAへの直接作用はほとんどなく、酸素濃度への依存が必ず大きい", "細胞周期や酸素濃度に低LET放射線より強く左右される", "DNAへ直接影響を与えることが多く、細胞内酸素濃度の影響を受けにくい"]
- 正答選択肢: D
- 正答: DNAへ直接影響を与えることが多く、細胞内酸素濃度の影響を受けにくい
- 解説: QST SIRABEは、高LET放射線はDNAへ直接影響を与えることが多く、細胞周期や細胞内酸素濃度の影響を受けにくいと説明している。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html; https://atomica.jaea.go.jp/data/detail/dat_detail_09-02-02-15.html
- verified: true

### RNUC-06-Q021
- 問題文: 低LET放射線の生物作用について、QST SIRABEの説明に最も合うものはどれか。
- 選択肢: ["フリーラジカルを介した間接作用の寄与が高LET放射線より大きい", "飛跡に沿う電離密度が高LET放射線より常に高い", "α線だけが低LET放射線に分類される", "細胞内酸素濃度によって効果が変化しない"]
- 正答選択肢: A
- 正答: フリーラジカルを介した間接作用の寄与が高LET放射線より大きい
- 解説: QST SIRABEは、低LET放射線ではDNAへ直接影響を与えるより、細胞内にフリーラジカルを生じさせて間接的に影響することが多いと説明している。また酸素濃度などによって影響が変化し得る。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E4%BD%8ELET%E6%94%BE%E5%B0%84%E7%B7%9A; https://atomica.jaea.go.jp/data/detail/dat_detail_09-02-02-15.html
- verified: true

### RNUC-06-Q022
- 問題文: 同じ吸収線量を与える場合でも、α線とX線・γ線で生物効果が異なり得る主な線質上の理由として最も適切なものはどれか。
- 選択肢: ["α線は電離を起こさないから", "飛跡に沿う電離のミクロな空間分布、すなわちLETが異なるから", "X線・γ線だけがエネルギーを持つから", "吸収線量の単位が放射線ごとに異なるから"]
- 正答選択肢: B
- 正答: 飛跡に沿う電離のミクロな空間分布、すなわちLETが異なるから
- 解説: JAEA ATOMICAは、同じ吸収線量でもα線とX線・γ線では電離のミクロな空間分布が異なり、LETの違いが線質と生物効果の差に関係すると説明している。吸収線量の単位Gyは放射線種によって変わらない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-02-02-11.html
- verified: true

### RNUC-06-Q023
- 問題文: 低LET放射線と高LET放射線の組合せとして正しいものはどれか。
- 選択肢: ["低LET：α線、高LET：X線", "低LET：中性子線、高LET：γ線", "低LET：γ線、高LET：核分裂破片", "低LET：炭素線、高LET：β線"]
- 正答選択肢: C
- 正答: 低LET：γ線、高LET：核分裂破片
- 解説: JAEA ATOMICAではX線・γ線を低LET、α線、中性子線、重荷電粒子、核分裂破片を高LETとしている。したがって、γ線と核分裂破片の組合せだけが分類に合う。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2781.html; https://atomica.jaea.go.jp/dic/detail/dic_detail_2790.html
- verified: true

### RNUC-06-Q024
- 問題文: LETと透過・飛程の関係を理解する例として最も適切な記述はどれか。
- 選択肢: ["高LETなら必ず物質中を最も深くまで透過する", "低LETなら必ず飛程は100 μm未満である", "LETが同じなら飛程も必ず同じである", "α線は高LETである一方、生体組織中の飛程は短い"]
- 正答選択肢: D
- 正答: α線は高LETである一方、生体組織中の飛程は短い
- 解説: α線は高LET放射線で電離密度が高い一方、QSTは生体組織中の飛程の目安を100 μm未満としている。したがって、高LETであることと深く透過することは同義ではない。
- 出典: https://sirabe.nirs.qst.go.jp/sirabe/%E9%AB%98LET%E6%94%BE%E5%B0%84%E7%B7%9A.html; https://www.qst.go.jp/soshiki/104/24276.html
- verified: true
