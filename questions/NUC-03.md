# NUC-03 プルトニウム同位体

- status: complete
- verified_at: 2026-09-12
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- numeric_authority:
  - 238Pu half-life: JAEA ATOMICA「原子力電池（アイソトープ電池）」の87.74年
  - 241Pu half-life: JAEA 保障措置分析化学研究グループの14.29年
  - 239Pu / 240Pu / 242Pu half-life: BGE公的資料の24,110年 / 6,563年 / 375,000年

## 出題根拠

対象論点は、238Pu～242Pu、核分裂性、壊変形式、半減期、241Pu→241Am、燃焼に伴う組成変化。NRAの直近過去問公開ページで第56～58回の公開状況を確認した。第56回「核燃料物質の化学的性質及び物理的性質」第1問(4)では、238Pu～242Puについて最長半減期、β壊変核種、その半減期が直接問われている。第57回ではPuO2/MOXの物性が出題されており、Pu関連物性は継続して重要である。過去問の文章は転載せず、同じ知識を独立した4択問題へ再構成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第56回 核燃料物質の化学的性質及び物理的性質: https://www.nra.go.jp/data/000472259.pdf
- NRA 第57回 核燃料物質の化学的性質及び物理的性質: https://www.nra.go.jp/data/000475645.pdf
- JAEA ATOMICA「プルトニウム核種の生成」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- JAEA ATOMICA「原子炉級プルトニウム」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1950.html
- JAEA ATOMICA「アメリシウム241」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html
- JAEA 保障措置分析化学研究グループ: https://www.jaea.go.jp/04/anzen/group/sgac/index.html
- JAEA ATOMICA「原子力電池（アイソトープ電池）」: https://atomica.jaea.go.jp/data/detail/dat_detail_08-04-02-08.html
- JAEA ATOMICA「原爆用と産業用プルトニウムとの組成の比較」: https://atomica.jaea.go.jp/data/detail/dat_detail_13-05-01-07.html
- BGE（ドイツ連邦放射性廃棄物処分機関）Plutonium: https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html
- IAEA NFCSS reactor model: https://infcis.iaea.org/nfcss/modeling/reactor

## 問題

### NUC-03-Q001
- 問題文: 熱中性子炉で核燃料として扱う場合、238Pu～242Puのうち核分裂性同位体の組合せとして適切なものはどれか。
- 選択肢: ["239Puと241Pu", "238Puと240Pu", "240Puと242Pu", "238Puと242Pu"]
- 正答選択肢: A
- 正答: 239Puと241Pu
- 解説: JAEAは、大づかみに奇数質量数のPu同位体が核分裂性で、偶数質量数は親物質と説明している。238～242の範囲では239Puと241Puが該当する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### NUC-03-Q002
- 問題文: 240Puが中性子を1個吸収したとき、主要な生成核種として適切なものはどれか。
- 選択肢: ["239Pu", "241Pu", "242Pu", "241Am"]
- 正答選択肢: B
- 正答: 241Pu
- 解説: 240Puは熱中性子では核分裂しにくい親物質で、中性子を吸収すると241Puとなる。241Puは核分裂性同位体である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### NUC-03-Q003
- 問題文: JAEAの概略的な分類に従うと、238Pu～242Puのうち偶数質量数で親物質側に分類される組合せはどれか。
- 選択肢: ["239Puと241Pu", "238Puと239Puと241Pu", "238Puと240Puと242Pu", "240Puと241Puと242Pu"]
- 正答選択肢: C
- 正答: 238Puと240Puと242Pu
- 解説: JAEAは、概略的には奇数質量数のPuを核分裂性、偶数質量数のPuを親物質と説明している。したがって238Pu、240Pu、242Puが該当する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### NUC-03-Q004
- 問題文: 238Pu～242Puの主要な壊変を比べたとき、β壊変する同位体はどれか。
- 選択肢: ["238Pu", "239Pu", "240Pu", "241Pu"]
- 正答選択肢: D
- 正答: 241Pu
- 解説: 241Puはβ−壊変して241Amを生成する。JAEAの資料では241Pu→241Amが明示され、Puの測定資料でも241Puはβ線測定の対象として区別されている。
- 出典: https://www.jaea.go.jp/04/anzen/group/sgac/index.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html ; https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html
- verified: true

