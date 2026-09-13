# SAF-06 臨界計算

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- answer_distribution: A=6, B=6, C=6, D=6
- authority: IAEA SSG-27 (Rev.1)、JAEA臨界安全資料・MVP資料、OECD/NEA ICSBEPを正解authorityとする

## 出題根拠

対象論点は、モンテカルロ法、実効増倍率 keff、統計誤差、解析モデル、ベンチマーク、計算バイアス、適用範囲、安全余裕。NRAの公式過去問公開ページで直近第56～58回「核燃料物質の取扱いに関する技術」を確認し、過去問本文は転載せず、IAEAの現行臨界安全ガイド、JAEAの臨界安全・MVP資料、OECD/NEA ICSBEPに基づいて独立した4択問題を作成した。

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回 取扱いに関する技術: https://www.nra.go.jp/data/000480853.pdf
- 第57回 取扱いに関する技術: https://www.nra.go.jp/data/000475646.pdf
- 第56回 取扱いに関する技術: https://www.nra.go.jp/data/000472260.pdf
- IAEA SSG-27 (Rev.1), Criticality Safety in the Handling of Fissile Material: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf
- IAEA SSG-27 (Rev.1) Web版「Verifying and validating the calculation methods」: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- JAEA 臨界安全研究グループ: https://www.jaea.go.jp/04/anzen/group/csrg/index.html
- JAEA 「良く検証された計算手法による臨界量データの算出」: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html
- JAEA 「原子炉核特性パラメータの高精度評価を目指して」: https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_1.html
- JAEA MVP: https://rpg.jaea.go.jp/main/ja/program_mvp/
- JAEA PHITS User's Manual 3.37「統計誤差の計算方法」: https://phits.jaea.go.jp/manual/PHITS-jp/chapters/sections/parameters/parameters_2.html
- OECD/NEA ICSBEP Handbook: https://www.oecd-nea.org/jcms/pl_20291/icsbep-handbook

## 問題

### SAF-06-Q001
- 問題文: 臨界安全解析で用いる実効増倍率 keff の意味として最も適切なのはどれか。
- 選択肢: ["核分裂で生まれる中性子と、吸収・漏えい等で失われる中性子との収支を表す増倍率", "放射線作業者の実効線量を表す係数", "核燃料物質の濃縮度を質量百分率で表す値", "中性子の平均エネルギーをMeV単位で表す値"]
- 正答選択肢: A
- 正答: 核分裂で生まれる中性子と、吸収・漏えい等で失われる中性子との収支を表す増倍率
- 解説: JAEAは臨界解析で、中性子の核分裂による発生数と吸収などの消滅数の比として実効増倍率kを計算すると説明している。線量、濃縮度、平均中性子エネルギーを表す量ではない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html
- verified: true

### SAF-06-Q002
- 問題文: keff=0.97 と評価された体系の状態として、keffの定義だけから判断できるものはどれか。
- 選択肢: ["臨界", "未臨界", "超臨界", "keffだけでは臨界・未臨界を区別できない"]
- 正答選択肢: B
- 正答: 未臨界
- 解説: JAEAは理論的に k=1 で臨界、k<1 で未臨界と説明している。0.97は1未満なので未臨界である。臨界・超臨界ではなく、keffはまさに臨界性を示す量である。
- 出典: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html
- verified: true

### SAF-06-Q003
- 問題文: 中性子輸送のモンテカルロ法の説明として適切なのはどれか。
- 選択肢: ["中性子を連続体として扱い、乱数を一切使わず解析解だけを求める方法", "臨界実験の測定値をそのまま安全限度として採用する方法", "個々の中性子の飛行・衝突などを確率的に追跡して核特性を推定する方法", "核データを使わず幾何形状だけからkeffを決める方法"]
- 正答選択肢: C
- 正答: 個々の中性子の飛行・衝突などを確率的に追跡して核特性を推定する方法
- 解説: JAEAは、モンテカルロ法を中性子の振る舞いを忠実にシミュレーションして核特性を計算する方法と説明している。乱数を用いない解析解、実験値の単純転用、核データを使わない幾何計算ではない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2015/j2015_4_1.html
- verified: true

