# NUC-07 核反応

- status: complete
- verified_at: 2026-09-13
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- numeric_authority:
  - 中性子反応断面積・しきい値: JAEA JENDL-5（300 KのCross Section Table）
  - 238U: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T238.html
  - 232Th: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z090/T232.html
  - 235U: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T235.html
  - 233U: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T233.html
  - 239Pu: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z094/T239.html
- verification_note: (n,γ)、(n,f)、(n,2n)、複合核、散乱反応と吸収反応の区別、238U→239Puおよび232Th→233Uの主要転換系列をJAEA ATOMICA/JENDL-5で照合した。数値問題はJENDL-5の300 K表に固定した。各誤答肢は、質量数・原子番号の保存則、JAEAが示す反応分類、または同一JENDL表の別反応値と照合して排除した。

## 出題根拠

対象論点は、(n,γ)、(n,f)、(n,2n)、捕獲後のβ−壊変、238U→239Pu、232Th→233U。NRAの直近公開過去問一覧を確認し、第56回「核燃料物質の化学的性質及び物理的性質」第1問(3)で、照射中の238Uから239Puが生じる主要な一連の核反応が直接問われていることを確認した。過去問本文は転載せず、核反応記号、保存則、JENDL-5の反応チャネル・しきい値・断面積を使って独立した4択問題へ再構成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第56回 核燃料物質の化学的性質及び物理的性質: https://www.nra.go.jp/data/000472259.pdf
- JAEA ATOMICA「原子核物理の基礎（3）核反応」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- JAEA ATOMICA「核燃料増殖のしくみ」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-01-01-04.html
- JAEA ATOMICA「トリウムを用いた原子炉」: https://atomica.jaea.go.jp/data/detail/dat_detail_03-04-11-01.html
- JAEA JENDL-5: https://wwwndc.jaea.go.jp/jendl/j5/j5_J.html
- JAEA JENDL-5 238U Cross Section Table: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T238.html
- JAEA JENDL-5 232Th Cross Section Table: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z090/T232.html
- JAEA JENDL-5 235U Cross Section Table: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T235.html
- JAEA JENDL-5 233U Cross Section Table: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T233.html
- JAEA JENDL-5 239Pu Cross Section Table: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z094/T239.html

## 問題

### NUC-07-Q001
- 問題文: 原子番号Z、質量数Aの標的核が中性子を1個捕獲して(n,γ)反応を起こしたとき、生成核のZとAの組合せとして正しいものはどれか。
- 選択肢: ["Z、A+1", "Z+1、A", "Z、A-1", "Z-2、A-4"]
- 正答選択肢: A
- 正答: Z、A+1
- 解説: (n,γ)では中性子1個が標的核に取り込まれ、複合核がγ線を放出して基底状態へ移る。中性子の電荷は0なので原子番号Zは変わらず、核子が1個増えるため質量数Aは1増える。Bはβ−壊変型のZ変化、Cは(n,2n)の正味のA変化、Dはα壊変の変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q002
- 問題文: 原子番号Z、質量数Aの標的核が(n,2n)反応を起こしたとき、残留核のZとAの組合せとして正しいものはどれか。
- 選択肢: ["Z、A+1", "Z、A-1", "Z+1、A", "Z-2、A-4"]
- 正答選択肢: B
- 正答: Z、A-1
- 解説: (n,2n)では標的核に中性子1個が入射し、最終的に中性子2個が放出されるため、反応前後の正味では核子数が1個減る。中性子だけが出入りするので原子番号Zは変わらず、質量数Aは1減る。Aは(n,γ)、Cはβ−壊変型、Dはα壊変型の変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html ; https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T238.html
- verified: true

