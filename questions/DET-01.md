# DET-01 電離箱

status: complete

## 対象
気体電離、電荷収集、電流測定、線量・線量率、高線量率への適用、感度、光子エネルギー特性を、電離箱式サーベイメータの原理から説明できるようにする。

## 参照した直近過去問
- NRA「第58回核燃料取扱主任者試験 放射線の測定及び放射線障害の防止に関する技術」（2026年）第2問では、電離箱式・GM管式・シンチレーション式サーベイメータについて、測定原理と相対的な検出感度が問われている。
- 過去問本文は転載せず、同じ論点を独立した新規問題に再構成した。

過去問: https://www.nra.go.jp/data/000480854.pdf

## 主要資料
- S1 JAEA 原子力基本用語集「サーベイメータ」: https://www.jaea.go.jp/glossary/%E3%82%B5%E3%83%BC%E3%83%99%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%BF
- S2 JAEA ATOMICA「サーベイメータ（α線、β線、γ線、中性子等）」: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html
- S3 JAEA 核燃料サイクル工学研究所「各種サーベイメータ一覧」: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html
- S4 NIST「New Detector Design Improves Gamma-Ray Measurements」: https://www.nist.gov/news-events/news/2012/04/new-detector-design-improves-gamma-ray-measurements
- S5 NIST「Calibration Services: New Calibration Facility for X-Ray Air Kerma」: https://www.nist.gov/programs-projects/calibration-services-new-calibration-facility-x-ray-air-kerma
- S6 IAEA「Neutron Detection and Neutron Flux Distribution Measurement」: https://nucleus.iaea.org/sites/connect/RRIHpublic/CompendiumDB/Shared%20Documents/Czech%20Republic%20CTU/Protocols%20in%20PDF/Czech_Rep_VR1_Reactor_Neutron_detection_Laboratory_protocol.pdf

---

## Q001
問題文: 電離箱式放射線検出器は、入射放射線によって検出器内部の何が起こることを利用しているか。

正答: 封入気体（空気など）の電離。

解説: 放射線が気体を電離して荷電粒子を生じ、その電荷を電場で収集して測定するのが電離箱の基本原理である。

出典URL: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html

verified: true

## Q002
問題文: 電離箱内で生じた電荷を電極へ移動させるために、中心電極と壁材の間には何を加えるか。

正答: 電圧（電位差）。

解説: 電極間に電圧を印加して電場を作り、電離によって生じた荷電粒子をそれぞれの電極へ収集する。

出典URL: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html

verified: true

## Q003
問題文: 電離箱式サーベイメータでは、電離によって生じた荷電粒子が電極に集められることで最終的に何を測定するか。

正答: 微小な電流（または収集電荷）。

解説: JAEAは、電離によって生じたイオンを電極へ集めることで生じる微小電流を増幅して測定する方式として説明している。

出典URL: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html

verified: true

## Q004
問題文: 電離箱式サーベイメータで、放射線の強さが増加すると電離電流は一般にどのように変化するか。

正答: 増加する。

解説: NISTは、入射放射線量が大きいほど電離によって生じる電流も大きくなると説明している。

出典URL: https://www.nist.gov/news-events/news/2012/04/new-detector-design-improves-gamma-ray-measurements

verified: true

## Q005
問題文: 一定条件の電離箱で、一定時間に収集された電荷量は、受けた放射線量とどのような関係を持つか。

正答: 放射線量に比例する。

解説: 放射線で生じた電離電荷を積算すると、校正係数を介して線量に対応付けられる。

出典URL: https://www.nist.gov/news-events/news/2012/12/using-calorimetry-estimate-absorbed-dose-ct-scans

verified: true

## Q006
問題文: 電離箱の「収集電荷」と「電離電流」は、それぞれ線量と線量率のどちらを求めるのに対応しやすいか。

正答: 収集電荷は線量、電離電流は線量率。

解説: 電荷は時間積分された電離量であり、電流は単位時間当たりの電荷であるため、校正後はそれぞれ線量と線量率に対応する。

出典URL: https://www.nist.gov/programs-projects/calibration-services-new-calibration-facility-x-ray-air-kerma

verified: true

## Q007
問題文: 電離箱式サーベイメータの代表的な用途は、放射線管理区域などにおける何の測定か。

正答: 空間線量率（1 cm線量当量率など）の測定。

解説: JAEAは電離箱式サーベイメータを、作業環境場で精度の高い1 cm線量当量（率）を測る測定器として挙げている。

出典URL: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html

verified: true

## Q008
問題文: GM式、NaI(Tl)シンチレーション式、電離箱式の3種類を一般的なγ線サーベイメータとして比較したとき、検出感度が最も低いのはどれか。

正答: 電離箱式。

解説: JAEAは電離箱式のγ線検出感度がGM式やシンチレーション式より一般に低いと説明している。一方、線量測定の精度に優れる。

出典URL: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html

verified: true

## Q009
問題文: 自然放射線レベル程度のごく小さな線量率変化を検出する目的では、電離箱式とNaIシンチレーション式のどちらが一般に有利か。

正答: NaIシンチレーション式。

解説: JAEAはシンチレーション式について自然放射線レベルのわずかな変動を検出できるとしており、電離箱式は一般に検出感度が低い。

出典URL: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html

verified: true

