# SAF-05 二重偶発性原理

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- answer_distribution: A=6, B=6, C=6, D=6
- authority: IAEA SSG-27 (Rev.1)・SSR-4、現行e-Gov/NRA加工施設基準・公開審査資料を正解authorityとする

## 出題根拠

対象論点は、二重偶発性原理の定義、独立した二事象、単一異常で臨界に至らない設計、独立性・共通原因、同時性、検知と是正、単一故障基準、適用例。NRAの直近第56～58回「核燃料物質の取扱いに関する技術」を出題傾向確認に用い、過去問本文は転載せず、IAEA安全基準、現行e-Gov法令及びNRA公開資料に基づいて独立した4択問題を作成した。

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回 取扱いに関する技術: https://www.nra.go.jp/data/000480853.pdf
- 第57回 取扱いに関する技術: https://www.nra.go.jp/data/000475646.pdf
- 第56回 取扱いに関する技術: https://www.nra.go.jp/data/000472260.pdf
- IAEA SSG-27 (Rev.1), Criticality Safety in the Handling of Fissile Material: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf
- IAEA SSR-4, Safety of Nuclear Fuel Cycle Facilities: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- e-Gov 加工施設の技術基準に関する規則: https://laws.e-gov.go.jp/law/502M60080000006
- NRA 公開資料（加工施設の臨界防止・単一故障等）: https://www2.nra.go.jp/data/000468877.pdf
- NRA 公開資料（MOX加工施設の臨界管理設計）: https://www.nra.go.jp/data/000323500.pdf

## 問題

