# CAL-02 核種生成

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: JAEA ATOMICAのβ壊変・系列壊変・プルトニウム生成解説、JAEA/GIFのトリウム燃料サイクル資料を主要根拠とした。NRA公式「過去の資格試験問題」で第58回・第57回・第56回の「核燃料物質の化学的性質及び物理的性質」を確認し、過去問本文は転載せず、核種変換・核種生成の論点だけを新規4択へ再構成した。

## 出題根拠

対象は `11_計算・記述演習.md` の CAL-02（親→娘、捕獲＋β壊変、238U→239Pu、232Th→233U）。中性子捕獲で質量数が1増え原子番号は変わらないこと、β−壊変で質量数を保ったまま原子番号が1増えること、238U→239U→239Np→239Pu、232Th→233Th→233Pa→233Uの生成経路、各中間核種の代表的半減期、親核種から娘核種への生成量計算を網羅した。数値問題はJAEA資料の代表値（239U: 23.5 min、239Np: 約2.3 d、233Th: 約22 min、233Pa: 約27 d）に固定した。

## 主要参照資料

- JAEA ATOMICA「プルトニウム核種の生成」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- JAEA ATOMICA「β壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- JAEA ATOMICA「原子核物理の基礎（2）原子核の壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- JAEA ATOMICA「原子核と核反応」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-03.html
- JAEA/GIF「ON THORIUM AS NUCLEAR FUEL」p.15: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html

## 問題

### CAL-02-Q001
- 問題文: 238Uから239Puが生成する主要な経路として正しいものはどれか。
- 選択肢: ["238U(n,γ)239U → β− → 239Np → β− → 239Pu", "238U → α → 234Th → β− → 234Pa → β− → 239Pu", "238U(n,2n)237U → β− → 237Np → β− → 239Pu", "238U → β− → 238Np → β− → 238Pu"]
- 正答選択肢: A
- 正答: 238U(n,γ)239U → β− → 239Np → β− → 239Pu
- 解説: JAEAは、238Uが中性子を捕獲して239Uとなり、239Uがβ−壊変して239Np、さらにβ−壊変して239Puになる経路を示している。Bは質量数234の系列で239Puにはならず、Cは最初に質量数237へ減っており主要生成経路ではない。Dは中性子捕獲を欠き、質量数も238のままで239Puにならない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html ; https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q002
- 問題文: 238Uが(n,γ)反応で中性子を1個捕獲した直後に生成する核種はどれか。
- 選択肢: ["238U", "239U", "239Np", "239Pu"]
- 正答選択肢: B
- 正答: 239U
- 解説: 中性子捕獲では陽子数は変わらず、中性子数が1増えるため、原子番号92のまま質量数が238から239になる。したがって239Uが生成する。239Npと239Puはその後のβ−壊変で生じる。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-03.html
- verified: true

