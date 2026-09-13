# CAL-04 濃縮・物質収支

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: IAEA TECDOC-771 Rev.1（2025）のSWU定義・価値関数・feed/product/tails例、INL/GAIN公開資料の全U収支・235U収支・導出式、JAEA ATOMICAの分離作業量と天然ウラン同位体組成を主要根拠とした。NRA公式「過去の資格試験問題」で第58回・第57回・第56回を確認し、第56回「核燃料物質の取扱いに関する技術」第1問のウラン濃縮論点を参照した。過去問本文は転載せず、新規4択へ再構成した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-04（feed/product/tails、235U収支、全U収支、濃縮度、SWU基礎）。損失を無視する基本物質収支 `F=P+T`、235U収支 `F x_F=P x_P+T x_T`、そこから得る `F=P(x_P-x_T)/(x_F-x_T)` と `T=P(x_P-x_F)/(x_F-x_T)`、未知濃度の逆算、SWU式 `P V(x_P)+T V(x_T)-F V(x_F)`、価値関数 `V(x)=(1-2x)ln((1-x)/x)`、tails assayとfeed量/SWUのトレードオフまでを網羅した。天然ウランの計算用235U質量分率はIAEAの0.711%に固定した。

## 主要参照資料

- IAEA, Manual on the Safe Production, Transport, Handling and Storage of Uranium Hexafluoride, IAEA-TECDOC-771 (Rev.1), 2025, Appendix II: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- INL/GAIN掲載, Characterizing an Emerging Market for High-Assay, Low-Enriched Uranium Production, Appendix B: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- JAEA ATOMICA「分離作業量（SWU）」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html
- JAEA ATOMICA「天然ウラン」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1096.html
- JAEA ATOMICA「ウラン濃縮」: https://atomica.jaea.go.jp/dic/detail/dic_detail_192.html
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf

## 問題

