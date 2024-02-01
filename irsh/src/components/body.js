import react from "react";
import { render } from "react-dom";
import {
  faArrowDown,
  faHome,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessKnight,
  faFlag,
  faPlayCircle,
  faSoccerBall,
} from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";
import { Html, Head, Main, NextScript } from "next/document";

export default function Body() {
  return (
    <div className="">
      <div className="w-full h-[80vh] bg-black text-white flex justify-end items-center flex-col gap-5">
        <p className="sm:text-6xl text-5xl sm:text-left text-center">The world's online marketplace.</p>
        <button className="px-[100px] py-3 bg-blue-600 rounded-full text-xl sm:text-md">
          Shop on eBay
        </button>
        <img className="w-[340px] h-[400px] bg-[url('https://www.paypalobjects.com/webstatic/en_LITE/mktg/wright/buy_ebay/buy_ebay_hero_fg_lvc_1x.png')]"></img>
      </div>
      <div className="w-full h-[60vh] bg-white flex justify-around items-center">
        <div className="w-[80%] h-full flex justify-evenly items-center">
          
          <div className="flex flex-col gap-3">
            <p className="sm:text-3xl text-2xl text-black">With peace of mind.</p>
            <p className="flex-wrap flex text-xs sm:text-lg w-[200px] sm:w-[400px] text-black">
            Shop with peace of mind, knowing we protect your eligible purchases. If an eligible item doesn’t show up, or turns out to be different than described, we’ll help sort things out with the seller. Conditions apply.
            </p>
            <div className="text-blue-500 flex gap-4 text-xs sm:text-sm">
              <a href="./" className="hover:underline-offset-4 hover:underline">
                Pay on eBay
              </a>
              <a href="./" className="hover:underline-offset-4 hover:underline">
                Pay on websites
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh] bg-[url('https://wallpapercave.com/wp/wp3364662.jpg')] bg-no-repeat bg-cover">
        <div className="w-[80%] h-full flex justify-center items-center text-white flex-col">
          <div className="sm:block flex flex-col text-left">
            <p className="text-5xl">Pick a card.</p>
            <p className="w-[300px] sm:w-[470px] sm:text-lg text-xs">
            Add a card to your account and simply login with your email address and password whenever you're buying something online.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[45vh] bg-blue-800 flex justify-center items-center">
        <div className="w-[70%] sm:w-[50%] h-full text-white flex flex-col justify-center gap-5 items-center">
          <p className="sm:text-4xl text-2xl text-center">"PayPal makes shopping convenient, and gives me the confidence to buy on eBay even when I don’t know the seller."</p>
        </div>
      </div>
      <div className="bg-white w-full h-[60vh] flex justify-center items-center">
        <div className="flex justify-between items-center w-[80%] sm:w-[60%]">
          <img
            className="w-[150px] sm:w-[400px]"
            src="https://www.sbo.net/wp-content/uploads/2022/07/111-left@1x.png"
          ></img>
          <div className="flex flex-col text-black">
            <p className="sm:text-3xl text-xl">Shopping without boundaries.</p>
            <p className="sm:text-sm text-xs">
            No matter what currency you prefer, you can buy from millions of sellers around the world. We accept 25 currencies from 202 countries and markets. Currency conversion fees may apply.
            </p>
            <a href="./" className="hover:underline-offset-4 hover:underline text-blue-500">
                Read more about currency conversion
              </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-600 h-[40vh] flex justify-center items-center flex-col gap-3">
        <p className="text-3xl sm:text-left text-center ">Whatever it is - you can get it.</p>
        <button className="px-[80px] py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
          Shop on eBay
        </button>
      </div>
    </div>
  );
}
