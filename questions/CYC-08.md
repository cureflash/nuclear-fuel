# CYC-08 PUREX再処理

- status: complete
- verified_at: 2026-09-13
- question_count: 24
- correct_index_distribution: A=6, B=6, C=6, D=6
- authority: 日本原燃の現行「再処理工場の全体工程」「再処理施設におけるアクティブ試験」、JAEA/ATOMICAのPUREX・溶媒抽出・再処理技術資料を主authorityとした。NRA「過去の資格試験問題」で第58回・第57回・第56回の「核燃料物質の取扱いに関する技術」の公開を確認し、過去問本文は転載せず、せん断・硝酸溶解・清澄・TBP抽出・U/Pu分離・精製・脱硝・高レベル廃液の論点を新規4択化した。

## 出題根拠

対象は `04_核燃料サイクル.md` の CYC-08（せん断、硝酸溶解、不溶解残渣、TBP/希釈剤、U/Pu共抽出、FP除去、分離、逆抽出、精製、高レベル廃液）。CYC-09で扱う分配係数・硝酸濃度依存・溶媒劣化等の詳細化学には踏み込まず、CYC-08では工程順序、各工程の役割、相への移行、装置、製品・廃棄物流を中心に作問した。数値は日本原燃の現行工程説明にある使用済燃料のせん断長「約3～4 cm」に固定した。

## 主要資料

- NRA「過去の資格試験問題」: https://www.nra.go.jp/procedure/examination/kakomon.html
- 第58回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000480853.pdf
- 第57回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000475646.pdf
- 第56回「核燃料物質の取扱いに関する技術」: https://www.nra.go.jp/data/000472260.pdf
- 日本原燃「再処理工場の全体工程」: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- 日本原燃「再処理施設におけるアクティブ試験の項目及び内容」: https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html
- 日本原燃「精製建屋内における希釈剤の漏えいについて（原因と対策）」: https://www.jnfl.co.jp/ja/release/press/2025/detail/20250730-1.html
- JAEA/ATOMICA「再処理技術の現状」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- JAEA/ATOMICA「溶媒抽出」: https://atomica.jaea.go.jp/dic/detail/dic_detail_692.html
- JAEA/ATOMICA「ピューレックス法」: https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html

## 問題

### CYC-08-Q001
- 問題文: 日本原燃が示す使用済燃料の再処理主工程の順序として最も適切なものはどれか。
- 選択肢: ["せん断→硝酸溶解→清澄→分離→精製→脱硝", "硝酸溶解→せん断→脱硝→清澄→精製→分離", "精製→分離→せん断→清澄→硝酸溶解→脱硝", "脱硝→精製→分離→清澄→硝酸溶解→せん断"]
- 正答選択肢: A
- 正答: せん断→硝酸溶解→清澄→分離→精製→脱硝
- 解説: 現行の日本原燃の工程説明では、使用済燃料をせん断し、燃料部分を硝酸で溶解し、清澄機で不溶解残渣を除去してから分離工程へ送る。分離後のウラン溶液・プルトニウム溶液は精製され、その後に脱硝される。他の選択肢は前処理・分離・製品化の順序が逆転している。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q002
- 問題文: 日本原燃の現行工程説明で、使用済燃料をせん断する長さとして示されている値はどれか。
- 選択肢: ["約0.3～0.4 cm", "約3～4 cm", "約30～40 cm", "約3～4 m"]
- 正答選択肢: B
- 正答: 約3～4 cm
- 解説: 日本原燃は、十分に放射能が弱まった使用済燃料を「約3～4センチの長さ」に細かくせん断すると説明している。0.3～0.4 cm、30～40 cm、3～4 mはいずれも同資料の値と一致しない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q003
- 問題文: せん断後の使用済燃料を溶解槽で処理する操作として正しいものはどれか。
- 選択肢: ["UF6ガスにして遠心分離する", "水だけで被覆管と燃料を同時に完全溶解する", "硝酸で燃料部分を溶かし、被覆管部分と分別する", "溶融塩電解で直接金属UとPuへ分ける"]
- 正答選択肢: C
- 正答: 硝酸で燃料部分を溶かし、被覆管部分と分別する
- 解説: PUREX再処理の前処理では、せん断した燃料を硝酸を入れた溶解槽で処理し、燃料部分を溶かして被覆管部分と分別する。UF6遠心分離は濃縮工程であり、水だけの完全溶解や溶融塩電解は日本原燃のPUREX工程ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q004
- 問題文: 使用済燃料の硝酸溶解液を分離工程へ送る前に清澄機で行う操作はどれか。
- 選択肢: ["溶液中のUをUF6へ転換する", "PuをMOXペレットへ成形する", "硝酸をすべて熱分解して酸化物粉末にする", "溶解せずに残った粒子状の不溶解残渣を除去する"]
- 正答選択肢: D
- 正答: 溶解せずに残った粒子状の不溶解残渣を除去する
- 解説: 日本原燃は清澄機の役割を、溶解液中の不溶解残渣を除去することとしている。アクティブ試験でも清澄設備について「不溶解性残渣の除去性能」を確認している。UF6転換、ペレット成形、脱硝は清澄操作ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html / https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html
- verified: true

