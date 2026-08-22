import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HealthBlog from './pages/HealthBlog'
import AIBlog from './pages/AIBlog'
import Mogukuma from './pages/Mogukuma'
import RehaCare90 from './pages/RehaCare90'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
function ScrollToTop(){const{pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
function AppRoutes(){return(<Layout><ScrollToTop/><Routes><Route path="/" element={<Home/>}/><Route path="/health" element={<HealthBlog/>}/><Route path="/ai" element={<AIBlog/>}/><Route path="/mogukuma" element={<Mogukuma/>}/><Route path="/rehacare-90" element={<RehaCare90/>}/><Route path="/resources" element={<Resources/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/terms" element={<Terms/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>)}
export default function App(){return(<BrowserRouter><AppRoutes/></BrowserRouter>)}
