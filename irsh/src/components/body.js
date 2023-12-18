import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Body() {
  return (
    <div className='w-full'>
        <div className='w-full h-[700px] bg-gray-400'>
            <p className='2xl'>The world's online marketplace</p>
            <p>Buy it now or bid instantly. New or used, we process your purchases with ease. Login, check out and wait for the mailman.</p>
        </div>
    </div>
  )
}
