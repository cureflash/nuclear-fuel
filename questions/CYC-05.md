# CYC-05 再転換・UO2粉末製造

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA/ATOMICA「六フッ化ウランから二酸化ウランへの再転換」とIAEA TECDOC-1613「Nuclear Fuel Cycle Information System」を主authorityとし、ADU、AUC、IDR、フレームリアクタ法、UF6→UO2の工程、沈殿・ろ過・ばい焼・水素還元、粉末流動性・焼結性・造粒要否を照合した。NRA「過去の資格試験問題」で直近3回（第58回・第57回・第56回）の公開問題を確認し、過去問本文は転載していない。

## 出題根拠

対象は `04_核燃料サイクル.md` の CYC-05（ADU、AUC、乾式転換、UF6→UO2、沈殿、焙焼、還元、粉末特性）。湿式法のADU/AUC、乾式法のIDR/フレームリアクタ法を区別し、ADUの加水分解・アンモニア沈殿、溶媒抽出ADU、AUCの同時反応、IDRのUO2F2生成と回転炉内還元、フレームリアクタ法のU3O8中間体、各法の粉末流動性・焼結性・造粒要否を分散して作問した。数値条件はJAEA/ATOMICA記載のUF6ボンベ加熱「120℃以下」とADU法の「500〜800℃でばい焼・水素還元」に固定した。

## 主要資料

- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000480853.pdf
- 第57回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000475646.pdf
- 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf
- JAEA/ATOMICA「六フッ化ウランから二酸化ウランへの再転換」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- JAEA/ATOMICA「核燃料施設の安全規制の概要」: https://atomica.jaea.go.jp/data/detail/dat_detail_11-02-03-02.html
- IAEA TECDOC-1613「Nuclear Fuel Cycle Information System: A Directory of Nuclear Fuel Cycle Facilities, 2009 Edition」: https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- IAEA NFCIS「Fuel Fabrication」: https://infcis.iaea.org/NFCFDB

## 問題

