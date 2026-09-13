# NUC-05 Np・Am・Cm

- status: complete
- verified_at: 2026-09-12
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- numeric_authority:
  - 237Np half-life: JAEA 分離変換技術資料の214万年（詳細表では214.4万年）
  - 241Am half-life: JAEA ATOMICA/JAEA資料の432.2～432.6年（作問では約432年）
  - 243Am half-life: JAEA 分離変換技術資料の7,370年
  - 244Cm half-life: JAEA核データ測定資料の18.1年
  - 241Am heat output example: JAEA 2025プレス発表の20 gで約2 W
- numeric_note: 半減期は同一JAEA系資料でも丸めが異なるため、選択肢では桁が十分離れた代表値を用い、一意性が崩れない形にした。

## 出題根拠

対象論点は、Np・Am・Cmの生成経路、α放出、半減期、発熱、中性子源、再処理・廃棄物上の意味。NRAの公開過去問一覧で直近公開回を確認し、関連論点として第52回「核燃料物質の化学的性質及び物理的性質」でアクチノイドのα線源・中性子源・使用済燃料中マイナーアクチノイド、第54回で237Npを起点とするネプツニウム系列が出題されていることを確認した。過去問本文は転載せず、同じ知識領域を独立した4択問題へ再構成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- NRA 第52回 核燃料物質の化学的性質及び物理的性質: https://www.nra.go.jp/data/000308595.pdf
- NRA 第54回 核燃料物質の化学的性質及び物理的性質: https://www.nra.go.jp/data/000384588.pdf
- JAEA 分離変換技術の目的（2021年）: https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf
- JAEA FCAを用いた核データの検証: https://nsec.jaea.go.jp/ndre/ndre3/trans/research3.html
- JAEA ATOMICA「原子炉によるTRU核変換処理」: https://atomica.jaea.go.jp/data/detail/dat_detail_07-02-01-02.html
- JAEA ATOMICA「再処理技術の現状」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- JAEA ATOMICA「アメリシウム241」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html
- JAEA ATOMICA「アルファ線放出核種」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1640.html
- JAEA「アメリシウムによる半永久電源の開発に向けて」: https://www.jaea.go.jp/02/press2024/p25032802/
- JAEA R&D Review 2015: https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_5.html
- JAEA R&D Review 2017-18: https://rdreview.jaea.go.jp/review_en/2017/e2017_4_2.html
- JAEA R&D Review 2019-20: https://rdreview.jaea.go.jp/review_jp/2019/j2019_4_3.html
- JAEA 核データ測定研究: https://wwwndc.jaea.go.jp/Labo/ANNRI_JP.html
- JAEA JAERI-M 9757: https://jopss.jaea.go.jp/pdfdata/JAERI-M-9757.pdf
- JAEA JAERI-M 94-067: https://jopss.jaea.go.jp/pdfdata/JAERI-M-94-067.pdf

## 問題

### NUC-05-Q001
- 問題文: 使用済燃料・高レベル廃棄物の文脈で「マイナーアクチノイド（MA）」として典型的にまとめられる元素の組合せはどれか。
- 選択肢: ["Np・Am・Cm", "U・Th・Pa", "Cs・Sr・I", "Zr・Mo・Ru"]
- 正答選択肢: A
- 正答: Np・Am・Cm
- 解説: JAEAでは、Np、Am、Cmを代表的なマイナーアクチノイド（MA）として扱っている。Uは主要アクチノイドであり、Cs・Sr・IやZr・Mo・Ruは核分裂生成物側の元素である。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/research3.html ; https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_5.html
- verified: true

### NUC-05-Q002
- 問題文: 軽水炉燃料中で237Npへ至る生成経路として、JAEA資料に示されるものはどれか。
- 選択肢: ["238U(n,γ)239U→β−→239Np→β−→239Pu", "235U(n,γ)236U(n,γ)237U→β−→237Np", "241Pu→β−→241Am→α→237Npだけで生成する", "232Th(n,γ)233Th→β−→233Pa→β−→233U"]
- 正答選択肢: B
- 正答: 235U(n,γ)236U(n,γ)237U→β−→237Np
- 解説: JAEAの分離変換技術資料では、235Uが中性子捕獲して236U、さらに中性子捕獲して237Uとなり、237Uがβ−壊変して237Npに至る経路が示されている。Aは239Pu生成系列、Dは233U生成系列である。241Amのα壊変でも237Npは生じるが、「それだけで生成する」は誤りである。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf ; https://www.jaea.go.jp/02/press2024/p25032802/
- verified: true

