# WST-03 除染係数

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA/ATOMICAおよびJAEA公開資料で除染係数（DF）の定義、処理前後濃度比、値の大小と除去性能、連続系における入口・出口比の考え方を確認した。IAEA Safety GlossaryとIAEA-TECDOC-1602で、面積・質量・体積当たり放射能に対するDF、核種別または総放射能への適用、バックグラウンド差引き、DFと残存率・除去率の関係を確認した。多段処理の総合DFは各段の定義式を連鎖させて導出した。NRA「過去の資格試験問題」で第58回・第57回・第56回を参照し、加えて第55回で「放射性廃液処理における除染係数」が説明論点として出題されたことを確認した。過去問本文は転載していない。

## 出題根拠

対象は `10_放射性廃棄物.md` の WST-03（DF、処理前後濃度、除去性能、連続処理）。定義、大小関係、残存率・除去率への換算、処理前後濃度の逆算、多段処理、定常連続処理、バックグラウンド差引き、測定基準、DFと減容係数の区別までを分散して作問した。CAL-12との重複を抑えるため、単なる同型計算の反復ではなく、定義・解釈・連続系・測定上の注意を含めた。

## 主要参照資料

- JAEA/ATOMICA「DF値」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html
- JAEA「用語説明（除染係数）」: https://www.jaea.go.jp/02/press2011/p11103101/03.html
- JAEA 原子力機構の研究開発成果2019-20「プールスクラビングにおけるエアロゾル粒子数濃度に対する除染係数の依存性」: https://rdreview.jaea.go.jp/review_jp/2019/j2019_2_1.html
- JAEA/ATOMICA「中・低レベル廃液の処理」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-02-08.html
- IAEA Safety Glossary, 2016 Revision: https://www-ns.iaea.org/downloads/standards/glossary/iaea-safety-glossary-rev2016.pdf
- IAEA-TECDOC-1602, Innovative and Adaptive Technologies in Decommissioning of Nuclear Facilities: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- IAEA-TECDOC-447, Radioactive Waste Management Glossary: https://www-pub.iaea.org/MTCD/Publications/PDF/te_447_web.pdf
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000480853.pdf
- 第57回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000475646.pdf
- 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf
- 第55回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000424262.pdf

## 問題

