# SAF-02 臨界因子

- status: complete
- verified_at: 2026-09-12
- question_count: 24
- answer_distribution: A=6, B=6, C=6, D=6
- authority: IAEA SSR-4 / SSG-27 Rev.1、JAEA公開資料を正解authorityとする

## 出題根拠

対象論点は、核種・濃縮度・質量・濃度・形状・寸法・密度・減速・反射・相互作用・中性子吸収材。NRAの過去問公開ページで直近の第56～58回「核燃料物質の取扱いに関する技術」を調査対象として確認し、過去問本文は転載せず、臨界安全で管理・評価すべき因子を独立した4択問題にした。

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回 取扱いに関する技術: https://www.nra.go.jp/data/000480853.pdf
- 第57回 取扱いに関する技術: https://www.nra.go.jp/data/000475646.pdf
- 第56回 取扱いに関する技術: https://www.nra.go.jp/data/000472260.pdf
- IAEA SSR-4 Safety of Nuclear Fuel Cycle Facilities: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- IAEA SSG-27 (Rev.1) Criticality Safety in the Handling of Fissile Material: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- JAEA 臨界安全性に関する研究: https://atomica.jaea.go.jp/data/detail/dat_detail_06-01-05-02.html
- JAEA 臨界安全: https://atomica.jaea.go.jp/dic/detail/dic_detail_715.html

## 問題