### CYC-08-Q005
- 問題文: せん断・溶解後に溶け残った被覆管などの金属片について、日本原燃の工程説明で示される取扱いはどれか。
- 選択肢: ["固体廃棄物として処理する", "高レベル廃液としてそのままガラス溶融炉へ送る", "MOX粉末として製品化する", "UF6へ転換して濃縮工程へ戻す"]
- 正答選択肢: A
- 正答: 固体廃棄物として処理する
- 解説: 硝酸に溶け残った被覆管などの金属片は、燃料溶解液とは別に固体廃棄物として処理される。高レベル廃液は主として分離されたFPを含む液体であり、MOX製品やUF6原料ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q006
- 問題文: 六ヶ所再処理工場の分離工程で、日本原燃が明示している溶媒抽出装置はどれか。
- 選択肢: ["遠心分離濃縮機", "パルスカラム", "燃料ペレット焼結炉", "ガラス溶融炉"]
- 正答選択肢: B
- 正答: パルスカラム
- 解説: 日本原燃は分離工程で、硝酸溶液と油性の溶媒を接触させる装置としてパルスカラムを示している。遠心分離濃縮機はウラン濃縮、焼結炉は燃料加工、ガラス溶融炉は高レベル廃液の固化に関わる装置である。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q007
- 問題文: PUREX再処理の最初の溶媒抽出で達成する分離として正しいものはどれか。
- 選択肢: ["UだけをFPとPuから分離し、Puはすべて高レベル廃液へ送る", "FPだけを有機相へ抽出し、UとPuを水相に残す", "UとPuを主として有機相へ抽出し、FPの大部分を水相側へ分ける", "U、Pu、FPをすべて同一相に保持して分離しない"]
- 正答選択肢: C
- 正答: UとPuを主として有機相へ抽出し、FPの大部分を水相側へ分ける
- 解説: JAEA/ATOMICAは、TBPを用いるPUREX法ではUとPuが選択的に有機溶媒へ移り、核分裂生成物は主として水相に残ることで分離されると説明している。Puを全量廃棄する工程でも、FPを選択的に有機相へ移す工程でもない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_692.html / https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html
- verified: true

### CYC-08-Q008
- 問題文: 日本原燃が再処理工場で「使用済燃料を硝酸に溶解した液からウランおよびプルトニウムを抽出するために用いる抽出剤」と説明している物質はどれか。
- 選択肢: ["硝酸", "ドデカン", "二酸化ウラン", "TBP（リン酸トリブチル）"]
- 正答選択肢: D
- 正答: TBP（リン酸トリブチル）
- 解説: 日本原燃はTBPを、使用済燃料の硝酸溶解液からUおよびPuを抽出するために用いる抽出剤と明記している。硝酸は水相・溶解媒体、ドデカンはTBPの希釈剤として用いられる炭化水素、UO2は燃料物質である。
- 出典: https://www.jnfl.co.jp/ja/release/press/2025/detail/20250730-1.html / https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html
- verified: true