### NUC-03-Q005
- 問題文: 241Puのβ−壊変で生成する娘核種はどれか。
- 選択肢: ["241Am", "237Np", "242Pu", "240Pu"]
- 正答選択肢: A
- 正答: 241Am
- 解説: 241Puはβ−壊変して241Amとなる。質量数は241のまま、原子番号が94から95へ1増える。
- 出典: https://www.jaea.go.jp/04/anzen/group/sgac/index.html
- verified: true

### NUC-03-Q006
- 問題文: 241Puの物理半減期として最も近いものはどれか。
- 選択肢: ["約87.7年", "約14.3年", "約432.6年", "約6.56×10^3年"]
- 正答選択肢: B
- 正答: 約14.3年
- 解説: JAEAの保障措置分析化学研究グループは241Puの半減期を14.29年としている。432.6年は娘核種241Amの半減期である。
- 出典: https://www.jaea.go.jp/04/anzen/group/sgac/index.html
- verified: true

### NUC-03-Q007
- 問題文: 238Puの物理半減期として最も近いものはどれか。
- 選択肢: ["約14.3年", "約2.41×10^4年", "約87.7年", "約3.75×10^5年"]
- 正答選択肢: C
- 正答: 約87.7年
- 解説: JAEAの原子力電池解説では238Puの半減期を87.74年としている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-04-02-08.html
- verified: true

### NUC-03-Q008
- 問題文: 239Puの物理半減期として最も近いものはどれか。
- 選択肢: ["約87.7年", "約6.56×10^3年", "約3.75×10^5年", "約2.41×10^4年"]
- 正答選択肢: D
- 正答: 約2.41×10^4年
- 解説: ドイツ連邦放射性廃棄物処分機関BGEの公的資料は239Puの半減期を24,110年としている。JAEAも約2万4千年と説明している。
- 出典: https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_13-05-01-07.html
- verified: true

### NUC-03-Q009
- 問題文: 240Puの物理半減期として最も近いものはどれか。
- 選択肢: ["約6.56×10^3年", "約14.3年", "約87.7年", "約2.41×10^4年"]
- 正答選択肢: A
- 正答: 約6.56×10^3年
- 解説: BGEの公的資料は240Puの半減期を6,563年としている。
- 出典: https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html
- verified: true

### NUC-03-Q010
- 問題文: 242Puの物理半減期として最も近いものはどれか。
- 選択肢: ["約2.41×10^4年", "約3.75×10^5年", "約6.56×10^3年", "約87.7年"]
- 正答選択肢: B
- 正答: 約3.75×10^5年
- 解説: BGEの公的資料は242Puの半減期を375,000年としている。
- 出典: https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html
- verified: true

### NUC-03-Q011
- 問題文: 238Pu～242Puの中で、物理半減期が最も長い同位体はどれか。
- 選択肢: ["239Pu", "240Pu", "242Pu", "238Pu"]
- 正答選択肢: C
- 正答: 242Pu
- 解説: BGEの半減期表では238Pu 87.74年、239Pu 24,110年、240Pu 6,563年、241Pu 14.35年、242Pu 375,000年であり、242Puが最長である。
- 出典: https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html
- verified: true

### NUC-03-Q012
- 問題文: 238Pu～242Puを物理半減期の長い順に並べたものとして適切なのはどれか。
- 選択肢: ["239Pu ＞ 242Pu ＞ 240Pu ＞ 238Pu ＞ 241Pu", "242Pu ＞ 240Pu ＞ 239Pu ＞ 238Pu ＞ 241Pu", "242Pu ＞ 239Pu ＞ 238Pu ＞ 240Pu ＞ 241Pu", "242Pu ＞ 239Pu ＞ 240Pu ＞ 238Pu ＞ 241Pu"]
- 正答選択肢: D
- 正答: 242Pu ＞ 239Pu ＞ 240Pu ＞ 238Pu ＞ 241Pu
- 解説: BGEの半減期表に基づくと、375,000年、24,110年、6,563年、87.74年、14.35年の順なので、242Pu＞239Pu＞240Pu＞238Pu＞241Puとなる。
- 出典: https://archiv.bge.de/archiv/www.asse.bund.de/EN/topics/ion/effect/radioactive-materials/plutonium/plutonium_node.html
- verified: true

### NUC-03-Q013
- 問題文: 原子炉級プルトニウムの「核分裂性同位体」の組成比を論じるとき、JAEAが合計対象としている2核種はどれか。
- 選択肢: ["239Puと241Pu", "238Puと240Pu", "240Puと242Pu", "238Puと242Pu"]
- 正答選択肢: A
- 正答: 239Puと241Pu
- 解説: JAEAは発電用軽水炉から回収される原子炉級Puについて、核分裂性同位体を239Puと241Puとしてその合計比率を示している。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1950.html
- verified: true

