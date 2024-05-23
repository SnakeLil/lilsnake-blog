import { Navigate, Outlet } from 'react-router-dom'
import LilsnakeNavbar from '../../components/navbar/LilsnakeNavbar'
import './home.scss'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
export default function Home() {
  return (
    <div className="lilsnake-home">
      <LilsnakeNavbar/>
      <div className='lilsnake-main'>
        {/* home主页内容-路由切换 */}
        {/* <Navigate to="/lilsnake" replace={true} /> */}
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
