import{useState}from 'react'
import'./Contact.css'
export default function Contact(){
const[form,setForm]=useState({name:'',email:'',subject:'',message:''})
const[sent,setSent]=useState(false)
const h=e=>setForm(f=>({...f,[e.target.name]:e.target.value}))
const s=e=>{
e.preventDefault()
const subject=encodeURIComponent(form.subject||'お問い合わせ')
const body=encodeURIComponent(`お名前: ${form.name}\nメールアドレス: ${form.email}\n\n${form.message}`)
window.location.href=`mailto:heiogawa@gmail.com?subject=${subject}&body=${body}`
setSent(true)
}
return(<div className="contact"><div className="contact__hero"><div className="container"><div className="contact__label">Contact</div><h1 className="contact__title">お問い合わせ</h1><p className="contact__desc">取材・コラボ・講演依頼など、お気軽にご連絡ください。3営業日以内にご返信いたします。</p></div></div><div className="container"><div className="contact__inner"><div className="contact__info"><h2 className="contact__info-title">こんなご相談をお受けしています</h2>{[{i:'✍️',t:'執筆・監修依頼'},{i:'🎤',t:'講演・セミナー登壇'},{i:'🤝',t:'コラボレーション'},{i:'📱',t:'メディア取材'},{i:'💼',t:'ビジネスパートナー'}].map(({i,t})=><div key={t} className="contact__info-item"><span>{i}</span><span>{t}</span></div>)}<div className="contact__social"><p className="contact__social-title">SNSでもお気軽に</p>{[{l:'Threads',h:'https://www.threads.net/'},{l:'X (Twitter)',h:'https://x.com/'},{l:'Instagram',h:'https://instagram.com/'}].map(({l,h})=><a key={l} href={h} target="_blank" rel="noopener" className="contact__social-link">{l} →</a>)}</div></div><div className="contact__form-wrap">{sent?<div className="contact__sent"><span className="contact__sent-icon">✓</span><h3>送信が完了しました</h3><p>3営業日以内にご返信いたします。</p></div>:<form className="contact__form" onSubmit={s}><div className="form-group"><label className="form-label">お名前 <span>*</span></label><input type="text" name="name" className="form-input" value={form.name} onChange={h} placeholder="山田 太郎" required/></div><div className="form-group"><label className="form-label">メールアドレス <span>*</span></label><input type="email" name="email" className="form-input" value={form.email} onChange={h} placeholder="taro@example.com" required/></div><div className="form-group"><label className="form-label">件名</label><input type="text" name="subject" className="form-input" value={form.subject} onChange={h} placeholder="お問い合わせ内容"/></div><div className="form-group"><label className="form-label">メッセージ <span>*</span></label><textarea name="message" className="form-textarea" value={form.message} onChange={h} placeholder="詳細をお書きください..." rows={6} required/></div><button type="submit" className="form-submit">送信する →</button></form>}</div></div></div></div>)}
