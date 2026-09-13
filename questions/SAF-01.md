# SAF-01 臨界の基礎

- status: complete
- verified_questions: 20 / 20
- scope: 臨界 / 未臨界 / 超臨界、実効増倍率 `k_eff`、中性子収支、臨界質量・臨界寸法
- verified_at: 2026-09-12

## 出題傾向確認

第56回「核燃料物質の取扱いに関する技術」第4問では、臨界安全管理、複数ユニットの中性子実効増倍率、未臨界性判断などが直接問われている。SAF-01では、その前提となる臨界状態・増倍率・中性子収支・臨界量の基礎を独立した問題に分解する。

過去問本文は転載せず、論点のみを参照して新規作問した。

## 主要出典

- JAEA ATOMICA「原子炉物理の基礎（1）原子炉の構造と核分裂連鎖反応」  
  https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-01.html
- JAEA ATOMICA「原子炉物理の基礎（2）中性子増倍率と転換、増殖」  
  https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- JAEA ATOMICA「原子炉の炉心核設計概論」  
  https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-04.html
- JAEA「臨界実験装置」  
  https://www.jaea.go.jp/04/ntokai/anzen/anzen_02.html
- NRA 第56回核燃料取扱主任者試験「核燃料物質の取扱いに関する技術」  
  https://www.nra.go.jp/data/000472260.pdf

---

## Q001

- type: 用語
- question: 外部から中性子を供給しなくても、核分裂連鎖反応が時間とともに増えも減りもせず一定に持続する状態を何というか。
- answer: 臨界（critical）
- explanation: 臨界では核分裂連鎖反応が自己持続し、中性子数が世代を通じて一定に保たれる。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-01.html
- verified: true

## Q002

- type: 対応
- question: 中性子増倍率 `k` が 1 未満の状態を何というか。
- answer: 未臨界（臨界未満、subcritical）
- explanation: 世代間の中性子数の比が1未満なので、外部中性子源がなければ連鎖反応は世代ごとに減衰する。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q003

- type: 対応
- question: 中性子増倍率 `k` がちょうど 1 の状態を何というか。
- answer: 臨界（critical）
- explanation: ある世代の中性子数と一つ前の世代の中性子数が等しく、連鎖反応が一定に維持される。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q004

- type: 対応
- question: 中性子増倍率 `k` が 1 を超える状態を何というか。
- answer: 超臨界（臨界超過、supercritical）
- explanation: 世代間で中性子数が増加する状態である。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q005

- type: 定義
- question: 中性子増倍率 `k` を、連続する二つの中性子世代の個数を使って定義せよ。
- answer: `k = ある世代の中性子数 / 一つ前の世代の中性子数`
- explanation: 核分裂で生じた中性子が次の核分裂を起こして次世代の中性子を生むまでを一つの世代として、その世代間の個数比を増倍率という。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q006

- type: 正誤
- question: 有限の核燃料体系でも、中性子の体系外への漏れを無視した無限増倍率だけで臨界性を正しく判定できる。正しいか。
- answer: 誤り
- explanation: 有限体系では中性子漏えいがあるため、漏れない確率を含めた実効増倍率を用いる必要がある。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q007

- type: 穴埋め
- question: 二群近似で、実効増倍率は `k_eff = k_∞ × ( A ) × ( B )` と表せる。A、Bに入るものを答えよ。
- answer: A = 高速中性子が漏れない確率 `P_FNL`、B = 熱中性子が漏れない確率 `P_TNL`
- explanation: 有限体系では無限増倍率に高速中性子・熱中性子それぞれの非漏えい確率を掛けて実効増倍率を表す。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q008

- type: 中性子収支
- question: 臨界状態で、中性子の「生成」と釣り合う二つの主な損失機構を答えよ。
- answer: 吸収と体系外への漏れ
- explanation: 臨界条件は、核分裂による中性子生成と、吸収および漏れによる中性子損失が釣り合う状態として表せる。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-01-04.html
- verified: true

## Q009

- type: 正誤
- question: `k_eff < 1` の体系では、外部中性子源がなければ核分裂連鎖反応による中性子数は世代ごとに減少する。正しいか。
- answer: 正しい
- explanation: 増倍率は前世代に対する次世代の中性子数の比なので、1未満なら世代を重ねるごとに減少する。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q010

- type: 正誤
- question: `k_eff > 1` の体系では、核分裂連鎖反応による中性子数は世代ごとに増加する。正しいか。
- answer: 正しい
- explanation: 増倍率が1を超えるため、次世代の中性子数が前世代より多くなる。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q011