### NUC-05-Q003
- 問題文: 237Npの半減期として最も近いものはどれか。
- 選択肢: ["約18年", "約432年", "約214万年", "約7,370年"]
- 正答選択肢: C
- 正答: 約214万年
- 解説: JAEA資料では237Npの半減期は約214万年（詳細表では214.4万年）である。約18年は244Cm、約432年は241Am、約7,370年は243Amに対応する。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf ; https://jopss.jaea.go.jp/pdfdata/JAERI-M-9757.pdf
- verified: true

### NUC-05-Q004
- 問題文: 237Npの主な放射性壊変形式はどれか。
- 選択肢: ["β−壊変", "β+壊変", "電子捕獲", "α壊変"]
- 正答選択肢: D
- 正答: α壊変
- 解説: 237Npは長半減期のα放出核種である。JAEAのアクチノイド核種表でも237Npはα壊変核種として扱われている。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAERI-M-9757.pdf ; https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf
- verified: true

### NUC-05-Q005
- 問題文: 使用済燃料から回収されたプルトニウムを貯蔵すると241Amが時間とともに増加する主な理由はどれか。
- 選択肢: ["241Puがβ−壊変して241Amになるため", "244Cmがβ−壊変して241Amになるため", "237Npが電子捕獲して241Amになるため", "238Uが自発核分裂して241Amになるため"]
- 正答選択肢: A
- 正答: 241Puがβ−壊変して241Amになるため
- 解説: 241Puは半減期約14.4年でβ−壊変し、241Amを生成する。そのためPuを貯蔵すると241Amが蓄積する。JAEAはこの生成経路を明示している。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html ; https://www.jaea.go.jp/02/press2024/p25032802/
- verified: true

### NUC-05-Q006
- 問題文: 241Amの半減期として最も近いものはどれか。
- 選択肢: ["約14.4年", "約432年", "約7,370年", "約214万年"]
- 正答選択肢: B
- 正答: 約432年
- 解説: 241Amの半減期はJAEA資料で約432年（432.2～432.6年程度）とされる。14.4年は親核種241Puの半減期、7,370年は243Am、214万年は237Npである。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html ; https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf ; https://www.jaea.go.jp/02/press2024/p25032802/
- verified: true

### NUC-05-Q007
- 問題文: 241Amがα壊変したときに生じる娘核種はどれか。
- 選択肢: ["239Pu", "240Pu", "237Np", "243Am"]
- 正答選択肢: C
- 正答: 237Np
- 解説: α壊変では質量数が4、原子番号が2減る。241Am（Z=95）は237Np（Z=93）となる。JAEA資料でも241Am→237Npのα壊変が示されている。
- 出典: https://www.jaea.go.jp/02/press2024/p25032802/ ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html
- verified: true

### NUC-05-Q008
- 問題文: JAEAが示す例として、241Amを20 g含む密封線源から約2 Wの熱が得られるとする。このとき241Am 1 g当たりの発熱量として最も近いものはどれか。
- 選択肢: ["約0.001 W/g", "約0.01 W/g", "約1 W/g", "約0.1 W/g"]
- 正答選択肢: D
- 正答: 約0.1 W/g
- 解説: 2 W÷20 g＝0.1 W/gである。241Amのα壊変エネルギーが物質中で熱へ変換されるため、長期間にわたり発熱源として利用できる。
- 出典: https://www.jaea.go.jp/02/press2024/p25032802/
- verified: true

### NUC-05-Q009
- 問題文: 241Amを用いる代表的な（α,n）中性子源で、241Amと組み合わせる軽元素はどれか。
- 選択肢: ["Be", "Pb", "Fe", "Na"]
- 正答選択肢: A
- 正答: Be
- 解説: 241Amのα線をBeに照射すると（α,n）反応で中性子を発生でき、Am-Be中性子源として用いられる。JAEA ATOMICAでも241AmとBeの組合せが代表例として示されている。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1597.html ; https://atomica.jaea.go.jp/dic/detail/dic_detail_1640.html
- verified: true