### SAF-02-Q001
- 問題文: IAEA SSG-27 (Rev.1) が、体系の未臨界性に関係する核燃料物質側のパラメータとして明示しているものはどれか。
- 選択肢: ["核種組成", "作業者の勤続年数", "室内照度", "組織の所属部門数"]
- 正答選択肢: A
- 正答: 核種組成
- 解説: SSG-27 (Rev.1) 1.4は、質量、濃度、減速、幾何形状、核種組成、化学形、温度、密度などを未臨界性に関係するパラメータとして挙げる。残る3項目は同項の臨界因子ではない。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q002
- 問題文: IAEA SSG-27 (Rev.1) で「核種組成」に含まれるものとして明示されている組合せはどれか。
- 選択肢: ["温度・圧力・湿度・流量", "濃縮度・実効濃縮度・プルトニウムベクトル・同位体組成", "質量・容積・表面積・液位", "材質・肉厚・粗さ・硬さ"]
- 正答選択肢: B
- 正答: 濃縮度・実効濃縮度・プルトニウムベクトル・同位体組成
- 解説: SSG-27 (Rev.1) 1.5は nuclide composition が enrichment、effective enrichment、plutonium vector、isotopic composition を包含すると定義する。他の選択肢はこの定義ではない。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q003
- 問題文: IAEA SSR-4 6.144に従い、濃縮度を臨界安全解析に用いる際の原則として正しいものはどれか。
- 選択肢: ["工程の平均濃縮度を常に用いる", "実測した最小濃縮度を用いる", "到達不能であることを二重偶発性原理に従って示さない限り、施設内の最大許可濃縮度を用いる", "公称濃縮度から一定値を差し引いて用いる"]
- 正答選択肢: C
- 正答: 到達不能であることを二重偶発性原理に従って示さない限り、施設内の最大許可濃縮度を用いる
- 解説: SSR-4 6.144(b)は、施設のいずれの部分でも最大許可濃縮度を評価に用いることを原則とし、その濃縮度に到達し得ないことを二重偶発性原理に従って示せる場合を例外とする。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q004
- 問題文: IAEA SSR-4 6.144が質量について要求している評価の考え方はどれか。
- 選択肢: ["臨界質量と同じ値まで許容する", "測定誤差は無視して公称質量だけを用いる", "質量は臨界安全解析の対象外とする", "十分な余裕をもって臨界安全を評価する"]
- 正答選択肢: D
- 正答: 十分な余裕をもって臨界安全を評価する
- 解説: SSR-4 6.144(c)は、質量について significant margin をもって臨界安全を評価するよう要求する。他の選択肢は同要求に反する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q005
- 問題文: IAEA SSR-4 6.144で、幾何形状の臨界安全解析に含めるものとして正しいものはどれか。
- 選択肢: ["施設配置と、配管・容器・その他工程ユニットの寸法", "建屋外壁の塗装色だけ", "運転員の座席配置だけ", "機器の購入価格だけ"]
- 正答選択肢: A
- 正答: 施設配置と、配管・容器・その他工程ユニットの寸法
- 解説: SSR-4 6.144(d)は、施設のlayoutとpipes, vessels, other process unitsのdimensionsを幾何形状評価に含める。残る3項目は同項の幾何形状評価因子ではない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q006
- 問題文: 幾何形状を臨界管理に用いる設備について、IAEA SSR-4が運転状態・事故条件で考慮するよう求める変化はどれか。
- 選択肢: ["照明器具の交換", "侵食や変形による寸法変化", "帳票様式の変更", "作業班の人数変更"]
- 正答選択肢: B
- 正答: 侵食や変形による寸法変化
- 解説: SSR-4 6.144(d)は、erosionやdeformation等により寸法が変わる可能性を運転状態及び事故条件で考慮するよう要求する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q007
- 問題文: 核分裂性物質を含む溶液の濃度について、IAEA SSR-4 6.144が求める解析方法はどれか。
- 選択肢: ["最低濃度だけを解析する", "平均濃度だけを解析する", "起こり得る最も反応度の高い条件を求めるため、濃度範囲を解析する", "濃度を臨界解析から除外する"]
- 正答選択肢: C
- 正答: 起こり得る最も反応度の高い条件を求めるため、濃度範囲を解析する
- 解説: SSR-4 6.144(e)は、溶液について濃度範囲を考慮し、起こり得る最も反応度の高い条件を決定するよう要求する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q008
- 問題文: 溶液の均一性を保証できない場合、IAEA SSR-4が濃度について求める扱いはどれか。
- 選択肢: ["均一と仮定して平均値を使う", "最低濃度を使う", "濃度をゼロとして扱う", "工程・貯蔵部分での最悪ケースの核分裂性物質濃度を考慮する"]
- 正答選択肢: D
- 正答: 工程・貯蔵部分での最悪ケースの核分裂性物質濃度を考慮する
- 解説: SSR-4 6.144(e)は、solution homogeneityを保証できない場合、processing and storage partsでworst case concentrationを考慮するよう要求する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q009
- 問題文: IAEA SSR-4 6.144で、濃度と同じ項目で考慮対象として挙げられているものはどれか。
- 選択肢: ["密度と物質の形態", "運転員の年齢と資格年数", "建屋の階数と窓数", "検査記録の保存年数"]
- 正答選択肢: A
- 正答: 密度と物質の形態
- 解説: SSR-4 6.144(e)は concentration, density and form of materials をまとめて重要因子として扱う。残る3項目は同項に含まれない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q010
- 問題文: 減速の程度について、IAEA SSR-4が要求する解析方法として正しいものはどれか。
- 選択肢: ["減速材が無い条件だけを見る", "起こり得る最も反応度の高い条件を求めるため、減速度の範囲を解析する", "常に水が最大量ある条件だけで十分とする", "減速は臨界安全解析から除外する"]
- 正答選択肢: B
- 正答: 起こり得る最も反応度の高い条件を求めるため、減速度の範囲を解析する
- 解説: SSR-4 6.144(f)は、最も反応度の高い条件を決定するためrange of degrees of moderationを解析することを要求する。特定の一条件だけでよいとはしていない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q011
- 問題文: 中性子反射について、IAEA SSR-4 6.144の要求として正しいものはどれか。
- 選択肢: ["反射は常に無視する", "反射体が水の場合だけ考慮する", "反射について保守的な仮定を置く", "反射は運転開始後だけ評価する"]
- 正答選択肢: C
- 正答: 反射について保守的な仮定を置く
- 解説: SSR-4 6.144(g)は、reflectionについてconservative assumptionを置くことを明示する。材質を水だけに限定していない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q012
- 問題文: JAEAの低濃縮ウラン硝酸水溶液の臨界実験説明で、臨界となる核燃料物質量を大きく変化させると示されている組合せはどれか。
- 選択肢: ["室温と照度", "作業人数と作業時間", "容器の色と表面仕上げ", "核燃料物質の濃度と、中性子を反射する水の有無"]
- 正答選択肢: D
- 正答: 核燃料物質の濃度と、中性子を反射する水の有無
- 解説: JAEAの臨界安全性研究は、U-235濃縮度10%のウラン硝酸水溶液実験を例に、濃度と水反射体の有無により臨界となる核燃料物質量が大きく変化すると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_06-01-05-02.html
- verified: true