### CAL-04-Q001
- 問題文: ウラン濃縮工程でウラン損失を無視し、原料量を F、製品量を P、廃品（tails）量を T とする。全ウランの物質収支として正しい式はどれか。
- 選択肢: ["F = P + T", "F x_F = P + T", "F = P - T", "F x_F = P x_P + T"]
- 正答選択肢: A
- 正答: F = P + T
- 解説: INL/GAIN資料 Appendix B は、ウラン損失を無視する濃縮工程の全質量保存を `F=P+T` と示している。BとDは濃度を掛ける項が混在して全ウラン収支にならず、Cは廃品量を差し引いているため誤り。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q002
- 問題文: 原料・製品・廃品の235U質量分率をそれぞれ x_F、x_P、x_T とする。235Uの物質収支として正しい式はどれか。
- 選択肢: ["F = P + T", "F x_F = P x_P + T x_T", "F x_P = P x_F + T x_T", "x_F = x_P + x_T"]
- 正答選択肢: B
- 正答: F x_F = P x_P + T x_T
- 解説: 235U量は各流量と235U質量分率の積で表されるため、入力 `F x_F` と出力 `P x_P+T x_T` が等しい。Aは全U収支、Cは原料と製品の濃度添字を入れ替えており、Dは質量流量を含まないため誤り。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q003
- 問題文: 損失なしの濃縮工程で、P、x_F、x_P、x_T が既知のとき、必要原料量 F を表す式はどれか。
- 選択肢: ["F=P(x_F-x_T)/(x_P-x_T)", "F=P(x_P-x_F)/(x_F-x_T)", "F=P(x_P-x_T)/(x_F-x_T)", "F=P(x_P+x_T)/(x_F+x_T)"]
- 正答選択肢: C
- 正答: F=P(x_P-x_T)/(x_F-x_T)
- 解説: `F=P+T` と `F x_F=P x_P+T x_T` を連立してTを消去すると `F(x_F-x_T)=P(x_P-x_T)`、したがって `F=P(x_P-x_T)/(x_F-x_T)` となる。INL/GAIN Appendix B の式B-6と一致する。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q004
- 問題文: 損失なしの濃縮工程で、P、x_F、x_P、x_T が既知のとき、廃品量 T を表す式はどれか。
- 選択肢: ["T=P(x_F-x_T)/(x_P-x_T)", "T=P(x_P-x_T)/(x_F-x_T)", "T=P(x_F-x_P)/(x_F-x_T)", "T=P(x_P-x_F)/(x_F-x_T)"]
- 正答選択肢: D
- 正答: T=P(x_P-x_F)/(x_F-x_T)
- 解説: 全U収支と235U収支を連立すると `T=P(x_P-x_F)/(x_F-x_T)`。INL/GAIN Appendix B の式B-7と一致する。AはP/Fに相当する比を誤用し、BはFの式、Cは分子符号が逆である。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q005
- 問題文: 天然ウラン原料 x_F=0.711%、製品 x_P=4.00%、廃品 x_T=0.250% とし、製品 P=1000 kgU を得る。損失を無視した必要原料量 F として最も適切なものはどれか。
- 選択肢: ["8134.49 kgU", "7134.49 kgU", "9170.00 kgU", "1000.00 kgU"]
- 正答選択肢: A
- 正答: 8134.49 kgU
- 解説: 百分率を分率へ直し、`F=P(x_P-x_T)/(x_F-x_T)` に代入する。`F=1000×(0.0400-0.00250)/(0.00711-0.00250)=8134.49 kgU`。検算すると `T=8134.49-1000=7134.49 kgU` で、235U収支は原料57.837 kg、製品40.000 kg＋廃品17.836 kg≈57.836 kgとなり丸め誤差内で一致する。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf ; https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q006
- 問題文: Q005と同じ条件（F=8134.49 kgU、P=1000 kgU）で、廃品量 T はいくらか。
- 選択肢: ["8134.49 kgU", "7134.49 kgU", "9134.49 kgU", "6134.49 kgU"]
- 正答選択肢: B
- 正答: 7134.49 kgU
- 解説: 全U収支 `F=P+T` より `T=F-P=8134.49-1000=7134.49 kgU`。検算は `1000+7134.49=8134.49 kgU` で入力原料量と一致する。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q007
- 問題文: 原料 F=10000 kgU、x_F=0.711%、製品 x_P=4.50%、廃品 x_T=0.250% とする。損失を無視した製品量 P として最も適切なものはどれか。
- 選択肢: ["8915.29 kgU", "542.35 kgU", "1084.71 kgU", "4610.00 kgU"]
- 正答選択肢: C
- 正答: 1084.71 kgU
- 解説: `P=F(x_F-x_T)/(x_P-x_T)` より、`P=10000×(0.00711-0.00250)/(0.0450-0.00250)=1084.71 kgU`。検算: `T=8915.29 kgU`、235Uは入力71.10 kg、出力 `1084.71×0.045+8915.29×0.0025≈71.10 kg` で一致する。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q008
- 問題文: 原料 F=8000 kgU（x_F=0.711%）から、製品 P=1000 kgUと廃品 T=7000 kgU（x_T=0.250%）を得た。損失を無視すると製品の235U濃度 x_P はいくらか。
- 選択肢: ["0.3938%", "2.500%", "7.110%", "3.938%"]
- 正答選択肢: D
- 正答: 3.938%
- 解説: 235U収支から `x_P=(F x_F-T x_T)/P`。`x_P=(8000×0.00711-7000×0.00250)/1000=(56.88-17.50)/1000=0.03938=3.938%`。検算: 製品235U 39.38 kg＋廃品17.50 kg=56.88 kgで原料235U量と一致する。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q009
- 問題文: 原料 F=8.0 kgU（x_F=0.711%）から製品 P=1.0 kgU（x_P=3.75%）を得た。廃品は T=7.0 kgUである。損失を無視した廃品濃度 x_T として最も適切なものはどれか。
- 選択肢: ["0.2769%", "0.0711%", "0.7110%", "2.769%"]
- 正答選択肢: A
- 正答: 0.2769%
- 解説: `x_T=(F x_F-P x_P)/T`。`x_T=(8×0.00711-1×0.0375)/7=0.00276857=0.276857%≈0.2769%`。検算: 入力235Uは0.05688 kg、出力は0.0375 kg＋`7×0.00276857=0.01938 kg`で0.05688 kgとなる。IAEA 2025 Table 25のfeed 8.0 kgU行（tails 0.2769%）とも一致する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf ; https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q010
- 問題文: 製品 P=1.0 kgU（x_P=3.75%）、廃品 T=6.5 kgU（x_T=0.2434%）で、原料 F=7.5 kgUであった。損失を無視した原料235U濃度 x_F として最も適切なものはどれか。
- 選択肢: ["0.2434%", "0.7109%", "3.750%", "1.995%"]
- 正答選択肢: B
- 正答: 0.7109%
- 解説: `x_F=(P x_P+T x_T)/F`。`x_F=(1×0.0375+6.5×0.002434)/7.5=0.00710947=0.710947%≈0.7109%`。検算すると原料235U量 `7.5×0.00710947=0.053321 kg` と、出力 `0.0375+6.5×0.002434=0.053321 kg` が一致する。IAEA Table 25は天然ウランfeed 0.711%を前提にこの組合せを示す。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q011
- 問題文: 235U質量分率0.711%の天然ウラン8.0 kgUに含まれる235U質量はいくらか。
- 選択肢: ["0.005688 kg", "0.5688 kg", "0.05688 kg", "5.688 kg"]
- 正答選択肢: C
- 正答: 0.05688 kg
- 解説: `0.711%=0.00711` なので、235U質量は `8.0 kgU×0.00711=0.05688 kg`。検算: 56.88 g÷8000 g=0.00711=0.711%。IAEAは天然ウランfeedの235Uを0.711%としている。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1096.html
- verified: true

