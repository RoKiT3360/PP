import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Body from '../components/body'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen bg-slate-100'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}
