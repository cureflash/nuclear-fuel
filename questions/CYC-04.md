# CYC-04 濃縮計算

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: IAEA TECDOC-771 Rev.1（2025）Appendix II「Separative Work Unit」とJAEA/ATOMICA「分離作業量（SWU）」「SWU」を主authorityとし、feed/product/tails の物質収支、235U収支、価値関数、SWU、tails assay と原料量・分離作業量のトレードオフを確認した。カスケードの外部流・内部流の位置付けは日本原燃「遠心分離機・カスケードとは」で照合した。NRA「過去の資格試験問題」で直近3回（第58回・第57回・第56回）の公開問題を確認し、過去問本文は転載していない。

## 出題根拠

対象は `04_核燃料サイクル.md` の CYC-04（feed/product/tails、235U収支、SWU、濃縮度・劣化度、カスケード）。外部流の全ウラン収支 `F=P+T` と235U収支 `F k_f=P k_p+T k_t`、これらから導く量比、IAEAの価値関数 `V(x)=(1-2x) ln((1-x)/x)`、分離作業量 `W=P V(k_p)+T V(k_t)-F V(k_f)`、tails assay を下げると原料必要量は減る一方でSWUは増えるというトレードオフを分散して作問した。数値問題はIAEA TECDOC-771 Rev.1 Appendix IIの天然ウラン235U濃度0.711%、製品3.75%、Table 24・25のfeed/tails/SWU値に固定し、式と単位を再計算して一意性を確認した。

## 主要資料

- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000480853.pdf
- 第57回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000475646.pdf
- 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf
- IAEA TECDOC-771 Rev.1「Manual on the Safe Production, Transport, Handling and Storage of Uranium Hexafluoride」Appendix II: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- JAEA/ATOMICA「分離作業量（SWU）」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html
- JAEA/ATOMICA「SWU」: https://atomica.jaea.go.jp/dic/detail/dic_detail_125.html
- 日本原燃「遠心分離機・カスケードとは」: https://www.jnfl.co.jp/ja/business/about/uran/summary/centrifuge-cascade.html
- 日本原燃「ウラン濃縮工場での工程」: https://www.jnfl.co.jp/ja/business/about/uran/summary/process.html
- U.S. NRC「Uranium Enrichment」: https://www.nrc.gov/materials/fuel-cycle-fac/ur-enrichment

## 問題

