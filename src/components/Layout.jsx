import Header from './Header'
import Footer from './Footer'
export default function Layout({children}){return(<div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}><Header/><main style={{flex:1,paddingTop:'80px'}}>{children}</main><Footer/></div>)}