### SAF-06-Q004
- 問題文: JAEAのMVPについて適切なのはどれか。
- 選択肢: ["放射線防護専用の線量計算表計算ソフトである", "臨界計算には使えず、熱流動だけを解くコードである", "核データライブラリを使わず経験式だけでkeffを出すコードである", "連続エネルギー法等に基づく汎用中性子・光子輸送モンテカルロコードで、臨界計算にも用いられる"]
- 正答選択肢: D
- 正答: 連続エネルギー法等に基づく汎用中性子・光子輸送モンテカルロコードで、臨界計算にも用いられる
- 解説: JAEAのMVPページはMVP/GMVP第3版を、連続エネルギー法及び多群法に基づく汎用中性子・光子輸送モンテカルロコードとしている。臨界安全研究でもMVPと核データライブラリの組合せが用いられている。
- 出典: https://rpg.jaea.go.jp/main/ja/program_mvp/ ; https://www.jaea.go.jp/04/anzen/group/csrg/index.html
- verified: true

### SAF-06-Q005
- 問題文: 臨界安全計算に用いる計算手法の「verification」の説明として適切なのはどれか。
- 選択肢: ["計算手法が意図した概念モデル・数学モデルを正しく実装しているかを確認すること", "実験体系との比較だけで計算バイアスを決めること", "評価対象体系の運転手順を承認すること", "未臨界限度を法令値として制定すること"]
- 正答選択肢: A
- 正答: 計算手法が意図した概念モデル・数学モデルを正しく実装しているかを確認すること
- 解説: IAEA SSG-27 (Rev.1) 4.23はverificationを、計算手法が意図した概念モデル又は数学モデルを正しく実装しているかを確認するプロセスとする。実験との比較による現実系の再現性確認はvalidationの側である。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q006
- 問題文: 臨界安全計算に用いる計算手法の「validation」として最も適切なのはどれか。
- 選択肢: ["入力ファイルの文字コードだけを確認する", "計算予測を実体系の観測又は評価済み実験データと比較し、バイアスと不確かさを定量化する", "解析者がコードのソースを一度コンパイルできれば完了とする", "異なる二つの計算コードが同じ値なら実験比較なしで妥当とする"]
- 正答選択肢: B
- 正答: 計算予測を実体系の観測又は評価済み実験データと比較し、バイアスと不確かさを定量化する
- 解説: SSG-27 (Rev.1) 4.24はvalidationを、モデル予測を実体系の観測又は評価済み実験データと比較し、計算バイアスと不確かさを定量化するプロセスとしている。コード間比較だけでは十分なvalidationではない。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q007
- 問題文: 臨界安全解析でverification・validationの対象として扱う組合せとして適切なのはどれか。
- 選択肢: ["計算機の筐体色と設置室温だけ", "解析担当者の勤続年数だけ", "計算コードと、それに組み合わせる核データライブラリを含む計算手法", "施設の年間生産量だけ"]
- 正答選択肢: C
- 正答: 計算コードと、それに組み合わせる核データライブラリを含む計算手法
- 解説: SSG-27 (Rev.1) 4.22は、keff算出に用いるcomputer codesとassociated nuclear data libraryを含む計算手法についてverification・validationを要求する。筐体色、担当者の勤続年数、生産量だけでは計算手法の信頼性を確認できない。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q008
- 問題文: 計算手法をvalidationするベンチマークの選定で最も重要な考え方はどれか。
- 選択肢: ["最も古い実験だけを選ぶ", "計算しやすい単純形状だけを選び、評価対象との差は無視する", "keffが必ず1.0000になるものだけを選ぶ", "評価対象体系とベンチマークの中性子学的・幾何学的・物理的・化学的特性の対応を確認する"]
- 正答選択肢: D
- 正答: 評価対象体系とベンチマークの中性子学的・幾何学的・物理的・化学的特性の対応を確認する
- 解説: SSG-27 (Rev.1) 4.25～4.26は、ベンチマークと評価対象の特性を比較して適用性を判断することを求める。年代、計算容易性、keffの表示値だけでは代表性を保証しない。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q009
- 問題文: 臨界安全計算のvalidation用ベンチマークに望ましい不確かさの条件はどれか。
- 選択肢: ["不確かさが既知で、採用する安全余裕に比べて十分小さいこと", "不確かさが不明であるほど保守的なので望ましいこと", "不確かさが安全余裕より大きいこと", "実験不確かさはvalidationでは考慮しないこと"]
- 正答選択肢: A
- 正答: 不確かさが既知で、採用する安全余裕に比べて十分小さいこと
- 解説: SSG-27 (Rev.1) 4.26は、ベンチマークの情報が完全でバイアス・不確かさを扱っており、その不確かさが任意又は管理上設定した安全余裕に比べて既知かつ比較的小さいことを求める。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q010
- 問題文: validation用ベンチマークを複数の独立した実験系列から選ぶ主な理由はどれか。
- 選択肢: ["計算コードの実行速度を上げるため", "共通するベンチマーク不確かさによる相関・系統影響を小さくするため", "評価対象の幾何形状を入力しなくてよくするため", "核データライブラリを不要にするため"]
- 正答選択肢: B
- 正答: 共通するベンチマーク不確かさによる相関・系統影響を小さくするため
- 解説: SSG-27 (Rev.1) 4.26は、shared benchmark uncertainties、すなわち相関した系統的影響を減らすため、複数の独立したベンチマーク集合を選ぶことを推奨する。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q011
- 問題文: ベンチマークの適用性を評価する際、SSG-27 (Rev.1) が比較対象として挙げるものはどれか。
- 選択肢: ["解析担当者の所属部署", "施設の建設年度", "核種・同位体組成、密度、減速材比、形状・反射体、中性子スペクトルなど", "計算機の購入価格"]
- 正答選択肢: C
- 正答: 核種・同位体組成、密度、減速材比、形状・反射体、中性子スペクトルなど
- 解説: SSG-27 (Rev.1) 4.26は化学組成・同位体組成・密度・減速材比・均質性・幾何配置・吸収材・温度・反射体・中性子スペクトル等を、ベンチマークと評価対象の対応確認項目として列挙している。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q012
- 問題文: 同じ体系を二つの異なる計算コードで解析し、keffがよく一致した。この事実だけでvalidationが完了したといえるか。
- 選択肢: ["必ず完了する。コードが二つあれば実験は不要である", "一致値が1未満なら自動的に完了する", "二つのコードが同じ核データを使えば自動的に完了する", "完了しない。コード間比較は補助にはなるが、それだけでは十分なvalidationではない"]
- 正答選択肢: D
- 正答: 完了しない。コード間比較は補助にはなるが、それだけでは十分なvalidationではない
- 解説: SSG-27 (Rev.1) 4.27は、別コードとの比較はvalidationの補助になり得るが、それ自体では十分なvalidationを構成しないと明記する。実験又は評価済みベンチマークとの比較が必要である。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q013
- 問題文: 評価対象が既存ベンチマークの適用範囲から大きく外れ、バイアス傾向を外挿して評価する場合の扱いとして適切なのはどれか。
- 選択肢: ["validation不確かさを考慮して追加の安全余裕が必要になる場合がある", "外挿距離が大きいほど安全余裕を小さくする", "ベンチマークとの差が大きければvalidation自体を不要とする", "計算値が1未満なら外挿不確かさを無視する"]
- 正答選択肢: A
- 正答: validation不確かさを考慮して追加の安全余裕が必要になる場合がある
- 解説: SSG-27 (Rev.1) 4.27は、ベンチマークから評価対象への大きな外挿を伴う場合、validation uncertaintyを考慮する追加marginが必要になり得るとしている。外挿が大きいほど不確かさを無視したり余裕を縮小したりする根拠にはならない。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q014
- 問題文: validationで計算バイアスとその不確かさを定める方法として適切なのはどれか。
- 選択肢: ["解析者の経験だけで任意に決める", "適切な統計的方法を用いて、ベンチマークとの比較結果から評価する", "最も小さいkeff一件だけを採用する", "計算バイアスは常にゼロと仮定する"]
- 正答選択肢: B
- 正答: 適切な統計的方法を用いて、ベンチマークとの比較結果から評価する
- 解説: SSG-27 (Rev.1) 4.29は、validation過程でbiasとbias uncertaintyを確立するため適切な統計的方法を用いるよう求める。経験のみ、単一最小値、ゼロ固定はいずれも根拠にならない。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q015
- 問題文: validationデータの分布が正規分布とみなせない場合の統計処理について、SSG-27 (Rev.1) に沿うものはどれか。
- 選択肢: ["必ず正規分布として処理する", "統計処理を行わず平均値だけを使う", "ノンパラメトリックな方法を用いることを検討する", "全データを捨て、計算バイアスをゼロとする"]
- 正答選択肢: C
- 正答: ノンパラメトリックな方法を用いることを検討する
- 解説: SSG-27 (Rev.1) 4.29は、データが正規分布でない場合にはnon-parametric approachが適切となる場合があるとしている。分布形を無視した正規近似や統計評価の放棄は同ガイドの趣旨に反する。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q016
- 問題文: ベンチマーク適用性を評価する計算と、実際の評価対象体系の計算との関係として適切なのはどれか。
- 選択肢: ["ベンチマーク側は必ず別の核データを使う", "評価対象側だけ古いコードを使う", "両者の解析手法は違うほど独立性が高く望ましい", "原則として同じ計算手法・解析技法・核データを用い、異なる場合はその使用を正当化する"]
- 正答選択肢: D
- 正答: 原則として同じ計算手法・解析技法・核データを用い、異なる場合はその使用を正当化する
- 解説: SSG-27 (Rev.1) 4.28は、ベンチマーク適用性評価に使う計算手法・解析技法・核データは、評価対象に使うものと同じにし、異なる場合は理由を示すよう求める。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q017
- 問題文: 独立な標本を用いる通常のモンテカルロ計算で、標本数Nを増やしたときの標準誤差の基本的な依存性として適切なのはどれか。
- 選択肢: ["概ね1/√Nに比例して小さくなる", "概ねNに比例して大きくなる", "Nによらず常に一定である", "Nを増やすと必ずゼロになる"]
- 正答選択肢: A
- 正答: 概ね1/√Nに比例して小さくなる
- 解説: JAEAのPHITSマニュアルは標準誤差をσ/√Nで計算すると説明している。したがって他条件が同じなら標本数を増やすほど統計誤差は減るが、有限のNで必ずゼロになるわけではない。
- 出典: https://phits.jaea.go.jp/manual/PHITS-jp/chapters/sections/parameters/parameters_2.html
- verified: true