### CYC-04-Q001
- 問題文: IAEAの分離作業量の記法で、F、P、Tの対応として正しいものはどれか。
- 選択肢: ["F=原料(feed)、P=製品(product)、T=廃品・劣化側(tails)", "F=製品、P=廃品、T=原料", "F=廃品、P=原料、T=製品", "F=235U質量、P=238U質量、T=UF6質量"]
- 正答選択肢: A
- 正答: F=原料(feed)、P=製品(product)、T=廃品・劣化側(tails)
- 解説: IAEA Appendix IIは、feed massをF、product massをP、tails massをTと定義している。他の対応は同資料の記号定義と一致しない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q002
- 問題文: 濃縮工程全体でウランの損失を無視するとき、原料量F、製品量P、tails量Tの全ウラン物質収支として正しい式はどれか。
- 選択肢: ["F=P-T", "F=P+T", "P=F+T", "T=F+P"]
- 正答選択肢: B
- 正答: F=P+T
- 解説: 原料は製品とtailsに分割されるため、全ウラン量について `F=P+T` となる。残る3式は質量保存を満たさない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q003
- 問題文: 原料、製品、tailsの235U質量分率をそれぞれ k_f、k_p、k_t とすると、235Uの物質収支として正しい式はどれか。
- 選択肢: ["F k_p=P k_f+T k_t", "F k_t=P k_p+T k_f", "F k_f=P k_p+T k_t", "F(k_p-k_t)=P k_f"]
- 正答選択肢: C
- 正答: F k_f=P k_p+T k_t
- 解説: 各流の235U量は「ウラン量×235U質量分率」であるため、原料中235U量は製品中とtails中の235U量の和に等しい。他の式は流れと濃度の対応が崩れている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q004
- 問題文: `F=P+T` と `F k_f=P k_p+T k_t` から得られる製品収率 P/F の式として正しいものはどれか。
- 選択肢: ["(k_p-k_t)/(k_f-k_t)", "(k_p-k_f)/(k_f-k_t)", "(k_f-k_p)/(k_p-k_t)", "(k_f-k_t)/(k_p-k_t)"]
- 正答選択肢: D
- 正答: (k_f-k_t)/(k_p-k_t)
- 解説: `T=F-P` を235U収支へ代入すると `F(k_f-k_t)=P(k_p-k_t)` となり、`P/F=(k_f-k_t)/(k_p-k_t)` を得る。残る式はこの2本の保存式から導けない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q005
- 問題文: IAEA Table 25の例で、3.75%濃縮ウランを1.0 kgU製造するためfeedが7.0 kgUの場合、tails量はいくらか。損失は無視する。
- 選択肢: ["6.0 kgU", "7.0 kgU", "8.0 kgU", "0.2045 kgU"]
- 正答選択肢: A
- 正答: 6.0 kgU
- 解説: 全ウラン収支は `F=P+T`。したがって `T=7.0-1.0=6.0 kgU`。7.0 kgUはfeed、1.0 kgUはproductであり、0.2045はIAEA表のtails assay（%）で質量ではない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q006
- 問題文: IAEA Table 25のfeed 7.0 kgU、235U濃度0.711%に含まれる235U質量として最も近いものはどれか。
- 選択肢: ["7.11 g", "49.77 g", "71.10 g", "497.7 g"]
- 正答選択肢: B
- 正答: 49.77 g
- 解説: `7.0 kgU × 0.00711 = 0.04977 kg = 49.77 g`。百分率は0.711ではなく0.00711として掛ける必要がある。他の選択肢は百分率換算または桁が一致しない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q007
- 問題文: IAEA Table 25の同じ例（feed 7.0 kgU、product 1.0 kgU、tails 6.0 kgU、product 3.75%、tails 0.2045%）で、tailsに含まれる235U質量はいくらか。
- 選択肢: ["2.045 g", "6.000 g", "12.27 g", "20.45 g"]
- 正答選択肢: C
- 正答: 12.27 g
- 解説: `6.0 kgU × 0.002045 = 0.01227 kg = 12.27 g`。product中は `1.0×0.0375=37.5 g` で、両者の和49.77 gはQ006のfeed中235U量と一致し、235U収支も検算できる。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q008
- 問題文: Q005〜Q007のIAEA例で、feed中235Uのうちproductへ入る割合（235U回収率）は約何%か。
- 選択肢: ["14.3%", "24.7%", "49.8%", "75.3%"]
- 正答選択肢: D
- 正答: 75.3%
- 解説: product中235Uは37.5 g、feed中は49.77 gなので、`37.5/49.77×100=75.35%`、約75.3%。14.3%はproduct質量/ feed質量の比であり、235U回収率とは別である。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q009
- 問題文: Q005のIAEA例で、product量Pのfeed量Fに対する質量割合 P/F は約いくらか。
- 選択肢: ["14.3%", "20.45%", "75.3%", "85.7%"]
- 正答選択肢: A
- 正答: 14.3%
- 解説: `P/F=1.0/7.0=0.142857...` なので約14.3%。20.45はtails assay 0.2045%の桁違い、75.3%は235U回収率、85.7%はtails/feedに相当する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q010
- 問題文: IAEAおよびJAEAが示す分離作業量Wの式として正しいものはどれか。
- 選択肢: ["W=F V(k_f)+P V(k_p)+T V(k_t)", "W=P V(k_p)+T V(k_t)-F V(k_f)", "W=P k_p+T k_t-F k_f", "W=(P+T-F)V(k_p)"]
- 正答選択肢: B
- 正答: W=P V(k_p)+T V(k_t)-F V(k_f)
- 解説: 分離作業量は製品とtailsの「価値」の総和からfeedの「価値」を差し引いて定義される。第3選択肢は235U収支でゼロになる量であり、SWUではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_125.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q011
- 問題文: IAEAのAppendix IIが定義する価値関数V(x)として正しいものはどれか。
- 選択肢: ["V(x)=x(1-x)", "V(x)=ln(x)/(1-x)", "V(x)=(1-2x) ln((1-x)/x)", "V(x)=x ln((1-x)/x)"]
- 正答選択肢: C
- 正答: V(x)=(1-2x) ln((1-x)/x)
- 解説: IAEAは `V(X)=(1-2X)×ln[(1-X)/X]` と定義する。JAEA辞書の `V(X)=(2X-1)ln[X/(1-X)]` は符号を2箇所反転した同値式である。他の3式は価値関数ではない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf ; https://atomica.jaea.go.jp/dic/detail/dic_detail_125.html
- verified: true

