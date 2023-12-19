import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Body from '@/components/body'

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
