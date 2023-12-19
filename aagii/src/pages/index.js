import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Body from '@/components/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}