### CYC-04-Q012
- 問題文: 価値関数V(x)と分離作業量SWUの単位について正しい説明はどれか。
- 選択肢: ["V(x)もSWUも無次元である", "V(x)はkg、SWUは無次元である", "V(x)は%で、SWUはJである", "V(x)は無次元で、SWUは質量の次元をもちkgSWUやtSWUで表す"]
- 正答選択肢: D
- 正答: V(x)は無次元で、SWUは質量の次元をもちkgSWUやtSWUで表す
- 解説: JAEAは価値を濃度のみの関数で無次元とし、分離作業量は物質量の単位を持つためkgSWUまたはtSWUと表記すると説明する。IAEAもSWUはmassの次元を持つとしている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q013
- 問題文: IAEA Table 25の条件（P=1.0 kgU、F=7.0 kgU、T=6.0 kgU、k_p=3.75%、k_f=0.711%、k_t=0.2045%）について、価値関数を用いて計算した分離作業量として最も近いものはどれか。
- 選択肢: ["5.91 SWU", "3.75 SWU", "7.00 SWU", "12.27 SWU"]
- 正答選択肢: A
- 正答: 5.91 SWU
- 解説: IAEA式で `V(0.0375)=3.0018`、`V(0.00711)=4.8689`、`V(0.002045)=6.1650`。よって `W=1×3.0018+6×6.1650-7×4.8689=5.9096 SWU`、約5.91 SWUであり、IAEA Table 25の値とも一致する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q014
- 問題文: IAEA Table 25で、3.75%製品1 kgUを得るためfeedを7.5 kgUとした場合の組合せとして正しいものはどれか。
- 選択肢: ["tails assay 0.2045%、5.91 SWU", "tails assay 0.2434%、5.396 SWU", "tails assay 0.2769%、5.029 SWU", "tails assay 0.3058%、4.753 SWU"]
- 正答選択肢: B
- 正答: tails assay 0.2434%、5.396 SWU
- 解説: IAEA Table 25はfeed 7.5 kgUに対してtails assay 0.2434%、分離作業量5.396 SWUを示す。他の3組は同じ表のfeed 7.0、8.0、8.5 kgUに対応するため、この条件では誤りである。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q015
- 問題文: IAEA Table 25で、3.75%製品1 kgUを得るためfeedを8.0 kgUとした場合の組合せとして正しいものはどれか。
- 選択肢: ["tails assay 0.2045%、5.91 SWU", "tails assay 0.2434%、5.396 SWU", "tails assay 0.2769%、5.029 SWU", "tails assay 0.3058%、4.753 SWU"]
- 正答選択肢: C
- 正答: tails assay 0.2769%、5.029 SWU
- 解説: IAEA Table 25でfeed 8.0 kgUに対応する値はtails assay 0.2769%、5.029 SWUである。他の3組は7.0、7.5、8.5 kgUに対応する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q016
- 問題文: IAEA Table 25で、3.75%製品1 kgUを得るためfeedを8.5 kgUとした場合の組合せとして正しいものはどれか。
- 選択肢: ["tails assay 0.2045%、5.91 SWU", "tails assay 0.2434%、5.396 SWU", "tails assay 0.2769%、5.029 SWU", "tails assay 0.3058%、4.753 SWU"]
- 正答選択肢: D
- 正答: tails assay 0.3058%、4.753 SWU
- 解説: IAEA Table 25でfeed 8.5 kgUに対応する値はtails assay 0.3058%、4.753 SWUである。他の3組は7.0、7.5、8.0 kgUに対応する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q017
- 問題文: IAEA Table 25でproduct量とproduct assayを一定に保ち、feedを7.0 kgUから8.5 kgUへ増やしたときの変化として正しいものはどれか。
- 選択肢: ["tails assayは0.2045%から0.3058%へ上がり、必要SWUは5.91から4.753へ下がる", "tails assayも必要SWUも下がる", "tails assayは下がり、必要SWUは上がる", "tails assayも必要SWUも上がる"]
- 正答選択肢: A
- 正答: tails assayは0.2045%から0.3058%へ上がり、必要SWUは5.91から4.753へ下がる
- 解説: IAEA Table 25の4点は、feedを増やすほどtails assayが高くなり、必要な分離作業量が小さくなることを示す。残る3選択肢は表の単調な変化と逆または両方誤りである。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q018
- 問題文: 同じ量・濃度の濃縮ウランを作るとき、feed UF6よりSWUの方が相対的に安い場合にIAEAが示す合理的な選択はどれか。
- 選択肢: ["tails assayを上げ、feedを減らし、SWUも減らす", "tails assayを下げ、feedを減らし、SWUを増やす", "tails assayを下げ、feedを増やし、SWUを減らす", "tails assayを変えてもfeed量とSWUは変化しない"]
- 正答選択肢: B
- 正答: tails assayを下げ、feedを減らし、SWUを増やす
- 解説: IAEAは、SWUがfeed UF6に比べ安い場合、tails assayを下げてより多く分離作業を行い、同じ製品をより少ないfeedで得られると説明する。他の選択肢はそのトレードオフと一致しない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q019
- 問題文: 同じ量・濃度の濃縮ウランを作るとき、SWUよりfeed UF6の方が相対的に安い場合にIAEAが示す合理的な選択はどれか。
- 選択肢: ["tails assayを下げ、feedを減らし、SWUを増やす", "tails assayを下げ、feedもSWUも減らす", "tails assayを上げ、feedを増やし、SWUを減らす", "tails assayを上げるとfeedとSWUの両方が必ず増える"]
- 正答選択肢: C
- 正答: tails assayを上げ、feedを増やし、SWUを減らす
- 解説: IAEAは、feed UF6がSWUに比べ安い場合、より多くfeedを使い、tails assayを上げることで必要SWUを減らす選択が可能と説明する。残る選択肢はこの関係と一致しない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q020
- 問題文: IAEA Table 24の例で、3.75%濃縮ウラン25 tUを製造し、tails assayを0.3%とする場合の組合せとして正しいものはどれか。
- 選択肢: ["天然ウラン174 tU、150 kSWU", "天然ウラン210 tU、150 kSWU", "天然ウラン174 tU、120 kSWU", "天然ウラン210 tU、120 kSWU"]
- 正答選択肢: D
- 正答: 天然ウラン210 tU、120 kSWU
- 解説: IAEA Table 24のExample Aは、235U 0.711%の天然ウラン210 tUと120 kSWUを用い、tails assay 0.3%で3.75%製品25 tUを得る例である。174 tU・150 kSWUはtails assay 0.2%のExample Bに対応する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q021
- 問題文: IAEA Table 24の例で、3.75%濃縮ウラン25 tUを製造し、tails assayを0.2%とする場合の組合せとして正しいものはどれか。
- 選択肢: ["天然ウラン174 tU、150 kSWU", "天然ウラン210 tU、120 kSWU", "天然ウラン210 tU、150 kSWU", "天然ウラン174 tU、120 kSWU"]
- 正答選択肢: A
- 正答: 天然ウラン174 tU、150 kSWU
- 解説: IAEA Table 24のExample Bは、天然ウラン174 tUと150 kSWU、tails assay 0.2%の組合せである。tails assayを0.3%から0.2%へ下げるとfeed必要量は210 tUから174 tUへ減る一方、SWUは120 kSWUから150 kSWUへ増える。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q022
- 問題文: 価値関数V(x)へ3.75%という濃縮度を代入するとき、xとして用いる値はどれか。
- 選択肢: ["0.00375", "0.0375", "3.75", "37.5"]
- 正答選択肢: B
- 正答: 0.0375
- 解説: IAEAの価値関数のxは235Uの割合であり、3.75%は小数で `3.75/100=0.0375` として代入する。0.00375は0.375%、3.75は375%、37.5は3750%に相当し、濃度の小数表現ではない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf ; https://atomica.jaea.go.jp/dic/detail/dic_detail_125.html
- verified: true

