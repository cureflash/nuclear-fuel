# NUC-06 放射性壊変

- status: complete
- verified_at: 2026-09-13
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- verification_note: α壊変、β−壊変、β+壊変、軌道電子捕獲、核異性体転移、自発核分裂、Z/A変化、天然壊変系列をJAEA ATOMICAおよびNRA公開過去問で照合した。各誤答肢は、同じ一次・公的資料で示される別の壊変則・別系列、または保存則に反する組合せとして排除した。

## 出題根拠

対象論点は、α、β−、β+、電子捕獲、核異性体転移、自発核分裂、原子番号Z・質量数Aの変化、壊変系列。NRAの公開過去問では、第58回「放射線の測定及び放射線障害の防止に関する技術」第1問で核異性体転移を含む各壊変形式のZ/A変化、第56回では137Csの壊変、第55回ではβ−壊変と軌道電子捕獲に伴う陽子数・中性子数の変化が扱われている。過去問本文は転載せず、論点だけを抽出して独立した4択問題へ再構成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回 放射線の測定及び放射線障害の防止に関する技術: https://www.nra.go.jp/data/000480854.pdf
- NRA 第56回 放射線の測定及び放射線障害の防止に関する技術: https://www.nra.go.jp/data/000472261.pdf
- NRA 第55回 放射線測定及び放射線障害の防止: https://www.nra.go.jp/data/000424263.pdf
- JAEA ATOMICA「原子核物理の基礎（2）原子核の壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- JAEA ATOMICA「α壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-05.html
- JAEA ATOMICA「β壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- JAEA ATOMICA「放射性壊変」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2602.html
- JAEA ATOMICA「核異性体」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1321.html
- JAEA ATOMICA「自発核分裂」: https://atomica.jaea.go.jp/dic/detail/dic_detail_332.html
- JAEA ATOMICA「天然の放射性核種」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-02.html
- JAEA ATOMICA「ウラン系列」: https://atomica.jaea.go.jp/dic/detail/dic_detail_186.html
- JAEA ATOMICA「トリウム系列」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1124.html
- JAEA ATOMICA「地球上に存在する放射性核種」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-06.html
- JAEA ATOMICA「超ウラン元素の発見」: https://atomica.jaea.go.jp/data/detail/dat_detail_16-02-02-03.html
- JAEA ATOMICA「超ウラン元素」: https://atomica.jaea.go.jp/dic/detail/dic_detail_2718.html
- JAEA ATOMICA「トリウム」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1123.html
- JAEA ATOMICA「ウラン」: https://atomica.jaea.go.jp/dic/detail/dic_detail_183.html
- JAEA-Review-2023-024: https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2023-024.pdf

## 問題

### NUC-06-Q001
- 問題文: 原子番号をZ、質量数をAとする核種がα壊変したとき、娘核種のZとAの組合せとして正しいものはどれか。
- 選択肢: ["Z-2、A-4", "Z-1、A", "Z+1、A", "Z、A"]
- 正答選択肢: A
- 正答: Z-2、A-4
- 解説: α粒子は陽子2個・中性子2個からなる4He原子核なので、α壊変では原子番号が2、質量数が4減少する。Bはβ+壊変・電子捕獲のZ/A変化、Cはβ−壊変、Dは核異性体転移に対応するため、この条件では誤りである。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-05.html ; https://www.nra.go.jp/data/000480854.pdf
- verified: true

### NUC-06-Q002
- 問題文: 原子番号をZ、質量数をAとする核種がβ−壊変したとき、娘核種のZとAの組合せとして正しいものはどれか。
- 選択肢: ["Z-2、A-4", "Z+1、A", "Z-1、A", "Z、A"]
- 正答選択肢: B
- 正答: Z+1、A
- 解説: β−壊変では核内の中性子が陽子へ変わるため、質量数Aは変わらず原子番号Zが1増える。Aはα壊変、Cはβ+壊変・電子捕獲、Dは核異性体転移の変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html ; https://www.nra.go.jp/data/000424263.pdf
- verified: true