### SAF-02-Q013
- 問題文: JAEAが、再処理施設の溶液燃料機器周辺で中性子反射効果を持ち臨界量へ影響すると説明している主要構造材の組合せはどれか。
- 選択肢: ["コンクリートとポリエチレン", "銅と銀だけ", "ガラスと木材だけ", "紙とゴムだけ"]
- 正答選択肢: A
- 正答: コンクリートとポリエチレン
- 解説: JAEAは、再処理施設の機器周囲にあるコンクリートやポリエチレンが水と同様に中性子を反射し、臨界量に影響すると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_06-01-05-02.html
- verified: true

### SAF-02-Q014
- 問題文: JAEAの説明によれば、反射体が臨界量へ与える効果を評価する際に重要な条件はどれか。
- 選択肢: ["反射体の製造会社と価格", "反射体の材質と厚さ", "反射体の塗装色と光沢", "反射体の製造年月だけ"]
- 正答選択肢: B
- 正答: 反射体の材質と厚さ
- 解説: JAEAは、コンクリートやポリエチレンの反射効果は材質や厚さによって変わるため、実験値に基づく評価が必要と説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_06-01-05-02.html
- verified: true

### SAF-02-Q015
- 問題文: 複数ユニットを含む施設の中性子相互作用について、IAEA SSR-4 6.144が考慮を求めている範囲はどれか。
- 選択肢: ["固定設備だけで、移動設備は除外する", "隣接する1ユニットだけ", "関係し得る全施設ユニットと、配列へ接近し得る移動ユニット", "同一メーカーの設備だけ"]
- 正答選択肢: C
- 正答: 関係し得る全施設ユニットと、配列へ接近し得る移動ユニット
- 解説: SSR-4 6.144(h)は、involvedするall facility unitsの中性子相互作用を考慮し、arrayへ接近し得るmobile unitも含めるよう要求する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q016
- 問題文: JAEAが説明する複数ユニットの臨界安全として正しいものはどれか。
- 選択肢: ["単独で未臨界なら、何台密着させても必ず未臨界である", "ユニット間距離を小さくするほど中性子相互作用は必ず無視できる", "複数ユニットでは中性子吸収材を使ってはならない", "単独で未臨界の貯槽でも複数配列で臨界となる可能性があるため、距離や中性子吸収材で相互作用を小さくする"]
- 正答選択肢: D
- 正答: 単独で未臨界の貯槽でも複数配列で臨界となる可能性があるため、距離や中性子吸収材で相互作用を小さくする
- 解説: JAEAは、単一ユニットで未臨界でも複数配列で臨界となり得るため、貯槽間距離を大きくする、または中間に中性子吸収材を設置して相互作用を小さくする方法を説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_06-01-05-02.html
- verified: true

