import Image from 'next/image'
import { Inter } from 'next/font/google'
import { render } from "react-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faFlag, faPlayCircle, faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";
import Header from '@/components/header'
import Body from '@/components/body';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  )
}