### CAL-04-Q012
- 問題文: 天然ウラン x_F=0.711% を x_P=3.00% にしたとき、単純な235U質量分率比 x_P/x_F はいくらか。
- 選択肢: ["0.237", "2.110", "3.289", "4.219"]
- 正答選択肢: D
- 正答: 4.219
- 解説: 比は `3.00/0.711=4.2194` なので約4.219。単位は同じ百分率同士の比なので無次元。検算: `0.711%×4.219≈3.00%`。これは物質収支やSWUそのものではなく、指定した2流の235U質量分率の比である。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1096.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_192.html
- verified: true

### CAL-04-Q013
- 問題文: 原料F、製品P、廃品Tと各235U濃度 x_F、x_P、x_T を用いるとき、分離作業量W(SWU)の定義として正しいものはどれか。
- 選択肢: ["W=P V(x_P)+T V(x_T)-F V(x_F)", "W=F V(x_F)+P V(x_P)+T V(x_T)", "W=P x_P+T x_T-F x_F", "W=(P+T-F)V(x_P)"]
- 正答選択肢: A
- 正答: W=P V(x_P)+T V(x_T)-F V(x_F)
- 解説: IAEA TECDOC-771 Rev.1 Appendix II は、分離作業量を `P V(x_P)+T V(x_T)-F V(x_F)` と定義する。Bは原料項の符号が違い、Cは235U物質収支なので損失なしなら0、Dも全質量収支により0となりSWUを表さない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q014
- 問題文: IAEA TECDOC-771 Rev.1で用いられる濃縮の価値関数 V(x) として正しい式はどれか。xは0～1の235U分率とする。
- 選択肢: ["V(x)=(1+2x)ln((1-x)/x)", "V(x)=(1-2x)ln((1-x)/x)", "V(x)=x ln(x)", "V(x)=(1-2x)/ln((1-x)/x)"]
- 正答選択肢: B
- 正答: V(x)=(1-2x)ln((1-x)/x)
- 解説: IAEA Appendix IIの定義は `V(x)=(1-2x)×ln[(1-x)/x]`。Aは係数符号、Cは別の関数、Dは対数を分母に置いているため誤り。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q015
- 問題文: 分離作業量SWUの次元・慣用単位について正しいものはどれか。
- 選択肢: ["エネルギーの次元で、kWhのみを用いる", "無次元で、単位を付けない", "質量の次元を持ち、kgSWUやtSWUと表記する", "時間の次元で、hSWUと表記する"]
- 正答選択肢: C
- 正答: 質量の次元を持ち、kgSWUやtSWUと表記する
- 解説: IAEAはSWUがmassのdimensionを持つと明記し、JAEA ATOMICAも重量との混同を避ける慣習としてkgSWUまたはtSWUと表記すると説明している。したがってA・B・Dは誤り。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html
- verified: true

