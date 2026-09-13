# NUC-09 結晶構造・密度

- status: complete
- verified_at: 2026-09-13
- question_count: 20
- correct_index_distribution: A=5, B=5, C=5, D=5
- numeric_authority:
  - UO2/PuO2 格子定数・MOX Vegard則: JAEA-Technology 2015-017（UO2 0.5470 nm、PuO2 0.5396 nm、PuO2モル分率xに対し A=0.5470-0.0074x nm）
  - UC 格子定数: IAEA-NDS-97 Rev.1（4.9554 ± 0.003 Å）
  - 金属U相転移温度: JAEA ATOMICA「ウラン」（α→β 668 ℃、β→γ 774 ℃）
- verification_note: UO2/PuO2/MOXの蛍石型、MOXの全率固溶、蛍石型単位格子の構成、Vegard則、理論密度式、UC/UNの岩塩型構造、金属Uのα・β・γ相について、JAEA、IAEA、米国DOEの公的資料で照合した。数値問題は上記authorityに固定した。正答以外の3肢は、引用した構造・式・数値またはそこからの直接計算と一致しないことを確認した。NRAの過去問題一覧で第58回（令和8年）、第57回（令和7年）、第56回（令和6年）の「核燃料物質の化学的性質及び物理的性質」が公開されていることを確認し、過去問本文は転載せず、結晶構造・格子定数・密度・相変態の論点を独立した4択へ再構成した。

## 出題根拠

対象論点は UO2/PuO2/MOXの蛍石型、UC/UN、金属U相変態、理論密度、格子定数、Vegard則。直近の公開過去問としてNRAの第58回、第57回、第56回を確認し、問題文は転載せず一次・公的資料に基づいて新規作成した。

## 主要資料

- NRA 過去の資格試験問題: https://www.nra.go.jp/procedure/examination/kakomon.html
- JAEA ATOMICA「発電用原子炉材料および燃料」: https://atomica.jaea.go.jp/data/detail/dat_detail_02-08-01-05.html
- JAEA ATOMICA「ウラン燃料とプルトニウム燃料の相違」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html
- JAEA-Technology 2015-017: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- IAEA-NDS-97 Rev.1「URANIUM CARBIDE」: https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf
- JAEA ATOMICA「FBR用新型燃料（窒化物燃料）」: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-02-07.html
- JAEA ATOMICA「ウラン」: https://atomica.jaea.go.jp/dic/detail/dic_detail_183.html
- U.S. DOE Fundamentals Handbook, Material Science, Volume 1: https://www.energy.gov/sites/default/files/2026-04/DOE-HDBK-1017-93_VOL1.pdf

## 問題

### NUC-09-Q001
- 問題文: JAEA ATOMICA「発電用原子炉材料および燃料」に示される UO2 の結晶構造はどれか。
- 選択肢: ["蛍石型", "岩塩型", "体心立方型", "六方最密型"]
- 正答選択肢: A
- 正答: 蛍石型
- 解説: JAEAはUO2の結晶構造を蛍石型としている。岩塩型はUCやUNでみられる構造であり、体心立方型はγ-U、六方最密型もUO2の構造ではないため、本問ではAのみが一致する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_02-08-01-05.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q002
- 問題文: JAEA資料に基づき、PuO2 の結晶構造として正しいものはどれか。
- 選択肢: ["岩塩型", "蛍石型", "正方晶型", "体心立方型"]
- 正答選択肢: B
- 正答: 蛍石型
- 解説: JAEAはPuO2とUO2がともに蛍石型の面心立方格子の結晶系をもつとしている。岩塩型、正方晶型、体心立方型はいずれも同資料がPuO2について示す構造ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html ; https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q003
- 問題文: UO2-PuO2 系のMOXについて、JAEA資料が示す固溶関係として正しいものはどれか。
- 選択肢: ["UO2とPuO2は固溶せず常に二相に分離する", "PuO2が1 mol%を超えると岩塩型へ変態する", "UO2とPuO2は任意の混合割合で固溶し、全率固溶体を形成する", "UO2とPuO2は等モル組成でのみ単相になる"]
- 正答選択肢: C
- 正答: UO2とPuO2は任意の混合割合で固溶し、全率固溶体を形成する
- 解説: JAEAはUO2とPuO2がともに蛍石型で、いずれの混合割合でも固溶し全率固溶体を形成するとしている。二相に常時分離する、1 mol%超で岩塩型へ変態する、等モルだけ単相になる、はいずれも同資料と矛盾する。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-01-04.html
- verified: true