### SAF-05-Q001
- 問題文: 二重偶発性原理の説明として最も適切なのはどれか。
- 選択肢: ["臨界事故が可能になるまでに、少なくとも二つの起こりにくく、互いに独立し、かつ同時に存在するプロセス条件の変化を必要とするよう設計する考え方", "一つの異常が起これば直ちに臨界に至るが、警報で被ばくを抑える考え方", "二つの監視計器を同じ信号源に接続すれば、故障原因に関係なく二重化とみなす考え方", "通常運転時だけ未臨界なら、異常時の条件は評価しなくてよいとする考え方"]
- 正答選択肢: A
- 正答: 臨界事故が可能になるまでに、少なくとも二つの起こりにくく、互いに独立し、かつ同時に存在するプロセス条件の変化を必要とするよう設計する考え方
- 解説: IAEA SSR-4 6.142及びSSG-27 (Rev.1) 3.3, 3.7は、少なくとも二つの unlikely, independent and concurrent changes が必要となる設計を二重偶発性原理としている。単一異常で臨界に至る設計、共通原因を持つ見かけだけの二重化、異常時評価の省略はいずれもこの原理に反する。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q002
- 問題文: 二重偶発性原理を設計に適用したとき、単一の異常事象に対して要求される結果として適切なのはどれか。
- 選択肢: ["必ず臨界警報が作動することだけを保証すればよい", "単一の故障・誤作動・誤操作だけでは臨界事故に至らないこと", "単一異常の発生確率をゼロと証明すること", "単一異常が発生したら直ちに設備を廃止すること"]
- 正答選択肢: B
- 正答: 単一の故障・誤作動・誤操作だけでは臨界事故に至らないこと
- 解説: SSG-27 (Rev.1) 3.10は、component failure、function control failure、human errorなど一つの故障又は事象が臨界事故を生じさせないことを単一故障基準として示す。NRAの加工・再処理施設の臨界防止要求も、単一故障・誤作動・単一誤操作を想定しても臨界に達するおそれがない設計を求める。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q003
- 問題文: 二重偶発性原理で二つの変化が「独立」であると説明できる条件はどれか。
- 選択肢: ["二つが同じ作業員の同じ誤判断から同時に生じる", "二つが同一の電源喪失で同時に機能を失う", "一方の発生が他方を引き起こす共通原因関係がなく、共通原因故障で同時に失われない", "二つの変化が同じ計器の同じ測定値に依存する"]
- 正答選択肢: C
- 正答: 一方の発生が他方を引き起こす共通原因関係がなく、共通原因故障で同時に失われない
- 解説: SSG-27 (Rev.1) 3.8は、二つの変化が independent であることを、common cause failure によって引き起こされないこととして確認するよう求める。同一判断、同一電源、同一信号への依存は独立性を損なう典型例である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q004
- 問題文: 二重偶発性原理において、二つのプロセス条件の変化の発生可能性について求められる考え方はどれか。
- 選択肢: ["少なくとも一方は頻繁に発生してよい", "二つのうち一方だけが低確率ならよい", "発生確率は評価せず独立性だけを見ればよい", "二つの各変化について、それぞれ発生確率が十分低いことを示す"]
- 正答選択肢: D
- 正答: 二つの各変化について、それぞれ発生確率が十分低いことを示す
- 解説: SSG-27 (Rev.1) 3.8は、二つの変化の独立性に加え、each change の発生確率が sufficiently low であることを示すよう勧告する。一方だけ低確率、頻発事象の許容、確率評価の省略は同項に合わない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q005
- 問題文: 二重偶発性原理の「concurrent」の意味として適切なのはどれか。
- 選択肢: ["臨界事故に至るために必要な二つの変化が同時に存在していること", "二つの変化が同じ暦日に起きれば、途中で一方が解消していてもよいこと", "二つの変化の発生場所が同じ建屋であること", "二つの変化を同じ担当者が記録すること"]
- 正答選択肢: A
- 正答: 臨界事故に至るために必要な二つの変化が同時に存在していること
- 解説: SSR-4 6.142とSSG-27 (Rev.1) 3.3, 3.7は two unlikely, independent and concurrent changes と規定する。単に同じ日・同じ場所・同じ担当者という意味ではなく、臨界条件を形成する変化が同時に存在することが要点である。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q006
- 問題文: IAEA SSG-27 (Rev.1) が、設計によるフォールトトレランスを確保するための望ましい手段として挙げるものはどれか。
- 選択肢: ["臨界事故後の線量評価だけを充実させること", "二重偶発性原理を設計に取り入れること", "全ての臨界管理を口頭確認だけで行うこと", "異常時には未臨界限度を超えることを許容すること"]
- 正答選択肢: B
- 正答: 二重偶発性原理を設計に取り入れること
- 解説: SSG-27 (Rev.1) 3.7は、fault tolerance を設計で確保する preferred means として double contingency principle を挙げる。事故後評価だけ、口頭確認だけ、異常時の限度逸脱容認はいずれもフォールトトレランスの設計原則ではない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q007
- 問題文: 臨界安全上重要な弁が一つ故障した場合の設計として、単一故障基準に適合するものはどれか。
- 選択肢: ["その故障だけで臨界になるが、発生頻度が低ければ許容する", "その故障だけで臨界になるが、作業員が近くにいなければ許容する", "その故障が起きても、それだけでは臨界事故に至らない", "その故障後に警報だけが鳴れば、臨界に至ってもよい"]
- 正答選択肢: C
- 正答: その故障が起きても、それだけでは臨界事故に至らない
- 解説: SSG-27 (Rev.1) 3.10は、component failure など単一故障又は単一事象で臨界事故に至らないよう安全対策を設計することを求める。発生頻度、作業員の有無、警報の存在は、単一故障だけで臨界に至る設計を正当化しない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q008
- 問題文: 臨界管理手順で作業員が一つの手順を誤った場合について、IAEAの単一故障基準に沿う設計はどれか。
- 選択肢: ["人為ミスは単一故障基準の対象外とする", "手順違反があれば必ず臨界に至る設計とする", "人為ミスは発生後に教育だけで対応し、設計では考慮しない", "単一の人為ミスだけでは臨界事故に至らないようにする"]
- 正答選択肢: D
- 正答: 単一の人為ミスだけでは臨界事故に至らないようにする
- 解説: SSG-27 (Rev.1) 3.10は single failure or event の例として human error（例：instruction not followed）を明示する。NRAの加工施設技術基準も運転員の単一誤操作を想定しても臨界に達するおそれがないことを求める。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q009
- 問題文: 臨界安全に関係する制御機能が一つ失われた場合について、適切な設計方針はどれか。
- 選択肢: ["単一の機能制御故障だけでは臨界事故に至らないようにする", "機能制御故障は機械故障ではないため臨界評価から除外する", "制御機能が失われたら未臨界限度を一時的に無効にする", "制御機能の故障は二つ同時でなければ記録しない"]
- 正答選択肢: A
- 正答: 単一の機能制御故障だけでは臨界事故に至らないようにする
- 解説: SSG-27 (Rev.1) 3.10は、単一故障・事象の例に function control failure を含め、これだけで臨界事故が生じない設計を求める。故障種別を理由に評価対象外としたり、限度を無効化したりする考え方ではない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q010
- 問題文: 二重偶発性原理を支える監視・検知の考え方として、SSG-27 (Rev.1) 3.9に最も合うものはどれか。
- 選択肢: ["異常は事故後にまとめて確認できればよい", "各プロセス条件の変化を、必要な是正措置を取れる時間内に、適切で信頼できる手段により検知できるようにする", "一つ目の変化は検知せず、二つ目だけを検知する", "検知手段の信頼性は臨界安全と無関係とする"]
- 正答選択肢: B
- 正答: 各プロセス条件の変化を、必要な是正措置を取れる時間内に、適切で信頼できる手段により検知できるようにする
- 解説: SSG-27 (Rev.1) 3.9は、each change in process conditions を suitable and reliable means で、corrective actions が可能な時間枠内に検知できるシステム特性を推奨する。事故後確認だけや一方だけの検知ではこの趣旨を満たさない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q011
- 問題文: 深層防護の第2レベルと二重偶発性原理の関係として、SSG-27 (Rev.1) の説明に合うものはどれか。
- 選択肢: ["一つ目の異常が起きたら二つ目の異常を意図的に発生させる", "一つ目の異常は無視し、臨界警報だけに依存する", "一つ目の異常を検知・是正し、二つ目の変化が同時に起きる可能性を抑える", "二つの異常がそろうまで運転を継続する"]
- 正答選択肢: C
- 正答: 一つ目の異常を検知・是正し、二つ目の変化が同時に起きる可能性を抑える
- 解説: SSG-27 (Rev.1) Table 1のLevel 2は、起こりにくい一つのプロセス条件変化を検知・是正し、second change が concurrently 起こる可能性を制限する管理・工学的機能を示す。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q012
- 問題文: 二つの臨界防止機能が同一の電源に依存し、その電源喪失で両方が同時に失われる場合、二重偶発性原理上の評価として適切なのはどれか。
- 選択肢: ["二つの機能名が異なるため必ず独立とみなせる", "設備が別室にあれば電源共通でも必ず独立とみなせる", "二つの表示灯があれば独立性は証明できる", "共通原因故障で同時に失われ得るため、二つの独立した変化とはみなせない"]
- 正答選択肢: D
- 正答: 共通原因故障で同時に失われ得るため、二つの独立した変化とはみなせない
- 解説: SSG-27 (Rev.1) 3.8は、二つの変化が common cause failure によって引き起こされないことを独立性確認の要件とする。同一電源喪失で二機能が同時喪失するなら、機能名や配置が異なっても独立性は成立しない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q013
- 問題文: 二つのインターロックが同じ一台のセンサーの信号だけを使って作動する場合、二重偶発性原理の観点で最も重要な確認事項はどれか。
- 選択肢: ["そのセンサー故障が両インターロックを同時に無効化する共通原因にならないか", "インターロックの表示色が異なるか", "インターロックの名称が二つ付いているか", "警報音の大きさが異なるか"]
- 正答選択肢: A
- 正答: そのセンサー故障が両インターロックを同時に無効化する共通原因にならないか
- 解説: 二重偶発性原理で重要なのは独立性であり、SSG-27 (Rev.1) 3.8は common cause failure を排除する観点を明示する。同じ一台のセンサーに依存する二系統は、そのセンサーが単一点故障となり得るため、単に二つ存在するだけでは独立といえない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q014
- 問題文: 次のうち、二重偶発性原理に沿う臨界防止の考え方として最も適切なのはどれか。
- 選択肢: ["核燃料物質の過量投入という一つの誤りだけで臨界になり得るようにする", "臨界に至るには、例えば過量投入と、それとは独立した別の臨界防止条件の喪失が同時に必要となるようにする", "二つの異常を同じ一つの誤信号で同時に発生させる", "事故後に原因を二つ数えられれば、設計時の独立性確認は不要とする"]
- 正答選択肢: B
- 正答: 臨界に至るには、例えば過量投入と、それとは独立した別の臨界防止条件の喪失が同時に必要となるようにする
- 解説: 二重偶発性原理では少なくとも二つの起こりにくく独立した同時変化が必要となる設計が求められる。SSG-27 (Rev.1) 3.18(b)は、質量限度を安全余裕込みで設定して inadvertent over-batching 単独で臨界に至らない例も示す。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q015
- 問題文: 一回の過量投入だけで未臨界を失い臨界事故に至り得る工程について、二重偶発性原理・単一故障基準からみた評価として適切なのはどれか。
- 選択肢: ["過量投入が人為ミスなら原理の対象外である", "過量投入がまれなら、一回だけで臨界に至っても原理に適合する", "単一の異常だけで臨界事故に至り得るため、原理に適合する設計とはいえない", "警報装置があれば、単一異常で臨界に至ること自体は問題ない"]
- 正答選択肢: C
- 正答: 単一の異常だけで臨界事故に至り得るため、原理に適合する設計とはいえない
- 解説: SSG-27 (Rev.1) 3.7～3.10では、少なくとも二つの独立した同時変化を必要とし、単一のhuman error等で臨界事故に至らないことを求める。過量投入が一回で臨界を生じるなら、二重偶発性原理の基本条件を満たさない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q016
- 問題文: 一つ目の異常を検知して是正し、正常状態に戻した後、時間を置いて別の異常が発生した。二重偶発性原理の「同時性」の観点から適切な説明はどれか。
- 選択肢: ["同じ設備で起きたため、必ず二つの異常が同時に存在したとみなす", "同じ勤務中なら、必ず同時とみなす", "二つの異常の種類が異なれば、時間関係は無関係である", "一つ目が解消済みで二つの変化が同時に存在しないなら、concurrentな二重偶発状態ではない"]
- 正答選択肢: D
- 正答: 一つ目が解消済みで二つの変化が同時に存在しないなら、concurrentな二重偶発状態ではない
- 解説: 二重偶発性原理は二つの independent and concurrent changes を要求する。SSG-27 (Rev.1) Table 1 Level 2も、一つ目を検知・是正して二つ目との同時発生を防ぐことを深層防護としている。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q017
- 問題文: 臨界事故を防止する予防的安全措置の選択順序として、SSG-27 (Rev.1) 3.13が最も優先するものはどれか。
- 選択肢: ["安全措置に依存しない工程固有の安全性", "運転員による手動操作", "警報後の避難", "事故後の除染"]
- 正答選択肢: A
- 正答: 安全措置に依存しない工程固有の安全性
- 解説: SSG-27 (Rev.1) 3.13は、予防的安全措置の優先順位を (1) inherent safety、(2) passive engineered safety measures、(3) automatically initiated active engineered measures、(4) administrative measures とする。避難や除染は予防的臨界防止の最上位ではない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q018
- 問題文: 臨界安全の運転上の限度・条件について、二重偶発性原理を実効的に運用する観点から適切なのはどれか。
- 選択肢: ["臨界安全限度より高く設定し、異常時だけ下げる", "臨界安全限度以下とし、監視・制御に適した形で設定する", "臨界安全限度とは無関係に作業効率だけで決める", "測定不確かさやセンサー遅れは考慮しない"]
- 正答選択肢: B
- 正答: 臨界安全限度以下とし、監視・制御に適した形で設定する
- 解説: SSG-27 (Rev.1) 2.12は、operational limits and conditions を criticality safety limits 以下とし、監視・制御に適するよう設定すること、さらに測定不確かさ・行政的誤り・センサー遅れを考慮することを示す。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q019
- 問題文: 核分裂性物質を扱う工程の設計又は臨界安全評価の前提を変更する場合、SSR-4 6.141に沿う対応はどれか。
- 選択肢: ["既存設備なら臨界安全評価を見直さない", "変更が運転手順だけなら臨界安全との関係を確認しない", "臨界安全に影響する設計又は前提の変更について臨界安全を再評価する", "変更後に事故が起きた場合だけ評価する"]
- 正答選択肢: C
- 正答: 臨界安全に影響する設計又は前提の変更について臨界安全を再評価する
- 解説: SSR-4 6.141は、fissile material を含む工程・活動に影響する design or assumptions の変更について criticality safety を reassess することを要求する。変更種別だけで評価を省略したり、事故後まで待ったりする考え方ではない。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf
- verified: true