### NUC-05-Q010
- 問題文: 243Amの半減期として最も近いものはどれか。
- 選択肢: ["約18.1年", "約7,370年", "約432年", "約214万年"]
- 正答選択肢: B
- 正答: 約7,370年
- 解説: JAEAの分離変換技術資料では243Amの半減期は7,370年である。18.1年は244Cm、432年は241Am、214万年は237Npである。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf ; https://jopss.jaea.go.jp/pdfdata/JAERI-M-9757.pdf
- verified: true

### NUC-05-Q011
- 問題文: 241Amより重いMAである243Amや244Cmが燃料照射中に生じる過程の説明として最も適切なものはどれか。
- 選択肢: ["核分裂生成物が直接α壊変して生成する", "天然ウラン中に安定同位体として存在する", "Pu・Am側で中性子捕獲と途中のβ−壊変を重ねることで生成する", "237Npが1回α壊変するだけで両方が生成する"]
- 正答選択肢: C
- 正答: Pu・Am側で中性子捕獲と途中のβ−壊変を重ねることで生成する
- 解説: 重いMAは、原子炉内でPuやAmなどが中性子を逐次捕獲し、必要に応じてβ−壊変を経ながらより重い核種へ進むことで生成する。核分裂生成物から直接生じるものでも、天然ウラン中の安定同位体でもない。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf
- verified: true

### NUC-05-Q012
- 問題文: 244Cmの半減期として最も近いものはどれか。
- 選択肢: ["約214万年", "約7,370年", "約432年", "約18.1年"]
- 正答選択肢: D
- 正答: 約18.1年
- 解説: 244Cmの半減期は約18.1年である。JAEAの核データ測定資料やR&D Reviewでも18.1年とされている。
- 出典: https://wwwndc.jaea.go.jp/Labo/ANNRI_JP.html ; https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_5.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Review-2020-058.pdf
- verified: true

### NUC-05-Q013
- 問題文: 244Cmがα壊変したときに生じる娘核種はどれか。
- 選択肢: ["240Pu", "241Am", "237Np", "244Pu"]
- 正答選択肢: A
- 正答: 240Pu
- 解説: α壊変では質量数が4、原子番号が2減るため、244Cm（Z=96）は240Pu（Z=94）となる。JAEA R&D Reviewでも244Cmが240Puへ壊変することが示されている。
- 出典: https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_5.html ; https://rdreview.jaea.go.jp/review_en/2015/e2015_4_5.html
- verified: true

### NUC-05-Q014
- 問題文: 使用済燃料が放出する中性子の重要な発生源となるマイナーアクチノイドはどれか。
- 選択肢: ["237Np", "244Cm", "241Am", "243Am"]
- 正答選択肢: B
- 正答: 244Cm
- 解説: 使用済燃料の自発中性子源では244Cmの寄与が大きい。JAEA資料では244Cmの高い自発核分裂中性子放出が、使用済燃料の中性子計測や取扱いで重要になることが示されている。
- 出典: https://www.jaea.go.jp/04/iscn/activity/2016-02-10/2016-02-10-05.pdf ; https://jopss.jaea.go.jp/pdfdata/JAERI-M-85-035.pdf
- verified: true

### NUC-05-Q015
- 問題文: MA燃料製造を考えるとき、AmからCmを分離することに利点がある主な理由はどれか。
- 選択肢: ["Npの揮発性を高められるため", "Amの半減期を短くできるため", "Cmによる崩壊熱が大きく、Cmを除くと燃料製造時の熱負荷を軽減できるため", "Cmを化学反応だけで安定核種に変換できるため"]
- 正答選択肢: C
- 正答: Cmによる崩壊熱が大きく、Cmを除くと燃料製造時の熱負荷を軽減できるため
- 解説: JAEAはCmの崩壊熱が大きく、AmとCmを分離してCmを燃料製造工程から外すことで、MA燃料製造時の負担を軽減できると説明している。
- 出典: https://rdreview.jaea.go.jp/review_en/2017/e2017_4_2.html ; https://rdreview.jaea.go.jp/review_jp/2019/j2019_4_3.html
- verified: true