### NUC-09-Q004
- 問題文: JAEA-Technology 2015-017 が示す蛍石型 UO2・PuO2 の副格子の説明として正しいものはどれか。
- 選択肢: ["UまたはPuが単純立方、副格子Oが面心立方を形成する", "UまたはPuとOがともに体心立方副格子を形成する", "UまたはPuとOがそれぞれ独立した六方最密副格子を形成する", "UまたはPuが面心立方副格子、Oが単純立方副格子を形成する"]
- 正答選択肢: D
- 正答: UまたはPuが面心立方副格子、Oが単純立方副格子を形成する
- 解説: 同報告書は、UO2とPuO2ではUまたはPuが面心立方格子、Oが単純立方格子の副格子を形成すると説明している。Aは両者を逆転しており、BとCの格子型も同資料の記載と一致しない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q005
- 問題文: JAEA-Technology 2015-017 の Table 3.1 に示される UO2 の格子定数はどれか。
- 選択肢: ["0.5470 nm", "0.5396 nm", "0.49554 nm", "0.4889 nm"]
- 正答選択肢: A
- 正答: 0.5470 nm
- 解説: Table 3.1 はUO2の格子定数を0.5470 nm、PuO2を0.5396 nmとしている。0.49554 nmはIAEA-NDS-97のUCの4.9554 Åをnm換算した値であり、0.5396 nmと0.4889 nmもUO2の同表の値ではない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf ; https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf
- verified: true

### NUC-09-Q006
- 問題文: JAEA-Technology 2015-017 の Table 3.1 に示される PuO2 の格子定数はどれか。
- 選択肢: ["0.5470 nm", "0.5396 nm", "0.49554 nm", "0.5597 nm"]
- 正答選択肢: B
- 正答: 0.5396 nm
- 解説: Table 3.1 はPuO2を0.5396 nmとしている。同じ表でUO2は0.5470 nm、ThO2は0.5597 nmであり、0.49554 nmはUCの4.9554 Åのnm換算値なので、BのみがPuO2の値である。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf ; https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf
- verified: true

