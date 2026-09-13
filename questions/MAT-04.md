# MAT-04 燃料被覆管

- status: complete
- verified_at: 2026-09-12
- question_count: 24
- authority: JAEA・IAEAの公的技術資料およびNRA公開過去問を正解authorityとする

## 出題根拠

対象は `03_燃料・材料.md` の MAT-04（ジルコニウム合金採用理由、ジルカロイ2/4の添加元素・概略組成・差、腐食、水素吸収、高温酸化、機械特性、中性子吸収）。NRAの第58～56回公開過去問を確認し、第57回ではジルカロイ2と4の添加元素・おおよその添加量・材料特性差が直接問われていることを確認した。過去問本文は転載せず、同じ論点をJAEA・IAEA等の公的資料で独立確認して4択問題化した。

主要参照先:
- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第57回 化学的性質及び物理的性質: https://www.nra.go.jp/data/000475645.pdf
- JAEA ATOMICA「軽水炉用燃料被覆管の生産」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-02.html
- JAEA ATOMICA「原子炉材料の基礎（2）」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-10.html
- JAEA ATOMICA「原子燃料の基礎」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-01.html
- JAEA ATOMICA「軽水炉燃料の炉内挙動（通常時）」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-06.html
- JAEA ATOMICA「ジルコニウム－水反応」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2621.html
- JAEA「高度化する軽水炉燃料に対応する燃料安全研究」: https://rdreview.jaea.go.jp/tayu/ACT03J/03/0301.htm
- JAEA Review 2020-076: https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2020-076.pdf
- JAEA Review 2010-068: https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2010-068.pdf
- IAEA Nuclear Energy Series NF-G-2.1, Quality and Reliability Aspects in Nuclear Power Reactor Fuel Engineering: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- IAEA TECDOC-1128: https://www-pub.iaea.org/MTCD/Publications/PDF/te_1128_prn.pdf
- JAEA ATOMICA「BWRの原子炉構造」: https://atomica.jaea.go.jp/data/detail/dat_detail_02-03-01-02.html

## 問題

### MAT-04-Q001
- 問題文: 軽水炉燃料の被覆管材料としてジルコニウム合金が広く採用される理由の組合せとして最も適切なものはどれか。
- 選択肢: ["熱中性子吸収が小さく、耐食性と運転温度域での機械的強度が良好である", "熱中性子吸収が非常に大きく、冷却材との反応を促進する", "常温で必ず液体となり、燃料ペレットを溶解できる", "中性子を完全に反射し、腐食しないため保護皮膜を必要としない"]
- 正答選択肢: A
- 正答: 熱中性子吸収が小さく、耐食性と運転温度域での機械的強度が良好である
- 解説: IAEAはZircaloy-2/-4の被覆管採用理由として、低い中性子吸収断面積、良好な耐食性、運転温度で十分な機械強度を挙げている。JAEAも同様に、ジルコニウム合金は中性子吸収が少なく耐食性・機械的性質が良好なため用いられるとしている。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/te_1128_prn.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-02.html
- verified: true

### MAT-04-Q002
- 問題文: 日本の軽水炉燃料被覆管に用いられる代表的なジルカロイの対応として正しいものはどれか。
- 選択肢: ["BWRにジルカロイ4、PWRにジルカロイ2", "BWRにジルカロイ2、PWRにジルカロイ4", "BWR・PWRとも純鉄のみ", "BWR・PWRともニッケル基超合金のみ"]
- 正答選択肢: B
- 正答: BWRにジルカロイ2、PWRにジルカロイ4
- 解説: JAEAおよびIAEAは、代表的用途としてBWR燃料被覆管にZircaloy-2、PWR燃料被覆管にZircaloy-4が用いられるとしている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-02.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q003
- 問題文: ジルカロイ2とジルカロイ4の標準的な添加元素の違いとして正しいものはどれか。
- 選択肢: ["ジルカロイ4だけにNiが0.03～0.08 wt%添加される", "両合金ともNiを必ず1 wt%以上含む", "ジルカロイ2にはNiが添加されるが、ジルカロイ4ではNiは標準的合金添加元素ではない", "両合金ともSnを含まず、主添加元素はCuだけである"]
- 正答選択肢: C
- 正答: ジルカロイ2にはNiが添加されるが、ジルカロイ4ではNiは標準的合金添加元素ではない
- 解説: IAEA掲載のASTM組成範囲ではZircaloy-2にNi 0.03～0.08 wt%が規定される一方、Zircaloy-4のNi欄は該当なしである。JAEAもZircaloy-2はFe、Cr、Snに加えNiを含むと説明している。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-02.html
- verified: true