- type: 理由
- question: 実効増倍率が体系の形状や大きさに依存する主な理由を答えよ。
- answer: 体系の形状や大きさによって中性子が体系外へ漏れる割合が変わるため。
- explanation: 有限体系の実効増倍率には中性子の非漏えい確率が含まれ、非漏えい確率は体系の幾何形状・大きさに依存する。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q012

- type: 用語
- question: 体系がちょうど臨界となるときの体積を何というか。
- answer: 臨界体積
- explanation: `k_eff = 1` となる体系の体積を臨界体積という。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q013

- type: 用語
- question: 体系がちょうど臨界となるとき、その体系中に存在する燃料の量を何というか。
- answer: 臨界量（臨界質量、critical mass）
- explanation: 臨界となる体系中の燃料量を臨界量または臨界質量という。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q014

- type: 定義
- question: 「臨界寸法」とは何を意味するか。
- answer: 与えられた組成・材料条件などの下で、体系の実効増倍率が1となり、ちょうど臨界になる体系寸法。
- explanation: 臨界方程式から幾何学的条件を求めることで、体系がちょうど臨界となる寸法を定められる。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q015

- type: 理由
- question: 同じ組成の体系で代表寸法を大きくすると、一般に中性子漏えいの相対的重要性が小さくなるのはなぜか。
- answer: 中性子漏えいに関係する表面積は代表寸法の二乗に、発生に関係する体積は三乗に比例するため、漏れ/発生の比がおおむね代表寸法の逆数に比例して小さくなるから。
- explanation: 球半径を `R` とすれば、表面積は `R^2`、体積は `R^3` に比例し、漏れ対発生の比は概ね `1/R` に比例する。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q016

- type: 正誤
- question: 無限増倍率 `k_∞` が1を超える体系では、体系の代表寸法を調整することで `k_eff = 1` となる臨界寸法を持ち得る。正しいか。
- answer: 正しい
- explanation: `k_∞ > 1` なら、体系寸法によって漏えい割合を変化させ、有限体系の実効増倍率を1にする寸法を定めることができる。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q017

- type: 比較
- question: 同一材料・同一条件で体積が同じ体系を比較したとき、球形が最小臨界量を与えやすい理由を答えよ。
- answer: 球は一定体積に対する表面積が最小で、中性子漏えいが最も小さくなりやすいため。
- explanation: 漏えいが小さいほど連鎖反応を維持しやすく、JAEA資料でも球形炉心の臨界量が最小になることが説明されている。
- source: https://atomica.jaea.go.jp/data/detail/dat_detail_03-06-04-02.html
- verified: true

## Q018

- type: 正誤
- question: 「ある核種の臨界質量」は核種だけで一意に決まり、形状や周囲の環境には依存しない。正しいか。
- answer: 誤り
- explanation: 臨界量は核分裂性物質の種類だけでなく、形状、中性子の減速条件、反射条件などによって変わる。
- source: https://atomica.jaea.go.jp/dic/detail/dic_detail_2421.html
- verified: true

## Q019

- type: 用語区別
- question: 「臨界質量」と「最小臨界量」の違いを簡潔に説明せよ。
- answer: 臨界質量は特定の体系条件で臨界となる燃料量を指し、最小臨界量は条件を変えた場合も含めて臨界となり得る最小側の量を指す。
- explanation: 臨界質量は体系条件に依存する。一方、JAEAは「ある質量以下では臨界になり得ない」境界となる量を最小臨界量として説明している。
- source: https://atomica.jaea.go.jp/dic/detail/dic_detail_2421.html
- verified: true

## Q020

- type: 応用基礎
- question: 再処理施設などの溶液燃料取扱施設で、臨界安全を考慮した設計が必要な根本理由を答えよ。
- answer: 核燃料物質の濃度・成分比・量などの条件によっては核分裂連鎖反応が自己持続する臨界状態に達し得るため。
- explanation: JAEAの臨界実験装置の説明では、再処理施設の溶液燃料について、濃度・成分比・量が変化しても臨界とならないよう臨界管理を行う必要があるとしている。
- source: https://www.jaea.go.jp/04/ntokai/anzen/anzen_02.html
- verified: true

---

## coverage

- 臨界 / 未臨界 / 超臨界: Q001-Q004, Q009-Q010
- 増倍率の定義: Q005
- `k_eff` と有限体系・漏えい: Q006-Q007, Q011, Q016
- 中性子収支: Q008, Q015
- 臨界体積・臨界質量・臨界寸法: Q012-Q019
- 核燃料施設への適用基礎: Q020

SAF-01の指定論点を網羅したため complete とする。
