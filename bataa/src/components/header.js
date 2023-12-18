import react from "react";
import { render } from "react-dom";
import { faArrowDown, faHome, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faFlag, faPlayCircle, faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";
import { Html, Head, Main, NextScript } from 'next/document'

export default function Header() {
    // function toggleDropdown() {
    //     let dropdown = document.querySelector('#dropdownButton #dropdown');
    //     dropdown.classList.toggle('hidden');
    // }
  return (
    <div className="w-full h-[72px] bg-white flex justify-center">
      <div className="w-[70%] h-full flex justify-between">
        <div className="w-[136px] h-[43px]">
            <a href="./">
          {" "}
          <img src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"></img>{" "}
          </a>
        </div>
        <div className="relative flex flex-col justify-center items-center h-full" id="dropdownButton">
        <div className="w-[126px] h-full flex items-center justify-center gap-5">
            <div className="group">
          <button>BUY <FontAwesomeIcon icon={faArrowDown}/></button>
          <div className="w-full h-[2px] bg-blue-600 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
            <button>SEND</button>
            <div className="w-full h-[2px] bg-blue-600 opacity-0 group-hover:opacity-100"></div>
            </div>
        </div>
        <div className="w-screen h-[100px] bg-blue-700 flex absolute top-[72px] justify-around items-center hidden" id="dropdown">
            <div className="flex gap-[100px]">
            <div className="flex flex-col gap-4 text-white">
            <a className="hover:underline-offset-4 hover:underline" href="./">Pay on Ebay</a>
            <a className="hover:underline-offset-4 hover:underline" href="./">Pay on websites</a>    
            </div>
            <div className="flex flex-col gap-4 text-white">
            <a className="hover:underline-offset-4 hover:underline" href="./">Pay with your mobile</a>
            <a className="hover:underline-offset-4 hover:underline" href="./">More ways to use us</a>
            </div>
            </div>
            <div><FontAwesomeIcon icon={faXmark} color="white"/></div>
        </div>
        </div>
        <div className="flex items-center">
            <button className="border border-blue-200 rounded-full px-5 h-[37px] cursor-pointer flex justify-center items-center">Log in</button>
            <button className="bg-blue-600 rounded-full px-5 text-white h-[37px] cursor-pointer flex justify-center items-center">Sign up</button>
        </div>
      </div>
    </div>,
  );
}