### MAT-04-Q004
- 問題文: IAEAが示すASTM組成範囲で、ジルカロイ2とジルカロイ4に共通するSn含有量として正しいものはどれか。
- 選択肢: ["0.03～0.08 wt%", "0.07～0.13 wt%", "0.18～0.24 wt%", "1.20～1.70 wt%"]
- 正答選択肢: D
- 正答: 1.20～1.70 wt%
- 解説: IAEAの表ではZircaloy-2、Zircaloy-4ともSnは1.20～1.70 wt%である。その他の選択肢は同表に現れるNi、Cr、Feの範囲であり、Snの範囲ではない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q005
- 問題文: IAEAが示すASTM組成範囲で、ジルカロイ2のFe含有量として正しいものはどれか。
- 選択肢: ["0.07～0.20 wt%", "0.03～0.08 wt%", "0.18～0.24 wt%", "1.20～1.70 wt%"]
- 正答選択肢: A
- 正答: 0.07～0.20 wt%
- 解説: IAEA掲載のASTM B353-07組成範囲では、Zircaloy-2のFeは0.07～0.20 wt%である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q006
- 問題文: IAEAが示すASTM組成範囲で、ジルカロイ4のFe含有量として正しいものはどれか。
- 選択肢: ["0.03～0.08 wt%", "0.18～0.24 wt%", "0.05～0.15 wt%", "1.20～1.70 wt%"]
- 正答選択肢: B
- 正答: 0.18～0.24 wt%
- 解説: IAEA掲載のASTM B353-07組成範囲では、Zircaloy-4のFeは0.18～0.24 wt%である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q007
- 問題文: IAEAが示すASTM組成範囲で、ジルカロイ2のCr含有量として正しいものはどれか。
- 選択肢: ["0.18～0.24 wt%", "0.03～0.08 wt%", "0.05～0.15 wt%", "1.20～1.70 wt%"]
- 正答選択肢: C
- 正答: 0.05～0.15 wt%
- 解説: IAEA掲載のASTM B353-07組成範囲では、Zircaloy-2のCrは0.05～0.15 wt%である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q008
- 問題文: IAEAが示すASTM組成範囲で、ジルカロイ4のCr含有量として正しいものはどれか。
- 選択肢: ["0.03～0.08 wt%", "0.18～0.24 wt%", "1.20～1.70 wt%", "0.07～0.13 wt%"]
- 正答選択肢: D
- 正答: 0.07～0.13 wt%
- 解説: IAEA掲載のASTM B353-07組成範囲では、Zircaloy-4のCrは0.07～0.13 wt%である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q009
- 問題文: IAEAが示すASTM組成範囲で、ジルカロイ2のNi含有量として正しいものはどれか。
- 選択肢: ["0.03～0.08 wt%", "0.18～0.24 wt%", "0.50～1.00 wt%", "1.20～1.70 wt%"]
- 正答選択肢: A
- 正答: 0.03～0.08 wt%
- 解説: IAEA掲載のASTM B353-07組成範囲では、Zircaloy-2のNiは0.03～0.08 wt%である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q010
- 問題文: ジルカロイ4がジルカロイ2から改良された方向と、その狙いの組合せとしてJAEAの説明に合うものはどれか。
- 選択肢: ["Feを減らしNiを増やして中性子吸収を増大させる", "Feをやや増やしNiを減らして、水素吸収に伴う脆化への抵抗性を改善する", "Snを全て除去して融点を室温以下にする", "Crを全て除去して水との反応を促進する"]
- 正答選択肢: B
- 正答: Feをやや増やしNiを減らして、水素吸収に伴う脆化への抵抗性を改善する
- 解説: JAEAはZircaloy-4について、Zircaloy-2よりFe量をやや増しNi量を減らすことで、水素吸収による脆化に対する抵抗性を改良した合金と説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-10.html
- verified: true