### CYC-05-Q001
- 問題文: 濃縮ウランを軽水炉用燃料として加工する際の再転換について、最も適切な説明はどれか。
- 選択肢: ["濃縮UF6をUO2粉末へ変換する工程であり、濃縮燃料加工の初期工程に位置付けられる", "UO2ペレットをUF6へ戻して濃縮工程へ供給する工程である", "使用済燃料中のUとPuを硝酸溶液へ変換する再処理工程である", "UO2粉末を被覆管へ封入して燃料棒にする工程である"]
- 正答選択肢: A
- 正答: 濃縮UF6をUO2粉末へ変換する工程であり、濃縮燃料加工の初期工程に位置付けられる
- 解説: JAEA/ATOMICAは濃縮工場の製品UF6を軽水炉燃料用UO2へ変換することを再転換とし、IAEAも濃縮UF6からUO2粉末への再転換を濃縮燃料加工の最初の段階としている。残る選択肢は工程の向き又は工程区分が異なる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q002
- 問題文: UF6からUO2粉末への再転換法の分類として正しいものはどれか。
- 選択肢: ["ADU法とAUC法はいずれも乾式法で、IDR法は湿式法である", "ADU法とAUC法は湿式法で、IDR法は乾式法である", "ADU法だけが乾式法で、AUC法とIDR法は湿式法である", "ADU法、AUC法、IDR法はいずれも湿式法である"]
- 正答選択肢: B
- 正答: ADU法とAUC法は湿式法で、IDR法は乾式法である
- 解説: JAEA/ATOMICAは湿式法としてADU法とAUC法、乾式法としてIDR法とフレームリアクタ法を挙げている。IAEAもADU/AUCを代表的湿式法、IDRを乾式法としている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q003
- 問題文: 再転換工程で用いられる略号ADUの名称として正しいものはどれか。
- 選択肢: ["Ammonium Uranyl Carbonate", "Ammonium Uranium Fluoride", "Ammonium Diuranate", "Anhydrous Uranium Dioxide"]
- 正答選択肢: C
- 正答: Ammonium Diuranate
- 解説: ADUは重ウラン酸アンモニウム（Ammonium Diuranate）の略である。Ammonium Uranyl CarbonateはAUCであり、残る名称はADUの展開ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q004
- 問題文: 再転換工程で用いられる略号AUCの名称として正しいものはどれか。
- 選択肢: ["Ammonium Uranium Chloride", "Ammonium Diuranate", "Alkaline Uranium Carbonate", "Ammonium Uranyl Carbonate"]
- 正答選択肢: D
- 正答: Ammonium Uranyl Carbonate
- 解説: AUCは炭酸ウラニルアンモニウム（Ammonium Uranyl Carbonate）の略である。ADUはAmmonium Diuranateであり、他の2名称はAUCの正式名称ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q005
- 問題文: 従来ADU法で、UF6ガスを水と反応させた直後に得られるものはどれか。
- 選択肢: ["フッ化ウラニル（UO2F2）水溶液", "重ウラン酸アンモニウム沈殿", "U3O8粉末", "硝酸ウラニル水溶液"]
- 正答選択肢: A
- 正答: フッ化ウラニル（UO2F2）水溶液
- 解説: 従来ADU法ではUF6ガスを水で加水分解し、まずUO2F2水溶液を得る。その後アンモニア水を加えてADUを沈殿させる。U3O8はフレームリアクタ法の中間体で、硝酸ウラニル水溶液は溶媒抽出ADU法で得られる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q006
- 問題文: 従来ADU法で、UO2F2水溶液からADU沈殿を生成させるために加えるものはどれか。
- 選択肢: ["炭酸ガスのみ", "アンモニア水", "水素ガス", "硝酸アルミニウム水溶液"]
- 正答選択肢: B
- 正答: アンモニア水
- 解説: 従来ADU法ではUO2F2水溶液へアンモニア水を加えてADUを沈殿させる。炭酸ガスはAUC法、H2は還元、硝酸アルミニウム水溶液は溶媒抽出ADU法の前段で用いられる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q007
- 問題文: 従来ADU法で、ADU沈殿から最終的にUO2粉末を得る操作の組合せとして正しいものはどれか。
- 選択肢: ["蒸留→フッ素化", "電解→酸化", "ろ過→ばい焼→水素還元", "溶融→遠心分離"]
- 正答選択肢: C
- 正答: ろ過→ばい焼→水素還元
- 解説: JAEA/ATOMICAではADU沈殿をろ過し、ばい焼・水素還元してUO2粉末を得る。残る操作列はADU法のUO2粉末製造工程ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q008
- 問題文: 従来ADU法の特徴として正しいものはどれか。
- 選択肢: ["工程が最短で、沈殿工程を持たない", "粉末流動性が良いため造粒工程を必ず省略できる", "U3O8を火炎内で直接生成する", "各反応が独立していて条件を制御しやすく、得られるUO2粉末の特性が安定しやすい"]
- 正答選択肢: D
- 正答: 各反応が独立していて条件を制御しやすく、得られるUO2粉末の特性が安定しやすい
- 解説: JAEA/ATOMICAは従来ADU法について、工程はやや複雑だが各反応が独立しており反応条件を制御しやすく、UO2粉末特性が安定しているとしている。造粒省略はAUC法の特徴で、U3O8火炎内生成はフレームリアクタ法である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q009
- 問題文: JAEA/ATOMICAが示す従来ADU法で、UF6をボンベから気化して取り出す際の加熱条件として正しいものはどれか。
- 選択肢: ["120℃以下の水蒸気で加熱する", "500〜800℃の水蒸気で加熱する", "液体窒素で冷却しながら気化する", "1700℃の水素雰囲気で加熱する"]
- 正答選択肢: A
- 正答: 120℃以下の水蒸気で加熱する
- 解説: JAEA/ATOMICAは、鉄鋼製ボンベを120℃以下の水蒸気で加熱しながらUF6を気化して取り出すとしている。500〜800℃は後段のばい焼・水素還元に関する温度であり、他の条件は同工程に該当しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q010
- 問題文: JAEA/ATOMICAが示す従来ADU法で、ADU沈殿のろ過後に行うばい焼・水素還元の温度範囲はどれか。
- 選択肢: ["120〜200℃", "500〜800℃", "1000〜1200℃", "1600〜1800℃"]
- 正答選択肢: B
- 正答: 500〜800℃
- 解説: JAEA/ATOMICAはADU沈殿をろ過後、500〜800℃でばい焼・水素還元してUO2粉末とするとしている。120℃以下はUF6ボンベの加熱条件であり、他の温度範囲は同資料のADU再転換条件ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q011
- 問題文: 溶媒抽出ADU法の初期反応として正しいものはどれか。
- 選択肢: ["UF6ガスを水、CO2、NH3と同時反応させる", "UF6ガスを水蒸気と反応させてUO2F2粉末を作る", "UF6ガスを硝酸アルミニウム水溶液と反応させる", "UF6ガスを酸素、水素、窒素と火炎内で反応させる"]
- 正答選択肢: C
- 正答: UF6ガスを硝酸アルミニウム水溶液と反応させる
- 解説: 溶媒抽出ADU法ではUF6ガスを硝酸アルミニウム水溶液と反応させる。水・CO2・NH3の同時反応はAUC法、水蒸気でUO2F2粒子を得るのはIDR法、火炎内反応はフレームリアクタ法である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q012
- 問題文: 溶媒抽出ADU法でUF6を硝酸アルミニウム水溶液と反応させた後のウランとフッ素の主な形態の組合せとして正しいものはどれか。
- 選択肢: ["ウラン=U3O8、フッ素=HFガス", "ウラン=ADU沈殿、フッ素=UF4", "ウラン=UO2粉末、フッ素=F2ガス", "ウラン=硝酸ウラニル水溶液、フッ素=フッ化アルミニウム水溶液"]
- 正答選択肢: D
- 正答: ウラン=硝酸ウラニル水溶液、フッ素=フッ化アルミニウム水溶液
- 解説: JAEA/ATOMICAは、溶媒抽出ADU法でウランが硝酸ウラニル水溶液、フッ素がフッ化アルミニウム水溶液となるとしている。その後、溶媒抽出でフッ化アルミニウムを分離する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q013
- 問題文: 溶媒抽出ADU法で、硝酸ウラニル水溶液からADUを沈殿させる直前に行う処理として正しいものはどれか。
- 選択肢: ["溶媒抽出でフッ化アルミニウムを分離する", "U3O8を水素で還元する", "UO2F2を回転炉へ直接投入する", "UF6を遠心分離する"]
- 正答選択肢: A
- 正答: 溶媒抽出でフッ化アルミニウムを分離する
- 解説: 溶媒抽出ADU法では、UF6と硝酸アルミニウム水溶液の反応後に溶媒抽出でフッ化アルミニウムを分離し、その後硝酸ウラニル水溶液へアンモニアガスを加えてADUを沈殿させる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q014
- 問題文: 溶媒抽出ADU法の製品UO2粉末の特徴としてJAEA/ATOMICAが挙げるものはどれか。
- 選択肢: ["必ず粗大粒子となり焼結できない", "不純物が少なく、物性が安定している", "AUC法より必ず工程数が少ない", "U3O8を最終製品とする"]
- 正答選択肢: B
- 正答: 不純物が少なく、物性が安定している
- 解説: JAEA/ATOMICAは溶媒抽出ADU法のUO2粉末について、不純物が少なく物性が安定しているとする。一方、工程は多くやや複雑であり、最終製品はUO2粉末である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q015
- 問題文: AUC法でAUC沈殿を生成させる際、UF6ガスと同時に反応させる組合せとして正しいものはどれか。
- 選択肢: ["水素、酸素、窒素", "硝酸、TBP、希釈剤", "水、炭酸ガス、アンモニアガス", "水蒸気、水素、ヘリウム"]
- 正答選択肢: C
- 正答: 水、炭酸ガス、アンモニアガス
- 解説: AUC法ではUF6ガスを水、CO2、NH3と同時に反応させてAUCを沈殿させる。残る組合せはAUC沈殿生成の反応物ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q016
- 問題文: AUC法で得られるUO2粉末の加工上の特徴として正しいものはどれか。
- 選択肢: ["流動性が悪く、造粒工程を追加しなければならない", "焼結性がないためペレット化できない", "最終製品がU3O8なのでUO2へは変換しない", "流動性が良く、ペレット成形前の造粒工程を省略できる"]
- 正答選択肢: D
- 正答: 流動性が良く、ペレット成形前の造粒工程を省略できる
- 解説: JAEA/ATOMICAはAUC由来UO2粉末の流動性が良く、ペレット成形前の造粒工程を省略できるとしている。IAEAもADU由来粉末の流動性不足と造粒必要性を対比している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q017
- 問題文: IDR法の最初の主要反応として正しいものはどれか。
- 選択肢: ["UF6蒸気を水蒸気と反応させ、UO2F2粒子を生成する", "UF6をアンモニア水へ吸収してADU沈殿を直接生成する", "UF6を硝酸に溶かしてUO3を沈殿させる", "UF6を炭酸ガスだけと反応させてAUCを生成する"]
- 正答選択肢: A
- 正答: UF6蒸気を水蒸気と反応させ、UO2F2粒子を生成する
- 解説: IAEAとJAEA/ATOMICAはいずれもIDR法でUF6と水蒸気を反応させてUO2F2粒子を作るとしている。ADU/AUCの湿式沈殿工程とは異なる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q018
- 問題文: IAEAが示すIDR法で、UO2F2粉末が回転炉内で接触するガス流として正しいものはどれか。
- 選択肢: ["酸素と窒素の並流", "水素と水蒸気の向流", "二酸化炭素とアンモニアの向流", "フッ素とヘリウムの並流"]
- 正答選択肢: B
- 正答: 水素と水蒸気の向流
- 解説: IAEA TECDOC-1613は、UO2F2粉末が回転炉内で水素と水蒸気のcounter-current flowに接触し、UO2へ転換されると説明している。残るガス組合せはIDR法の記載と一致しない。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q019
- 問題文: IDR法で得られるUO2粉末の特徴として正しいものはどれか。
- 選択肢: ["化学的活性が低く、焼結性も低い", "粗大で不活性な粉末のみが得られる", "反応性が高く微細で、焼結性が良い", "流動性だけが高く、焼結性とは無関係である"]
- 正答選択肢: C
- 正答: 反応性が高く微細で、焼結性が良い
- 解説: IAEAはIDR製品UO2をhigh reactivity and fine particle sizeとし、JAEA/ATOMICAは化学的活性度が高く焼結性が良いとする。したがってこの組合せが両資料と一致する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html ; https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf
- verified: true