### NUC-06-Q003
- 問題文: 原子番号をZ、質量数をAとする核種がβ+壊変したとき、娘核種のZとAの組合せとして正しいものはどれか。
- 選択肢: ["Z+1、A", "Z-2、A-4", "Z-1、A", "Z、A"]
- 正答選択肢: C
- 正答: Z-1、A
- 解説: β+壊変では核内の陽子が中性子へ変わり陽電子が放出されるため、質量数は変わらず原子番号が1減る。Aはβ−、Bはα、Dは核異性体転移の変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html ; https://www.nra.go.jp/data/000480854.pdf
- verified: true

### NUC-06-Q004
- 問題文: 原子番号をZ、質量数をAとする核種が軌道電子捕獲したとき、娘核種のZとAの組合せとして正しいものはどれか。
- 選択肢: ["Z、A-1", "Z+1、A", "Z-2、A-4", "Z-1、A"]
- 正答選択肢: D
- 正答: Z-1、A
- 解説: 軌道電子捕獲では原子核が軌道電子を取り込み、陽子が中性子へ変わる。そのため質量数Aは変わらず、原子番号Zが1減る。Aはこの壊変則に合わず、Bはβ−、Cはα壊変である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://www.nra.go.jp/data/000424263.pdf ; https://www.nra.go.jp/data/000480854.pdf
- verified: true

### NUC-06-Q005
- 問題文: 核異性体転移だけが起きた場合、娘核の原子番号Zと質量数Aはどうなるか。
- 選択肢: ["ZもAも変わらない", "Zだけ1増える", "Zだけ1減る", "Zが2、Aが4減る"]
- 正答選択肢: A
- 正答: ZもAも変わらない
- 解説: 核異性体は同じ原子番号・質量数で異なるエネルギー状態にある核で、核異性体転移ではγ線または内部転換電子の放出によって低いエネルギー状態へ移る。核子数は変わらない。B、C、Dはそれぞれβ−、β+/電子捕獲、α壊変のZ/A変化である。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1321.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2602.html ; https://www.nra.go.jp/data/000480854.pdf
- verified: true

### NUC-06-Q006
- 問題文: 自発核分裂の説明として正しいものはどれか。
- 選択肢: ["外部中性子を必ず吸収した後にだけ起こる核分裂である", "外部から中性子やエネルギーを与えなくても原子核が自然に核分裂する現象である", "原子核がα粒子を放出して質量数を4減らす現象だけを指す", "軌道電子を捕獲して原子番号を1減らす現象である"]
- 正答選択肢: B
- 正答: 外部から中性子やエネルギーを与えなくても原子核が自然に核分裂する現象である
- 解説: JAEAは自発核分裂を、外部から中性子などの衝撃やエネルギーを加えず原子核が自然に核分裂する現象と定義している。Aは誘起核分裂を混同し、Cはα壊変、Dは電子捕獲である。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_332.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2602.html
- verified: true

### NUC-06-Q007
- 問題文: 238Uがα壊変を1回した直後の娘核種はどれか。
- 選択肢: ["238Th", "234U", "234Th", "242Pu"]
- 正答選択肢: C
- 正答: 234Th
- 解説: Uの原子番号は92、Thは90である。α壊変ではZが2、Aが4減るので、238Uは234Thになる。Aは質量数が減っておらず、Bは原子番号が減っておらず、DはZ/Aともα壊変則に合わない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-05.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_183.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1123.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_186.html
- verified: true

### NUC-06-Q008
- 問題文: 239Uがβ−壊変を1回した直後の娘核種はどれか。
- 選択肢: ["235Th", "239U", "235Np", "239Np"]
- 正答選択肢: D
- 正答: 239Np
- 解説: β−壊変ではAを保ったままZが1増える。UはZ=92、NpはZ=93なので239U→239Npとなる。JAEAの超ウラン元素発見史でも239Uがβ壊変して239Npになる系列が示されている。A、Cは質量数が変わっており、Bは元素変換がないため誤りである。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_16-02-02-03.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2718.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### NUC-06-Q009
- 問題文: 241Amがα壊変を1回したときの娘核種はどれか。
- 選択肢: ["237Np", "241Np", "237Pu", "245Cm"]
- 正答選択肢: A
- 正答: 237Np
- 解説: AmはZ=95、NpはZ=93であり、α壊変ではZが2、Aが4減るので241Am→237Npとなる。JAEA-Reviewでも241Am標準液に娘核種237Npが含まれることが示されている。BはAが変わらず、CはZが1しか減らず、DはZ/Aとも増加するためα壊変則に反する。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2023-024.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-05.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_2718.html
- verified: true