### NUC-07-Q003
- 問題文: 中性子誘起核分裂を表す(n,f)反応の説明として正しいものはどれか。
- 選択肢: ["中性子を捕獲した核がγ線だけを放出して同じ元素の質量数を1増やす反応", "入射中性子1個に対して中性子2個を放出し、残留核の質量数を1減らす反応", "重い原子核が中性子を吸収した後に主として2つの核分裂片に分かれ、同時に複数の中性子を放出する反応", "核内の中性子が陽子へ変わり電子を放出する壊変"]
- 正答選択肢: C
- 正答: 重い原子核が中性子を吸収した後に主として2つの核分裂片に分かれ、同時に複数の中性子を放出する反応
- 解説: JAEAは235U、239Pu、233Uなどの重い核が中性子を吸収すると2つの核に分裂し、同時に2ないし3個程度の中性子を放出する反応を核分裂反応としている。Aは(n,γ)、Bは(n,2n)、Dはβ−壊変である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q004
- 問題文: 中性子が原子核に吸収された後、形成された複合核がγ線のみを放出して低いエネルギー状態へ移る反応はどれか。
- 選択肢: ["弾性散乱", "非弾性散乱", "(n,2n)反応", "放射捕獲反応(n,γ)"]
- 正答選択肢: D
- 正答: 放射捕獲反応(n,γ)
- 解説: JAEAは、中性子吸収でできた複合核からγ線のみが放出される反応を放射捕獲反応としている。弾性散乱・非弾性散乱は散乱反応であり、(n,2n)では2個の中性子が放出される。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q005
- 問題文: 原子番号Z、質量数Aの標的核が中性子を吸収し、粒子放出前の複合核を形成した直後、その複合核のZとAはどうなるか。
- 選択肢: ["Zは同じでAが1増える", "Zが1増えてAは同じ", "Zは同じでAが1減る", "Zが2減ってAが4減る"]
- 正答選択肢: A
- 正答: Zは同じでAが1増える
- 解説: 中性子は電荷0、質量数1なので、標的核が中性子1個を取り込んで複合核を作ると原子番号は変わらず、質量数だけが1増える。Bはβ−壊変後の変化、Cは(n,2n)の正味変化、Dはα壊変の変化である。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q006
- 問題文: 「捕獲γ線」の説明として正しいものはどれか。
- 選択肢: ["β−壊変で電子と同時に必ず放出されるγ線", "中性子捕獲で形成された励起複合核が低いエネルギー状態へ移る際に放出するγ線", "核分裂片が停止するときだけ発生する制動X線", "(n,2n)反応で放出された中性子が直接γ線へ変換したもの"]
- 正答選択肢: B
- 正答: 中性子捕獲で形成された励起複合核が低いエネルギー状態へ移る際に放出するγ線
- 解説: JAEAは59Coの中性子捕獲を例に、複合核がγ線を放出して基底状態へ移るときのγ線を捕獲γ線と説明している。A、C、Dはいずれも捕獲γ線の生成機構ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q007
- 問題文: JAEAが放射捕獲反応の例として示す59Coへの中性子捕獲を、核反応式の略記で正しく表したものはどれか。
- 選択肢: ["59Co(n,γ)59Co", "59Co(n,2n)60Co", "59Co(n,γ)60Co", "59Co(n,f)60Co"]
- 正答選択肢: C
- 正答: 59Co(n,γ)60Co
- 解説: 59Coが中性子1個を捕獲すると、原子番号は変わらず質量数が1増えた60Coが生成し、捕獲γ線が放出される。Aは質量数保存に反し、Bは(n,2n)なら残留核の質量数は58、Dの核分裂は単一の60Co生成を表す反応ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q008
- 問題文: 235Uが中性子を1個吸収して核分裂へ進む際、粒子放出前に形成される複合核として正しいものはどれか。
- 選択肢: ["235U*", "234U*", "239U*", "236U*"]
- 正答選択肢: D
- 正答: 236U*
- 解説: 235Uが中性子1個を吸収すると、原子番号92のまま質量数236の励起複合核236U*となり、その後に核分裂し得る。235U*は中性子を取り込んだ質量数になっておらず、234U*、239U*も核子数保存に合わない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q009
- 問題文: 238Uが(n,2n)反応を起こしたときに生成する残留核はどれか。
- 選択肢: ["237U", "239U", "238Np", "234Th"]
- 正答選択肢: A
- 正答: 237U
- 解説: 238U+n→237U+2n となり、正味で質量数は1減るが原子番号は92のままである。239Uは238Uの(n,γ)生成物、238Npは元素が変わっており、234Thはα壊変型のZ/A変化に対応するため誤りである。JENDL-5は238Uの(n,2n)反応チャネルを収録している。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T238.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q010
- 問題文: JENDL-5（300 K）が示す238Uの(n,2n)反応のしきいエネルギーとして正しいものはどれか。
- 選択肢: ["45.11 keV", "6.180 MeV", "11.33 MeV", "17.90 MeV"]
- 正答選択肢: B
- 正答: 6.180 MeV
- 解説: JENDL-5の238U表では(n,2n)のしきい値は6.180 MeVである。45.11 keVは非弾性散乱、11.33 MeVは(n,3n)、17.90 MeVは(n,4n)のしきい値として同じ表に示されるため、誤答肢も同一資料で排除できる。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T238.html
- verified: true