### CAL-02-Q003
- 問題文: β−壊変に伴う質量数Aと原子番号Zの変化として正しいものはどれか。
- 選択肢: ["Aが1増え、Zは変わらない", "Aが4減り、Zが2減る", "Aは変わらず、Zが1増える", "Aは変わらず、Zが1減る"]
- 正答選択肢: C
- 正答: Aは変わらず、Zが1増える
- 解説: JAEAはβ−壊変では核内の中性子が陽子に変わるため、質量数は変わらず原子番号が1増えるとしている。Aは中性子捕獲、Bはα壊変、Dはβ＋壊変または電子捕獲に対応する変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### CAL-02-Q004
- 問題文: 238Uから239Puへの主要生成経路で、239Uと239Puの間に位置する核種はどれか。
- 選択肢: ["238Np", "240Np", "239Am", "239Np"]
- 正答選択肢: D
- 正答: 239Np
- 解説: 238U(n,γ)239Uの後、239Uがβ−壊変して239Npとなり、239Npがさらにβ−壊変して239Puになる。したがって中間核種は239Npであり、他の3核種はこの主要経路に含まれない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### CAL-02-Q005
- 問題文: 232Thから233Uが生成する主要な経路として正しいものはどれか。
- 選択肢: ["232Th(n,γ)233Th → β− → 233Pa → β− → 233U", "232Th → β− → 232Pa → β− → 232U", "232Th(n,γ)233Th → α → 229Ra → β− → 233U", "232Th(n,2n)231Th → β− → 231Pa → β− → 233U"]
- 正答選択肢: A
- 正答: 232Th(n,γ)233Th → β− → 233Pa → β− → 233U
- 解説: JAEA/GIF資料は、232Thが中性子捕獲で233Thとなり、233Th→233Pa→233Uと2回のβ−壊変を経る経路を示している。Bは中性子捕獲を欠き質量数232のまま、Cはα壊変で質量数が減少し、Dは(n,2n)で質量数231になるため、いずれも233Uの主要増殖経路ではない。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q006
- 問題文: 232Thから233Uへの主要生成経路で、233Thと233Uの間に位置する核種はどれか。
- 選択肢: ["233Np", "233Pa", "233Pu", "232Pa"]
- 正答選択肢: B
- 正答: 233Pa
- 解説: 232Th(n,γ)233Thの後、233Thがβ−壊変して233Paとなり、233Paがβ−壊変して233Uになる。したがって中間核種は233Paである。他の選択肢はこの主要経路に含まれない。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q007
- 問題文: 232Thを親物質とするトリウム燃料サイクルで、中性子捕獲とβ−壊変を経て得られる核分裂性核種はどれか。
- 選択肢: ["232U", "233Pa", "233U", "239Pu"]
- 正答選択肢: C
- 正答: 233U
- 解説: IAEA/JAEA系資料では232Thはfertile（親物質）で、中性子照射により核分裂性の233Uへ転換される。233Paはその中間核種であり、232Uや239Puはこの主要経路の最終生成核種ではない。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q008
- 問題文: JAEA/GIF資料に示された代表的半減期を比べたとき、233Paと239Npの関係として正しいものはどれか。
- 選択肢: ["233Paは約2.3日、239Npは約27日である", "両者とも約27日である", "両者とも約2.3日である", "233Paは約27日で、239Npは約2.3日である"]
- 正答選択肢: D
- 正答: 233Paは約27日で、239Npは約2.3日である
- 解説: JAEA/GIF資料では233Paは約27 d、239Npは約2.3 dと示される。したがって233Paの方が中間核種として長寿命である。Aは値を逆にし、B・Cは両核種を同じ半減期としているため誤り。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q009
- 問題文: JAEA/GIF資料に示された239Uの代表的半減期として最も適切なものはどれか。
- 選択肢: ["23.5 min", "2.3 d", "27 d", "2.4×10^4 y"]
- 正答選択肢: A
- 正答: 23.5 min
- 解説: JAEA/GIF資料は239Uの半減期を23.5 minと示している。2.3 dは239Np、27 dは233Pa、2.4×10^4 yは239Puの代表的半減期であり、核種が異なる。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q010
- 問題文: JAEA/GIF資料に示された239Npの代表的半減期として最も適切なものはどれか。
- 選択肢: ["23.5 min", "約2.3 d", "約22 min", "約27 d"]
- 正答選択肢: B
- 正答: 約2.3 d
- 解説: JAEA/GIF資料では239Npの半減期は約2.3 dである。23.5 minは239U、約22 minは233Th、約27 dは233Paに対応する。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q011
- 問題文: JAEA/GIF資料に示された233Thの代表的半減期として最も適切なものはどれか。
- 選択肢: ["約27 d", "約2.3 d", "約22 min", "1.6×10^5 y"]
- 正答選択肢: C
- 正答: 約22 min
- 解説: JAEA/GIF資料では233Thの半減期は約22 minと示される。約27 dは233Pa、約2.3 dは239Np、1.6×10^5 yは233Uの代表的半減期である。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q012
- 問題文: JAEA/GIF資料に示された233Paの代表的半減期として最も適切なものはどれか。
- 選択肢: ["23.5 min", "約2.3 d", "約22 min", "約27 d"]
- 正答選択肢: D
- 正答: 約27 d
- 解説: JAEA/GIF資料では233Paの半減期は約27 dである。Aは239U、Bは239Np、Cは233Thの代表値に対応する。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q013
- 問題文: 中性子照射を止めた直後に239Uが800個あり、その後は新たな239U生成がないとする。239Uの半減期を23.5 minとしたとき、47.0 min後に残る239Uは何個か。
- 選択肢: ["200個", "400個", "600個", "100個"]
- 正答選択肢: A
- 正答: 200個
- 解説: 47.0 min ÷ 23.5 min = 2半減期。したがって N=800×(1/2)^2=200個。単位minは比で相殺される。検算: 800→23.5 min後400→47.0 min後200。Bは1半減期後、Cは25%しか減っていない値、Dは3半減期後の値である。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### CAL-02-Q014
- 問題文: 239Npが初めに1600個あり、新たな生成がない。半減期を2.3 dとしたとき、4.6 d後に残る239Npは何個か。
- 選択肢: ["800個", "400個", "200個", "1200個"]
- 正答選択肢: B
- 正答: 400個
- 解説: 4.6 d ÷ 2.3 d = 2半減期。N=1600×(1/2)^2=400個。検算: 1600→2.3 d後800→4.6 d後400。Aは1半減期後、Cは3半減期後、Dは指数壊変に一致しない。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### CAL-02-Q015
- 問題文: 233Paが初めに1200個あり、新たな生成がない。半減期を27 dとしたとき、54 d後に残る233Paは何個か。
- 選択肢: ["600個", "150個", "300個", "900個"]
- 正答選択肢: C
- 正答: 300個
- 解説: 54 d ÷ 27 d = 2半減期。N=1200×(1/2)^2=300個。検算: 1200→27 d後600→54 d後300。Aは1半減期後、Bは3半減期後、Dは指数壊変に一致しない。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### CAL-02-Q016
- 問題文: 中性子照射停止直後に233Thが1000個あり、その後の新規生成はない。233Thの半減期を22 minとし、生成した233Paの66 min中の壊変は無視する。66 min後までに生成した233Paは何個か。
- 選択肢: ["125個", "250個", "500個", "875個"]
- 正答選択肢: D
- 正答: 875個
- 解説: 66 min ÷ 22 min = 3半減期なので233Th残存数は1000×(1/2)^3=125個。233Thはβ−壊変で1個につき233Paを1個生成し、問題条件では233Paの壊変を無視するため、生成233Pa=1000−125=875個。検算: 1000個の87.5%が壊変した値である。Aは残存233Th、Bは2半減期後の残存数、Cは1半減期後の残存数。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### CAL-02-Q017
- 問題文: 親核種Pが100%の分岐で安定な娘核種Dへ壊変し、初めDは0個とする。Pの半減期が8.0 h、初期Pが800個のとき、16.0 h後のDは何個か。
- 選択肢: ["600個", "200個", "400個", "800個"]
- 正答選択肢: A
- 正答: 600個
- 解説: 16.0 h ÷ 8.0 h = 2半減期なのでP残存数は800×(1/2)^2=200個。Dは安定で分岐100%だから生成数は800−200=600個。単位hは比で相殺される。検算: P+D=200+600=800個で初期核数と一致する。Bは残存P、Cは1半減期後に生成するD、Dは全Pが壊変した場合の値。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### CAL-02-Q018
- 問題文: 親核種Pが100%の分岐で安定な娘核種Dへ壊変し、初めDは0個とする。3半減期経過した時点で、初期Pに対するDの生成割合はいくらか。
- 選択肢: ["12.5%", "87.5%", "75.0%", "50.0%"]
- 正答選択肢: B
- 正答: 87.5%
- 解説: 3半減期後のP残存割合は(1/2)^3=1/8=12.5%。Dは安定で分岐100%なので生成割合は1−1/8=7/8=87.5%。検算: 12.5%+87.5%=100%。Aは残存P、Cは2半減期後のD、Dは1半減期後のDである。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### CAL-02-Q019
- 問題文: 239U（原子番号92）がβ−壊変した直後の娘核種の質量数と原子番号の組合せはどれか。
- 選択肢: ["質量数240、原子番号92", "質量数238、原子番号93", "質量数239、原子番号93", "質量数239、原子番号91"]
- 正答選択肢: C
- 正答: 質量数239、原子番号93
- 解説: β−壊変では質量数は変わらず、原子番号が1増える。したがって239U（A=239, Z=92）からA=239, Z=93の239Npが生じる。Aは中性子捕獲型の変化、Bは質量数が減っており、Dは原子番号が逆方向に変化している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### CAL-02-Q020
- 問題文: 239Np（原子番号93）がβ−壊変した直後の娘核種の質量数と原子番号の組合せはどれか。
- 選択肢: ["質量数238、原子番号94", "質量数240、原子番号93", "質量数239、原子番号92", "質量数239、原子番号94"]
- 正答選択肢: D
- 正答: 質量数239、原子番号94
- 解説: β−壊変ではAは一定、Zは1増加するため、239Np（A=239, Z=93）は239Pu（A=239, Z=94）になる。Aは質量数を減らしており、Bは質量数を増やすだけ、Cは原子番号が減っている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html
- verified: true