### NUC-05-Q016
- 問題文: AmとCmの相互分離が化学的に難しい主な理由はどれか。
- 選択肢: ["両者が常温で希ガスだから", "両者が水溶液中で必ず+7価だけをとるから", "両者が硝酸に全く溶けないから", "両者は主に3価イオンとして挙動し、化学的性質がよく似ているから"]
- 正答選択肢: D
- 正答: 両者は主に3価イオンとして挙動し、化学的性質がよく似ているから
- 解説: JAEAはAmとCmはいずれも主として3価イオンとなり化学的性質が類似するため、相互分離が難しいと説明している。
- 出典: https://rdreview.jaea.go.jp/review_jp/2019/j2019_4_3.html ; https://rdreview.jaea.go.jp/review_en/2017/e2017_4_2.html
- verified: true

### NUC-05-Q017
- 問題文: 高レベル放射性廃棄物中のNp・Am・Cmに対する「分離変換」の目的として最も適切なものはどれか。
- 選択肢: ["長寿命MAを廃棄物から分離し、核反応で安定核種またはより短寿命の核種へ変換して長期的な負担を減らす", "化学反応だけで全て235Uへ変換する", "揮発させて環境中へ放出する", "温度調整によって核種の半減期そのものを短くする"]
- 正答選択肢: A
- 正答: 長寿命MAを廃棄物から分離し、核反応で安定核種またはより短寿命の核種へ変換して長期的な負担を減らす
- 解説: 分離変換は、長寿命のMAなどを高レベル廃棄物から分離し、中性子反応等によって安定核種またはより短寿命の核種へ変換し、廃棄物の長期的な放射線影響や処分負担を低減する技術である。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/research3.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_07-02-01-02.html ; https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_5.html
- verified: true

### NUC-05-Q018
- 問題文: 237Npが高レベル放射性廃棄物の長期評価で重要となる主な理由はどれか。
- 選択肢: ["半減期が数分しかないため", "半減期が約214万年と非常に長く、長期間残存するため", "安定核種で放射能を持たないため", "MAの中で必ず最大の崩壊熱を出すため"]
- 正答選択肢: B
- 正答: 半減期が約214万年と非常に長く、長期間残存するため
- 解説: 237Npの半減期は約214万年であり、短期的な発熱よりも長期にわたって残存することが廃棄物管理上の重要点である。JAEA資料でも長期的な放射性毒性・処分評価で重要な核種として扱われる。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAERI-M-94-067.pdf ; https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf
- verified: true

### NUC-05-Q019
- 問題文: 再処理・分離変換技術におけるNp・Am・Cmの扱いとして適切なものはどれか。
- 選択肢: ["Np・Am・Cmは分離対象にならず、常に全量をそのままガラス固化する", "Np・Am・Cmは全て希ガスなのでオフガス系だけで回収する", "高度化した核燃料サイクル・分離変換研究では、Np・Am・Cmを高レベル廃液等から分離・回収することが検討されている", "PUREX法ではNp・Am・Cmが必ず全量Pu製品側へ移る"]
- 正答選択肢: C
- 正答: 高度化した核燃料サイクル・分離変換研究では、Np・Am・Cmを高レベル廃液等から分離・回収することが検討されている
- 解説: 従来の再処理では主にU・Puを回収するが、高度化した核燃料サイクルや分離変換研究では、廃棄物負担低減のためNp・Am・CmなどMAの分離・回収が検討されている。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html ; https://rdreview.jaea.go.jp/review_en/2017/e2017_4_2.html
- verified: true

### NUC-05-Q020
- 問題文: 237Np、241Am、243Am、244Cmを半減期の短い順に並べたものとして正しいものはどれか。
- 選択肢: ["241Am＜244Cm＜237Np＜243Am", "243Am＜241Am＜244Cm＜237Np", "237Np＜243Am＜241Am＜244Cm", "244Cm＜241Am＜243Am＜237Np"]
- 正答選択肢: D
- 正答: 244Cm＜241Am＜243Am＜237Np
- 解説: JAEA資料の代表値は、244Cm約18.1年、241Am約432年、243Am約7,370年、237Np約214万年である。したがって短い順は244Cm＜241Am＜243Am＜237Npとなる。
- 出典: https://nsec.jaea.go.jp/ndre/ndre3/trans/pdf/lecture2-2.pdf ; https://jopss.jaea.go.jp/pdfdata/JAERI-M-9757.pdf
- verified: true