### WST-03-Q001
- 問題文: 除染係数（DF）の一般的な定義として正しいものはどれか。
- 選択肢: ["除染前の放射能レベルまたは濃度を、除染後の放射能レベルまたは濃度で割った値", "除染後の放射能レベルまたは濃度を、除染前の放射能レベルまたは濃度で割った値", "除染前後の放射能レベルまたは濃度を足した値", "除染前後の放射能レベルまたは濃度の差だけを示す値"]
- 正答選択肢: A
- 正答: 除染前の放射能レベルまたは濃度を、除染後の放射能レベルまたは濃度で割った値
- 解説: JAEA/ATOMICAはDFを除染前後の放射能レベルまたは濃度の比とし、JAEAの用語説明も「処理前の放射能濃度÷処理後の放射能濃度」としている。IAEA-TECDOC-1602も DF=Ai/Af と定義する。Bは逆数、CとDは比ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www.jaea.go.jp/02/press2011/p11103101/03.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q002
- 問題文: 同一条件で比較したとき、除染係数（DF）の大小と除去性能の関係として正しいものはどれか。
- 選択肢: ["DFが小さいほど処理後濃度が低く、除去性能が高い", "DFが大きいほど処理後濃度が相対的に低く、除去性能が高い", "DFは常に1未満であり、大小は除去性能と無関係である", "DFは処理前濃度だけで決まり、処理後濃度には依存しない"]
- 正答選択肢: B
- 正答: DFが大きいほど処理後濃度が相対的に低く、除去性能が高い
- 解説: DF=処理前/処理後なので、同じ処理前濃度なら処理後濃度が小さいほどDFは大きくなる。JAEAも値が大きいほど汚染物質が取り除かれる量が多いと説明している。A・C・Dは定義式と矛盾する。
- 出典: https://www.jaea.go.jp/02/press2011/p11103101/03.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q003
- 問題文: 除染前後で同じ測定基準の放射能レベルが変化せず、DF=1となった場合の解釈として正しいものはどれか。
- 選択肢: ["放射能レベルが1/10になった", "放射能レベルが1/100になった", "定義上、放射能レベルの低減はない", "放射能レベルが必ず2倍になった"]
- 正答選択肢: C
- 正答: 定義上、放射能レベルの低減はない
- 解説: DF=Ai/Af=1ならAi=Afである。IAEA-TECDOC-1602の対応表でもDF=1は残存率100%、除去率0%に対応する。AはDF=10、BはDF=100、DはDF=0.5に相当する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q004
- 問題文: 除染係数をDFとしたとき、除去率Rを0から1の割合で表す式として正しいものはどれか。
- 選択肢: ["R=1/DF", "R=DF-1", "R=DF/(DF-1)", "R=1-1/DF"]
- 正答選択肢: D
- 正答: R=1-1/DF
- 解説: DF=Ai/Afより、残存率はAf/Ai=1/DF。したがって除去率は R=(Ai-Af)/Ai=1-Af/Ai=1-1/DF となる。IAEA-TECDOC-1602も除去割合を(Ai-Af)/Aiで示している。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q005
- 問題文: DF=10の処理で、処理後に残る放射能濃度の割合は処理前の何%か。
- 選択肢: ["10 %", "1 %", "90 %", "99 %"]
- 正答選択肢: A
- 正答: 10 %
- 解説: 残存率=1/DF=1/10=0.10=10%。検算として除去率は1-0.10=0.90=90%で、IAEA-TECDOC-1602のDF=10に対する残存率10%、除去率90%と一致する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q006
- 問題文: DF=20の処理の除去率は何%か。
- 選択肢: ["20 %", "95 %", "80 %", "5 %"]
- 正答選択肢: B
- 正答: 95 %
- 解説: 残存率=1/20=0.05=5%。除去率=1-0.05=0.95=95%。検算としてDF=処理前/処理後=1/0.05=20。IAEA-TECDOC-1602の対応表とも一致する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q007
- 問題文: DF=50の処理で、処理後に残る放射能濃度の割合は処理前の何%か。
- 選択肢: ["50 %", "5 %", "2 %", "98 %"]
- 正答選択肢: C
- 正答: 2 %
- 解説: 残存率=1/DF=1/50=0.02=2%。検算として除去率は98%であり、1/(1-0.98)=50。IAEA-TECDOC-1602の表でもDF=50は残存率2%である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q008
- 問題文: DF=100の処理の除去率は何%か。
- 選択肢: ["1 %", "10 %", "100 %", "99 %"]
- 正答選択肢: D
- 正答: 99 %
- 解説: 残存率=1/100=0.01=1%。除去率=1-0.01=0.99=99%。検算として処理後濃度が処理前の1%ならDFは100である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q009
- 問題文: 放射性廃液の処理前濃度が5.0×10^4 Bq/L、処理後濃度が5.0×10^2 Bq/Lであった。DFはいくつか。
- 選択肢: ["100（無次元）", "10（無次元）", "1,000（無次元）", "25,000（無次元）"]
- 正答選択肢: A
- 正答: 100（無次元）
- 解説: DF=C前/C後=(5.0×10^4 Bq/L)/(5.0×10^2 Bq/L)=10^2=100。Bq/Lが約分されるためDFは無次元。検算: 5.0×10^4/100=5.0×10^2 Bq/L。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www.jaea.go.jp/02/press2011/p11103101/03.html
- verified: true

### WST-03-Q010
- 問題文: 放射性廃液の処理前濃度が2.4×10^3 Bq/L、処理後濃度が80 Bq/Lであった。DFはいくつか。
- 選択肢: ["3（無次元）", "30（無次元）", "300（無次元）", "1,920（無次元）"]
- 正答選択肢: B
- 正答: 30（無次元）
- 解説: DF=C前/C後=(2.4×10^3 Bq/L)/(80 Bq/L)=2400/80=30。単位は相殺される。検算: 80 Bq/L×30=2400 Bq/L。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www.jaea.go.jp/02/press2011/p11103101/03.html
- verified: true

### WST-03-Q011
- 問題文: 処理前濃度が1.0×10^5 Bq/Lで、処理のDFが250である。処理後濃度はいくらか。
- 選択肢: ["2.5×10^7 Bq/L", "2.5×10^4 Bq/L", "4.0×10^2 Bq/L", "4.0×10^4 Bq/L"]
- 正答選択肢: C
- 正答: 4.0×10^2 Bq/L
- 解説: DF=C前/C後より、C後=C前/DF=(1.0×10^5 Bq/L)/250=4.0×10^2 Bq/L。検算: 4.0×10^2 Bq/L×250=1.0×10^5 Bq/L。
- 出典: https://www.jaea.go.jp/02/press2011/p11103101/03.html
- verified: true