### CAL-02-Q021
- 問題文: 232Th（原子番号90）が(n,γ)反応で中性子を1個捕獲した直後の核種の質量数と原子番号はどれか。
- 選択肢: ["質量数233、原子番号90", "質量数232、原子番号91", "質量数233、原子番号91", "質量数231、原子番号90"]
- 正答選択肢: A
- 正答: 質量数233、原子番号90
- 解説: 中性子捕獲では陽子数Zは変わらず、中性子数が1増えるためAが1増える。したがって232Thは233Th（A=233, Z=90）になる。B・Cは捕獲直後に原子番号まで変えており、Dは質量数を減らしている。
- 出典: https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-03.html
- verified: true

### CAL-02-Q022
- 問題文: 233Th（原子番号90）がβ−壊変した直後の娘核種の質量数と原子番号はどれか。
- 選択肢: ["質量数232、原子番号91", "質量数233、原子番号91", "質量数234、原子番号90", "質量数233、原子番号89"]
- 正答選択肢: B
- 正答: 質量数233、原子番号91
- 解説: β−壊変ではAは不変、Zは1増加する。したがって233Th（A=233, Z=90）は233Pa（A=233, Z=91）になる。A・Cは質量数を変えており、Dは原子番号を減らしている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q023
- 問題文: 233Pa（原子番号91）がβ−壊変した直後の娘核種の質量数と原子番号はどれか。
- 選択肢: ["質量数234、原子番号91", "質量数232、原子番号92", "質量数233、原子番号92", "質量数233、原子番号90"]
- 正答選択肢: C
- 正答: 質量数233、原子番号92
- 解説: β−壊変では質量数は変化せず原子番号が1増えるため、233Pa（A=233, Z=91）は233U（A=233, Z=92）になる。A・Bは質量数を変えており、Dは原子番号を減らしている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true

### CAL-02-Q024
- 問題文: 238U→239Pu経路と232Th→233U経路に共通する、親核種から最終核分裂性核種までの正味の質量数A・原子番号Zの変化はどれか。
- 選択肢: ["Aは1減少し、Zは2増加する", "Aは変わらず、Zは1増加する", "Aは2増加し、Zは変わらない", "Aは1増加し、Zは2増加する"]
- 正答選択肢: D
- 正答: Aは1増加し、Zは2増加する
- 解説: 両経路とも最初に中性子を1個捕獲するのでAが1増えZは不変。その後β−壊変を2回行うためAは変わらずZが合計2増える。実際に238U（A=238,Z=92）→239Pu（A=239,Z=94）、232Th（A=232,Z=90）→233U（A=233,Z=92）となる。A～Cはいずれもこの2経路の正味変化と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-01.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://gif.jaea.go.jp/webinar/Series11/geniv-thorium-final-7-11-17.pdf
- verified: true
