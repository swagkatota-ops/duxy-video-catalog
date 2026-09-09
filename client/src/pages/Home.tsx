import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CarFront,
  ChevronDown,
  CirclePlay,
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
  Search,
  SlidersHorizontal,
  X,
  Youtube,
} from "lucide-react";
import { StoreMap } from "@/components/StoreMap";
import { categories, videos, type VideoCategory } from "@/data/videos";

const categoryDescriptions: Record<VideoCategory, string> = {
  "車種紹介・単体レビュー": "内外装・走行性能・カスタムを深掘り",
  "車種・グレード比較": "車種・年式・仕様の違いを整理",
  "購入・乗り換え・ローン／リセール": "支払い・残価・乗り換え判断のヒント",
  "カーライフ・用品・防犯・技術": "防犯・用品・メンテナンス・技術解説",
  "Duxy店舗・サービス案内": "店舗・保証・車検・Duxyの提供価値",
  "会社・業界・営業ノウハウ": "三和サービスの組織・業界・営業の話",
  "イベント・スタッフ／顧客密着": "イベント・スタッフ・納車ストーリー",
  "ランキング・おすすめ": "テーマ別のおすすめ車種を紹介",
};

const categoryAccent: Record<VideoCategory, string> = {
  "車種紹介・単体レビュー": "cyan",
  "車種・グレード比較": "violet",
  "購入・乗り換え・ローン／リセール": "amber",
  "カーライフ・用品・防犯・技術": "emerald",
  "Duxy店舗・サービス案内": "rose",
  "会社・業界・営業ノウハウ": "orange",
  "イベント・スタッフ／顧客密着": "fuchsia",
  "ランキング・おすすめ": "blue",
};

const vehicleFilterTags = ["SUV", "ミニバン", "高級車", "コンパクト／セダン", "スポーツ", "ハイブリッド／EV", "購入・ローン", "Duxy・イベント"] as const;
type VehicleFilterTag = (typeof vehicleFilterTags)[number];
type TaggedVideo = (typeof videos)[number] & { vehicleTags: VehicleFilterTag[] };

type Shop = {
  name: string;
  area: string;
  address: string;
  phone: string;
  tel: string;
  hours: string;
  closed: string;
  url: string;
  mapUrl: string;
  image: string;
  video?: { id: string; title: string };
};