### MAT-04-Q011
- 問題文: 原子炉用ジルコニウム合金の製造で、鉱石由来のHfを除去する必要がある主な理由はどれか。
- 選択肢: ["Hfが必ず常温で気体になるため", "HfがZrより軽すぎて遠心分離できないため", "Hfは中性子吸収が大きく、原子炉用材料に残すと中性子経済を悪化させるため", "Hfが酸素を全く含まないため"]
- 正答選択肢: C
- 正答: Hfは中性子吸収が大きく、原子炉用材料に残すと中性子経済を悪化させるため
- 解説: JAEAは、Zr鉱石中に共存するHfは中性子吸収が大きいため、原子炉級Zrの製造ではHfを除去する精製工程が必要と説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-02.html
- verified: true

### MAT-04-Q012
- 問題文: JAEA資料に示されるジルコニウムの熱中性子吸収断面積の概略値として最も近いものはどれか。
- 選択肢: ["約18 barn", "約180 barn", "約1800 barn", "約0.18 barn"]
- 正答選択肢: D
- 正答: 約0.18 barn
- 解説: JAEAのBWR構造解説では、ジルコニウムの熱中性子吸収断面積は約0.18 barnとされ、これが燃料被覆材に適する重要な理由の一つである。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_02-03-01-02.html
- verified: true

### MAT-04-Q013
- 問題文: 燃料被覆材としてステンレス鋼とジルコニウム合金を中性子吸収の観点で比較した説明として適切なものはどれか。
- 選択肢: ["ジルコニウム合金の方が中性子吸収が小さく、寄生吸収を抑えやすい", "ステンレス鋼は中性子を全く吸収しない", "両者の中性子吸収は常に完全に同じ", "ジルコニウム合金は中性子吸収が大きいため軽水炉では使用できない"]
- 正答選択肢: A
- 正答: ジルコニウム合金の方が中性子吸収が小さく、寄生吸収を抑えやすい
- 解説: JAEAは初期PWRで用いられたステンレス鋼について機械的性質は良いが中性子吸収が大きい欠点を挙げ、ジルコニウム合金は中性子吸収が小さいため被覆管に適すると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-01.html
- verified: true

### MAT-04-Q014
- 問題文: 通常運転中のジルコニウム合金被覆管の水側腐食について、反応生成物の説明として正しいものはどれか。
- 選択肢: ["Zrが水と反応すると金属Zrが増え、水素は消費されるだけである", "Zrが水と反応して酸化ジルコニウム皮膜を形成し、水素も生成する", "Zrが水と反応すると必ず炭化ジルコニウムだけが生成する", "水との反応では酸化物も水素も生成しない"]
- 正答選択肢: B
- 正答: Zrが水と反応して酸化ジルコニウム皮膜を形成し、水素も生成する
- 解説: JAEAはジルコニウムと水の反応で酸化ジルコニウムが形成され、水素が発生すると説明している。通常時の腐食でも酸化皮膜形成と水素発生・一部吸収が関連する。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2621.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2010-068.pdf
- verified: true

### MAT-04-Q015
- 問題文: 被覆管が腐食に伴って水素を吸収した場合の材料挙動として適切なものはどれか。
- 選択肢: ["吸収水素は必ず全量が即座に外部へ放出されるため材質に影響しない", "水素吸収によって中性子吸収断面積が必ずゼロになる", "水素化物の形成などにより延性低下・脆化につながり得る", "水素化物が形成されるほど被覆管は無条件に延性が増す"]
- 正答選択肢: C
- 正答: 水素化物の形成などにより延性低下・脆化につながり得る
- 解説: JAEAはZr合金への水素吸収と水素化物形成が脆化要因になると説明している。IAEAも腐食に伴う水素取り込み・再分布が被覆管延性に影響するとしている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-10.html ; https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1656_web.pdf
- verified: true