### NUC-09-Q007
- 問題文: PuO2 のモル分率を x、MOX の格子定数を A[nm] とするとき、JAEA-Technology 2015-017 が示す Vegard則の式はどれか。
- 選択肢: ["A = 0.5470 + 0.0074x", "A = 0.5396 - 0.0074x", "A = 0.5470 - 0.0074x", "A = 0.5396 + 0.0074x"]
- 正答選択肢: C
- 正答: A = 0.5470 - 0.0074x
- 解説: 同報告書は A=0.5470-0.0074x [nm] を示す。x=0ではUO2の0.5470 nm、x=1ではPuO2の0.5396 nmとなる。A、B、Dはいずれもこの式または両端組成の値を満たさない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q008
- 問題文: JAEA-Technology 2015-017 の A=0.5470-0.0074x [nm] を用いる。PuO2 モル分率 x=0.25 のMOXの格子定数はどれか。
- 選択肢: ["0.54700 nm", "0.54330 nm", "0.53960 nm", "0.54515 nm"]
- 正答選択肢: D
- 正答: 0.54515 nm
- 解説: A=0.5470-0.0074×0.25=0.5470-0.00185=0.54515 nm。0.54700 nmはx=0、0.54330 nmはx=0.50、0.53960 nmはx=1.00に対応するため、条件x=0.25ではDのみが正しい。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q009
- 問題文: JAEA-Technology 2015-017 のMOXに対する Vegard則 A=0.5470-0.0074x [nm] から直接いえることはどれか。xはPuO2モル分率とする。
- 選択肢: ["xが増えると格子定数は直線的に小さくなる", "xが増えると格子定数は直線的に大きくなる", "格子定数はxによらず常に0.5470 nmである", "xが増えると格子定数はxの二乗に比例して大きくなる"]
- 正答選択肢: A
- 正答: xが増えると格子定数は直線的に小さくなる
- 解説: xの係数が-0.0074なので、xの増加に対してAは直線的に減少する。正の傾き、一定、二乗増加を述べるB～Dはいずれも示された一次式と矛盾する。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q010
- 問題文: JAEA-Technology 2015-017 の蛍石型 UO2/PuO2 の理論密度式で現れる係数4は、何を表すか。
- 選択肢: ["単位格子あたりの酸素原子数が4であること", "単位格子あたりのUO2またはPuO2の式単位数が4であること", "MOX中のPuO2モル分率を4倍すること", "蛍石型結晶の配位数が常に4であること"]
- 正答選択肢: B
- 正答: 単位格子あたりのUO2またはPuO2の式単位数が4であること
- 解説: 同報告書は密度式の係数4について、単位格子あたりのUO2およびPuO2の分子数（式単位数）が4であるためと明記する。酸素原子数、PuO2モル分率の倍率、配位数を意味するものではない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q011
- 問題文: PuO2モル分率をx、格子定数をA、アボガドロ数をN_A、UO2とPuO2の式量をそれぞれM_UO2、M_PuO2とする。JAEA-Technology 2015-017 が蛍石型MOXについて示す理論密度ρの式はどれか。
- 選択肢: ["ρ = [(1-x)M_UO2+xM_PuO2]/(N_A A^3)", "ρ = 4[(1-x)M_UO2+xM_PuO2]/(N_A A^2)", "ρ = 4[(1-x)M_UO2+xM_PuO2]/(N_A A^3)", "ρ = 4N_A A^3[(1-x)M_UO2+xM_PuO2]"]
- 正答選択肢: C
- 正答: ρ = 4[(1-x)M_UO2+xM_PuO2]/(N_A A^3)
- 解説: 蛍石型では単位格子あたり4式単位なので、単位格子質量を4[(1-x)M_UO2+xM_PuO2]/N_A、体積をA^3として割る。Aは係数4を欠き、Bは体積をA^2としており、Dは質量と体積を掛けているため、いずれも同資料の式と一致しない。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q012
- 問題文: 同じ式量Mと同じ単位格子内式単位数Zをもつ結晶同士を比較し、ρ=ZM/(N_A A^3) とする。格子定数Aだけが大きくなった場合、理論密度ρはどうなるか。
- 選択肢: ["Aに比例して大きくなる", "Aの二乗に比例して大きくなる", "Aによらず一定である", "Aの三乗に反比例して小さくなる"]
- 正答選択肢: D
- 正答: Aの三乗に反比例して小さくなる
- 解説: M、Z、N_Aが一定ならρ∝1/A^3である。したがってAが増えるとρは減少する。AまたはA^2に比例して増えるA・B、一定とするCはいずれも密度式に反する。
- 出典: https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q013
- 問題文: IAEA-NDS-97 Rev.1 が示す UC（ウラン炭化物）の結晶構造はどれか。
- 選択肢: ["立方晶のNaCl型（岩塩型）", "蛍石型", "正方晶型", "体心立方型"]
- 正答選択肢: A
- 正答: 立方晶のNaCl型（岩塩型）
- 解説: IAEA-NDS-97 Rev.1 はUCを cubic structure of the NaCl type とする。蛍石型、正方晶型、体心立方型はいずれも同資料がUCについて示す構造ではない。
- 出典: https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf
- verified: true

### NUC-09-Q014
- 問題文: IAEA-NDS-97 Rev.1 に示される UC の格子定数はどれか。
- 選択肢: ["5.4700 Å", "4.9554 ± 0.003 Å", "5.3960 Å", "4.8890 Å"]
- 正答選択肢: B
- 正答: 4.9554 ± 0.003 Å
- 解説: IAEA-NDS-97 Rev.1 はUCの格子定数を4.9554 ± 0.003 Åとしている。5.4700 Åと5.3960 ÅはそれぞれJAEA値のUO2 0.5470 nm、PuO2 0.5396 nmをÅ表示した値であり、4.8890 ÅもIAEAがUCについて示す値ではない。
- 出典: https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf ; https://jopss.jaea.go.jp/pdfdata/JAEA-Technology-2015-017.pdf
- verified: true

### NUC-09-Q015
- 問題文: JAEA ATOMICA「FBR用新型燃料（窒化物燃料）」に基づき、UNを含むアクチノイド一窒化物の代表的な結晶構造として正しいものはどれか。
- 選択肢: ["蛍石型面心立方晶", "斜方晶", "岩塩型面心立方晶", "体心立方晶"]
- 正答選択肢: C
- 正答: 岩塩型面心立方晶
- 解説: JAEAはアクチノイド窒化物が炭化物と同様の岩塩型面心立方晶をもつとしている。蛍石型、斜方晶、体心立方晶は同資料が示すアクチノイド一窒化物の構造ではない。
- 出典: https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-02-07.html
- verified: true

