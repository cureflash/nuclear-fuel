# RNUC-02 壊変と核種変化

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- verification_note: α壊変、β−壊変、β＋壊変、軌道電子捕獲、核異性体転移について、原子番号Z・質量数A・中性子数の変化をJAEA ATOMICA、環境省の公的基礎資料、米国DOE傘下BNL/NNDCのENSDF/NuDatで照合した。直近のNRA公式過去問（第56～58回）を確認し、第58回「放射線の測定及び放射線障害の防止に関する技術」第1問(1)が壊変形式と原子番号・質量数の増減を直接扱っていること、第56回第2問(1)が137Csの壊変後の核異性体と内部転換を扱っていることを確認した。過去問本文は転載せず、論点を独立した4択問題へ再構成した。各問は正答だけでなく3誤答肢も各壊変形式の保存則・定義またはENSDFの評価済みデータと照合し、一意性を確認した。

## 出題根拠

対象論点は `08_放射線・核種データ.md` の RNUC-02 に指定された、α、β−、β＋、電子捕獲、核異性体転移、およびそれぞれのZ/A変化である。半減期の定量計算はRNUC-03、代表核種の詳細な半減期・体内挙動はRNUC-04の主論点なので、本topicでは壊変形式と核種変化に限定した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第58回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000480854.pdf
- NRA 第57回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000475647.pdf
- NRA 第56回「放射線の測定及び放射線障害の防止に関する技術」: https://www.nra.go.jp/data/000472261.pdf
- JAEA ATOMICA「β壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- JAEA ATOMICA「原子核物理の基礎（2）原子核の壊変」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- 環境省「原子の構造と周期律」: https://www.env.go.jp/chemi/rhm/current/01-02-01.html
- 環境省「原子核の安定・不安定」: https://www.env.go.jp/chemi/rhm/current/01-02-02.html
- 環境省「親核種・娘核種」: https://www.env.go.jp/chemi/rhm/current/01-02-06.html
- BNL/NNDC NuDat 3 Glossary: https://www.nndc.bnl.gov/nudat3/help/glossary.jsp
- BNL/NNDC Gamma Emission and Internal Conversion: https://www.nndc.bnl.gov/nudat3/guide/gammaemission.html
- BNL/NNDC ENSDF 226Ra α decay → 222Rn: https://www.nndc.bnl.gov/nudat3/getdecaydataset.jsp?dsid=226ra+a+decay+%281603+y%29&nucleus=222RN
- BNL/NNDC ENSDF 14C β− decay → 14N: https://www.nndc.bnl.gov/nudat3/checkENSDFDatasets.jsp?nucleus=14N
- BNL/NNDC ENSDF 7Be EC decay → 7Li: https://www.nndc.bnl.gov/nudat3/checkENSDFDatasets.jsp?nucleus=7LI
- BNL/NNDC ENSDF 99Tc IT decay: https://www.nndc.bnl.gov/nudat3/getdecaydataset.jsp?dsid=99tc+it+decay+%286.0072+h%29&nucleus=99TC

## 問題