### CYC-08-Q009
- 問題文: JAEA/ATOMICAが示すPUREX法の有機溶媒の組合せとして正しいものはどれか。
- 選択肢: ["TBPをドデカンで希釈したもの", "硝酸を水で希釈したもの", "UF6をヘリウムで希釈したもの", "水酸化ナトリウムを水で希釈したもの"]
- 正答選択肢: A
- 正答: TBPをドデカンで希釈したもの
- 解説: JAEA/ATOMICAのPUREX法の定義では、有機溶媒はリン酸トリブチル（TBP）をドデカンで希釈したものを用いる。硝酸水溶液は抽出対象側の水相であり、UF6・He系やNaOH水溶液はPUREXの抽出有機溶媒ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html
- verified: true

### CYC-08-Q010
- 問題文: PUREX法で硝酸溶解液とTBP系有機溶媒を接触させた直後の代表的な相分配として正しいものはどれか。
- 選択肢: ["UとPuは水相、FPは有機相", "UとPuは有機相、FPは主として水相", "Uだけが気相、PuとFPは固相", "U、Pu、FPはすべて気相"]
- 正答選択肢: B
- 正答: UとPuは有機相、FPは主として水相
- 解説: PUREXではUとPuをTBP有機相へ選択的に抽出し、核分裂生成物の大部分を水相側に残して共除染する。気相・固相への一括移行を利用する工程ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_692.html / https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html
- verified: true

### CYC-08-Q011
- 問題文: PUREX法で共抽出されたUとPuを相互分離する基本操作として正しいものはどれか。
- 選択肢: ["Puを金属まで還元し沈殿させる", "UをUF6へ変換してその場で遠心分離する", "Pu(IV)をPu(III)へ還元してTBPへの抽出性を低下させ、水相側へ移す", "UとPuをともに酸化物ペレットへ焼結してから機械的に選別する"]
- 正答選択肢: C
- 正答: Pu(IV)をPu(III)へ還元してTBPへの抽出性を低下させ、水相側へ移す
- 解説: JAEA/ATOMICAは、分配工程でPuを4価から難抽出性の3価へ還元することにより、Puを有機相から水相へ移してUと分離すると説明している。金属沈殿、UF6遠心分離、ペレット機械選別はPUREXのU/Pu分配操作ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html / https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html
- verified: true

### CYC-08-Q012
- 問題文: PUREX法における「逆抽出」の説明として、Pu分離工程に即して最も適切なものはどれか。
- 選択肢: ["水相から気相へPuを揮発させる操作", "固体燃料からPuだけを機械的に削り取る操作", "水相から有機相へPuを初めて取り込む操作", "有機相に抽出されているPuを条件変更により水相へ戻す操作"]
- 正答選択肢: D
- 正答: 有機相に抽出されているPuを条件変更により水相へ戻す操作
- 解説: PUREXでは、まずU・Puを有機相に共抽出し、その後Puを難抽出性の状態にして水相へ戻すことでUと分ける。したがってPu分離での逆抽出は有機相から水相への移行であり、揮発、機械分離、初回抽出ではない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_1005.html / https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-08-Q013
- 問題文: 日本原燃の分離建屋のアクティブ試験で「分離・分配性能確認試験」の確認対象として示される組合せはどれか。
- 選択肢: ["ウラン・プルトニウムの分配性能と核分裂生成物の除染性能", "ウラン濃縮用遠心機の分離作業量とSWU", "燃料ペレットの焼結密度と外径", "ガラス固化体の落下強度とキャニスター肉厚だけ"]
- 正答選択肢: A
- 正答: ウラン・プルトニウムの分配性能と核分裂生成物の除染性能
- 解説: 日本原燃は分離・分配性能確認試験について、使用済燃料の溶解液を用いてU/Puの分配性能およびFPの除染性能等を確認するとしている。遠心濃縮、ペレット加工、ガラス固化体だけの機械特性確認はこの試験項目ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html
- verified: true