### CAL-04-Q016
- 問題文: IAEAの条件に合わせ、F=7.0 kgU、x_F=0.711%、P=1.0 kgU、x_P=3.75%、T=6.0 kgU、x_T=0.2045% とする。価値関数を用いて求める分離作業量として最も適切なものはどれか。
- 選択肢: ["4.869 kgSWU", "3.002 kgSWU", "7.000 kgSWU", "5.910 kgSWU"]
- 正答選択肢: D
- 正答: 5.910 kgSWU
- 解説: `V(0.0375)=3.0018`、`V(0.002045)=6.1650`、`V(0.00711)=4.8689`。したがって `W=1×3.0018+6×6.1650-7×4.8689=5.9096 kgSWU≈5.910 kgSWU`。検算としてIAEA Table 25の同条件は5.91 SWUで一致する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q017
- 問題文: 同じ量・同じ濃度の濃縮ウラン製品を、同じ天然ウランfeedから作る場合、tails assayを0.30%から0.20%へ下げると一般にどの組合せになるか。
- 選択肢: ["必要feed量は減り、必要SWUは増える", "必要feed量も必要SWUも減る", "必要feed量は増え、必要SWUは減る", "必要feed量も必要SWUも変わらない"]
- 正答選択肢: A
- 正答: 必要feed量は減り、必要SWUは増える
- 解説: tails assayを下げるとfeed中の235Uをより多く回収できるためfeed量は減る一方、より深い分離を行うためSWUは増える。IAEA 2025 Appendix IIは3.75%製品25 tの例で、tails 0.30%では210 t feed・120 kSWU、0.20%では174 t feed・150 kSWUを示す。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q018
- 問題文: IAEA 2025 Appendix IIが示す、3.75%濃縮ウラン25 tU/年を天然ウラン0.711%から生産する例の組合せとして正しいものはどれか。
- 選択肢: ["tails 0.30%: feed 174 tU・150 kSWU、tails 0.20%: feed 210 tU・120 kSWU", "tails 0.30%: feed 210 tU・120 kSWU、tails 0.20%: feed 174 tU・150 kSWU", "tails 0.30%: feed 210 tU・150 kSWU、tails 0.20%: feed 174 tU・120 kSWU", "tails 0.30%: feed 25 tU・120 kSWU、tails 0.20%: feed 25 tU・150 kSWU"]
- 正答選択肢: B
- 正答: tails 0.30%: feed 210 tU・120 kSWU、tails 0.20%: feed 174 tU・150 kSWU
- 解説: IAEA Table 24のExample A/Bに対応する。tailsを0.30%から0.20%へ下げるとfeedは210→174 tUへ減り、SWUは120→150 kSWUへ増える。傾向もQ017の物質収支・分離作業の関係と整合する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q019
- 問題文: IAEA 2025 Table 25で、3.75%濃縮ウラン1 kgUを天然ウラン0.711%から作るとき、feed量8.0 kgUに対応するtails assayと分離作業量の組合せはどれか。
- 選択肢: ["tails 0.2045%、5.910 SWU", "tails 0.2434%、5.396 SWU", "tails 0.2769%、5.029 SWU", "tails 0.3058%、4.753 SWU"]
- 正答選択肢: C
- 正答: tails 0.2769%、5.029 SWU
- 解説: IAEA Table 25のfeed 8.0 kgU行はtails assay 0.2769%、separative work 5.029 SWUである。物質収支でも `P=8×(0.00711-0.002769)/(0.0375-0.002769)≈1.00 kgU` となり整合する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q020
- 問題文: JAEA ATOMICAの例で、天然ウランから3.5%濃縮ウラン1 tUを得る際、tails assayを0.25%とした場合の原料量と分離作業量の組合せはどれか。
- 選択肢: ["7.8 tU、4.3 tSWU", "10.0 tU、7.0 tSWU", "1.0 tU、4.8 tSWU", "7.0 tU、4.8 tSWU"]
- 正答選択肢: D
- 正答: 7.0 tU、4.8 tSWU
- 解説: JAEA ATOMICAは、天然ウランから3.5%濃縮ウラン1 tUを得てtails 0.25%とする場合、原料7.0 tU、分離作業量4.8 tSWUと示す。全U収支からtailsは6.0 tUであり、`1+6=7 tU` となる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html
- verified: true