### CYC-05-Q020
- 問題文: JAEA/ATOMICAが挙げるIDR法の工程上の特徴として正しいものはどれか。
- 選択肢: ["大量の液体廃棄物を発生させることを前提とする", "必ず溶媒抽出工程を必要とする", "沈殿・ろ過工程が主要部を占め、装置容積が大きい", "装置がコンパクトで占有容積が小さく、廃液量が少ない"]
- 正答選択肢: D
- 正答: 装置がコンパクトで占有容積が小さく、廃液量が少ない
- 解説: JAEA/ATOMICAはIDR法の特徴として装置がコンパクトで占める容積が小さく、廃液量が少ないことを挙げる。湿式の沈殿・ろ過や溶媒抽出を必須とする方法ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q021
- 問題文: フレームリアクタ法で火炎内転換を行う際のガスの組合せと、そこで生成するウラン酸化物の組合せとして正しいものはどれか。
- 選択肢: ["UF6＋酸素含有ガス＋水素ガス＋遮蔽用窒素ガス → U3O8", "UF6＋水＋CO2＋NH3 → UO2F2", "UF6＋硝酸アルミニウム → UO2", "UF6＋水蒸気のみ → ADU"]
- 正答選択肢: A
- 正答: UF6＋酸素含有ガス＋水素ガス＋遮蔽用窒素ガス → U3O8
- 解説: JAEA/ATOMICAではフレームリアクタ法でUF6ガス、酸素含有ガス、水素ガス、遮蔽用窒素ガスを混合して火炎内転換し、U3O8粒子を生成する。その後に水素還元してUO2とする。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q022
- 問題文: フレームリアクタ法で火炎内転換により生成したU3O8からUO2粉末を得る操作はどれか。
- 選択肢: ["アンモニア沈殿", "水素還元", "フッ素化", "遠心分離"]
- 正答選択肢: B
- 正答: 水素還元
- 解説: フレームリアクタ法では火炎内でU3O8粒子を作り、それを水素ガスで還元してUO2粉末を得る。残る操作はU3O8→UO2の工程としてJAEA/ATOMICAに示されていない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q023
- 問題文: フレームリアクタ法の特徴としてJAEA/ATOMICAが挙げる組合せはどれか。
- 選択肢: ["工程が長く、廃液量が多く、焼結性が低い", "工程は短いが、必ず多段の溶媒抽出を必要とする", "工程が短く、廃液量が少なく、得られるUO2粉末の焼結性が良い", "工程が湿式沈殿のみで構成され、U3O8を経由しない"]
- 正答選択肢: C
- 正答: 工程が短く、廃液量が少なく、得られるUO2粉末の焼結性が良い
- 解説: JAEA/ATOMICAはフレームリアクタ法について、工程が短く廃液量が少ないこと、UO2粉末の焼結性が良いことを特徴としている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true