### CYC-08-Q014
- 問題文: 分離工程の後に行うウラン溶液・プルトニウム溶液の精製工程の主目的として正しいものはどれか。
- 選択肢: ["UとPuを再び使用済燃料集合体へ組み戻すこと", "溶液に残る微量の核分裂生成物をさらに除去して純度を高めること", "すべてのUとPuを高レベル廃液へ移すこと", "UをUF6へ転換して同位体濃縮すること"]
- 正答選択肢: B
- 正答: 溶液に残る微量の核分裂生成物をさらに除去して純度を高めること
- 解説: 日本原燃は精製工程で、U溶液およびPu溶液に含まれる微量のFPをさらに取り除いて純度を高めると説明している。使用済燃料への再組立て、全量廃棄、UF6濃縮は精製工程の目的ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q015
- 問題文: 日本原燃が精製工程で用いる装置として示している組合せはどれか。
- 選択肢: ["せん断機と焼結炉", "遠心濃縮機とコールドトラップ", "パルスカラムとミキサセトラ", "ガラス溶融炉とキャスク"]
- 正答選択肢: C
- 正答: パルスカラムとミキサセトラ
- 解説: 日本原燃は精製工程でパルスカラムやミキサセトラを用いるとしている。せん断機は前処理、遠心濃縮機・コールドトラップはウラン濃縮系、ガラス溶融炉は高レベル廃液固化に属する。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q016
- 問題文: 日本原燃の工程で、精製されたウラン溶液およびウラン・プルトニウム混合溶液が次に送られる工程はどれか。
- 選択肢: ["せん断工程", "燃料受入れ工程", "ウラン濃縮工程", "脱硝工程"]
- 正答選択肢: D
- 正答: 脱硝工程
- 解説: 精製で微量FPを除去した後、溶液は脱硝工程へ送られる。せん断・受入れは上流工程であり、再処理工場内のこの流れからウラン濃縮工程へ戻すものではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q017
- 問題文: 日本原燃が示す脱硝工程の操作として正しいものはどれか。
- 選択肢: ["精製溶液から硝酸を蒸発・熱分解させ、酸化物粉末へ転換する", "使用済燃料集合体を数cmにせん断する", "硝酸溶解液から不溶解残渣を遠心分離する", "TBPを用いてUとPuを最初に有機相へ共抽出する"]
- 正答選択肢: A
- 正答: 精製溶液から硝酸を蒸発・熱分解させ、酸化物粉末へ転換する
- 解説: 脱硝工程では、精製されたU溶液とU-Pu混合溶液から硝酸を蒸発・熱分解させ、酸化物粉末にする。残る三つはそれぞれせん断、清澄、溶媒抽出の操作である。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q018
- 問題文: 六ヶ所再処理工場の脱硝工程で得られる製品の組合せとして正しいものはどれか。
- 選択肢: ["金属ウランと金属プルトニウム", "ウラン酸化物粉末とウラン・プルトニウム混合酸化物粉末（MOX粉末）", "UF6とPuF6", "核分裂生成物だけからなるガラス粉末"]
- 正答選択肢: B
- 正答: ウラン酸化物粉末とウラン・プルトニウム混合酸化物粉末（MOX粉末）
- 解説: 日本原燃は脱硝後の製品を、ウラン酸化物粉末とU-Pu混合酸化物粉末（MOX粉末）としている。金属U/Pu、UF6/PuF6、FPガラス粉末はこの脱硝製品ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q019
- 問題文: PUREX再処理で高レベル放射性廃液の主要な放射性成分となるものはどれか。
- 選択肢: ["回収済み製品Uだけ", "被覆管の金属片だけ", "分離工程でU・Puから除かれた核分裂生成物の大部分", "新品燃料用のUO2粉末だけ"]
- 正答選択肢: C
- 正答: 分離工程でU・Puから除かれた核分裂生成物の大部分
- 解説: 日本原燃は再処理工程で生じるFPを含む廃液を高レベル放射性廃棄物としている。JAEA/ATOMICAも抽出分離されたFPの大部分を含む高レベル酸性廃液として説明している。回収製品U、金属ハルのみ、新品UO2粉末のみではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html / https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-08-Q020
- 問題文: 日本原燃が示す高レベル廃液の固化方法として正しいものはどれか。
- 選択肢: ["UF6へ転換して鋼製シリンダに充填する", "そのまま液体で燃料棒へ封入する", "水だけを加えて凍結保存する", "溶融したガラスと混ぜ、キャニスターに流し込み、冷却してガラス固化体にする"]
- 正答選択肢: D
- 正答: 溶融したガラスと混ぜ、キャニスターに流し込み、冷却してガラス固化体にする
- 解説: FPを含む高レベル廃液はガラス原料と混ぜて溶融し、ステンレス製容器（キャニスター）に入れて冷却・固化する。UF6化、燃料棒封入、単純凍結はいずれも日本原燃の高レベル廃液処理ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/summary/process.html
- verified: true

