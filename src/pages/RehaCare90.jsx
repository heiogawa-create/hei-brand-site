import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './RehaCare90.css'

const STORE_URL = 'https://rehacarerigakuryouho.stores.jp/items/6a5da92822176f2ce2879bc8'
const LINE_URL = ''

const supportItems = [
  { icon: '▶', title: 'RehaCareの運動動画', text: '状態や目標に合わせて、アプリ内の運動から取り組みやすい内容をご案内します。' },
  { icon: '✓', title: '週1回の状況確認', text: '続けられたこと、難しかったことを確認し、次の一歩を一緒に整えます。' },
  { icon: '…', title: 'LINEで質問回数無制限', text: '運動方法や継続の悩みをいつでも送信できます。原則48時間以内に返信します。' },
  { icon: '↻', title: '内容を柔軟に調整', text: '体調や生活リズムの変化に合わせて、運動量や進め方を調整します。' },
]

const steps = [
  { num: '01', title: 'STORESで参加券を購入', text: '初回モニター価格9,800円（税込）。先着3名で受付を終了します。' },
  { num: '02', title: 'LINE公式アカウントを追加', text: '購入後の案内から友だち追加し、注文番号を送信してください。' },
  { num: '03', title: 'RehaCareを90日間有効化', text: '注文確認後、利用開始日から90日間使えるように設定します。' },
  { num: '04', title: 'あなたに合う運動をスタート', text: '無理なく続けられる内容から始め、週ごとに進め方を整えます。' },
]

const faqs = [
  { q: '運動が苦手でも参加できますか？', a: 'はい。体力や生活状況を確認し、無理なく始められる内容をご案内します。運動量を競うプログラムではありません。' },
  { q: '質問は何回までできますか？', a: '90日間、LINE公式アカウントで回数制限なく質問できます。返信は原則48時間以内です。' },
  { q: 'オンライン面談はありますか？', a: 'オンライン面談は必須ではありません。基本はRehaCareとLINEを使って進めます。' },
  { q: '痛みがある場合も利用できますか？', a: '強い痛み、急な悪化、しびれ、発熱、胸痛、呼吸困難などがある場合は利用を中止し、医療機関へご相談ください。本サービスは診断や治療を行うものではありません。' },
]