## Q010
問題文: 電離箱式サーベイメータは、低線量率だけでなく高線量率側の測定にも用いられるか。

正答: 用いられる。

解説: JAEA原子力基本用語集は、空間線量率測定においてNaIシンチレーション式を低線量用、電離箱式を低線量～高線量用の例としている。

出典URL: https://www.jaea.go.jp/glossary/%E3%82%B5%E3%83%BC%E3%83%99%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%BF

verified: true

## Q011
問題文: 高い空間線量率を測る必要がある場合、NaIシンチレーション式より電離箱式が候補になりやすい理由を、測定範囲の観点から答えよ。

正答: 電離箱式は低線量率から高線量率までを対象とする機種があり、高線量率側まで測定できるため。

解説: JAEAの現行用語集は電離箱式を低線量～高線量用として分類している。実際にJAEA施設の機種例にもSv/h級まで測れる電離箱式が掲載されている。

出典URL: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html

verified: true

## Q012
問題文: JAEAの電離箱式サーベイメータの説明では、光子エネルギーがおおむね何keV以上で良好なエネルギー特性を持つとされているか。

正答: 30 keV以上。

解説: JAEA核燃料サイクル工学研究所の測定器解説では、電離箱式は30 keV以上の光子エネルギーに対してエネルギー特性が良好とされている。

出典URL: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html

verified: true

## Q013
問題文: 電離箱式サーベイメータの主要な測定対象となる電磁放射線を2種類答えよ。

正答: X線、γ線。

解説: JAEAは電離箱式をX線・γ線の空間線量率測定に用いる方式として示している。機種によってはβ線にも応答する。

出典URL: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html

verified: true

## Q014
問題文: 電離箱を線量測定に用いる際、「入射光子1個を数える」方式ではなく、主として何を連続量として読むか。

正答: 電離によって生じた電流または収集電荷。

解説: JAEAの電離箱式サーベイメータは微小電流を直流増幅して表示する方式であり、個々のパルスを計数するGM計数管とは測定方式が異なる。

出典URL: https://www.jaea.go.jp/04/ntokai/houkan/monitor/b_2.html

verified: true

## Q015
問題文: 気体検出器の印加電圧を上げ、初期電離で生じたイオン対をほぼ全て収集でき、まだ気体増幅が起こらない領域を何というか。

正答: イオン飽和領域（ion saturation region）。

解説: IAEA教材では、再結合の影響が実質的になくなり、生成したイオン対を収集する領域をイオン飽和領域とし、電離箱の動作領域としている。

出典URL: https://nucleus.iaea.org/sites/connect/RRIHpublic/CompendiumDB/Shared%20Documents/Czech%20Republic%20CTU/Protocols%20in%20PDF/Czech_Rep_VR1_Reactor_Neutron_detection_Laboratory_protocol.pdf

verified: true

## Q016
問題文: 電離箱の通常の動作領域では、比例計数管で利用されるような気体増幅を利用するか。

正答: 利用しない。

解説: 電離箱はイオン飽和領域で一次電離により生じた電荷を収集する。さらに高い電圧で気体増幅が始まると比例領域となり、比例計数管の動作原理になる。

出典URL: https://nucleus.iaea.org/sites/connect/RRIHpublic/CompendiumDB/Shared%20Documents/Czech%20Republic%20CTU/Protocols%20in%20PDF/Czech_Rep_VR1_Reactor_Neutron_detection_Laboratory_protocol.pdf

verified: true

## Q017
問題文: 電離箱をX線の空気カーマ測定に用いる場合、校正係数として「空気カーマ÷収集電荷」を用いるときの単位は何か。

正答: Gy/C。

解説: NISTのX線空気カーマ校正では、空気カーマを電離箱の収集電荷で割った校正係数をGy/Cで与えている。

出典URL: https://www.nist.gov/programs-projects/calibration-services-new-calibration-facility-x-ray-air-kerma

verified: true

## Q018
問題文: 開放型の空気電離箱で高精度な線量測定を行う際、気体密度の変化を補正するために確認すべき代表的な環境量を2つ答えよ。

正答: 温度、気圧。

解説: NISTの空気カーマ校正では、開放型電離箱の測定値を基準温度・基準気圧へ規格化している。空気密度が温度・気圧で変化するためである。

出典URL: https://www.nist.gov/programs-projects/calibration-services-new-calibration-facility-x-ray-air-kerma

verified: true

## Q019
問題文: 放射線場の線量率をできるだけ正確に評価する目的と、微弱な放射線の存在を高感度に検出する目的では、電離箱式は一般にどちらを得意とするか。

正答: 線量率を正確に評価する目的。

解説: 電離箱式はGM式やシンチレーション式より一般に感度は低いが、精度の高い1 cm線量当量（率）の測定に広く使われる。

出典URL: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html

verified: true

## Q020
問題文: 作業環境の外部放射線モニタリングで電離箱式サーベイメータを選ぶ際、少なくとも事前に把握しておくべき放射線場の条件を2つ答えよ。

正答: 放射線の種類と、おおよその強度（線量率レベル）。

解説: JAEAは、サーベイメータを選ぶには測定対象の放射線の種類と強度を予測し、それに合う測定器を用いる必要があるとしている。

出典URL: https://atomica.jaea.go.jp/data/detail/dat_detail_09-04-03-04.html

verified: true