### CYC-04-Q023
- 問題文: 多段カスケード内部では濃縮側・劣化側の流れが段間を行き来する。カスケード全体を外部のfeed、product、tailsだけで囲んで物質収支を取るときの説明として正しいものはどれか。
- 選択肢: ["内部流があるためF=P+Tは成立しない", "各段の遠心分離機台数を知らなければ全体収支は書けない", "内部流は全体境界内で相殺され、外部流にはF=P+Tと235U収支を適用できる", "productとtailsの濃度は必ず同じになる"]
- 正答選択肢: C
- 正答: 内部流は全体境界内で相殺され、外部流にはF=P+Tと235U収支を適用できる
- 解説: 日本原燃は濃縮側流を上位段へ、劣化側流を下位段へ送るカスケード内部流を示す。一方、IAEA/JAEAの分離作業量・物質収支はカスケード全体の外部feed、product、tailsで定義できる。内部流は境界内の移送なので全体収支には残らない。
- 出典: https://www.jnfl.co.jp/ja/business/about/uran/summary/centrifuge-cascade.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CYC-04-Q024
- 問題文: `F=P+T` と235U収支から得られる tails/product 比 T/P の式として正しいものはどれか。
- 選択肢: ["(k_f-k_t)/(k_p-k_t)", "(k_p-k_t)/(k_f-k_t)", "(k_f-k_p)/(k_f-k_t)", "(k_p-k_f)/(k_f-k_t)"]
- 正答選択肢: D
- 正答: (k_p-k_f)/(k_f-k_t)
- 解説: `F/P=(k_p-k_t)/(k_f-k_t)` かつ `T/P=F/P-1` なので、`T/P=[(k_p-k_t)-(k_f-k_t)]/(k_f-k_t)=(k_p-k_f)/(k_f-k_t)`。他の式は全ウラン収支と235U収支を同時に満たさない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true