### SAF-02-Q017
- 問題文: IAEA SSR-4 6.143が未臨界限度内に保つパラメータとして明示しているものはどれか。
- 選択肢: ["適切な中性子吸収材の存在", "設備の購入年度", "運転員の交代周期", "建屋の外壁色"]
- 正答選択肢: A
- 正答: 適切な中性子吸収材の存在
- 解説: SSR-4 6.143は、質量・濃縮度、幾何形状、濃度、減速度、反射体管理とともにappropriate neutron absorbersの存在を臨界安全パラメータとして列挙する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q018
- 問題文: 中性子吸収材を臨界安全解析で考慮し、劣化・破損・脱落のリスクがある場合、IAEA SSR-4が求める対応はどれか。
- 選択肢: ["設置後は確認不要とする", "定期検査で吸収材の存在と健全性を確認可能にする", "吸収材の材質記録を廃棄する", "吸収材を解析から自動的に除外する"]
- 正答選択肢: B
- 正答: 定期検査で吸収材の存在と健全性を確認可能にする
- 解説: SSR-4 6.144(i)は、吸収材のdegradation、breakage、dislodgementのリスクがある場合、presence and integrityをperiodic inspectionでverifiableにすることを要求する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-02-Q019
- 問題文: IAEA SSG-27 (Rev.1) が、核燃料物質そのもの以外に未臨界性へ影響する周囲物質として挙げる組合せはどれか。
- 選択肢: ["潤滑油・塗料・接着剤だけ", "空調冷媒・照明器具・床材だけ", "中性子減速材・中性子吸収材・中性子反射材", "事務用品・包装紙・ラベルだけ"]
- 正答選択肢: C
- 正答: 中性子減速材・中性子吸収材・中性子反射材
- 解説: SSG-27 (Rev.1) 1.4は、other materialsとしてneutron moderators, neutron absorbers, neutron reflectorsの存在が未臨界性へ影響すると明記する。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q020
- 問題文: IAEA SSG-27 (Rev.1) が未臨界性への影響因子として、特に流体について考慮するとしているものはどれか。
- 選択肢: ["文書の改訂履歴", "作業者の通勤経路", "設備の帳簿価格", "動的効果"]
- 正答選択肢: D
- 正答: 動的効果
- 解説: SSG-27 (Rev.1) 1.4はdynamic effectsを未臨界性への影響因子に含め、特にfluidsについて言及している。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q021
- 問題文: IAEA SSG-27 (Rev.1) による未臨界性確保の考え方として正しいものはどれか。
- 選択肢: ["一つのパラメータを単独で管理しても、複数パラメータを組み合わせて管理してもよい", "必ず質量だけで管理しなければならない", "必ず幾何形状だけで管理しなければならない", "管理パラメータを二つ以上用いることは禁止される"]
- 正答選択肢: A
- 正答: 一つのパラメータを単独で管理しても、複数パラメータを組み合わせて管理してもよい
- 解説: SSG-27 (Rev.1) 1.4は、single parameter又はcombination of parametersのcontrolにより未臨界性を確保できるとしている。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q022
- 問題文: IAEA SSG-27 (Rev.1) が、複数パラメータを組み合わせた未臨界管理の例として明示しているものはどれか。
- 選択肢: ["温度と照度", "質量と減速", "価格と在庫番号", "作業時間と休憩時間"]
- 正答選択肢: B
- 正答: 質量と減速
- 解説: SSG-27 (Rev.1) 1.4は、例としてlimiting mass alone、又はlimiting both mass and moderationを挙げている。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q023
- 問題文: IAEA SSG-27 (Rev.1) によれば、未臨界性に関係するパラメータの管理手段として正しいものはどれか。
- 選択肢: ["管理手段は行政措置だけに限る", "管理手段は設備措置だけに限る", "工学的措置及び／又は管理的措置で制御できる", "いずれの手段でもパラメータを制御してはならない"]
- 正答選択肢: C
- 正答: 工学的措置及び／又は管理的措置で制御できる
- 解説: SSG-27 (Rev.1) 1.4は、臨界パラメータはengineered and/or administrative measuresによってcontrolできるとしている。
- 出典: https://nucleus-apps.iaea.org/nss-oui/Content/Index?CollectionId=m_9b9aefeb-0e98-40e3-b674-21dfb15bf315&type=PublishedCollection
- verified: true

### SAF-02-Q024
- 問題文: IAEA SSR-4 6.144が臨界計算で考慮するよう求めている不確かさの例として正しいものはどれか。
- 選択肢: ["作業服の色・靴のサイズ・所属部署", "帳票の字体・紙質・綴じ方", "設備名称・資産番号・購入価格", "質量・密度・幾何形状・核断面積データセット"]
- 正答選択肢: D
- 正答: 質量・密度・幾何形状・核断面積データセット
- 解説: SSR-4 6.144(j)は、mass, density, geometry, nuclear cross-section data sets等、全パラメータのuncertaintiesを臨界計算で考慮するよう要求する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true