### WST-03-Q012
- 問題文: 処理後濃度が30 Bq/Lで、処理のDFが50である。処理前濃度はいくらか。
- 選択肢: ["0.6 Bq/L", "80 Bq/L", "600 Bq/L", "1.5×10^3 Bq/L"]
- 正答選択肢: D
- 正答: 1.5×10^3 Bq/L
- 解説: DF=C前/C後より、C前=DF×C後=50×30 Bq/L=1500 Bq/L=1.5×10^3 Bq/L。検算: 1500/30=50。
- 出典: https://www.jaea.go.jp/02/press2011/p11103101/03.html
- verified: true

### WST-03-Q013
- 問題文: 放射性物質を90%除去できた処理のDFはいくつか。
- 選択肢: ["10（無次元）", "1.1（無次元）", "90（無次元）", "100（無次元）"]
- 正答選択肢: A
- 正答: 10（無次元）
- 解説: 除去率90%なら残存率は10%=0.10。DF=1/残存率=1/0.10=10。検算: 1-1/10=0.90=90%。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q014
- 問題文: 放射性物質を99.9%除去できた処理のDFはいくつか。
- 選択肢: ["100（無次元）", "1,000（無次元）", "99.9（無次元）", "10,000（無次元）"]
- 正答選択肢: B
- 正答: 1,000（無次元）
- 解説: 残存率=100%-99.9%=0.1%=0.001。DF=1/0.001=1000。検算: 1-1/1000=0.999=99.9%。IAEA-TECDOC-1602の対応表とも一致する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q015
- 問題文: 処理後に処理前の0.5%の放射性物質が残った。DFはいくつか。
- 選択肢: ["2（無次元）", "50（無次元）", "200（無次元）", "500（無次元）"]
- 正答選択肢: C
- 正答: 200（無次元）
- 解説: 残存率0.5%=0.005。DF=1/0.005=200。検算: 1/200=0.005=0.5%、したがって除去率は99.5%。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q016
- 問題文: 同じ核種について、第1段のDFが20、第2段のDFが5の処理を直列に行う。各段の出口が次段の入口になり、他の増減を無視できるとき、総合DFはいくつか。
- 選択肢: ["4（無次元）", "25（無次元）", "50（無次元）", "100（無次元）"]
- 正答選択肢: D
- 正答: 100（無次元）
- 解説: 第1段でC1=C0/20、第2段でC2=C1/5=C0/(20×5)。したがって総合DF=C0/C2=20×5=100。検算: 100/20=5で第2段DFと一致する。これはDF=処理前/処理後の定義を各段に適用した代数的帰結である。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q017
- 問題文: 2段直列処理の総合DFが200で、第1段のDFが20である。第2段のDFはいくつか。
- 選択肢: ["10（無次元）", "20（無次元）", "180（無次元）", "4,000（無次元）"]
- 正答選択肢: A
- 正答: 10（無次元）
- 解説: 総合DF=DF1×DF2なので、DF2=200/20=10。検算: 20×10=200。各段の出口が次段の入口で、同じ量を同じ基準で比較する条件で成立する。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q018
- 問題文: 入口濃度が1.0×10^6 Bq/Lの廃液を、DF=10の第1段とDF=25の第2段で直列処理する。各段の出口が次段の入口となるとき、最終出口濃度はいくらか。
- 選択肢: ["2.5×10^5 Bq/L", "4.0×10^3 Bq/L", "1.0×10^4 Bq/L", "4.0×10^4 Bq/L"]
- 正答選択肢: B
- 正答: 4.0×10^3 Bq/L
- 解説: 総合DF=10×25=250。最終濃度=(1.0×10^6 Bq/L)/250=4.0×10^3 Bq/L。段階計算でも、第1段後1.0×10^5 Bq/L、第2段後4.0×10^3 Bq/Lとなり一致する。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/TE_1602_web.pdf
- verified: true

### WST-03-Q019
- 問題文: 定常運転中の連続処理装置で、同じ測定基準による入口濃度が8.0×10^3 Bq/L、出口濃度が40 Bq/Lである。入口/出口比として評価したDFはいくつか。
- 選択肢: ["20（無次元）", "40（無次元）", "200（無次元）", "320（無次元）"]
- 正答選択肢: C
- 正答: 200（無次元）
- 解説: DF=C入口/C出口=(8.0×10^3 Bq/L)/(40 Bq/L)=8000/40=200。単位は相殺される。検算: 40 Bq/L×200=8000 Bq/L。JAEAのプールスクラビング研究でも入口と出口で計測したエアロゾル量の比からDFを評価している。
- 出典: https://rdreview.jaea.go.jp/review_jp/2019/j2019_2_1.html ; https://www.jaea.go.jp/02/press2011/p11103101/03.html
- verified: true