### SAF-06-Q018
- 問題文: モンテカルロ計算で他条件が同じとし、標準誤差が1/√Nに従う場合、ヒストリー数を4倍にすると標準誤差は元のおよそ何倍になるか。
- 選択肢: ["4倍", "1/2倍", "1/4倍", "変化しない"]
- 正答選択肢: B
- 正答: 1/2倍
- 解説: 標準誤差が1/√Nに比例するなら、Nを4Nにしたとき比は1/√4=1/2である。4倍、1/4倍、一定ではない。
- 出典: https://phits.jaea.go.jp/manual/PHITS-jp/chapters/sections/parameters/parameters_2.html
- verified: true

### SAF-06-Q019
- 問題文: JAEAがMVPとJENDL-3.2の組合せを臨界実験で検証した例で、均質低濃縮ウラン系について採用可能とした推定臨界下限増倍率 klim はどれか。
- 選択肢: ["0.90", "0.95", "0.98", "1.05"]
- 正答選択肢: C
- 正答: 0.98
- 解説: JAEAの臨界安全ハンドブック・データ集第2版に関する解説では、均質低濃縮ウラン系のMVP＋JENDL-3.2ベンチマーク解析を統計評価し、推定臨界下限増倍率klimとして0.98を採用できるとしている。この0.98は当該検証条件に基づく値であり、任意のコード・核データ・体系に無条件で流用する値ではない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html
- verified: true

