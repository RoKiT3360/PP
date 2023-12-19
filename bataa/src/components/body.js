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
      <div className="w-full h-[80vh] bg-black text-white flex justify-center items-center flex-col gap-5">
        <p className="sm:text-6xl text-5xl sm:text-left text-center">Your money works better</p>
        <button className="px-[70px] py-2 bg-blue-600 rounded-full">
          Sign Up for Free
        </button>
      </div>
      <div className="w-full h-[60vh] bg-white flex justify-around items-center">
        <div className="w-[80%] h-full flex justify-evenly items-center">
          <img
            className="w-[150px] sm:w-[400px]"
            src="https://www.sbo.net/wp-content/uploads/2022/07/111-left@1x.png"
          ></img>
          <div className="flex flex-col gap-3">
            <p className="sm:text-3xl text-2xl">Quick and easy.</p>
            <p className="flex-wrap flex text-xs sm:text-sm w-[200px] sm:w-[400px]">
              Millions of customers around the world use us for one simple
              reason: it’s simple. Just an email address and password will get
              you through to checkout before you can reach for your wallet.
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
      <div className="w-full h-[60vh] bg-[url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg')] bg-no-repeat bg-cover">
        <div className="w-[80%] h-full flex justify-center items-center text-white flex-col">
          <div className="sm:block flex flex-col text-left">
            <p className="text-2xl">We've got you covered.</p>
            <p className="w-[300px] sm:w-[570px] sm:text-sm text-xs">
              Shop with peace of mind, knowing we protect your eligible
              purchases. If an eligible item doesn’t show up, or turns out to be
              different than described, we’ll help sort things out with the
              seller. Conditions apply.
            </p>
            <a
              href="./"
              className="hover:underline-offset-4 hover:underline font-semibold"
            >
              More about PayPal Buyer Protection
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[45vh] bg-blue-800 flex justify-center items-center">
        <div className="w-[70%] sm:w-[50%] h-full text-white flex flex-col justify-center gap-5 items-center">
          <p className="sm:text-4xl text-2xl text-center">Make a payment online or with your mobile.</p>
          <p className="w-full flex flex-wrap text-center">
            Make a payment in exchange for goods and services without sharing
            your financial information with the seller. It's simple, faster and
            more secure. Currency conversion fees may apply.
          </p>
          <a
            className="hover:underline-offset-2 hover:underline font-semibold"
            href="./"
          >
            Make a payment
          </a>
        </div>
      </div>
      <div className="bg-white w-full h-[60vh] flex justify-center items-center">
        <div className="flex justify-between items-center w-[80%] sm:w-[60%]">
          <img
            className="w-[150px] sm:w-[400px]"
            src="https://www.sbo.net/wp-content/uploads/2022/07/111-left@1x.png"
          ></img>
          <div className="flex flex-col text-black">
            <p className="sm:text-3xl text-xl">Shop around the world.</p>
            <p className="sm:text-sm text-xs">
              No need to book a flight ticket to shop worldwide. With a PayPal
              account you can shop at thousands of stores around the world in
              just a few easy clicks, knowing your card details are never shared
              with the seller. Currency conversion fees may apply.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 h-[40vh] flex justify-center items-center flex-col gap-3">
        <p className="text-3xl">Your money, in a good place.</p>
        <button className="px-[80px] py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
          Sign Up for Free
        </button>
      </div>
    </div>
  );
}