### WST-03-Q020
- 問題文: 定常連続処理で入口濃度が2.5×10^4 Bq/L、入口/出口比で定義したDFが125である。出口濃度はいくらか。
- 選択肢: ["20 Bq/L", "125 Bq/L", "3.125×10^6 Bq/L", "200 Bq/L"]
- 正答選択肢: D
- 正答: 200 Bq/L
- 解説: DF=C入口/C出口より、C出口=C入口/DF=(2.5×10^4 Bq/L)/125=200 Bq/L。検算: 200×125=25,000 Bq/L=2.5×10^4 Bq/L。
- 出典: https://rdreview.jaea.go.jp/review_jp/2019/j2019_2_1.html ; https://www.jaea.go.jp/02/press2011/p11103101/03.html
- verified: true

### WST-03-Q021
- 問題文: 同一条件で測定した除染前の計数率が120 s^-1、除染後が30 s^-1、バックグラウンドが両方とも20 s^-1であった。IAEA Safety Glossaryの注記に従いバックグラウンドを先に差し引いてDFを求めるといくらか。
- 選択肢: ["10（無次元）", "4（無次元）", "5（無次元）", "90（無次元）"]
- 正答選択肢: A
- 正答: 10（無次元）
- 解説: 正味計数率は除染前120-20=100 s^-1、除染後30-20=10 s^-1。DF=100/10=10。検算: 正味の残存率10/100=0.10なのでDF=1/0.10=10。IAEA Safety GlossaryはDF評価で前後のバックグラウンドを先に差し引く場合があると明記する。
- 出典: https://www-ns.iaea.org/downloads/standards/glossary/iaea-safety-glossary-rev2016.pdf
- verified: true

### WST-03-Q022
- 問題文: ある表面の同一核種について、除染前の表面放射能密度が2.0×10^4 Bq/m^2、除染後が1.0×10^3 Bq/m^2であった。DFはいくつか。
- 選択肢: ["2（無次元）", "20（無次元）", "200（無次元）", "2.0×10^7（無次元）"]
- 正答選択肢: B
- 正答: 20（無次元）
- 解説: DF=(2.0×10^4 Bq/m^2)/(1.0×10^3 Bq/m^2)=20。Bq/m^2が約分され無次元となる。検算: 1.0×10^3×20=2.0×10^4 Bq/m^2。IAEA Safety Glossaryは単位面積当たり放射能についてもDFを定義している。
- 出典: https://www-ns.iaea.org/downloads/standards/glossary/iaea-safety-glossary-rev2016.pdf
- verified: true

### WST-03-Q023
- 問題文: IAEA Safety Glossaryが示す除染係数（DF）の評価対象について正しいものはどれか。
- 選択肢: ["必ず全核種を合計した総放射能だけで評価し、核種別には評価できない", "必ず単一核種だけで評価し、総放射能には適用できない", "特定核種についても総放射能についても定義できる", "放射能ではなく廃棄物体積だけを用いて定義する"]
- 正答選択肢: C
- 正答: 特定核種についても総放射能についても定義できる
- 解説: IAEA Safety Glossaryは、DFを特定の放射性核種についても総放射能についても指定できるとしている。AとBは適用範囲を不当に限定し、DはDFではなく体積比の概念に近い。
- 出典: https://www-ns.iaea.org/downloads/standards/glossary/iaea-safety-glossary-rev2016.pdf
- verified: true

### WST-03-Q024
- 問題文: 除染係数（DF）と体積減容係数（VRF）の区別として正しいものはどれか。
- 選択肢: ["DFもVRFも処理前後の廃棄物体積の比だけを表す", "DFは廃棄物体積の比、VRFは放射能濃度の比を表す", "DFとVRFは常に数値が等しく、区別する必要はない", "DFは処理前後の放射能レベル・濃度等の比、VRFは処理前後の廃棄物体積の比を表す"]
- 正答選択肢: D
- 正答: DFは処理前後の放射能レベル・濃度等の比、VRFは処理前後の廃棄物体積の比を表す
- 解説: DFは放射能の低減効果を表す比である。一方、IAEA-TECDOC-447はVRFを処理前の廃棄物体積と処理後の廃棄物体積の比と定義する。したがって両者は異なる性能指標であり、一般に同値ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2772.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/te_447_web.pdf
- verified: true