### MAT-04-Q016
- 問題文: ジルコニウム合金被覆管中の水素化物について、脆化との関係を説明したものとして正しいものはどれか。
- 選択肢: ["水素化物は方向に関係なく必ず被覆管を延性化する", "水素化物は被覆管の腐食を完全停止させる", "水素化物は中性子照射を完全遮蔽する", "半径方向に配向した水素化物は脆化やき裂進展を助長し得る"]
- 正答選択肢: D
- 正答: 半径方向に配向した水素化物は脆化やき裂進展を助長し得る
- 解説: JAEAは、応力状態などによって半径方向に析出した水素化物が被覆管の脆化を強め、き裂の発生・進展に関係し得ると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-10.html
- verified: true

### MAT-04-Q017
- 問題文: PWR燃料の高燃焼度化で被覆管腐食が重要になる理由としてJAEAの説明に最も合うものはどれか。
- 選択肢: ["炉内滞在期間が長くなるため、酸化膜成長などの腐食影響が蓄積しやすい", "燃焼度が上がると冷却材が完全に消失するため", "燃焼度が上がるとジルコニウムが全て鉄に変わるため", "高燃焼度では腐食反応が物理的に不可能になるため"]
- 正答選択肢: A
- 正答: 炉内滞在期間が長くなるため、酸化膜成長などの腐食影響が蓄積しやすい
- 解説: JAEAはPWR燃料の高燃焼度化・長期照射に関連して、被覆管の一様腐食と酸化膜厚の増大が重要な燃料健全性課題になると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-06.html
- verified: true

### MAT-04-Q018
- 問題文: PWRとBWRのジルコニウム合金被覆管腐食の相対的特徴としてJAEA資料に沿うものはどれか。
- 選択肢: ["BWRでは冷却材温度が高いため一様腐食だけが支配的で、ノジュラー腐食は存在しない", "PWRでは一様腐食が重要で、BWRでは比較的低い冷却材温度のため一様腐食は小さく、ノジュラー腐食が重要となる", "PWR・BWRとも腐食は一切起こらない", "PWRではノジュラー腐食しか起こらず、一様腐食は起こらない"]
- 正答選択肢: B
- 正答: PWRでは一様腐食が重要で、BWRでは比較的低い冷却材温度のため一様腐食は小さく、ノジュラー腐食が重要となる
- 解説: JAEAはPWRで一様腐食が燃料健全性上の主要課題となる一方、BWRでは冷却材温度が比較的低いため一様腐食は小さく、局部的なノジュラー腐食が重要と説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-06.html
- verified: true

### MAT-04-Q019
- 問題文: 軽水炉被覆管の炉外腐食試験条件についてJAEA資料の説明に合う組合せはどれか。
- 選択肢: ["PWR用は常温乾燥空気、BWR用は液体窒素", "PWR用は真空のみ、BWR用は溶融金属のみ", "PWR用は高温高圧水、BWRのノジュラー腐食評価では約770 Kの水蒸気が用いられる", "PWR用・BWR用とも常に0 Kで試験する"]
- 正答選択肢: C
- 正答: PWR用は高温高圧水、BWRのノジュラー腐食評価では約770 Kの水蒸気が用いられる
- 解説: JAEAはPWR用材料の炉外腐食試験に高温高圧水を用い、BWRのノジュラー腐食特性評価には約770 Kの水蒸気試験が有用と説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-06.html
- verified: true

