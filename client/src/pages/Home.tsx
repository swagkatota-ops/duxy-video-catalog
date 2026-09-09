import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  CirclePlay,
  Search,
  SlidersHorizontal,
  X,
  Youtube,
} from "lucide-react";
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

const INITIAL_VISIBLE = 12;

function VideoCard({ video, index }: { video: (typeof videos)[number]; index: number }) {
  return (
    <a
      className="video-card"
      href={video.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${video.title} をYouTubeで再生`}
      style={{ "--card-index": Math.min(index, 11) } as React.CSSProperties}
    >
      <div className="thumbnail-wrap">
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="thumbnail"
        />
        <div className="thumbnail-scrim" />
        <span className="play-button" aria-hidden="true"><CirclePlay size={25} strokeWidth={1.7} /></span>
        <span className="video-number">#{String(video.no).padStart(3, "0")}</span>
      </div>
      <div className="video-card-body">
        <span className={`category-label category-${categoryAccent[video.category]}`}>{video.category}</span>
        <h3>{video.title}</h3>
        <span className="watch-link">YouTubeで見る <ArrowUpRight size={14} strokeWidth={2} /></span>
      </div>
    </a>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "すべて">("すべて");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const categoryCounts = useMemo(() => {
    return Object.fromEntries(categories.map((category) => [category, videos.filter((video) => video.category === category).length])) as Record<VideoCategory, number>;
  }, []);

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ja");
    return videos.filter((video) => {
      const categoryMatches = activeCategory === "すべて" || video.category === activeCategory;
      const queryMatches = !normalizedQuery || `${video.title} ${video.category}`.toLocaleLowerCase("ja").includes(normalizedQuery);
      return categoryMatches && queryMatches;
    });
  }, [activeCategory, query]);

  const resetVisible = (category: VideoCategory | "すべて") => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const showAll = activeCategory === "すべて" && !query;
  const visibleVideos = filteredVideos.slice(0, visibleCount);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Duxy Video Catalog トップへ">
          <span className="brand-mark"><span /></span>
          <span>DUXY</span>
          <small>by SANWA SERVICE GROUP</small>
        </a>
        <nav className="main-nav" aria-label="ページ内ナビゲーション">
          <a href="#top">HOME</a>
          <a href="#overview">CATEGORY</a>
          <a href="#catalog">VIDEO CATALOG</a>
        </nav>
        <a className="youtube-link" href="https://www.youtube.com/@duxy_aichi" target="_blank" rel="noreferrer">
          <Youtube size={17} fill="currentColor" /> <span>CHANNEL</span><ArrowUpRight size={13} />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-art" src="/manus-storage/sanwa-style-catalog-hero_0d274adc.jpg" alt="" />
          <div className="hero-noise" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-line" /> DUXY CHANNEL ARCHIVE</p>
            <h1>クルマ選びを、<br /><em>もっと確かに。</em></h1>
            <p className="hero-copy">Duxyチャンネルの148本を、検討テーマごとに再編集。<br className="desktop-break" />知りたい動画へ、最短でたどり着けるカタログです。</p>
            <a className="hero-cta" href="#catalog">動画を探す <ChevronDown size={18} /></a>
          </div>
          <div className="hero-meta">
            <span>CURATED</span>
            <strong>148</strong>
            <span>VIDEOS / 8 CATEGORIES</span>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="category-overview" id="overview" aria-labelledby="overview-title">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-line" /> CONTENT INDEX</p>
            <h2 id="overview-title">目的から、<br />動画を選ぶ。</h2>
            <p>タイトルの主訴求をもとに、各動画を1つのカテゴリへ整理しています。</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <button key={category} className="category-summary" onClick={() => { resetVisible(category); document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" }); }}>
                <span className={`summary-dot category-${categoryAccent[category]}`} />
                <span className="summary-order">0{index + 1}</span>
                <strong>{category}</strong>
                <span className="summary-count">{categoryCounts[category]} <small>VIDEOS</small></span>
                <span className="summary-arrow"><ArrowUpRight size={16} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> BROWSE THE ARCHIVE</p>
              <h2 id="catalog-title">VIDEO<br /><em>CATALOG</em></h2>
            </div>
            <p>車種・比較・ローン・サービスから<br />気になるテーマを横断検索できます。</p>
          </div>

          <div className="controls-panel">
            <div className="search-box">
              <Search size={19} strokeWidth={1.8} />
              <input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(INITIAL_VISIBLE); }} placeholder="例：アルファード、ローン、防犯" aria-label="動画を検索" />
              {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="検索をクリア"><X size={17} /></button>}
            </div>
            <div className="filter-row" aria-label="カテゴリで絞り込む">
              <span className="filter-label"><SlidersHorizontal size={15} /> FILTER</span>
              <button className={`filter-chip ${showAll ? "is-active" : ""}`} onClick={() => resetVisible("すべて")}>すべて <b>{videos.length}</b></button>
              {categories.map((category) => (
                <button key={category} className={`filter-chip ${activeCategory === category ? "is-active" : ""}`} onClick={() => resetVisible(category)}>{category}<b>{categoryCounts[category]}</b></button>
              ))}
            </div>
          </div>

          <div className="result-meta">
            <p><span>{filteredVideos.length}</span> VIDEOS FOUND{activeCategory !== "すべて" && <><i> / </i>{activeCategory}</>}</p>
            {(activeCategory !== "すべて" || query) && <button className="reset-button" onClick={() => { resetVisible("すべて"); setQuery(""); }}>すべて表示に戻す <X size={14} /></button>}
          </div>

          {visibleVideos.length > 0 ? (
            <div className="video-grid">
              {visibleVideos.map((video, index) => <VideoCard key={video.id} video={video} index={index} />)}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} strokeWidth={1.5} />
              <h3>該当する動画がありません</h3>
              <p>車種名やテーマを変えて、もう一度探してみてください。</p>
              <button onClick={() => { resetVisible("すべて"); setQuery(""); }}>検索条件をクリア</button>
            </div>
          )}

          {visibleCount < filteredVideos.length && (
            <div className="load-more-wrap">
              <button className="load-more" onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}>さらに見る <span>{filteredVideos.length - visibleCount}本</span><ChevronDown size={17} /></button>
            </div>
          )}
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark"><span /></span> DUXY <small>VIDEO CATALOG</small></div>
        <p>分類基準：動画タイトルから読み取れる主目的。<br />各動画はYouTubeのDuxyチャンネルへ遷移します。</p>
        <p className="footer-count">148 VIDEOS<br />8 CATEGORIES</p>
      </footer>
    </div>
  );
}