### SAF-06-Q020
- 問題文: JAEAのMVP＋JENDL-3.2検証例における klim=0.98 の使い方として適切なのはどれか。
- 選択肢: ["全ての臨界安全コードに法定値として0.98を強制する", "計算値が0.98を超えていても必ず未臨界と断定する", "計算値が1未満なら検証範囲に関係なく安全と断定する", "当該検証の適用範囲内で、計算結果がklimより小さいことを未臨界判断の基準として用いる"]
- 正答選択肢: D
- 正答: 当該検証の適用範囲内で、計算結果がklimより小さいことを未臨界判断の基準として用いる
- 解説: JAEAはベンチマーク計算結果の分布からklimを定め、計算結果がk<klimであれば現実にも未臨界と判断できると説明している。一方IAEAは計算手法の適用範囲確認を要求しており、0.98を一般法定値として無条件に使うものではない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html ; https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true

### SAF-06-Q021
- 問題文: ある検証済み計算手法について、その適用範囲内で未臨界判断基準が klim=0.980 と定められている。対象体系の計算結果が keff=0.975 のとき、基準との比較として正しいものはどれか。
- 選択肢: ["0.975<0.980なので、計算結果はklimを下回る", "0.975>0.980なので、計算結果はklimを上回る", "0.975=0.980なので、両者は等しい", "keffとklimは単位が異なるため比較できない"]
- 正答選択肢: A
- 正答: 0.975<0.980なので、計算結果はklimを下回る
- 解説: keffとklimはいずれも無次元の増倍率であり直接比較できる。0.975は0.980より0.005小さい。JAEAの例では、検証の適用範囲内で計算値がklimを下回ることを未臨界判断に用いる。
- 出典: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html
- verified: true

