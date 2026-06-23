import{useState,useEffect}from 'react'
import{Link,useLocation}from 'react-router-dom'
import'./Header.css'
const NAV=[{to:'/',label:'ホーム'},{to:'/health',label:'健康・栄養'},{to:'/ai',label:'ダイエット豆知識'},{to:'/mogukuma',label:'モグクマ'},{to:'/resources',label:'おすすめAI教材'},{to:'/about',label:'プロフィール'}]
export default function Header(){
const[scrolled,setScrolled]=useState(false)
const[open,setOpen]=useState(false)
const loc=useLocation()
useEffect(()=>{const f=()=>setScrolled(window.scrollY>40);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[])
useEffect(()=>{setOpen(false)},[loc])
useEffect(()=>{
if(open){
const y=window.scrollY
document.body.style.position='fixed'
document.body.style.top=`-${y}px`
document.body.style.left='0'
document.body.style.right='0'
document.body.style.width='100%'
return()=>{
document.body.style.position=''
document.body.style.top=''
document.body.style.left=''
document.body.style.right=''
document.body.style.width=''
window.scrollTo(0,y)
}
}
},[open])
return(<header className={`header${scrolled?' header--scrolled':''}`}><div className="header__inner container"><Link to="/" className="header__logo"><span className="header__logo-mark">H</span><span>ヘイ<em>の健康ラボ</em></span></Link><nav className="header__nav">{NAV.map(({to,label})=><Link key={to} to={to} className={`header__nav-link${(to==='/'?loc.pathname==='/':loc.pathname.startsWith(to))?' active':''}`}>{label}</Link>)}<Link to="/contact" className="header__cta">お問い合わせ</Link></nav><button className={`header__burger${open?' open':''}`} onClick={()=>setOpen(!open)}><span/><span/><span/></button></div><div className={`mobile-menu${open?' mobile-menu--open':''}`}><nav className="mobile-menu__nav">{NAV.map(({to,label})=><Link key={to} to={to} className="mobile-menu__link">{label}</Link>)}<Link to="/contact" className="mobile-menu__cta">お問い合わせ</Link></nav></div></header>)}