### NUC-06-Q010
- 問題文: β−壊変のとき原子核内で起こる基本的な核子変換として正しいものはどれか。
- 選択肢: ["陽子が陽子のままα粒子だけを放出する", "中性子が陽子へ変わり電子が放出される", "陽子が中性子へ変わり陽電子が放出される", "陽子が軌道電子を捕獲して中性子へ変わる"]
- 正答選択肢: B
- 正答: 中性子が陽子へ変わり電子が放出される
- 解説: β−壊変では核内の中性子が陽子へ変わり、β−粒子である電子が放出される。Cはβ+壊変、Dは電子捕獲、Aはα壊変の説明にもなっていない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### NUC-06-Q011
- 問題文: β+壊変のとき原子核内で起こる基本的な核子変換として正しいものはどれか。
- 選択肢: ["中性子が陽子へ変わり電子が放出される", "陽子が中性子へ変わり軌道電子が必ず放出される", "陽子が中性子へ変わり陽電子が放出される", "陽子2個と中性子2個が一体として放出される"]
- 正答選択肢: C
- 正答: 陽子が中性子へ変わり陽電子が放出される
- 解説: β+壊変では核内の陽子が中性子へ変わり、陽電子β+が放出される。Aはβ−、Dはα壊変、Bは電子捕獲ともβ+とも異なる記述である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### NUC-06-Q012
- 問題文: 軌道電子捕獲で起こる基本的な変化として正しいものはどれか。
- 選択肢: ["中性子が軌道電子を捕獲して陽子になる", "原子核がα粒子を捕獲して質量数が4増える", "中性子が陽子へ変わり電子を放出する", "原子核が軌道電子を捕獲し、陽子が中性子へ変わる"]
- 正答選択肢: D
- 正答: 原子核が軌道電子を捕獲し、陽子が中性子へ変わる
- 解説: 軌道電子捕獲では核外の軌道電子が原子核に捕獲され、陽子が中性子へ変わる。その結果Zは1減りAは不変である。Aは電荷保存と既知の捕獲過程に反し、Bは別の核反応、Cはβ−壊変である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### NUC-06-Q013
- 問題文: α粒子の構成として正しいものはどれか。
- 選択肢: ["陽子2個と中性子2個からなる4He原子核", "電子1個", "陽電子1個", "中性子1個"]
- 正答選択肢: A
- 正答: 陽子2個と中性子2個からなる4He原子核
- 解説: JAEAはα粒子をヘリウム原子核とし、陽子2個・中性子2個からなると説明している。電子はβ−粒子、陽電子はβ+粒子であり、中性子1個はα粒子ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-05.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### NUC-06-Q014
- 問題文: 核異性体の説明として正しいものはどれか。
- 選択肢: ["原子番号だけが同じで質量数が必ず異なる核種", "同じ原子番号・質量数を持つが、異なるエネルギー状態にある原子核", "質量数だけが同じで原子番号が異なる核種", "必ず自発核分裂だけで消滅する核種"]
- 正答選択肢: B
- 正答: 同じ原子番号・質量数を持つが、異なるエネルギー状態にある原子核
- 解説: 核異性体は同じZ・Aを持ちながら異なるエネルギー状態にある原子核で、準安定状態は一般にmを付けて表す。Aは同位体の定義とも合わず、Cは同重体に近い説明、Dは核異性体の一般的性質ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1321.html
- verified: true