### RNUC-02-Q001
- 問題文: α壊変で娘核種の原子番号Zと質量数Aは親核種からどう変化するか。
- 選択肢: ["Zは2減少し、Aは4減少する", "Zは1増加し、Aは変化しない", "Zは1減少し、Aは変化しない", "ZもAも変化しない"]
- 正答選択肢: A
- 正答: Zは2減少し、Aは4減少する
- 解説: α粒子は陽子2個と中性子2個からなる4He原子核である。したがってα壊変では親核種から陽子2個・中性子2個が失われ、Zは2減少、Aは4減少する。Bはβ−壊変、Cはβ＋壊変または電子捕獲、Dは核異性体転移の変化に対応する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### RNUC-02-Q002
- 問題文: β−壊変で娘核種の原子番号Zと質量数Aは親核種からどう変化するか。
- 選択肢: ["Zは2減少し、Aは4減少する", "Zは1増加し、Aは変化しない", "Zは1減少し、Aは変化しない", "ZもAも変化しない"]
- 正答選択肢: B
- 正答: Zは1増加し、Aは変化しない
- 解説: β−壊変では核内の中性子が陽子へ変化し、電子が放出される。このため陽子数Zは1増加する一方、核子総数Aは変化しない。Aはα壊変、Cはβ＋壊変または電子捕獲、Dは核異性体転移に対応する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q003
- 問題文: β＋壊変で娘核種の原子番号Zと質量数Aは親核種からどう変化するか。
- 選択肢: ["Zは2減少し、Aは4減少する", "Zは1増加し、Aは変化しない", "Zは1減少し、Aは変化しない", "ZもAも変化しない"]
- 正答選択肢: C
- 正答: Zは1減少し、Aは変化しない
- 解説: β＋壊変では核内の陽子が中性子へ変化し、陽電子が放出される。このためZは1減少し、Aは変化しない。Aはα壊変、Bはβ−壊変、Dは核異性体転移に対応する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q004
- 問題文: 軌道電子捕獲（EC）で娘核種の原子番号Zと質量数Aは親核種からどう変化するか。
- 選択肢: ["Zは2減少し、Aは4減少する", "Zは1増加し、Aは変化しない", "ZもAも変化しない", "Zは1減少し、Aは変化しない"]
- 正答選択肢: D
- 正答: Zは1減少し、Aは変化しない
- 解説: 電子捕獲では原子核が軌道電子を捕獲し、陽子が中性子へ変化する。このためZは1減少し、Aは変化しない。Aはα壊変、Bはβ−壊変、Cは核異性体転移に対応する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q005
- 問題文: 核異性体転移（IT）で、転移前後の核種の原子番号Zと質量数Aについて正しいものはどれか。
- 選択肢: ["ZもAも変化しない", "Zは1増加し、Aは変化しない", "Zは1減少し、Aは変化しない", "Zは2減少し、Aは4減少する"]
- 正答選択肢: A
- 正答: ZもAも変化しない
- 解説: 核異性体転移は長寿命の励起核準位がγ線放出または内部転換によってより低い準位へ移る過程であり、陽子数・中性子数そのものは変わらない。したがってZもAも不変である。他の3肢はそれぞれβ−、β＋/EC、α壊変の核種変化である。
- 出典: https://www.nndc.bnl.gov/nudat3/help/glossary.jsp
- verified: true

### RNUC-02-Q006
- 問題文: 原子番号Z、質量数Aの核種がα壊変したとき、娘核種の組合せとして正しいものはどれか。
- 選択肢: ["原子番号Z−1、質量数A", "原子番号Z−2、質量数A−4", "原子番号Z+1、質量数A", "原子番号Z、質量数A"]
- 正答選択肢: B
- 正答: 原子番号Z−2、質量数A−4
- 解説: α壊変では4He原子核、すなわち陽子2個と中性子2個が放出されるため、娘核種はZ−2、A−4となる。Aはβ＋/EC、Cはβ−、DはITの変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### RNUC-02-Q007
- 問題文: 原子番号Z、質量数Aの核種がβ−壊変したとき、娘核種の組合せとして正しいものはどれか。
- 選択肢: ["原子番号Z−2、質量数A−4", "原子番号Z−1、質量数A", "原子番号Z+1、質量数A", "原子番号Z、質量数A"]
- 正答選択肢: C
- 正答: 原子番号Z+1、質量数A
- 解説: β−壊変では中性子1個が陽子1個へ変わるのでZは1増え、Aは変わらない。Aはα壊変、Bはβ＋/EC、DはITの変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q008
- 問題文: 原子番号Z、質量数Aの核種がβ＋壊変したとき、娘核種の組合せとして正しいものはどれか。
- 選択肢: ["原子番号Z+1、質量数A", "原子番号Z−2、質量数A−4", "原子番号Z、質量数A", "原子番号Z−1、質量数A"]
- 正答選択肢: D
- 正答: 原子番号Z−1、質量数A
- 解説: β＋壊変では陽子1個が中性子1個へ変わるのでZは1減り、Aは変わらない。Aはβ−壊変、Bはα壊変、CはITの変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q009
- 問題文: 原子番号Z、質量数Aの核種が軌道電子捕獲したとき、娘核種の組合せとして正しいものはどれか。
- 選択肢: ["原子番号Z−1、質量数A", "原子番号Z+1、質量数A", "原子番号Z−2、質量数A−4", "原子番号Z、質量数A"]
- 正答選択肢: A
- 正答: 原子番号Z−1、質量数A
- 解説: 電子捕獲では軌道電子が原子核に捕獲され、陽子が中性子へ変わる。そのためZは1減少し、Aは不変である。Bはβ−、Cはα、DはITの変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q010
- 問題文: 原子番号Z、質量数Aの核異性体が核異性体転移したとき、転移後の核種表示として正しいものはどれか。
- 選択肢: ["原子番号Z−1、質量数A", "原子番号Z、質量数A", "原子番号Z+1、質量数A", "原子番号Z−2、質量数A−4"]
- 正答選択肢: B
- 正答: 原子番号Z、質量数A
- 解説: 核異性体転移は同じ核種内の励起準位から低い準位への転移で、γ線放出または内部転換により起こる。ZとAは変化しない。A、C、Dはそれぞれβ＋/EC、β−、α壊変に対応する。
- 出典: https://www.nndc.bnl.gov/nudat3/help/glossary.jsp
- verified: true