### CAL-04-Q021
- 問題文: Q020と同じく3.5%濃縮ウラン1 tUを天然ウランから得るJAEA ATOMICAの例で、tails assayを0.30%とした場合の原料量と分離作業量はどれか。
- 選択肢: ["7.8 tU、4.3 tSWU", "7.0 tU、4.8 tSWU", "6.0 tU、5.5 tSWU", "10.0 tU、7.0 tSWU"]
- 正答選択肢: A
- 正答: 7.8 tU、4.3 tSWU
- 解説: JAEA ATOMICAはtails 0.30%の場合、原料7.8 tU、分離作業量4.3 tSWUと示す。tails 0.25%の7.0 tU・4.8 tSWUと比べ、tails assayを上げるとfeed使用量が増え、必要SWUが減るというトレードオフが確認できる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-05-01-03.html
- verified: true

### CAL-04-Q022
- 問題文: 濃縮ウラン製品の量Pと製品濃度x_Pだけが与えられた場合、必要SWUについて正しい説明はどれか。
- 選択肢: ["Pとx_Pだけで一意に決まる", "feed assayやtails assayなど追加条件が必要で、Pとx_Pだけでは一意に決まらない", "tails量だけを追加すれば濃度情報は一切不要である", "feed量はSWU計算に関係しない"]
- 正答選択肢: B
- 正答: feed assayやtails assayなど追加条件が必要で、Pとx_Pだけでは一意に決まらない
- 解説: IAEAのSWU式にはF、P、Tとx_F、x_P、x_Tが現れる。同じP・x_Pでもtails assayを変えればfeed量とSWUの組合せが変わるため、製品量と製品濃度だけではSWUは一意に定まらない。IAEA Table 24・25が具体例を示している。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf
- verified: true

### CAL-04-Q023
- 問題文: `F=P+T` および `F x_F=P x_P+T x_T` をそのまま用いる基本濃縮物質収支について、INL/GAIN資料が明示している前提はどれか。
- 選択肢: ["235Uだけは必ず全量損失する", "製品とtailsの濃度が等しい", "濃縮工程でのウラン損失を無視する", "feedは必ず製品と同じ量である"]
- 正答選択肢: C
- 正答: 濃縮工程でのウラン損失を無視する
- 解説: INL/GAIN Appendix Bは、これらの保存式が濃縮工程中のuranium lossを仮定しない（no uranium loss）条件であると注記している。実施設ではhold-upや配管・貯蔵系での損失があり得るため、基本演習では「損失なし」を問題条件として明示する。
- 出典: https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true

### CAL-04-Q024
- 問題文: IAEA Table 25の一例に合わせ、F=7.0 kgU（x_F=0.711%）、P=1.0 kgU（x_P=3.75%）、T=6.0 kgU（x_T=0.2045%）とする。入力側と出力側の235U質量はいずれもいくらか。
- 選択肢: ["0.00711 kg", "0.03750 kg", "0.01227 kg", "0.04977 kg"]
- 正答選択肢: D
- 正答: 0.04977 kg
- 解説: 入力は `7.0×0.00711=0.04977 kg-235U`。出力は製品 `1.0×0.0375=0.03750 kg` とtails `6.0×0.002045=0.01227 kg` の和で `0.03750+0.01227=0.04977 kg`。検算で入力=出力となり235U収支が成立する。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/TE-771_Rev_1web.pdf ; https://gain.inl.gov/content/uploads/4/2024/11/Characterizing-an-Emerging-Market-for-HALEU-Production.pdf
- verified: true