export default function RehaCare90() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = '90日ボディケア習慣化プログラム｜RehaCare'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <div className="rc90">
      <section className="rc90-hero">
        <div className="rc90-hero__glow rc90-hero__glow--one" />
        <div className="rc90-hero__glow rc90-hero__glow--two" />
        <div className="container rc90-hero__grid">
          <div className="rc90-hero__copy">
            <div className="rc90-eyebrow"><span />理学療法士が90日間伴走</div>
            <div className="rc90-limit">初回モニター・先着3名限定</div>
            <h1>
              がんばる運動から、<br />
              <em>続けられるボディケア</em>へ。
            </h1>
            <p className="rc90-hero__lead">
              RehaCareの運動動画とLINEサポートを組み合わせ、あなたの生活に合うセルフケア習慣を一緒につくる90日間のプログラムです。
            </p>
            <div className="rc90-price">
              <span className="rc90-price__label">モニター価格</span>
              <strong>9,800</strong><span className="rc90-price__yen">円（税込）</span>
            </div>
            <div className="rc90-actions">
              <a className="rc90-btn rc90-btn--primary" href={STORE_URL} target="_blank" rel="noopener noreferrer">
                先着3名に申し込む <span>↗</span>
              </a>
              {LINE_URL ? (
                <a className="rc90-btn rc90-btn--ghost" href={LINE_URL} target="_blank" rel="noopener noreferrer">LINEで事前相談</a>
              ) : (
                <Link className="rc90-btn rc90-btn--ghost" to="/contact">購入前に相談する</Link>
              )}
            </div>
            <p className="rc90-hero__note">利用開始日から90日間／オンライン面談は必須ではありません</p>
          </div>

          <div className="rc90-hero__visual" aria-label="90日プログラムの概要">
            <div className="rc90-phone">
              <div className="rc90-phone__top" />
              <div className="rc90-phone__brand">
                <span className="rc90-mark"><i /><i /></span>
                <div><strong>RehaCare</strong><small>理学療法士のボディケア</small></div>
              </div>
              <div className="rc90-video">
                <div className="rc90-video__person"><span /><i /></div>
                <button type="button" aria-label="運動動画のイメージ">▶</button>
              </div>
              <div className="rc90-progress">
                <div><span>今日のケア</span><strong>10分</strong></div>
                <div className="rc90-progress__bar"><span /></div>
              </div>
              <div className="rc90-message"><b>✓</b><span>今週も無理なく続けられています</span></div>
            </div>
            <div className="rc90-floating rc90-floating--days"><strong>90</strong><span>DAYS<br />SUPPORT</span></div>
            <div className="rc90-floating rc90-floating--line"><span>LINE</span><strong>質問回数<br />無制限</strong></div>
            <div className="rc90-floating rc90-floating--weekly"><span>WEEKLY</span><strong>週1回<br />フォロー</strong></div>
          </div>
        </div>
      </section>

      <section className="rc90-trust">
        <div className="container rc90-trust__grid">
          <div><strong>16年</strong><span>理学療法士としての臨床経験</span></div>
          <div><strong>90日</strong><span>運動とセルフケアの習慣化支援</span></div>
          <div><strong>原則48時間以内</strong><span>LINEでの返信目安</span></div>
        </div>
      </section>

      <section className="rc90-section rc90-section--intro" id="program">
        <div className="container">
          <div className="rc90-section__head">
            <span>FOR YOU</span>
            <h2>こんな悩みを、ひとりで抱えていませんか？</h2>
            <p>正しい運動を知っていても、生活の中で続けられなければ習慣にはなりません。</p>
          </div>
          <div className="rc90-problems">
            <article><span>01</span><h3>何をすればよいか迷う</h3><p>動画や情報が多すぎて、自分に合う運動を選べない。</p></article>
            <article><span>02</span><h3>三日坊主になってしまう</h3><p>最初は頑張れるけれど、忙しくなると続かなくなる。</p></article>
            <article><span>03</span><h3>やり方が合っているか不安</h3><p>フォームや負荷が適切なのか、確認できる相手がいない。</p></article>
          </div>
        </div>
      </section>

      <section className="rc90-section rc90-section--support">
        <div className="container rc90-support">
          <div className="rc90-support__copy">
            <span className="rc90-kicker">PROGRAM</span>
            <h2>運動を渡して終わりではなく、<br />続けられる形まで整えます。</h2>
            <p>購入者の状態や目標を確認し、RehaCare内の運動から取り組みやすい内容をご案内。LINEでの質問と週1回の確認を通して、生活に合う進め方へ調整します。</p>
            <div className="rc90-support__badge">追加の動画教材を準備する必要はありません</div>
          </div>
          <div className="rc90-support__cards">
            {supportItems.map((item) => (
              <article key={item.title}>
                <div className="rc90-support__icon">{item.icon}</div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rc90-section rc90-section--timeline">
        <div className="container">
          <div className="rc90-section__head rc90-section__head--light">
            <span>HOW IT WORKS</span>
            <h2>購入からサポート開始まで</h2>
            <p>申し込み後の手順はシンプルです。</p>
          </div>
          <div className="rc90-steps">
            {steps.map((step) => (
              <article key={step.num}>
                <div className="rc90-step__num">{step.num}</div>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rc90-section rc90-section--details">
        <div className="container rc90-details">
          <div className="rc90-details__card rc90-details__card--include">
            <span className="rc90-kicker">INCLUDED</span>
            <h2>プログラムに含まれるもの</h2>
            <ul>
              <li>RehaCareを利用開始日から90日間提供</li>
              <li>状態に合わせた運動の案内</li>
              <li>アプリ内の運動動画</li>
              <li>LINEでの質問回数無制限</li>
              <li>週1回の状況確認</li>
              <li>必要に応じた写真・動画の確認</li>
            </ul>
          </div>
          <div className="rc90-details__card rc90-details__card--exclude">
            <span className="rc90-kicker">NOT INCLUDED</span>
            <h2>本サービスに含まれないもの</h2>
            <ul>
              <li>医師による診断、医療行為、治療</li>
              <li>緊急時の対応</li>
              <li>夜間・休日の即時返信</li>
              <li>オンライン面談の必須実施</li>
            </ul>
            <p>強い痛みや急激な症状の悪化などがある場合は、運動を中止し医療機関へご相談ください。</p>
          </div>
        </div>
      </section>

      <section className="rc90-section rc90-section--faq">
        <div className="container rc90-faq">
          <div className="rc90-faq__title"><span className="rc90-kicker">FAQ</span><h2>よくある質問</h2></div>
          <div className="rc90-faq__list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span>＋</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rc90-final">
        <div className="rc90-final__pattern" />
        <div className="container rc90-final__inner">
          <div>
            <span className="rc90-limit rc90-limit--light">初回モニター・先着3名限定</span>
            <h2>90日後も続けられる、<br />あなたの習慣をつくろう。</h2>
            <p>理学療法士と一緒に、小さく始めて、無理なく続ける90日間。</p>
          </div>
          <div className="rc90-final__buy">
            <div><span>モニター価格</span><strong>9,800円</strong><small>税込</small></div>
            <a className="rc90-btn rc90-btn--white" href={STORE_URL} target="_blank" rel="noopener noreferrer">STORESで申し込む ↗</a>
            <p>購入後、LINEで注文番号を送信してください。</p>
          </div>
        </div>
      </section>
    </div>
  )
}