### RNUC-02-Q011
- 問題文: β−壊変に伴う核内の変化として正しいものはどれか。
- 選択肢: ["陽子1個が中性子1個に変わる", "陽子2個と中性子2個が同時に失われる", "中性子1個が陽子1個に変わる", "陽子数と中性子数はいずれも変わらず、励起だけが解ける"]
- 正答選択肢: C
- 正答: 中性子1個が陽子1個に変わる
- 解説: ATOMICAはβ−壊変を、核内の中性子が陽子に変わり電子を放出する過程と説明している。Aはβ＋/EC側の核内変化、Bはα壊変、DはITに対応する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### RNUC-02-Q012
- 問題文: β＋壊変または軌道電子捕獲に共通する核内の変化として正しいものはどれか。
- 選択肢: ["中性子1個が陽子1個に変わる", "陽子2個と中性子2個が失われる", "陽子数と中性子数はいずれも変化しない", "陽子1個が中性子1個に変わる"]
- 正答選択肢: D
- 正答: 陽子1個が中性子1個に変わる
- 解説: β＋壊変と電子捕獲はいずれも核内の陽子を中性子へ変える。そのためZは1減りAは不変である。Aはβ−壊変、Bはα壊変、CはITの説明である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### RNUC-02-Q013
- 問題文: 壊変前後で質量数が4減少し、原子番号が2減少していた。この壊変形式として正しいものはどれか。
- 選択肢: ["α壊変", "β−壊変", "β＋壊変", "核異性体転移"]
- 正答選択肢: A
- 正答: α壊変
- 解説: Aが4、Zが2減るのは4He原子核の放出に一致するためα壊変である。β−はA不変・Z+1、β＋はA不変・Z−1、ITはA・Zとも不変である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-02.html
- verified: true

### RNUC-02-Q014
- 問題文: 壊変前後で質量数は変わらず、原子番号だけが1増加していた。この壊変形式として正しいものはどれか。
- 選択肢: ["α壊変", "β−壊変", "β＋壊変", "軌道電子捕獲"]
- 正答選択肢: B
- 正答: β−壊変
- 解説: A不変・Z+1はβ−壊変の核種変化である。α壊変はA−4・Z−2、β＋と電子捕獲はA不変・Z−1である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q015
- 問題文: 壊変によって陽電子が放出され、娘核種の質量数は変わらず原子番号が1減少した。この壊変形式はどれか。
- 選択肢: ["軌道電子捕獲", "β−壊変", "β＋壊変", "核異性体転移"]
- 正答選択肢: C
- 正答: β＋壊変
- 解説: β＋壊変では陽電子が放出され、Zは1減少、Aは不変となる。電子捕獲は同じZ/A変化だが陽電子放出ではなく軌道電子の捕獲である。β−はZ+1、ITはZ/A不変である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q016
- 問題文: 原子核が核外の軌道電子を取り込み、陽子が中性子へ変化する壊変形式はどれか。
- 選択肢: ["α壊変", "β−壊変", "β＋壊変", "軌道電子捕獲"]
- 正答選択肢: D
- 正答: 軌道電子捕獲
- 解説: ATOMICAは、原子核が軌道電子を吸収して陽子が中性子へ変わる現象を軌道電子捕獲と定義している。α壊変は4He核放出、β−は電子放出を伴うn→p、β＋は陽電子放出を伴うp→nである。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q017
- 問題文: 長寿命の励起核準位が、γ線放出または内部転換によってより低い核準位へ移る過程はどれか。
- 選択肢: ["核異性体転移", "β−壊変", "β＋壊変", "α壊変"]
- 正答選択肢: A
- 正答: 核異性体転移
- 解説: NNDCは核異性体転移（IT）を、長寿命の励起核準位がγ線放出または内部転換で崩壊する過程と定義している。β−・β＋・α壊変はいずれも核子構成を変える壊変であり、ITとは異なる。
- 出典: https://www.nndc.bnl.gov/nudat3/help/glossary.jsp
- verified: true

