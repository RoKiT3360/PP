import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}