### NUC-06-Q015
- 問題文: α壊変とβ壊変だけでつながる壊変系列で、系列内の質量数が4n、4n+1、4n+2、4n+3のいずれか1種類に保たれる理由として正しいものはどれか。
- 選択肢: ["α壊変でもβ壊変でも質量数が必ず1ずつ減るため", "α壊変で質量数が2減り、β壊変で2増えるため", "α壊変では質量数が4減り、β壊変では質量数が変わらないため", "α壊変では質量数が変わらず、β壊変で4減るため"]
- 正答選択肢: C
- 正答: α壊変では質量数が4減り、β壊変では質量数が変わらないため
- 解説: α壊変はA→A-4、β壊変はA不変である。したがってAを4で割った余りは系列中で保存され、4n、4n+1、4n+2、4n+3という分類が成立する。A、B、DはいずれもJAEAが示す壊変則と一致しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-05.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-02.html
- verified: true

### NUC-06-Q016
- 問題文: 核燃料の貯蔵・再処理で自発核分裂を考慮する理由として、JAEAの説明に合うものはどれか。
- 選択肢: ["自発核分裂では放射線が一切発生しないため、検出不能になるから", "自発核分裂では必ず陽電子だけが放出されるから", "自発核分裂では質量数が4だけ減るから", "自発核分裂でも高速中性子が放出され、その影響を考慮する必要があるから"]
- 正答選択肢: D
- 正答: 自発核分裂でも高速中性子が放出され、その影響を考慮する必要があるから
- 解説: JAEAは、自発核分裂でも高速中性子が放出されるため核燃料の貯蔵や再処理で影響を考慮する必要があるとしている。A、B、Cはいずれも自発核分裂の説明ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_332.html
- verified: true

### NUC-06-Q017
- 問題文: トリウム系列の親核種・質量数分類・最終安定核種の組合せとして正しいものはどれか。
- 選択肢: ["232Th・4n系列・208Pb", "238U・4n+2系列・206Pb", "235U・4n+3系列・207Pb", "237Np・4n+1系列・209Bi"]
- 正答選択肢: A
- 正答: 232Th・4n系列・208Pb
- 解説: JAEAはトリウム系列を232Thから始まり安定な208Pbで終わる4n系列としている。Bはウラン系列、Cはアクチニウム系列、Dはネプツニウム系列の組合せであり、いずれもトリウム系列ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1124.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-02.html
- verified: true

### NUC-06-Q018
- 問題文: ウラン系列の親核種・質量数分類・最終安定核種の組合せとして正しいものはどれか。
- 選択肢: ["232Th・4n系列・208Pb", "238U・4n+2系列・206Pb", "235U・4n+3系列・207Pb", "237Np・4n+1系列・209Bi"]
- 正答選択肢: B
- 正答: 238U・4n+2系列・206Pb
- 解説: ウラン系列は238Uを親とし、系列核種の質量数は4n+2で、安定な206Pbに至る。Aはトリウム系列、Cはアクチニウム系列、Dはネプツニウム系列である。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_186.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-02.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-06.html
- verified: true

### NUC-06-Q019
- 問題文: アクチニウム系列の親核種・質量数分類・最終安定核種の組合せとして正しいものはどれか。
- 選択肢: ["238U・4n+2系列・206Pb", "232Th・4n系列・208Pb", "235U・4n+3系列・207Pb", "237Np・4n+1系列・209Bi"]
- 正答選択肢: C
- 正答: 235U・4n+3系列・207Pb
- 解説: JAEA資料では235Uを親とするアクチニウム系列は4n+3系列で、安定な207Pbに至る。Aはウラン系列、Bはトリウム系列、Dはネプツニウム系列である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-02.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-06.html
- verified: true

### NUC-06-Q020
- 問題文: ネプツニウム系列についてJAEAの説明に合うものはどれか。
- 選択肢: ["232Thを親とする4n系列である", "238Uを親とする4n+2系列である", "235Uを親とする4n+3系列である", "237Npを親とする4n+1系列で、237Npの半減期が地球年齢に比べ十分長くないため現在では天然に系列として存在しない"]
- 正答選択肢: D
- 正答: 237Npを親とする4n+1系列で、237Npの半減期が地球年齢に比べ十分長くないため現在では天然に系列として存在しない
- 解説: JAEAは4n+1系列を237Np（半減期約214万年）を親とするネプツニウム系列とし、半減期が十分長くないため現在では天然に存在しないと説明している。A、B、Cはそれぞれトリウム、ウラン、アクチニウム系列である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_09-01-01-02.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_18-03-01-01.html
- verified: true