### RNUC-02-Q018
- 問題文: 226Raがα壊変したときの娘核種として正しいものはどれか。
- 選択肢: ["226Rn", "222Rn", "222Ra", "230Th"]
- 正答選択肢: B
- 正答: 222Rn
- 解説: NNDC ENSDFには226Raのα壊変による222Rn生成が収録されている。一般則でもRaはZ=88なのでα壊変後はZ=86（Rn）、A=222となる。AはAが不変、CはZが不変、DはAとZが増えるためα壊変の保存則に合わない。
- 出典: https://www.nndc.bnl.gov/nudat3/getdecaydataset.jsp?dsid=226ra+a+decay+%281603+y%29&nucleus=222RN
- verified: true

### RNUC-02-Q019
- 問題文: 14Cがβ−壊変したときの娘核種として正しいものはどれか。
- 選択肢: ["14B", "10Be", "14N", "14C"]
- 正答選択肢: C
- 正答: 14N
- 解説: NNDC ENSDFは14Cのβ−壊変先を14Nとしている。β−壊変ではAは14のままZが6から7へ1増加するため14Nとなる。14BはZが1減少、10BeはAが4減少、14CはZが変化しないため誤りである。
- 出典: https://www.nndc.bnl.gov/nudat3/checkENSDFDatasets.jsp?nucleus=14N
- verified: true

### RNUC-02-Q020
- 問題文: 11Cがβ＋壊変したときの娘核種として正しいものはどれか。
- 選択肢: ["11N", "7Be", "11C", "11B"]
- 正答選択肢: D
- 正答: 11B
- 解説: ATOMICAはβ＋壊変の例として11C→11Bを示している。β＋壊変ではAは11のままZが6から5へ1減少する。11NはZが増え、7BeはAが4減り、11CはZが不変なので該当しない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true

### RNUC-02-Q021
- 問題文: 7Beが軌道電子捕獲したときの娘核種として正しいものはどれか。
- 選択肢: ["7Li", "7B", "3He", "7Be"]
- 正答選択肢: A
- 正答: 7Li
- 解説: NNDC ENSDFの7Liデータには7Be EC DECAYが収録されている。電子捕獲ではAは7のままZが4から3へ1減るため7Liとなる。7BはZが1増え、3HeはAが4減り、7BeはZが不変なので誤りである。
- 出典: https://www.nndc.bnl.gov/nudat3/checkENSDFDatasets.jsp?nucleus=7LI
- verified: true

### RNUC-02-Q022
- 問題文: 99mTcが核異性体転移した後の核種について正しいものはどれか。
- 選択肢: ["質量数95のMoになる", "質量数99のTcのままで、より低い核準位へ移る", "質量数99のRuになる", "質量数95のTcになる"]
- 正答選択肢: B
- 正答: 質量数99のTcのままで、より低い核準位へ移る
- 解説: NNDC ENSDFには99TcのIT decayが収録されており、核異性体転移では同じ99Tc内で励起準位から低い準位へ移る。したがって元素Tcも質量数99も変わらない。A・Cは元素が変わり、Dは質量数が変わるためITではない。
- 出典: https://www.nndc.bnl.gov/nudat3/getdecaydataset.jsp?dsid=99tc+it+decay+%286.0072+h%29&nucleus=99TC
- verified: true

### RNUC-02-Q023
- 問題文: 質量数Aが変化しない壊変形式の組合せとして正しいものはどれか。
- 選択肢: ["α壊変だけ", "α壊変とβ−壊変", "β−壊変、β＋壊変、軌道電子捕獲、核異性体転移", "α壊変と核異性体転移"]
- 正答選択肢: C
- 正答: β−壊変、β＋壊変、軌道電子捕獲、核異性体転移
- 解説: β−、β＋、電子捕獲はいずれもAを変えず、核異性体転移も核子数を変えない。一方、α壊変では4He核を放出するためAは4減少する。したがってCだけが全て正しい。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html ; https://www.nndc.bnl.gov/nudat3/help/glossary.jsp
- verified: true

### RNUC-02-Q024
- 問題文: 壊変前後の原子番号と質量数だけを調べたところ、Zが1減少しAは変化していなかった。この情報だけから言えることとして正しいものはどれか。
- 選択肢: ["必ずα壊変である", "必ずβ−壊変である", "必ず核異性体転移である", "β＋壊変と軌道電子捕獲のどちらかであり、ZとAの変化だけでは両者を区別できない"]
- 正答選択肢: D
- 正答: β＋壊変と軌道電子捕獲のどちらかであり、ZとAの変化だけでは両者を区別できない
- 解説: β＋壊変と電子捕獲はいずれもZを1減らしAを変えないため、娘核種のZ/A変化だけでは両者を区別できない。α壊変はZ−2・A−4、β−壊変はZ+1・A不変、ITはZ/Aとも不変である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_08-01-01-06.html
- verified: true