### NUC-07-Q011
- 問題文: JENDL-5（300 K、0.0253 eV）の238Uについて、次の反応のうち断面積が最も大きいものはどれか。
- 選択肢: ["(n,f)", "(n,2n)", "(n,γ)", "(n,inelastic)"]
- 正答選択肢: C
- 正答: (n,γ)
- 解説: 0.0253 eVで238Uの(n,γ)断面積は2.683 b、(n,f)は18.50 μbであり、(n,2n)は6.180 MeV、非弾性散乱は45.11 keVのしきい値を持つ。したがって選択肢中では(n,γ)が最も大きい。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T238.html
- verified: true

### NUC-07-Q012
- 問題文: JENDL-5（300 K）が示す232Thの(n,2n)反応のしきいエネルギーとして正しいものはどれか。
- 選択肢: ["49.58 keV", "11.61 MeV", "18.43 MeV", "6.468 MeV"]
- 正答選択肢: D
- 正答: 6.468 MeV
- 解説: JENDL-5の232Th表では(n,2n)のしきい値は6.468 MeVである。49.58 keVは非弾性散乱、11.61 MeVは(n,3n)、18.43 MeVは(n,4n)のしきい値であり、同一資料上で区別できる。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z090/T232.html
- verified: true

### NUC-07-Q013
- 問題文: JENDL-5（300 K、0.0253 eV）の235Uについて、次の反応のうち断面積が最も大きいものはどれか。
- 選択肢: ["(n,f)", "(n,γ)", "(n,elastic)", "(n,2n)"]
- 正答選択肢: A
- 正答: (n,f)
- 解説: 0.0253 eVで235Uの核分裂断面積は586.7 b、(n,γ)は99.38 b、弾性散乱は14.11 bである。(n,2n)は5.320 MeVのしきい値を持つ。したがって選択肢中で最大なのは(n,f)である。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T235.html
- verified: true

### NUC-07-Q014
- 問題文: JENDL-5（300 K、0.0253 eV）の233Uについて、次の反応のうち断面積が最も大きいものはどれか。
- 選択肢: ["(n,γ)", "(n,f)", "(n,elastic)", "(n,2n)"]
- 正答選択肢: B
- 正答: (n,f)
- 解説: 0.0253 eVで233Uの核分裂断面積は537.8 b、(n,γ)は43.46 b、弾性散乱は11.66 bである。(n,2n)は5.787 MeVのしきい値を持つため、この条件では候補にならない。最大は(n,f)である。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z092/T233.html
- verified: true