### SAF-05-Q020
- 問題文: SSR-4 6.144(b)による濃縮度の扱いとして適切なのはどれか。
- 選択肢: ["平均濃縮度だけを常に使用する", "最小濃縮度だけを使用する", "運転員が想定した濃縮度なら根拠なく使用できる", "原則として施設内の最大許可濃縮度を評価に用い、それに到達し得ないことを二重偶発性原理に従って示せる場合に限り別扱いできる"]
- 正答選択肢: D
- 正答: 原則として施設内の最大許可濃縮度を評価に用い、それに到達し得ないことを二重偶発性原理に従って示せる場合に限り別扱いできる
- 解説: SSR-4 6.144(b)は、maximum authorized enrichment を全評価で用いることを基本とし、その濃縮度に到達することが不可能であると double contingency principle に従って示せる場合を例外としている。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf
- verified: true

### SAF-05-Q021
- 問題文: 現行の加工施設の技術基準に関する規則が、単一ユニットの臨界防止について要求する内容として適切なのはどれか。
- 選択肢: ["通常時に予想される機械・器具の単一故障又は誤作動、若しくは運転員の単一誤操作が起きても、核燃料物質が臨界に達するおそれがないよう措置する", "単一誤操作は評価せず、二回以上の誤操作だけを評価する", "機器の形状寸法は臨界防止の管理対象にできない", "中性子吸収材は臨界防止に使用できない"]
- 正答選択肢: A
- 正答: 通常時に予想される機械・器具の単一故障又は誤作動、若しくは運転員の単一誤操作が起きても、核燃料物質が臨界に達するおそれがないよう措置する
- 解説: 加工施設の技術基準に関する規則第4条1項は、単一ユニットについて、通常時に予想される単一故障・誤作動・単一誤操作を想定しても臨界に達するおそれがないよう、形状寸法、濃度、質量、同位体組成、中性子吸収材等の管理又は組合せによる措置を求める。
- 出典: https://laws.e-gov.go.jp/law/502M60080000006 ; https://www2.nra.go.jp/data/000468877.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf
- verified: true