### NUC-03-Q014
- 問題文: 発電用軽水炉の使用済燃料から回収される原子炉級プルトニウムについて、239Puと241Puを合わせた核分裂性同位体比率の目安として適切なのはどれか。
- 選択肢: ["約90～100％", "約60～70％", "約30～40％", "約10～20％"]
- 正答選択肢: B
- 正答: 約60～70％
- 解説: JAEAは、発電用軽水炉から回収される原子炉級Puでは239Puと241Puの比率が60～70％程度と説明している。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1950.html
- verified: true

### NUC-03-Q015
- 問題文: 原子炉級プルトニウムに含まれる同位体のうち、発熱性の寄与が主に問題となるものはどれか。
- 選択肢: ["239Pu", "240Pu", "238Pu", "241Pu"]
- 正答選択肢: C
- 正答: 238Pu
- 解説: JAEAは原子炉級Puについて、発熱性の同位体として主に238Puを挙げている。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1950.html
- verified: true

### NUC-03-Q016
- 問題文: 原子炉級プルトニウムに含まれる同位体のうち、自発核分裂の寄与が主に問題となるものはどれか。
- 選択肢: ["238Pu", "239Pu", "241Pu", "240Pu"]
- 正答選択肢: D
- 正答: 240Pu
- 解説: JAEAは原子炉級Puについて、自発核分裂を起こす同位体として主に240Puを挙げている。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1950.html
- verified: true

### NUC-03-Q017
- 問題文: 再処理で回収したプルトニウムを長期間保管したときの241Puと241Amの組成変化として適切なのはどれか。
- 選択肢: ["241Puが減少し、241Amが増加する", "241Puが増加し、241Amが減少する", "241Puと241Amがともに増加する", "241Puと241Amがともに一定である"]
- 正答選択肢: A
- 正答: 241Puが減少し、241Amが増加する
- 解説: 241Puがβ−壊変して241Amになるため、保管時間の経過とともに241Puの割合は減り、241Amの割合は増える。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html ; https://www.jaea.go.jp/04/anzen/group/sgac/index.html
- verified: true

### NUC-03-Q018
- 問題文: プルトニウム粒子の精製時期推定にJAEAが利用している親核種・娘核種の比はどれか。
- 選択肢: ["239Pu/240Pu", "241Am/241Pu", "238Pu/239Pu", "242Pu/240Pu"]
- 正答選択肢: B
- 正答: 241Am/241Pu
- 解説: JAEAは、241Puが半減期14.29年でβ壊変して241Amを蓄積することを利用し、241Am/241Pu比からPu粒子の精製時期を推定している。
- 出典: https://www.jaea.go.jp/04/anzen/group/sgac/index.html
- verified: true

### NUC-03-Q019
- 問題文: ウラン燃料の原子炉照射が進むとき、Pu同位体組成が高次化する理由として適切なのはどれか。
- 選択肢: ["照射中はPu同位体がすべて同じ割合で減衰するため", "中性子捕獲はPu同位体の質量数を必ず小さくするため", "炉内でPu同位体が中性子を吸収し、より質量数の大きいPu同位体へつながる反応が進むため", "241Puがα壊変して242Puになるため"]
- 正答選択肢: C
- 正答: 炉内でPu同位体が中性子を吸収し、より質量数の大きいPu同位体へつながる反応が進むため
- 解説: JAEAは、炉内のPu同位体が時間の経過とともに中性子を吸収し、質量数の大きな高次同位体が増大すると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### NUC-03-Q020
- 問題文: 使用済燃料から回収されるプルトニウムの同位体組成を左右する要因の組合せとして、JAEAが明示しているものはどれか。
- 選択肢: ["再処理工場の所在地・建屋高さ・作業人数", "燃料集合体の外形・輸送容器の色・保管建屋の面積", "冷却水の塩分・大気圧・周辺人口", "原子炉の型・燃料の種類・燃焼度"]
- 正答選択肢: D
- 正答: 原子炉の型・燃料の種類・燃焼度
- 解説: JAEAは、回収Puの各同位体の割合は原子炉の型、燃料の種類、燃焼度によって異なると説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_13-05-01-07.html
- verified: true