### CYC-05-Q024
- 問題文: 再転換後のUO2粉末特性とペレット成形前処理の関係について、IAEAおよびJAEA/ATOMICAの記載に最も合うものはどれか。
- 選択肢: ["粉末の流動性やかさ密度は成形前処理の要否に影響しない", "ADU由来粉末は流動性が十分高いため、造粒を常に省略できる", "AUC由来粉末は流動性が悪いため、ADUより造粒が必須である", "粉末の流動性やかさ密度は成形前処理の要否に関係し、ADU由来粉末は流動性不足から造粒を要しやすい一方、AUC由来粉末は良好な流動性により造粒を省略できる場合がある"]
- 正答選択肢: D
- 正答: 粉末の流動性やかさ密度は成形前処理の要否に関係し、ADU由来粉末は流動性不足から造粒を要しやすい一方、AUC由来粉末は良好な流動性により造粒を省略できる場合がある
- 解説: IAEAは初期UO2粉末の主な特性としてflowabilityとbulk densityを挙げ、これらによりpre-pressing/granulationを省略できる場合があるとする。またADU粉末は流動性不足で中間造粒を要することを示す。JAEA/ATOMICAはAUC粉末の流動性が良く、ペレット成形前の造粒工程を省略できるとしている。
- 出典: https://www-pub.iaea.org/MTCD/publications/PDF/te_1613_web.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-06-02-01.html
- verified: true