### MAT-04-Q020
- 問題文: JAEA資料が説明する約1250 K以下でのジルコニウム合金の一様腐食速度則として正しいものはどれか。
- 選択肢: ["初期から常に酸化膜厚さが時間の二乗に比例する", "初期から常に酸化膜厚さが時間に反比例する", "温度に関係なく酸化膜厚さは常にゼロである", "初期は酸化膜厚さの3乗が時間に比例する立方則を示し、その後はほぼ直線則へ移行する"]
- 正答選択肢: D
- 正答: 初期は酸化膜厚さの3乗が時間に比例する立方則を示し、その後はほぼ直線則へ移行する
- 解説: JAEAは約1250 K以下の一様腐食について、初期には酸化膜厚さの3乗が時間に比例する立方則に従い、遷移後はほぼ直線則になると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-06.html
- verified: true

### MAT-04-Q021
- 問題文: LOCA時など高温でジルコニウム合金被覆管が水・水蒸気と反応した際に重要な現象として正しいものはどれか。
- 選択肢: ["被覆管が酸化し、水素が発生する", "被覆管が必ず還元され、酸素が全て消える", "水素が全く発生せず、酸化も起こらない", "ジルコニウムが常に液体ヘリウムへ変換される"]
- 正答選択肢: A
- 正答: 被覆管が酸化し、水素が発生する
- 解説: JAEAは高温のジルコニウム－水反応で酸化ジルコニウムと水素が生成すると説明しており、LOCA・過熱時の水素発生源として重要である。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_2621.html
- verified: true

### MAT-04-Q022
- 問題文: LOCA時の高温酸化を受けたジルコニウム合金被覆管をECCSで急冷する際の健全性について、JAEAの実験説明に合うものはどれか。
- 選択肢: ["酸化量が大きいほど必ず延性が増し、破断しなくなる", "高温酸化で脆化が進むと、急冷時の熱衝撃で被覆管が破断する場合がある", "急冷は被覆管の温度を必ず上昇させる", "高温酸化と急冷時破断には一切関係がない"]
- 正答選択肢: B
- 正答: 高温酸化で脆化が進むと、急冷時の熱衝撃で被覆管が破断する場合がある
- 解説: JAEAのLOCA模擬試験では、高温酸化を受けた被覆管は酸化による脆化が進むと、ECCS注水を模擬した急冷時の熱衝撃で破断し得ることが示されている。
- 出典: https://rdreview.jaea.go.jp/tayu/ACT03J/03/0301.htm
- verified: true

### MAT-04-Q023
- 問題文: LOCA時の急冷破断限界に対する被覆管中の水素濃度の影響としてJAEAの試験結果に沿うものはどれか。
- 選択肢: ["水素濃度が高いほど急冷破断に必要な酸化量は必ず増える", "水素濃度は破断挙動に全く影響しない", "水素濃度が高いほど、より小さい酸化量でも急冷破断し得る傾向がある", "水素が増えると酸化反応そのものが完全停止する"]
- 正答選択肢: C
- 正答: 水素濃度が高いほど、より小さい酸化量でも急冷破断し得る傾向がある
- 解説: JAEAのZircaloy-4を用いたLOCA模擬試験では、被覆管中の水素濃度が増えると、急冷時に破断へ至る最小酸化量が低下する傾向が示された。
- 出典: https://rdreview.jaea.go.jp/tayu/ACT03J/03/0301.htm
- verified: true

### MAT-04-Q024
- 問題文: ジルコニウム合金の「ブレークアウェイ酸化」の説明として正しいものはどれか。
- 選択肢: ["酸化膜が形成された後、酸化速度が永久にゼロになる現象", "中性子照射によりZrが全てHfへ変換される現象", "水素化物が全て溶解して腐食が停止する現象", "特定の温度・時間条件で保護性が失われるなどして酸化速度が急増する現象"]
- 正答選択肢: D
- 正答: 特定の温度・時間条件で保護性が失われるなどして酸化速度が急増する現象
- 解説: JAEA Review 2020-076は、500～1000 ℃程度の一定条件で酸化挙動が変化し酸化速度が急増するブレークアウェイ酸化を扱っている。したがって、単なる通常酸化の停止や材質変換を意味しない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2020-076.pdf
- verified: true
