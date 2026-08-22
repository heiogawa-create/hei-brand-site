import'./Legal.css'
const SECTIONS=[
{h:'1. 運営者情報',p:['当サイトの運営者:ヘイの健康ラボ']},
{h:'2. 取得する情報',p:['当サイトでは、以下の情報を取得する場合があります。'],list:['アクセス情報:サイト訪問時に自動的に取得されるアクセスログ、Cookie等の情報','アフィリエイト広告に関する情報:A8.net、もしもアフィリエイト等の広告配信事業者が発行するCookieを通じて取得される情報','TikTok連携に関する情報:運営者自身がTikTok API(Login Kit、Content Posting API)を利用して自己のTikTokアカウントへ自動投稿を行う目的で、TikTok社より提供されるアクセストークン、リフレッシュトークン、および基本プロフィール情報(ユーザー名等)']},
{h:'3. 利用目的',p:['取得した情報は、以下の目的のために利用します。'],list:['当サイトのコンテンツ改善、利用状況の分析','アフィリエイト広告の成果測定','運営者自身が保有するSNSアカウントへのコンテンツ自動投稿(TikTok連携機能に限る)'],after:['TikTok API経由で取得するアクセストークン等は、運営者自身のアカウントへの投稿のみに利用し、第三者のアカウントを操作する目的では使用しません。']},
{h:'4. 第三者への提供',p:['取得した情報は、法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。TikTok社より取得したアクセストークン等の認証情報は、第三者と共有せず、運営者の管理する環境(GitHub Secrets等の暗号化されたシークレット管理機能)内でのみ安全に保管します。']},
{h:'5. 情報の保管・管理',p:['TikTok連携により取得したアクセストークンおよびリフレッシュトークンは、暗号化されたシークレット管理機能を通じて保管し、自動投稿処理以外の目的では使用しません。連携を解除したい場合は、TikTokアプリ側の設定、またはTikTok開発者ポータルの認可管理画面から取り消すことができます。']},
{h:'6. Cookieの利用について',p:['当サイトでは、アクセス解析やアフィリエイト広告の効果測定のためにCookieを使用する場合があります。Cookieの利用を希望しない場合は、ブラウザの設定により無効化することが可能です。']},
{h:'7. 開示・訂正・削除等のご請求',p:['利用者ご本人からの個人情報の開示、訂正、削除等のご請求については、下記のお問い合わせ窓口にて対応いたします。']},
{h:'8. お問い合わせ',p:['本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。'],contact:'[お問い合わせ先メールアドレスまたはお問い合わせフォームのURLをご記入ください]'},
{h:'9. 改定について',p:['本ポリシーの内容は、法令の変更その他の理由により、予告なく変更されることがあります。変更後の内容は、当サイトに掲載した時点から効力を生じます。']},
]
export default function Privacy(){return(<div className="legal"><div className="legal__hero"><div className="container"><div className="legal__label">Privacy Policy</div><h1 className="legal__title">プライバシーポリシー</h1><p className="legal__desc">「ヘイの健康ラボ」(以下「当サイト」といいます)は、利用者の個人情報保護の重要性を認識し、以下のとおりプライバシーポリシーを定めます。</p></div></div><div className="container"><div className="legal__body">{SECTIONS.map(({h,p,list,after,contact})=><section key={h} className="legal__section"><h2 className="legal__section-title">{h}</h2>{p.map((t,i)=><p key={i}>{t}</p>)}{list&&<ul>{list.map(l=><li key={l}>{l}</li>)}</ul>}{after&&after.map((t,i)=><p key={i}>{t}</p>)}{contact&&<p className="legal__contact">{contact}</p>}</section>)}<p className="legal__date">制定日:[2026年8月22日]</p></div></div></div>)}