### SAF-05-Q022
- 問題文: 現行の加工施設の技術基準に関する規則で、単一ユニットが二以上存在する場合の臨界防止措置として示されているものはどれか。
- 選択肢: ["各単一ユニットの塗装色を統一すること", "単一ユニット相互間の適切な配置の維持や、中性子の遮蔽材の使用、又はそれらの組合せ", "設備の運転時間を全て同一にすること", "作業員数を一定に保つこと"]
- 正答選択肢: B
- 正答: 単一ユニット相互間の適切な配置の維持や、中性子の遮蔽材の使用、又はそれらの組合せ
- 解説: 加工施設の技術基準に関する規則第4条2項は、複数の単一ユニットについて、単一故障・誤作動・単一誤操作を想定しても臨界に達するおそれがないよう、適切な配置の維持、中性子遮蔽材の使用又はそれらの組合せによる措置を求める。
- 出典: https://laws.e-gov.go.jp/law/502M60080000006 ; https://www2.nra.go.jp/data/000468877.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf
- verified: true

### SAF-05-Q023
- 問題文: 二つの管理確認を同じ作業員が同じ入力データを用いて連続して行う場合、二重偶発性原理の独立性を評価するとき最も適切な見方はどれか。
- 選択肢: ["確認回数が二回なので自動的に独立とみなす", "同じ作業員でも確認欄が二つあれば自動的に独立とみなす", "同じ誤入力や誤判断が両確認に伝播する共通原因になり得るため、独立性を別途確認する", "独立性は人的管理には適用しない"]
- 正答選択肢: C
- 正答: 同じ誤入力や誤判断が両確認に伝播する共通原因になり得るため、独立性を別途確認する
- 解説: SSG-27 (Rev.1) 3.8は、二つの変化が common cause failure によらない独立性を求める。二回確認という形式だけでは独立性は成立せず、同じ誤入力・誤判断が両方へ波及するなら共通原因として扱う必要がある。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true

### SAF-05-Q024
- 問題文: 二重偶発性原理を適用するために臨界安全評価で検討すべき事象の範囲として、SSG-27 (Rev.1) 3.12に最も合うものはどれか。
- 選択肢: ["機械故障だけを対象とし、人為ミスや外部ハザードは除外する", "人為ミスだけを対象とし、設備故障は除外する", "通常運転だけを対象とし、異常事象の組合せは検討しない", "人為ミス、内部・外部ハザード、安全上重要な構築物・系統・機器の喪失又は故障を含む、臨界安全に関係する起因事象とその組合せ"]
- 正答選択肢: D
- 正答: 人為ミス、内部・外部ハザード、安全上重要な構築物・系統・機器の喪失又は故障を含む、臨界安全に関係する起因事象とその組合せ
- 解説: SSG-27 (Rev.1) 3.12は、credible abnormal conditions から生じる臨界安全に関連する initiating events and their combinations を分析し、human error、internal and external hazards、重要SSCのloss or failureを含めるとしている。
- 出典: https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1995_web.pdf ; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf
- verified: true