const shopList: Shop[] = [
  { name: "Duxy本店", area: "愛知県清須市", address: "〒452-0962 愛知県清須市春日砂賀東137番地", phone: "052-433-4911", tel: "0524334911", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-kitanagoya", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県清須市春日砂賀東137", image: "/manus-storage/main_cd39dc02.jpg", video: { id: "LT2qyUtUJm8", title: "【店舗紹介】Duxy本店" } },
  { name: "Duxy名古屋東店", area: "愛知県春日井市", address: "〒486-0851 愛知県春日井市篠木町5-2475-6", phone: "0568-86-3477", tel: "0568863477", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-nagoyahigashi", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県春日井市篠木町5-2475-6", image: "/manus-storage/nagoya-east_a8448b5c.jpg", video: { id: "7TajlT7cmfU", title: "【店舗紹介】Duxy名古屋東店" } },
  { name: "Duxy名古屋西店", area: "愛知県津島市", address: "〒496-0005 愛知県津島市神守町一丁田53", phone: "0567-22-4711", tel: "0567224711", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-nagoyanishi", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県津島市神守町一丁田53", image: "/manus-storage/nagoya-west_40a0bb9e.jpg", video: { id: "aqBFKvFuKXY", title: "【店舗紹介】Duxy名古屋西店" } },
  { name: "Duxy豊田店", area: "愛知県みよし市", address: "〒470-0224 愛知県みよし市三好町森曽16-1", phone: "0561-33-2033", tel: "0561332033", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-miyoshi", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県みよし市三好町森曽16-1", image: "/manus-storage/toyota_f20e7bc6.jpg" },
  { name: "Duxy安城店", area: "愛知県安城市", address: "〒446-0053 愛知県安城市高棚町小牧30", phone: "0566-92-5615", tel: "0566925615", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-anjo", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県安城市高棚町小牧30", image: "/manus-storage/anjo_c5ca574c.jpg" },
  { name: "Duxy大垣店", area: "岐阜県大垣市", address: "〒503-0804 岐阜県大垣市中ノ江1丁目28番1", phone: "0584-74-1881", tel: "0584741881", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-ohgaki", mapUrl: "https://www.google.com/maps/search/?api=1&query=岐阜県大垣市中ノ江1丁目28-1", image: "/manus-storage/ogaki_144f4b4b.jpg" },
  { name: "Duxy可児店", area: "岐阜県可児市", address: "〒509-0203 岐阜県可児市下恵土字広瀬5864-1", phone: "0574-61-3333", tel: "0574613333", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-kani", mapUrl: "https://www.google.com/maps/search/?api=1&query=岐阜県可児市下恵土5864-1", image: "/manus-storage/kani_1cefb7a3.jpg", video: { id: "BV9ujwRPN-M", title: "【店舗紹介】Duxy可児店" } },
  { name: "Duxy北名古屋店", area: "愛知県清須市", address: "〒452-0962 愛知県清須市春日新町39-1", phone: "052-408-5855", tel: "0524085855", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/j-auto-international-kitanagoya", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県清須市春日新町39-1", image: "/manus-storage/kita-nagoya_72bb132f.jpg", video: { id: "VwlfLQ-JWEM", title: "【店舗紹介】Duxy北名古屋店" } },
  { name: "Duxy清須店", area: "愛知県清須市", address: "〒452-0941 愛知県清須市西市場5丁目5-3", phone: "052-400-0855", tel: "0524000855", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-kiyosu", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県清須市西市場5丁目5-3", image: "/manus-storage/kiyosu_cd38bddd.jpg" },
  { name: "Duxy天白店", area: "愛知県名古屋市", address: "〒468-0013 愛知県名古屋市天白区荒池2-1304", phone: "052-807-5678", tel: "0528075678", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-tenpaku", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県名古屋市天白区荒池2-1304", image: "/manus-storage/tenpaku_536e64d2.jpg", video: { id: "5yCT9bkyTFk", title: "【祝1周年】Duxy天白店のご紹介" } },
  { name: "Duxy岡崎店", area: "愛知県岡崎市", address: "〒444-0858 愛知県岡崎市上六名4丁目1-1", phone: "0564-73-0771", tel: "0564730771", hours: "10:00–18:00", closed: "月曜・第2/第3火曜", url: "https://www.jcar.co.jp/shop/duxy-okazaki", mapUrl: "https://www.google.com/maps/search/?api=1&query=愛知県岡崎市上六名4丁目1-1", image: "/manus-storage/okazaki_4940891c.jpg", video: { id: "h69RaRaSFRQ", title: "【店舗紹介】Duxy岡崎店" } },
];

const INVENTORY_URL = "https://www.jcar.co.jp/all?odr=1";
const CONTACT_URL = "https://www.jcar.co.jp/contact.html";
const INITIAL_VISIBLE = 12;

function getVehicleTags(video: (typeof videos)[number]): VehicleFilterTag[] {
  const title = video.title;
  const tags = new Set<VehicleFilterTag>();
  if (/(SUV|ハリアー|RAV4|カローラクロス|ランクル|ランドクルーザー|LX|NX|ヤリスクロス|ライズ|WR-V|ジムニー|GX|クラウンスポーツ|クラウンエステート|クラウンクロスオーバー|プラド|ハイラックス)/i.test(title)) tags.add("SUV");
  if (/(アルファード|ヴェルファイア|ノア|ヴォクシー|ハイエース|シエンタ|セレナ|デリカ|ミニバン|キャンピングカー)/i.test(title)) tags.add("ミニバン");
  if (/(レクサス|LX|NX|RX|センチュリー|アルファード|ヴェルファイア|フェラーリ|クラウン)/i.test(title)) tags.add("高級車");
  if (/(アクア|オーラ|プリウス|カローラスポーツ|セダン|ES|ライズ|シエンタ)/i.test(title)) tags.add("コンパクト／セダン");
  if (/(GR86|スポーツカー|サーキット|オフロード|カスタム|走行)/i.test(title)) tags.add("スポーツ");
  if (/(ハイブリッド|e-?power|電気自動車|ガソリンVSハイブリッド|アクア|プリウス|オーラ)/i.test(title)) tags.add("ハイブリッド／EV");
  if (/(ローン|残価|リース|リセール|乗り換え|オーバーローン|査定|購入|納期)/i.test(title)) tags.add("購入・ローン");
  if (/(Duxy|デュクシー|三和サービス|店舗|イベント|運動会|決算|クレド|営業|マリン|GMG)/i.test(title)) tags.add("Duxy・イベント");
  return tags.size ? Array.from(tags) : ["Duxy・イベント"];
}

function VideoCard({ video, index }: { video: TaggedVideo; index: number }) {
  return (
    <article className="video-card" style={{ "--card-index": Math.min(index, 11) } as React.CSSProperties}>
      <a className="video-main" href={video.url} target="_blank" rel="noreferrer" aria-label={`${video.title} をYouTubeで再生`}>
        <div className="thumbnail-wrap"><img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" className="thumbnail" /><div className="thumbnail-scrim" /><span className="play-button" aria-hidden="true"><CirclePlay size={25} strokeWidth={1.7} /></span><span className="video-number">#{String(video.no).padStart(3, "0")}</span></div>
        <div className="video-card-body"><span className={`category-label category-${categoryAccent[video.category]}`}>{video.category}</span><h3>{video.title}</h3><div className="vehicle-tag-list" aria-label="動画のテーマタグ">{video.vehicleTags.map((tag) => <span key={tag} className="vehicle-tag">{tag}</span>)}</div><span className="watch-link">YouTubeで見る <ArrowUpRight size={14} strokeWidth={2} /></span></div>
      </a>
      <div className="video-actions"><a href={INVENTORY_URL} target="_blank" rel="noreferrer"><CarFront size={14} /> 在庫を見る</a><a href="#shops"><MapPin size={14} /> 店舗に相談</a></div>
    </article>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "すべて">("すべて");
  const [activeVehicleTag, setActiveVehicleTag] = useState<VehicleFilterTag | "すべて">("すべて");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedShopIndex, setSelectedShopIndex] = useState(0);

  const videosWithTags = useMemo<TaggedVideo[]>(() => videos.map((video) => ({ ...video, vehicleTags: getVehicleTags(video) })), []);
  const categoryCounts = useMemo(() => Object.fromEntries(categories.map((category) => [category, videos.filter((video) => video.category === category).length])) as Record<VideoCategory, number>, []);
  const tagCounts = useMemo(() => Object.fromEntries(vehicleFilterTags.map((tag) => [tag, videosWithTags.filter((video) => video.vehicleTags.includes(tag)).length])) as Record<VehicleFilterTag, number>, [videosWithTags]);
  const selectedShop = shopList[selectedShopIndex];

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ja");
    return videosWithTags.filter((video) => {
      const categoryMatches = activeCategory === "すべて" || video.category === activeCategory;
      const tagMatches = activeVehicleTag === "すべて" || video.vehicleTags.includes(activeVehicleTag);
      const queryMatches = !normalizedQuery || `${video.title} ${video.category} ${video.vehicleTags.join(" ")}`.toLocaleLowerCase("ja").includes(normalizedQuery);
      return categoryMatches && tagMatches && queryMatches;
    });
  }, [activeCategory, activeVehicleTag, query, videosWithTags]);

  const resetVisible = (category: VideoCategory | "すべて") => { setActiveCategory(category); setVisibleCount(INITIAL_VISIBLE); };
  const setTagFilter = (tag: VehicleFilterTag | "すべて") => { setActiveVehicleTag(tag); setVisibleCount(INITIAL_VISIBLE); };
  const resetAll = () => { setActiveCategory("すべて"); setActiveVehicleTag("すべて"); setQuery(""); setVisibleCount(INITIAL_VISIBLE); };
  const showAll = activeCategory === "すべて" && activeVehicleTag === "すべて" && !query;
  const visibleVideos = filteredVideos.slice(0, visibleCount);

  return (
    <div className="site-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="Duxy Video Catalog トップへ"><span className="brand-mark"><span /></span><span>DUXY</span><small>by SANWA SERVICE GROUP</small></a><nav className="main-nav" aria-label="ページ内ナビゲーション"><a href="#top">HOME</a><a href="#overview">CATEGORY</a><a href="#catalog">VIDEO CATALOG</a><a href="#shops">SHOPS</a></nav><a className="youtube-link" href="https://www.youtube.com/@duxy_aichi" target="_blank" rel="noreferrer"><Youtube size={17} fill="currentColor" /> <span>CHANNEL</span><ArrowUpRight size={13} /></a></header>
      <main id="top">
        <section className="hero"><img className="hero-art" src="/manus-storage/sanwa-style-catalog-hero_0d274adc.jpg" alt="" /><div className="hero-noise" /><div className="hero-content"><p className="eyebrow"><span className="eyebrow-line" /> DUXY CHANNEL ARCHIVE</p><h1>クルマ選びを、<br /><em>もっと確かに。</em></h1><p className="hero-copy">Duxyチャンネルの148本を、検討テーマごとに再編集。<br className="desktop-break" />知りたい動画へ、最短でたどり着けるカタログです。</p><a className="hero-cta" href="#catalog">動画を探す <ChevronDown size={18} /></a></div><div className="hero-meta"><span>CURATED</span><strong>148</strong><span>VIDEOS / 8 CATEGORIES</span></div><div className="hero-bottom-line" /></section>
        <section className="category-overview" id="overview" aria-labelledby="overview-title"><div className="section-intro"><p className="eyebrow"><span className="eyebrow-line" /> CONTENT INDEX</p><h2 id="overview-title">目的から、<br />動画を選ぶ。</h2><p>タイトルの主訴求をもとに、各動画を1つのカテゴリへ整理しています。</p></div><div className="category-grid">{categories.map((category, index) => (<button key={category} className="category-summary" onClick={() => { resetVisible(category); setTagFilter("すべて"); document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" }); }}><span className={`summary-dot category-${categoryAccent[category]}`} /><span className="summary-order">0{index + 1}</span><strong>{category}</strong><span className="summary-count">{categoryCounts[category]} <small>VIDEOS</small></span><span className="summary-arrow"><ArrowUpRight size={16} /></span></button>))}</div></section>
        <section className="catalog-section" id="catalog" aria-labelledby="catalog-title"><div className="catalog-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> BROWSE THE ARCHIVE</p><h2 id="catalog-title">VIDEO<br /><em>CATALOG</em></h2></div><p>車種・比較・ローン・サービスから<br />気になるテーマを横断検索できます。</p></div><div className="controls-panel"><div className="search-box"><Search size={19} strokeWidth={1.8} /><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(INITIAL_VISIBLE); }} placeholder="例：アルファード、ローン、防犯" aria-label="動画を検索" />{query && <button className="clear-search" onClick={() => setQuery("")} aria-label="検索をクリア"><X size={17} /></button>}</div><div className="filter-group"><div className="filter-row" aria-label="カテゴリで絞り込む"><span className="filter-label"><SlidersHorizontal size={15} /> CATEGORY</span><button className={`filter-chip ${showAll ? "is-active" : ""}`} onClick={() => resetVisible("すべて")}>すべて <b>{videos.length}</b></button>{categories.map((category) => (<button key={category} className={`filter-chip ${activeCategory === category ? "is-active" : ""}`} onClick={() => resetVisible(category)}>{category}<b>{categoryCounts[category]}</b></button>))}</div><div className="filter-row vehicle-filter-row" aria-label="車種タグで絞り込む"><span className="filter-label"><CarFront size={15} /> VEHICLE</span><button className={`filter-chip vehicle-filter-chip ${activeVehicleTag === "すべて" ? "is-active" : ""}`} onClick={() => setTagFilter("すべて")}>すべて</button>{vehicleFilterTags.map((tag) => (<button key={tag} className={`filter-chip vehicle-filter-chip ${activeVehicleTag === tag ? "is-active" : ""}`} onClick={() => setTagFilter(tag)}>{tag}<b>{tagCounts[tag]}</b></button>))}</div></div></div><div className="result-meta"><p><span>{filteredVideos.length}</span> VIDEOS FOUND{activeCategory !== "すべて" && <><i> / </i>{activeCategory}</>}{activeVehicleTag !== "すべて" && <><i> / </i>{activeVehicleTag}</>}</p>{!showAll && <button className="reset-button" onClick={resetAll}>すべて表示に戻す <X size={14} /></button>}</div>{visibleVideos.length > 0 ? <div className="video-grid">{visibleVideos.map((video, index) => <VideoCard key={video.id} video={video} index={index} />)}</div> : <div className="empty-state"><Search size={28} strokeWidth={1.5} /><h3>該当する動画がありません</h3><p>車種名やテーマを変えて、もう一度探してみてください。</p><button onClick={resetAll}>検索条件をクリア</button></div>}{visibleCount < filteredVideos.length && <div className="load-more-wrap"><button className="load-more" onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}>さらに見る <span>{filteredVideos.length - visibleCount}本</span><ChevronDown size={17} /></button></div>}</section>
        <section className="shop-section" id="shops" aria-labelledby="shops-title"><div className="shop-intro"><div><p className="eyebrow"><span className="eyebrow-line" /> FIND YOUR DUXY</p><h2 id="shops-title">お近くの店舗で、<br />クルマを相談する。</h2></div><p>気になる1台やローン・リースのことは、<br />お近くのDuxy店舗へご相談ください。</p></div><div className="shop-cta-panel"><div><span className="cta-kicker">ONLINE INVENTORY & CONTACT</span><h3>動画で気になったクルマを、<br />在庫・店舗へつなぐ。</h3></div><div className="cta-actions"><a className="inventory-cta" href={INVENTORY_URL} target="_blank" rel="noreferrer"><CarFront size={18} /> 全店舗の在庫を見る <ArrowUpRight size={15} /></a><a className="contact-cta" href={CONTACT_URL} target="_blank" rel="noreferrer">お問い合わせ <ArrowUpRight size={15} /></a></div></div>
          <div className="shop-explorer"><div className="shop-list" role="tablist" aria-label="Duxy店舗を選択">{shopList.map((shop, index) => <button key={shop.name} className={`shop-list-item ${selectedShopIndex === index ? "is-active" : ""}`} role="tab" aria-selected={selectedShopIndex === index} onClick={() => setSelectedShopIndex(index)}><span className="shop-list-photo"><img src={shop.image} alt="" loading="lazy" /><b>{String(index + 1).padStart(2, "0")}</b></span><span className="shop-list-text"><strong>{shop.name}</strong><small>{shop.area}</small></span><ArrowUpRight size={15} /></button>)}</div>
            <article className="shop-detail-panel" aria-live="polite"><div className="shop-detail-top"><div><p className="eyebrow"><span className="eyebrow-line" /> STORE INFORMATION</p><h3>{selectedShop.name}</h3><p className="shop-detail-area">{selectedShop.area}</p></div><a className="shop-official-link" href={selectedShop.url} target="_blank" rel="noreferrer">公式店舗ページ <ExternalLink size={14} /></a></div><div className="shop-visual-strip"><figure className="shop-photo-feature"><img src={selectedShop.image} alt={`${selectedShop.name}の外観・店内写真`} /><figcaption>OFFICIAL STORE PHOTO</figcaption></figure>{selectedShop.video ? <a className="shop-video-feature" href={`https://www.youtube.com/watch?v=${selectedShop.video.id}`} target="_blank" rel="noreferrer" aria-label={`${selectedShop.video.title}をYouTubeで見る`}><img src={`https://i.ytimg.com/vi/${selectedShop.video.id}/hqdefault.jpg`} alt="" loading="lazy" /><span className="shop-video-overlay"><CirclePlay size={34} strokeWidth={1.5} /><span>STORE MOVIE</span><strong>{selectedShop.video.title}</strong></span></a> : <a className="shop-gallery-feature" href={selectedShop.url} target="_blank" rel="noreferrer"><span>STORE GALLERY</span><strong>店舗写真・サービスの詳細を見る</strong><ArrowUpRight size={18} /></a>}</div><div className="shop-detail-content"><div className="shop-information"><dl><div><dt><MapPin size={17} /> ADDRESS</dt><dd>{selectedShop.address}</dd></div><div><dt><Phone size={17} /> TEL</dt><dd><a href={`tel:${selectedShop.tel}`}>{selectedShop.phone}</a></dd></div><div><dt><Clock3 size={17} /> HOURS</dt><dd>{selectedShop.hours}<small>定休日：{selectedShop.closed}</small></dd></div></dl><div className="shop-detail-actions"><a className="directions-button" href={selectedShop.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> Googleマップで経路を見る <ArrowUpRight size={14} /></a><a className="call-button" href={`tel:${selectedShop.tel}`}><Phone size={15} /> 今すぐ電話する</a></div></div><StoreMap shop={selectedShop} /></div></article></div>
          <div className="shop-directory"><a href="https://sanwaservice-group.jp/shop/" target="_blank" rel="noreferrer">三和サービスグループの店舗一覧を見る <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
      <footer><div className="footer-brand"><span className="brand-mark"><span /></span> DUXY <small>VIDEO CATALOG</small></div><p>分類基準：動画タイトルから読み取れる主目的。<br />各動画はYouTubeのDuxyチャンネルへ遷移します。</p><p className="footer-count">148 VIDEOS<br />8 CATEGORIES</p></footer>
    </div>
  );
}