### NUC-09-Q016
- 問題文: IAEA-NDS-97 Rev.1 の UC 格子定数 4.9554 Å を nm に換算した値はどれか。1 Å = 0.1 nm とする。
- 選択肢: ["4.9554 nm", "0.049554 nm", "0.48890 nm", "0.49554 nm"]
- 正答選択肢: D
- 正答: 0.49554 nm
- 解説: 1 Å=0.1 nmなので、4.9554 Å×0.1=0.49554 nm。4.9554 nmは10倍、0.049554 nmは1/10、0.48890 nmはこの換算結果ではないため、Dのみが正しい。
- 出典: https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf ; https://www.energy.gov/sites/default/files/2026-04/DOE-HDBK-1017-93_VOL1.pdf
- verified: true

### NUC-09-Q017
- 問題文: 金属ウランのα相の結晶構造として正しいものはどれか。
- 選択肢: ["斜方晶", "正方晶", "体心立方晶", "蛍石型"]
- 正答選択肢: A
- 正答: 斜方晶
- 解説: DOEの材料科学ハンドブックはα-Uを互いに直交する3本の不等軸をもつ構造として示し、公的技術資料ではα-Uはorthorhombic（斜方晶）として整理される。β-Uは正方晶、γ-Uは体心立方晶であり、蛍石型はUO2などの構造である。
- 出典: https://www.energy.gov/sites/default/files/2026-04/DOE-HDBK-1017-93_VOL1.pdf ; https://www.osti.gov/servlets/purl/7346496
- verified: true

### NUC-09-Q018
- 問題文: U.S. DOE Fundamentals Handbook が示す金属ウランのβ相の結晶構造はどれか。
- 選択肢: ["斜方晶", "正方晶", "面心立方晶", "体心立方晶"]
- 正答選択肢: B
- 正答: 正方晶
- 解説: DOEハンドブックはβ-Uを tetragonal lattice structure（正方晶）としている。斜方晶はα-U、体心立方晶はγ-Uであり、面心立方晶もβ-Uについて同資料が示す構造ではない。
- 出典: https://www.energy.gov/sites/default/files/2026-04/DOE-HDBK-1017-93_VOL1.pdf
- verified: true

### NUC-09-Q019
- 問題文: U.S. DOE Fundamentals Handbook が示す金属ウランのγ相の結晶構造はどれか。
- 選択肢: ["斜方晶", "正方晶", "体心立方晶（BCC）", "岩塩型面心立方晶"]
- 正答選択肢: C
- 正答: 体心立方晶（BCC）
- 解説: DOEハンドブックはγ-Uの格子構造をBCCと明記している。斜方晶はα-U、正方晶はβ-U、岩塩型面心立方晶はUCやUNでみられる構造なので、Cのみがγ-Uに対応する。
- 出典: https://www.energy.gov/sites/default/files/2026-04/DOE-HDBK-1017-93_VOL1.pdf ; https://www-nds.iaea.org/publications/iaea-nds/iaea-nds-0097rev1.pdf ; https://atomica.jaea.go.jp/data/detail/dat_detail_04-09-02-07.html
- verified: true

### NUC-09-Q020
- 問題文: JAEA ATOMICA「ウラン」を数値authorityとすると、金属ウランの α→β、β→γ の転移点の組合せとして正しいものはどれか。
- 選択肢: ["668 ℃、1132 ℃", "774 ℃、1132 ℃", "1132 ℃、2390 ℃", "668 ℃、774 ℃"]
- 正答選択肢: D
- 正答: 668 ℃、774 ℃
- 解説: JAEA ATOMICA「ウラン」は融点以下にα、β、γの3相があり、転移点をそれぞれ668℃、774℃としている。1132℃は同資料の金属Uの融点であり、2390℃はJAEA資料にあるPuO2の融解温度なので、A～Cは相転移点2つの組合せにならない。
- 出典: https://atomica.jaea.go.jp/dic/detail/dic_detail_183.html ; https://atomica.jaea.go.jp/data/detail/dat_detail_02-08-01-05.html
- verified: true
