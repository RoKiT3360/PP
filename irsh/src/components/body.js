import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Body() {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-[610px] bg-slate-200 flex flex-col'>
            <div className='py-[200px] px-[50px]'>
                <p className='w-1/2 text-black text-5xl font-thin'>The world's online marketplace.</p>
                <p className='w-1/2 text-black text-xl py-2'>Buy it now or bid instantly. New or used, we process your purchases with ease. Login, check out and wait for the mailman.</p>
                <div className='w-1/3 bg-blue-600 py-4 font-bold flex justify-center rounded-full'>Shop on eBay</div>
            </div>
            <div className='h-[465px] bg[url("https://www.paypalobjects.com/webstatic/en_LITE/mktg/wright/buy_ebay/buy_ebay_hero_fg_lvc_1x.png")]'></div>
        </div>
    </div>
  )
}