### SAF-06-Q022
- 問題文: ある検証済み計算手法について、その適用範囲内で未臨界判断基準が klim=0.980 と定められている。対象体系の計算結果が keff=0.985 のとき、基準との比較として適切なのはどれか。
- 選択肢: ["0.985は1未満なので、klimとの比較をせず必ず基準適合とする", "0.985>0.980なので、少なくとも『keff<klim』という判定条件は満たさない", "0.985<0.980なので、klimを下回る", "0.985と0.980は誤差範囲を考えなくても常に等しい"]
- 正答選択肢: B
- 正答: 0.985>0.980なので、少なくとも『keff<klim』という判定条件は満たさない
- 解説: 0.985は0.980より0.005大きい。したがってJAEA例の「計算結果がklimより小さい」という判断条件を満たさない。keff<1だけを理由に、validationで定めた下限基準を無視して安全判定してはならない。
- 出典: https://rdreview.jaea.go.jp/review_jp/2010/j2010_6_8.html
- verified: true

### SAF-06-Q023
- 問題文: OECD/NEAのICSBEP Handbookの主用途として適切なのはどれか。
- 選択肢: ["作業者の個人線量を記録する", "加工施設の生産計画を管理する", "評価済み臨界実験ベンチマークを用いて臨界安全計算手法をvalidationする", "核燃料物質の輸送容器を自動設計する"]
- 正答選択肢: C
- 正答: 評価済み臨界実験ベンチマークを用いて臨界安全計算手法をvalidationする
- 解説: OECD/NEAはICSBEP Handbookを、各国の臨界実験から評価したベンチマーク仕様を集積し、核分裂性物質取扱いの未臨界余裕を定める計算手法のvalidation等に使う資料としている。個人線量記録、生産管理、自動設計のためのデータベースではない。
- 出典: https://www.oecd-nea.org/jcms/pl_20291/icsbep-handbook
- verified: true

### SAF-06-Q024
- 問題文: 検証済みの臨界計算コードについて、OS・ソフトウェア・ハードウェアなど実行環境を変更した場合の扱いとしてSSG-27 (Rev.1) に沿うものはどれか。
- 選択肢: ["一度verificationしたコードは実行環境が変わっても永久に再確認不要である", "実行環境が変わればvalidationベンチマークを全て廃棄する", "実行環境変更後は計算結果を無条件に1%補正する", "変更がコード実行へ悪影響を与えないことを含めて再verificationを行う"]
- 正答選択肢: D
- 正答: 変更がコード実行へ悪影響を与えないことを含めて再verificationを行う
- 解説: SSG-27 (Rev.1) 4.23と4.26は、OS・software・hardwareなどの運用環境変更がコード実行に悪影響を与えないことを確認し、コードシステム変更後には再verificationすることを求める。永久免除、ベンチマーク全廃棄、一律補正ではない。
- 出典: https://nucleus.iaea.org/sites/nss-oui/Published%20Chunks/m_9b9aefeb-0e98-40e3-b674-21dfb15bf315/c_38ed6cce-36d7-4af7-a35a-30cee79ca57e__1_0.Html
- verified: true