### CYC-08-Q021
- 問題文: PUREX再処理工程で使用済み硝酸を回収する工程について正しいものはどれか。
- 選択肢: ["蒸発缶などで硝酸を回収し、回収した硝酸を再利用する", "硝酸は回収せず全量を固体廃棄物として扱う", "硝酸はUF6へ化学変換して濃縮工程へ送る", "硝酸はMOXペレットの被覆材として使用する"]
- 正答選択肢: A
- 正答: 蒸発缶などで硝酸を回収し、回収した硝酸を再利用する
- 解説: 日本原燃のアクティブ試験では使用済み硝酸を用いて蒸発缶の酸回収性能を確認する。JAEA/ATOMICAも高レベル廃液濃縮工程等で回収された硝酸は再利用されるとしている。固体化、UF6化、被覆材利用は酸回収ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html / https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-08-Q022
- 問題文: 日本原燃の再処理施設で「溶媒再生性能確認試験」が確認するものとして正しいものはどれか。
- 選択肢: ["新品のUO2ペレットの焼結密度だけ", "使用済み溶媒を再生し、再生後の溶媒の性状等から再生性能を確認する", "使用済燃料の燃焼度だけ", "ガラス固化体の発熱量だけ"]
- 正答選択肢: B
- 正答: 使用済み溶媒を再生し、再生後の溶媒の性状等から再生性能を確認する
- 解説: 日本原燃は分離建屋・精製建屋の酸回収設備、溶媒回収設備で、使用済み溶媒を用いて再生した溶媒の性状等から溶媒再生性能を確認するとしている。ペレット焼結、燃焼度、ガラス固化体発熱だけを確認する試験ではない。
- 出典: https://www.jnfl.co.jp/ja/business/about/cycle/active-test/active-outline.html
- verified: true

### CYC-08-Q023
- 問題文: PUREXという名称の展開として正しいものはどれか。
- 選択肢: ["Plutonium Utility Reactor EXperiment", "Pressurized Uranium Recovery by EXchange", "Plutonium and Uranium Recovery by EXtraction", "Process for Uranium Reduction and EXtrusion"]
- 正答選択肢: C
- 正答: Plutonium and Uranium Recovery by EXtraction
- 解説: JAEA/ATOMICAはPUREXを「Plutonium and Uranium Recovery by EXtraction」としている。ほかの展開はPUREX法の正式名称ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true

### CYC-08-Q024
- 問題文: 軽水炉使用済燃料に対する代表的なPUREX再処理の特徴を最も適切に表すものはどれか。
- 選択肢: ["使用済燃料をそのまま再濃縮遠心機に投入する乾式同位体分離法", "被覆管ごと燃料を溶融し、磁力だけでUとPuを分ける乾式法", "使用済燃料を一切溶解せず、機械選別だけでUとPuを回収する方法", "せん断・硝酸溶解などの機械的前処理と、TBPを用いる溶媒抽出を組み合わせる湿式再処理法"]
- 正答選択肢: D
- 正答: せん断・硝酸溶解などの機械的前処理と、TBPを用いる溶媒抽出を組み合わせる湿式再処理法
- 解説: JAEA/ATOMICAは、軽水炉使用済燃料再処理では機械的前処理法とPUREX溶媒抽出法を組み合わせた湿式法が確立したと説明している。遠心同位体分離、磁力分離、機械選別だけでU/Puを回収する方法ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-07-01-06.html
- verified: true
