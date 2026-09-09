export type VideoCategory =
  | "車種紹介・単体レビュー"
  | "車種・グレード比較"
  | "購入・乗り換え・ローン／リセール"
  | "カーライフ・用品・防犯・技術"
  | "Duxy店舗・サービス案内"
  | "会社・業界・営業ノウハウ"
  | "イベント・スタッフ／顧客密着"
  | "ランキング・おすすめ";

export type Video = {
  id: string;
  no: number;
  title: string;
  category: VideoCategory;
  url: string;
};

export const categories: VideoCategory[] = ["車種紹介・単体レビュー", "車種・グレード比較", "購入・乗り換え・ローン／リセール", "カーライフ・用品・防犯・技術", "Duxy店舗・サービス案内", "会社・業界・営業ノウハウ", "イベント・スタッフ／顧客密着", "ランキング・おすすめ"];

export const videos: Video[] = [
  {
    "id": "7TajlT7cmfU",
    "no": 1,
    "title": "【店舗紹介】初期から続くDuxy名古屋東店が誇る「信頼の厳選30台」",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=7TajlT7cmfU"
  },
  {
    "id": "beqmtxFIvTM",
    "no": 2,
    "title": "なぜ今FJクルーザーが話題に？新車オーダー停止で全国に5台しかない希少車を紹介！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=beqmtxFIvTM"
  },
  {
    "id": "yzMB4GJ0FHk",
    "no": 3,
    "title": "【異次元の走り】三和サービス社員が高級車でサーキット大爆走！？ガチ決勝レースがヤバすぎた…！",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=yzMB4GJ0FHk"
  },
  {
    "id": "3FTQUncflTI",
    "no": 4,
    "title": "【新型ハイエース】アルファードと40万差!? 驚きの安全機能と異次元の資産価値・快適性を徹底解説！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=3FTQUncflTI"
  },
  {
    "id": "hSw-quB2oyc",
    "no": 5,
    "title": "アルファード・ヴェルファイアと並ぶ最強のミニバン！三菱デリカD:5の内外装を徹底レビュー",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=hSw-quB2oyc"
  },
  {
    "id": "ylDVigSYWGs",
    "no": 6,
    "title": "「後席の広さ」と「荷室の広さ」で決まる！新型アクア vs ヤリスクロス どっちが買い？",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=ylDVigSYWGs"
  },
  {
    "id": "r9YZduzYDh4",
    "no": 7,
    "title": "「これで十分」どころじゃない。新型アクアが売れ続ける人気の理由を徹底解説",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=r9YZduzYDh4"
  },
  {
    "id": "v5D9LmaE9Dg",
    "no": 8,
    "title": "【なぜ選ばれる？】他社では絶対に真似できないDuxyの圧倒的なメリットとは",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=v5D9LmaE9Dg"
  },
  {
    "id": "KM5UlYkTpYM",
    "no": 9,
    "title": "ノアとヴォクシー、結局どっちが買い？顔以外の決定的な「差」",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=KM5UlYkTpYM"
  },
  {
    "id": "KDwCMphbjNA",
    "no": 10,
    "title": "トヨタがレクサスを超えた！？NX350とクラウンスポーツ、選ぶならどっち？",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=KDwCMphbjNA"
  },
  {
    "id": "764rTHPbnhI",
    "no": 11,
    "title": "【TRDエアロで激変】レクサスNX350Fスポーツのノーマルとカスタムを徹底比較！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=764rTHPbnhI"
  },
  {
    "id": "h69RaRaSFRQ",
    "no": 12,
    "title": "【店舗紹介】ついに岡崎店が誕生！圧倒的な在庫数で大型SUV・高級ミニバンから小型車まで一挙に見比べ！",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=h69RaRaSFRQ"
  },
  {
    "id": "ze9nVhaWzHM",
    "no": 13,
    "title": "【店舗紹介】新生Duxy本店へ潜入！紹介数No.1の山口が率いる「最も信頼される店舗」の裏側を改めて徹底紹介！",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=ze9nVhaWzHM"
  },
  {
    "id": "za3A4wMSlZ8",
    "no": 14,
    "title": "Duxy Special image Film",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=za3A4wMSlZ8"
  },
  {
    "id": "POGDpvuUeFg",
    "no": 15,
    "title": "【最高峰の極上空間】新型センチュリーSUVの内装が凄すぎる！ロールスロイスを超える？至高のショーファーカーを徹底解説",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=POGDpvuUeFg"
  },
  {
    "id": "ktE9cmXOpuA",
    "no": 16,
    "title": "【神回】GMG FES 2026の裏側に潜入！主催者インタビューで語られた本音＆Duxy激推しのカスタムカーを徹底解剖【後編】",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=ktE9cmXOpuA"
  },
  {
    "id": "AesCj_DMM7A",
    "no": 17,
    "title": "【高級車超え!?】新型RAV4の内装が限界突破！ハリアー乗りも嫉妬する質感と進化した装備を徹底解剖",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=AesCj_DMM7A"
  },
  {
    "id": "lrqNvSOvX-g",
    "no": 18,
    "title": "車好き全員が主役！GMG FES 2026 潜入レポ【展示・パーツ編】",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=lrqNvSOvX-g"
  },
  {
    "id": "uKsdFrKTfe8",
    "no": 19,
    "title": "ジムニーを買う前に見て！「毎日を旅にする」カスタム、ノマドが最高すぎる。内装から外装、走行性能まで全公開",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=uKsdFrKTfe8"
  },
  {
    "id": "S5N5y0j5OmE",
    "no": 20,
    "title": "ランクル300とLX600どっちが買い？プロが教える「格」の違いとリセールの真実。価格差〇〇万円を徹底比較！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=S5N5y0j5OmE"
  },
  {
    "id": "_RRhv5d4YaM",
    "no": 21,
    "title": "1,500万円超えのレクサスLX600、内装がエグすぎる",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=_RRhv5d4YaM"
  },
  {
    "id": "y-owPUqJns0",
    "no": 22,
    "title": "後輪操舵（DRS）の威力を狭い道で徹底検証！ハリアー乗りも驚くクラウンスポーツの実力とは",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=y-owPUqJns0"
  },
  {
    "id": "BJkf_2Gdd4c",
    "no": 23,
    "title": "【第25期 中間決算報告】進化が止まらない！三和サービスグループ躍進の記録",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=BJkf_2Gdd4c"
  },
  {
    "id": "l8ovrp-NBCQ",
    "no": 24,
    "title": "【社内イベント】全力すぎて仕事より熱い！？三和サービスグループの社内大運動会2026",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=l8ovrp-NBCQ"
  },
  {
    "id": "g5LRTEGLgEk",
    "no": 25,
    "title": "【祝・納車】1,000万越え！念願のレクサス新型RXをDuxyで決め手は〇〇だった…？",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=g5LRTEGLgEk"
  },
  {
    "id": "sdrGVD9-7v4",
    "no": 26,
    "title": "【ランクル250】通常版 vs First Edition！徹底比較で見えた「50万円の差」",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=sdrGVD9-7v4"
  },
  {
    "id": "BhcAem7VkWg",
    "no": 27,
    "title": "【限界突破】最新SUVの走破性が凄すぎる！さなげアドベンチャーフィールドでオフロード走行会を開催！",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=BhcAem7VkWg"
  },
  {
    "id": "P4FXKD60CPs",
    "no": 28,
    "title": "【車種比較】ハリアーとカローラクロス、迷っている人はこれを見て！維持費・リセール差が衝撃的すぎ…SUV選びのポイントを徹底検証",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=P4FXKD60CPs"
  },
  {
    "id": "1TKFcbDlR_o",
    "no": 29,
    "title": "【車種比較】ハイエース「ダークプライムS」と「ダークプライムⅡ」どこが違う？内装が進化しすぎ・・・",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=1TKFcbDlR_o"
  },
  {
    "id": "tDm78ZS1vxU",
    "no": 30,
    "title": "この黒、反則級。ハリアー ナイトシェードが別格すぎた",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=tDm78ZS1vxU"
  },
  {
    "id": "oVGdxRfMq1Q",
    "no": 31,
    "title": "【店舗紹介】車検ついでに買い物＆在庫車見放題！便利すぎる併設型店舗！",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=oVGdxRfMq1Q"
  },
  {
    "id": "VwlfLQ-JWEM",
    "no": 32,
    "title": "【店舗紹介】Duxy在庫No.1の北名古屋店の品揃えが圧倒的！！",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=VwlfLQ-JWEM"
  },
  {
    "id": "r78uAyISMes",
    "no": 33,
    "title": "【最強の存在感】モデリスタを纏ったカローラクロスがヤバすぎる！ノーマルvsモデリスタ徹底比較！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=r78uAyISMes"
  },
  {
    "id": "-FW6esDiCIQ",
    "no": 34,
    "title": "「盗まれる車」から脱却？改良版ランクル300の徹底されたセキュリティ性能とは！？",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=-FW6esDiCIQ"
  },
  {
    "id": "L78XIa-r1H8",
    "no": 35,
    "title": "立浪店長が惚れた!! レクサスGXの豪華すぎる内装の秘密",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=L78XIa-r1H8"
  },
  {
    "id": "yIu0WzPO4QQ",
    "no": 36,
    "title": "第24期決算報告会 | 三和サービスグループ",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=yIu0WzPO4QQ"
  },
  {
    "id": "3GTsJH4dnxI",
    "no": 37,
    "title": "夜のドライブデートにピッタリな車ランキング👑",
    "category": "ランキング・おすすめ",
    "url": "https://www.youtube.com/watch?v=3GTsJH4dnxI"
  },
  {
    "id": "df9Dvln_2Kg",
    "no": 38,
    "title": "Duxy岡崎店 立浪さん1日店長【後編】",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=df9Dvln_2Kg"
  },
  {
    "id": "S6RlXp3q1ks",
    "no": 39,
    "title": "一度は乗ってみたい！憧れの国産車ランキング",
    "category": "ランキング・おすすめ",
    "url": "https://www.youtube.com/watch?v=S6RlXp3q1ks"
  },
  {
    "id": "BL4z-reEcTM",
    "no": 40,
    "title": "Duxy岡崎店 立浪さん1日店長【前編】",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=BL4z-reEcTM"
  },
  {
    "id": "LR6hZ9ecZbI",
    "no": 41,
    "title": "【超貴重映像】立浪和義×加藤愛が海で本気マリンスポーツ！？プライベート感満載の1日‼️",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=LR6hZ9ecZbI"
  },
  {
    "id": "4jeX-6Bpkac",
    "no": 42,
    "title": "新型RXバージョンL！徹底解説！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=4jeX-6Bpkac"
  },
  {
    "id": "lKrRsPjIAeU",
    "no": 43,
    "title": "本当に損なのか？残クレアルファードの真実",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=lKrRsPjIAeU"
  },
  {
    "id": "6Yhz9x8FnFY",
    "no": 44,
    "title": "【2025年最新】本当に買ってよかったおすすめドライブレコーダーTOP3｜選び方も徹底解説！",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=6Yhz9x8FnFY"
  },
  {
    "id": "jw65Jlod99M",
    "no": 45,
    "title": "【車種比較】ヴェルファイアZとエグゼクティブラウンジ徹底比較！大きな違いは〇〇にあった！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=jw65Jlod99M"
  },
  {
    "id": "zI3kSowjNXg",
    "no": 46,
    "title": "【車種紹介】改良版！レクサス新型RXスポーツ徹底解説",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=zI3kSowjNXg"
  },
  {
    "id": "2sDqUgbKqq8",
    "no": 47,
    "title": "【要注意】1日に〇台盗まれている！？盗難台数が最も多い車とは！！",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=2sDqUgbKqq8"
  },
  {
    "id": "CrXzFSspKyI",
    "no": 48,
    "title": "【日本最速公開】この高級感で月3万！？カローラクロス新型の進化が完全に別モノ！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=CrXzFSspKyI"
  },
  {
    "id": "q9-NBSwO-IM",
    "no": 49,
    "title": "【車種紹介】ヤリスクロス特別仕様車！ウルバーノ紹介！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=q9-NBSwO-IM"
  },
  {
    "id": "G_cW1KSoq_Q",
    "no": 50,
    "title": "【車種比較】アルファードZとX徹底比較！大きな違いは〇〇にあった！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=G_cW1KSoq_Q"
  },
  {
    "id": "jisP4b_pWM4",
    "no": 51,
    "title": "【車種紹介】見た目は高級感あるのにこんなに安いの！？格安な新型アルファードXグレードをご紹介！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=jisP4b_pWM4"
  },
  {
    "id": "aoMKFtjD6aw",
    "no": 52,
    "title": "【社内イベント】幸田サーキットでフェラーリとGT-Rが大爆走！？ #愛知 #duxy #サーキット",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=aoMKFtjD6aw"
  },
  {
    "id": "fsBSsjxJ9FA",
    "no": 53,
    "title": "【車種紹介】アウトドア好きな方にピッタリな高級感漂うクラウンエステートが月々〇円で乗れちゃいます！！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=fsBSsjxJ9FA"
  },
  {
    "id": "5gdXE8pmJ9U",
    "no": 54,
    "title": "【車種紹介】 復刻版ランクル70 車両紹介！クラシカルの雰囲気が渋い",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=5gdXE8pmJ9U"
  },
  {
    "id": "Lm4LKuHiDXM",
    "no": 55,
    "title": "【車種紹介】この2台どこが違う！？アルファード エグゼクティブラウンジとZのグレード徹底比較！！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=Lm4LKuHiDXM"
  },
  {
    "id": "ON99byhQJUE",
    "no": 56,
    "title": "残価設定ローンで乗り換えれば月々7万円！？ランクル300ZX をご紹介！",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=ON99byhQJUE"
  },
  {
    "id": "wLeGqV-INn4",
    "no": 57,
    "title": "河合本部長にバースデーサプライズ！水野社長＆三井社長が語る三和サービス代表交代の条件とは！？",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=wLeGqV-INn4"
  },
  {
    "id": "4Pjowaq4dOM",
    "no": 58,
    "title": "ガソリン代が爆上がりしている理由は〇〇にあった！？ガソリン代を抑えるための対策を教えます！",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=4Pjowaq4dOM"
  },
  {
    "id": "nTB8yzh-Gqk",
    "no": 59,
    "title": "イケメンスーパーサラリーマン！28歳で年収〇〇〇万！その実態とは！？",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=nTB8yzh-Gqk"
  },
  {
    "id": "Cexek9gpKio",
    "no": 60,
    "title": "オーバーローンは合法？違法？",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=Cexek9gpKio"
  },
  {
    "id": "53auY_mXLD8",
    "no": 61,
    "title": "【要注意】車両窃盗団 急増中！「もっと防犯しておけば…」ってならないための有効な防犯対策を教えます！",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=53auY_mXLD8"
  },
  {
    "id": "JKgepk-ZULQ",
    "no": 62,
    "title": "【徹底解説】ハイブリッドとepowerと電気自動車は全くの別物！？実際に何が違うのかわかりやすく解説します！",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=JKgepk-ZULQ"
  },
  {
    "id": "1M8gpIcKW_8",
    "no": 63,
    "title": "【愛知/三和サービス】3年目が躍進した！果たして誰がランクインしているのか！三和サービス 第24期中間決算報告会！",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=1M8gpIcKW_8"
  },
  {
    "id": "ktc9b8bmmWU",
    "no": 64,
    "title": "まさかのウンパルンパ参戦！白熱した戦いを繰り広げるDuxyの大運動会！",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=ktc9b8bmmWU"
  },
  {
    "id": "sxT0o7KLHYg",
    "no": 65,
    "title": "〇〇が車に付いていると高くリセールできる！そのメーカーオプションとは？？",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=sxT0o7KLHYg"
  },
  {
    "id": "bLNnsRhpgO0",
    "no": 66,
    "title": "【神回】新車SUVに安く乗る方法！",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=bLNnsRhpgO0"
  },
  {
    "id": "JEEhr_k4sXc",
    "no": 67,
    "title": "知らないと後悔！残価設定ローンには気をつけてください",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=JEEhr_k4sXc"
  },
  {
    "id": "q9IKB9WILz4",
    "no": 68,
    "title": "ナビにYouTubeを映して車内で楽しめる方法",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=q9IKB9WILz4"
  },
  {
    "id": "vzqUd2m05-c",
    "no": 69,
    "title": "【車種紹介】海外進出！？フルモデルチェンジしたクラウンセダンをご紹介",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=vzqUd2m05-c"
  },
  {
    "id": "DaFrROps6jQ",
    "no": 70,
    "title": "セキュリティ最高峰Panthera",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=DaFrROps6jQ"
  },
  {
    "id": "B3QnCROS75k",
    "no": 71,
    "title": "簡単に分かる！ランクル300とランクル250比較！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=B3QnCROS75k"
  },
  {
    "id": "BV9ujwRPN-M",
    "no": 72,
    "title": "【店舗紹介】Duxy可児店",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=BV9ujwRPN-M"
  },
  {
    "id": "LT2qyUtUJm8",
    "no": 73,
    "title": "【店舗紹介】Duxy本店",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=LT2qyUtUJm8"
  },
  {
    "id": "kl8WhoCdQCk",
    "no": 74,
    "title": "【車種比較】外観映え！WR-VとライズのSUV徹底比較！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=kl8WhoCdQCk"
  },
  {
    "id": "HGSD5-tNWNo",
    "no": 75,
    "title": "【車種比較】あの大人気！ミニバン３種を徹底比較してみた！！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=HGSD5-tNWNo"
  },
  {
    "id": "aqBFKvFuKXY",
    "no": 76,
    "title": "【店舗紹介】Duxy名古屋西店",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=aqBFKvFuKXY"
  },
  {
    "id": "XLW6Cm_LL20",
    "no": 77,
    "title": "【車種紹介】まるでそっくり！フェラーリとクラウンスポーツ比較してみた",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=XLW6Cm_LL20"
  },
  {
    "id": "Bi9wR_X6LK0",
    "no": 78,
    "title": "１日１台以上盗まれてる！？絶対にやって欲しい車のセキュリティ対策",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=Bi9wR_X6LK0"
  },
  {
    "id": "IsDpTPJqEVo",
    "no": 79,
    "title": "【車種紹介】レクサス新型RX500H 〇〇万円の価値ある内外装や性能を紹介",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=IsDpTPJqEVo"
  },
  {
    "id": "4XYESmD8uLM",
    "no": 80,
    "title": "【プロ直伝！】残価設定のからくり",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=4XYESmD8uLM"
  },
  {
    "id": "z56XYgMB624",
    "no": 81,
    "title": "暴れん坊魔裟斗がオフロードでも暴れる！？",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=z56XYgMB624"
  },
  {
    "id": "dla_gQBy6a0",
    "no": 82,
    "title": "最強の旅車！キャンピングカー【リベロ】をご紹介！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=dla_gQBy6a0"
  },
  {
    "id": "syNTSoeqsfE",
    "no": 83,
    "title": "目を奪うデザイン心を掴む走り走り！クラウンスポーツ",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=syNTSoeqsfE"
  },
  {
    "id": "ft0IRHJQTNs",
    "no": 84,
    "title": "【買って得する】2024年！おすすめハイブリッド車3選",
    "category": "ランキング・おすすめ",
    "url": "https://www.youtube.com/watch?v=ft0IRHJQTNs"
  },
  {
    "id": "xYiFPrGa7Kg",
    "no": 85,
    "title": "女性に人気！月々低価格で乗れるヤリスクロスのご紹介",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=xYiFPrGa7Kg"
  },
  {
    "id": "nBFDihs_6jk",
    "no": 86,
    "title": "小さい車屋はなぜ倒産しないのか！？",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=nBFDihs_6jk"
  },
  {
    "id": "t0YY0W64LoI",
    "no": 87,
    "title": "残価設定ローンでお得に乗り換えられる方法を教えます！",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=t0YY0W64LoI"
  },
  {
    "id": "wGFn6-RD9DI",
    "no": 88,
    "title": "仕事も遊びも全力の会社！BBQ＆マリンスポーツ",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=wGFn6-RD9DI"
  },
  {
    "id": "1cK9b9bNfjI",
    "no": 89,
    "title": "知らないと後悔するコーティングの闇",
    "category": "カーライフ・用品・防犯・技術",
    "url": "https://www.youtube.com/watch?v=1cK9b9bNfjI"
  },
  {
    "id": "8gXTz29VCEg",
    "no": 90,
    "title": "【愛知/Duxy】リセール最強説！！カローラクロスをご紹介！！",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=8gXTz29VCEg"
  },
  {
    "id": "Fk0EbSKtduA",
    "no": 91,
    "title": "【愛知/Duxy】乗り心地と走行性能を高次元で実現！レクサスNX350Hをご紹介！！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=Fk0EbSKtduA"
  },
  {
    "id": "8GZhfQiy2Vo",
    "no": 92,
    "title": "【魔裟斗さまご納車！】ヴェルファイアエグゼクティブラウンジ",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=8GZhfQiy2Vo"
  },
  {
    "id": "L0tGpLNoOLs",
    "no": 93,
    "title": "【三和サービス/イベント】オフロード走行会でドッキリ！！",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=L0tGpLNoOLs"
  },
  {
    "id": "gOH9HvVZzuc",
    "no": 94,
    "title": "【三和サービス/イベント】オフロード走行会　#愛知 #Duxy",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=gOH9HvVZzuc"
  },
  {
    "id": "cRNdfiSFsOM",
    "no": 95,
    "title": "【愛知/採用】成果と楽しさを共に得られる(株)三和サービス、第23期決算報告会",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=cRNdfiSFsOM"
  },
  {
    "id": "_cLehJW_Kkw",
    "no": 96,
    "title": "【愛知/三和サービス】中間決算発表会",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=_cLehJW_Kkw"
  },
  {
    "id": "R10U1c9gjgM",
    "no": 97,
    "title": "【愛知/Duxy】新車に乗り換えたい方必見！９割の人が知らない乗り継ぎ方法",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=R10U1c9gjgM"
  },
  {
    "id": "H5SOv92sNQc",
    "no": 98,
    "title": "【愛知/Duxy】新古車が日本からなくなる！？",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=H5SOv92sNQc"
  },
  {
    "id": "I6vbKDWxqys",
    "no": 99,
    "title": "愛知でアクティブデザインSUV、ライズの購入はDuxyへ",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=I6vbKDWxqys"
  },
  {
    "id": "zEwGtjYGzew",
    "no": 100,
    "title": "【車種紹介】もっと快適に もっと広々となった新時代のミニバン、新型ノアの紹介 #愛知 #ノア",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=zEwGtjYGzew"
  },
  {
    "id": "LZEhsoR5-_8",
    "no": 101,
    "title": "【車種紹介】堂々の品格ある佇まいのオフロード車、ランドクルーザーの紹介！#愛知 #ランドクルーザー#ランクル",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=LZEhsoR5-_8"
  },
  {
    "id": "4hNKmzpf-dA",
    "no": 102,
    "title": "【車種紹介】空間を満たすラグジュアリーSUV、ハリアーのご紹介 #愛知 #Duxy",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=4hNKmzpf-dA"
  },
  {
    "id": "LcoaCe7aFUU",
    "no": 103,
    "title": "【車種紹介】スポーティーアグレッシブ！進化し続けるロングセラー、カローラスポーツ #愛知 #カローラスポーツ",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=LcoaCe7aFUU"
  },
  {
    "id": "vEq-FKqMX_o",
    "no": 104,
    "title": "【車種紹介】幅広い速度域でキレのある走りを実現したスポーツカーGR86！#愛知 #gr86 #duxy",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=vEq-FKqMX_o"
  },
  {
    "id": "5yCT9bkyTFk",
    "no": 105,
    "title": "【祝1周年】Duxy天白店のご紹介！",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=5yCT9bkyTFk"
  },
  {
    "id": "O2QLSzHVYvw",
    "no": 106,
    "title": "【サービス紹介】デオファクターの効果とは！#愛知  #duxy #デオファクター #抗菌",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=O2QLSzHVYvw"
  },
  {
    "id": "7wXEeVH-jio",
    "no": 107,
    "title": "【サービス紹介】業界最安値のカーリース「リースナブル」",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=7wXEeVH-jio"
  },
  {
    "id": "cam0IDXazW8",
    "no": 108,
    "title": "【サービス紹介】リース？ローン？あなたにとってお得な車の乗り方はどれ！#愛知 #duxy #リース #新車リース #ローン #新車",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=cam0IDXazW8"
  },
  {
    "id": "10QXyeVh-Xs",
    "no": 109,
    "title": "【車種紹介】上質をまとった日産オーラの紹介 #愛知 #duxy #オーラ #おすすめ",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=10QXyeVh-Xs"
  },
  {
    "id": "3sdxMMV_4Iw",
    "no": 110,
    "title": "【サービス紹介】安全でおすすめのマッハ車検は三和サービスにおまかせ！#愛知 #duxy #車検 #マッハ車検 #不正車検",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=3sdxMMV_4Iw"
  },
  {
    "id": "fHa3T4S3-_k",
    "no": 111,
    "title": "【社内イベント】幸田サーキットでドッキリ！？ #愛知 #duxy #サーキット",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=fHa3T4S3-_k"
  },
  {
    "id": "Y5DlZyav3M8",
    "no": 112,
    "title": "【社内イベント】三和サービスの部活動！？マリン部のリクリエーションに密着！",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=Y5DlZyav3M8"
  },
  {
    "id": "nj2TT8A2fYU",
    "no": 113,
    "title": "【車種比較】8か月待ち⁉納期が長い新型アルヴェルを買う裏技 #愛知 #duxy #アルファード #ヴェルファイア #比較",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=nj2TT8A2fYU"
  },
  {
    "id": "rzlrIGPTuzk",
    "no": 114,
    "title": "【車種比較】新型アルファードと旧型アルファード比べてみた！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=rzlrIGPTuzk"
  },
  {
    "id": "9GGSpW4Refo",
    "no": 115,
    "title": "【車種比較】新型アルヴェルの違いを徹底比較！",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=9GGSpW4Refo"
  },
  {
    "id": "4hf3l_w_qRM",
    "no": 116,
    "title": "【車種紹介】デザインが洗練された新型アルファードの徹底解説",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=4hf3l_w_qRM"
  },
  {
    "id": "430geac_z-I",
    "no": 117,
    "title": "【車種紹介】RAV4の特別仕様車「OFFROAD packageⅡ」#愛知 #duxy #rav4",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=430geac_z-I"
  },
  {
    "id": "J-4yiEObG2s",
    "no": 118,
    "title": "三和サービスの決算報告会",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=J-4yiEObG2s"
  },
  {
    "id": "-UkLsrUy4VU",
    "no": 119,
    "title": "【車種紹介】ミニバンの王様、新型ヴェルファイアの徹底解説",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=-UkLsrUy4VU"
  },
  {
    "id": "J3m2ZtOhVQk",
    "no": 120,
    "title": "【車種紹介】エモーショナルなセダン！レクサスESの紹介",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=J3m2ZtOhVQk"
  },
  {
    "id": "kwAatG8aLu4",
    "no": 121,
    "title": "【愛知】ビッグモーターだけが悪いわけじゃない！？～話題になった事件の裏側～",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=kwAatG8aLu4"
  },
  {
    "id": "rGTkwUBjPV8",
    "no": 122,
    "title": "【愛知】三和サービスのクレドに基づいたDuxyスタッフが考える利益とは？",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=rGTkwUBjPV8"
  },
  {
    "id": "6-DLvvd7fbU",
    "no": 123,
    "title": "【車種紹介】走る喜びを感じられる!?新型RXのご紹介！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=6-DLvvd7fbU"
  },
  {
    "id": "4OqdTvd7Oak",
    "no": 124,
    "title": "【愛知/Duxy】業界初！鈑金修理を含む安心の保証サービス",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=4OqdTvd7Oak"
  },
  {
    "id": "BR_oOylyJa8",
    "no": 125,
    "title": "【愛知/Duxy】新型シエンタが売れる納得の理由とは⁉",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=BR_oOylyJa8"
  },
  {
    "id": "5cTkyxhZxHg",
    "no": 126,
    "title": "【愛知/Duxy】最新すぎる！新型セレナの内外装",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=5cTkyxhZxHg"
  },
  {
    "id": "OkrfcZu4dDs",
    "no": 127,
    "title": "【車種紹介】クラウンクロスオーバーがセダンを超えた！！",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=OkrfcZu4dDs"
  },
  {
    "id": "CmsvqrBKM8E",
    "no": 128,
    "title": "【車種紹介】プリウスの専門店！？新型プリウスを早く手に入れるには…",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=CmsvqrBKM8E"
  },
  {
    "id": "dqxaz4pidwM",
    "no": 129,
    "title": "【愛知】カローラクロスが人気過ぎて生産中止！？｜Duxy",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=dqxaz4pidwM"
  },
  {
    "id": "02lzS5SkT0Q",
    "no": 130,
    "title": "【愛知】幻のクルマ！？プラドマットブラックエディションの秘密",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=02lzS5SkT0Q"
  },
  {
    "id": "mI5HKtUtLak",
    "no": 131,
    "title": "【愛知】車販売の営業の極意とは！？Duxyの営業王者が語る！",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=mI5HKtUtLak"
  },
  {
    "id": "HwJhzktXOp4",
    "no": 132,
    "title": "【愛知】三和サービスグループイベント in 美浜サーキット Part.2",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=HwJhzktXOp4"
  },
  {
    "id": "y3l8lvcKUwo",
    "no": 133,
    "title": "【愛知】三和サービスグループイベント in 美浜サーキット",
    "category": "イベント・スタッフ／顧客密着",
    "url": "https://www.youtube.com/watch?v=y3l8lvcKUwo"
  },
  {
    "id": "s-wqhgDQ-Zs",
    "no": 134,
    "title": "愛知で車の査定はプロのDuxyにおまかせ！",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=s-wqhgDQ-Zs"
  },
  {
    "id": "YU0O8c1F1IU",
    "no": 135,
    "title": "【愛知】日本一車のローン実績が多いDuxy",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=YU0O8c1F1IU"
  },
  {
    "id": "RikBHo51ZJI",
    "no": 136,
    "title": "【愛知/Duxy】車の残債が残っていても乗り換えられるオーバーローン",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=RikBHo51ZJI"
  },
  {
    "id": "PdL4PelW5gI",
    "no": 137,
    "title": "【愛知】ハイラックスをDuxyでカスタムしたらタンドラに！？",
    "category": "車種紹介・単体レビュー",
    "url": "https://www.youtube.com/watch?v=PdL4PelW5gI"
  },
  {
    "id": "3-8N0Nw_36w",
    "no": 138,
    "title": "【愛知】カローラクロス ガソリンVSハイブリッド どちらがお得！？｜Duxy@duxy_aichi",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=3-8N0Nw_36w"
  },
  {
    "id": "WjOQVMwVK28",
    "no": 139,
    "title": "【愛知】Duxyで購入する中古車の保証は？",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=WjOQVMwVK28"
  },
  {
    "id": "P_i_NOA_d4Q",
    "no": 140,
    "title": "【愛知】旧型ヴォクシーと新型ヴォクシーの新旧比較",
    "category": "車種・グレード比較",
    "url": "https://www.youtube.com/watch?v=P_i_NOA_d4Q"
  },
  {
    "id": "brrL_6cgki0",
    "no": 141,
    "title": "【愛知】Duxyの車のコーティングの秘密",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=brrL_6cgki0"
  },
  {
    "id": "a5kbGZDmLa0",
    "no": 142,
    "title": "【愛知】Duxyの車検は早い！安い！マッハ車検",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=a5kbGZDmLa0"
  },
  {
    "id": "mSotq_2SQ7g",
    "no": 143,
    "title": "【愛知】Duxyで新車買うと車検も安い！？",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=mSotq_2SQ7g"
  },
  {
    "id": "jIFTEK4HlpE",
    "no": 144,
    "title": "【愛知】新車をディーラーよりDuxyで買うメリットとは！？",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=jIFTEK4HlpE"
  },
  {
    "id": "CzbyKI7prOw",
    "no": 145,
    "title": "【愛知】新車の安い買い替え方とは！？｜デュクシー",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=CzbyKI7prOw"
  },
  {
    "id": "i4Ft4GwdxZA",
    "no": 146,
    "title": "【愛知】新車購入のローンがお得なデュクシー",
    "category": "購入・乗り換え・ローン／リセール",
    "url": "https://www.youtube.com/watch?v=i4Ft4GwdxZA"
  },
  {
    "id": "IWEv9XKW2pc",
    "no": 147,
    "title": "【愛知】三和サービスのクレド",
    "category": "会社・業界・営業ノウハウ",
    "url": "https://www.youtube.com/watch?v=IWEv9XKW2pc"
  },
  {
    "id": "X8fOLLdE85M",
    "no": 148,
    "title": "愛知にあるデュクシーの当社にしかないサービスとは？",
    "category": "Duxy店舗・サービス案内",
    "url": "https://www.youtube.com/watch?v=X8fOLLdE85M"
  }
];