### NUC-07-Q015
- 問題文: JENDL-5（300 K、0.0253 eV）の239Puについて、次の反応のうち断面積が最も大きいものはどれか。
- 選択肢: ["(n,γ)", "(n,elastic)", "(n,f)", "(n,2n)"]
- 正答選択肢: C
- 正答: (n,f)
- 解説: 0.0253 eVで239Puの核分裂断面積は747.3 b、(n,γ)は270.1 b、弾性散乱は8.072 bである。(n,2n)は5.670 MeVのしきい値を持つ。したがって最大は(n,f)である。
- 出典: https://wwwndc.jaea.go.jp/jendl/j5/elm/Table/z094/T239.html
- verified: true

### NUC-07-Q016
- 問題文: 238Uから239Puが生成する主要系列で、質量数が238から239へ増えるのはどの段階か。
- 選択肢: ["239Uがβ−壊変して239Npになる段階", "239Npがβ−壊変して239Puになる段階", "2回のβ−壊変の両方", "238Uが中性子を捕獲して239Uになる段階"]
- 正答選択肢: D
- 正答: 238Uが中性子を捕獲して239Uになる段階
- 解説: 238U(n,γ)239Uで中性子1個が加わるため質量数が238から239へ増える。その後の239U→239Np→239Puはいずれもβ−壊変であり、質量数239は変わらず原子番号だけが1ずつ増える。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-01-01-04.html ; https://www.nra.go.jp/data/000472259.pdf
- verified: true

### NUC-07-Q017
- 問題文: 238Uから239Puへの主要転換系列全体を、開始核238Uと最終核239Puだけで比較したとき、原子番号Zと質量数Aの正味の変化はどれか。
- 選択肢: ["Zは+2、Aは+1", "Zは+1、Aは+2", "Zは変わらず、Aは+1", "Zは+2、Aは-1"]
- 正答選択肢: A
- 正答: Zは+2、Aは+1
- 解説: 238UはZ=92、239PuはZ=94なのでZは2増え、質量数は238から239へ1増える。反応系列は中性子捕獲1回とβ−壊変2回で説明でき、各段階の保存則とも一致する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-01-01-04.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q018
- 問題文: 232Thから233Uへの主要転換系列全体を、開始核232Thと最終核233Uだけで比較したとき、原子番号Zと質量数Aの正味の変化はどれか。
- 選択肢: ["Zは+1、Aは+1", "Zは+2、Aは+1", "Zは+2、Aは-1", "Zは変わらず、Aは+1"]
- 正答選択肢: B
- 正答: Zは+2、Aは+1
- 解説: ThはZ=90、UはZ=92であり、232Thから233Uでは原子番号が2、質量数が1増える。主要系列は232Thの中性子捕獲後、233Thと233Paの2回のβ−壊変を経て233Uとなるため、この正味変化と一致する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-04-11-01.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q019
- 問題文: JAEAの中性子核反応の分類で、次のうち「散乱反応」に分類されるものはどれか。
- 選択肢: ["(n,γ)放射捕獲", "(n,f)核分裂", "弾性散乱", "(n,2n)反応"]
- 正答選択肢: C
- 正答: 弾性散乱
- 解説: JAEAは中性子と核の相互作用を散乱反応と吸収反応に大別し、弾性散乱と非弾性散乱を散乱反応とする。一方、放射捕獲、核分裂、(n,2n)などは中性子が一度核に吸収され複合核を形成する吸収反応側として説明している。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-03-03.html
- verified: true

### NUC-07-Q020
- 問題文: 238U→239Puの主要転換系列と232Th→233Uの主要転換系列に共通する、最初の核反応はどれか。
- 選択肢: ["(n,f)核分裂", "(n,2n)反応", "β−壊変", "(n,γ)中性子捕獲"]
- 正答選択肢: D
- 正答: (n,γ)中性子捕獲
- 解説: 238U系列では238U(n,γ)239Uが最初であり、232Th系列でも232Th(n,γ)233Thが最初である。その後、それぞれ2回のβ−壊変を経て239Pu、233Uへ至る。A、B、Cはいずれも両系列の最初の反応ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_03-01-01-04.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_03-04-11-01.html
- verified: true
