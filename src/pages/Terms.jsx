import'./Legal.css'
const SECTIONS=[
{h:'第1条(適用範囲)',p:['本規約は、当サイトが提供するすべてのコンテンツおよび関連サービス(SNS連携機能を含む)の利用に関して適用されます。']},
{h:'第2条(サービス内容)',p:['当サイトは、理学療法士による健康・リハビリテーション関連情報の提供を主な目的としています。また、運営者自身が保有するSNSアカウント(TikTok等)への投稿を目的として、TikTok社が提供するAPI(Login Kit、Content Posting API等)と連携する場合があります。この連携は運営者自身のアカウント運用のためのものであり、第三者のTikTokアカウントを操作するものではありません。']},
{h:'第3条(専門情報に関する免責事項)',p:['当サイトに掲載する情報は、理学療法士としての知見に基づき作成していますが、個別の医療行為・診断・治療に代わるものではありません。健康上の不安がある場合は、必ず医師等の専門家にご相談ください。当サイトの情報を利用したことによって生じたいかなる損害についても、運営者は責任を負いかねます。']},
{h:'第4条(禁止事項)',p:['利用者は、当サイトの利用にあたり、以下の行為を行ってはなりません。'],list:['法令または公序良俗に違反する行為','当サイトのコンテンツを無断で複製、転載する行為','当サイトの運営を妨害する行為']},
{h:'第5条(著作権)',p:['当サイトに掲載するコンテンツの著作権は、運営者または正当な権利者に帰属します。無断での転載・二次利用を禁じます。']},
{h:'第6条(規約の変更)',p:['運営者は、必要と判断した場合、利用者への事前通知なく本規約を変更できるものとします。変更後の規約は、当サイトに掲載した時点から効力を生じます。']},
{h:'第7条(準拠法・管轄)',p:['本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄とします。']},
{h:'第8条(お問い合わせ)',p:['本規約に関するお問い合わせは、下記の窓口までお願いいたします。'],contact:'[heiogawa@gmail.com]'},
]
export default function Terms(){return(<div className="legal"><div className="legal__hero"><div className="container"><div className="legal__label">Terms of Service</div><h1 className="legal__title">利用規約</h1><p className="legal__desc">本規約は、「ヘイの健康ラボ」(以下「当サイト」といいます)の利用条件を定めるものです。当サイトをご利用いただく際は、本規約に同意いただいたものとみなします。</p></div></div><div className="container"><div className="legal__body">{SECTIONS.map(({h,p,list,contact})=><section key={h} className="legal__section"><h2 className="legal__section-title">{h}</h2>{p.map((t,i)=><p key={i}>{t}</p>)}{list&&<ul>{list.map(l=><li key={l}>{l}</li>)}</ul>}{contact&&<p className="legal__contact">{contact}</p>}</section>)}<p className="legal__date">制定日:[2026年8月22日]</p></div></div></div>)}
