import { Link } from 'react-router-dom'
import './Apps.css'

/*
 * アプリ一覧のデータ。
 * url: 公開URL（外部リンク）。空文字にすると「準備中」表示になります。
 * to : サイト内ページへのリンク（url より優先されません／どちらか一方を指定）。
 */
const APPS = [
  {
    id: 'setnavi',
    name: 'セットナビ',
    en: 'Set Navi',
    emoji: '💇',
    cat: 'ヘアスタイル',
    tagline: '今日の髪型、迷わない。',
    desc: 'なりたい印象から髪型を探して、セットの手順まで確認できるヘアスタイルナビ。朝の「どうしよう」を数タップで解決します。',
    features: ['なりたい印象から髪型を探す', 'セットの手順をガイド', 'お気に入りを保存'],
    badge: 'ブラウザで使える',
    url: 'https://set-navi.heiogawa.workers.dev/',
  },
  {
    id: 'jushin-navi',
    name: '受診ナビ',
    en: 'Medical Symptom Guide',
    emoji: '🩺',
    cat: 'ヘルスケア',
    tagline: 'その症状、何科に行く？',
    desc: '気になる症状を選ぶだけで、受診すべき診療科と急ぎ度の目安をガイド。病院で何を伝えればいいかの整理にも使えます。',
    features: ['症状から診療科をガイド', '受診の緊急度チェック', '医師に伝える内容を整理'],
    badge: 'ブラウザで使える',
    url: 'https://medical-symptom-guide.heiogawa.workers.dev/',
  },
  {
    id: 'study-hint',
    name: '勉強ヒントアプリ',
    en: 'Child Study Auxiliary',
    emoji: '📚',
    cat: '学習サポート',
    tagline: '答えじゃなく、ヒントを。',
    desc: '子どもの「わからない」に、答えではなく考え方のヒントを返す学習サポートアプリ。自分で解けた、を積み重ねられます。',
    features: ['つまずきに合わせたヒント', '答えではなく考え方を提示', '保護者のサポートにも'],
    badge: 'ブラウザで使える',
    url: 'https://child-study-auxiliary.heiogawa.workers.dev/',
  },
  {
    id: 'mogukuma',
    name: 'モグクマ',
    en: 'Mogukuma',
    emoji: '🐻',
    cat: 'ダイエット',
    tagline: '写真を撮るだけ、AIが分析。',
    desc: '食事の写真を撮るだけでAIが栄養バランスを解析。週間レポートで食習慣のクセが見えるダイエット管理アプリです。',
    features: ['AI写真解析で食事記録', 'AI週間レポート', '紹介ボーナス制度'],
    badge: '無料プランあり',
    to: '/mogukuma',
    accent: true,
  },
]

function AppCard({ app }) {
  const inner = (
    <>
      <div className="app-card__head">
        <span className="app-card__emoji" aria-hidden="true">{app.emoji}</span>
        <div>
          <div className="app-card__cat">{app.cat}</div>
          <h2 className="app-card__name">{app.name}</h2>
          <div className="app-card__en">{app.en}</div>
        </div>
        {app.badge && <span className="app-card__badge">{app.badge}</span>}
      </div>
      <p className="app-card__tagline">{app.tagline}</p>
      <p className="app-card__desc">{app.desc}</p>
      <ul className="app-card__features">
        {app.features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <span className="app-card__action">
        {app.to || app.url ? '詳しく見る →' : '準備中'}
      </span>
    </>
  )

  const cls = `app-card${app.accent ? ' app-card--accent' : ''}${!app.to && !app.url ? ' app-card--soon' : ''}`

  if (app.to) return <Link to={app.to} className={cls}>{inner}</Link>
  if (app.url) return <a href={app.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  return <div className={cls}>{inner}</div>
}

export default function Apps() {
  return (
    <div className="apps-page">

      {/* ===== HERO ===== */}
      <section className="apps-hero">
        <div className="container">
          <div className="apps-hero__label">Apps</div>
          <h1 className="apps-hero__title">アプリ一覧</h1>
          <p className="apps-hero__desc">
            理学療法士が「あったら毎日ラクになるのに」と思ったものを、そのまま形にしたアプリたち。
            すべてスマホのブラウザからそのまま使えます。
          </p>
        </div>
      </section>

      {/* ===== LIST ===== */}
      <section className="apps-list">
        <div className="container">
          <div className="apps-grid">
            {APPS.map(app => <AppCard key={app.id} app={app} />)}
          </div>

          <div className="apps-note">
            <p>「こんなアプリが欲しい」というリクエストも受け付けています。</p>
            <Link to="/contact" className="apps-note__btn">リクエストを送る →</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
