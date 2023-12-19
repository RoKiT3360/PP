import React from "react";

export default function Body() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[60vh] flex justify-center items-center bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/010/008/086/non_2x/background-dimension-3d-graphic-message-board-for-text-and-message-design-line-shadow-for-modern-web-design-free-vector.jpg')]">
        <div className="w-[70%] h-full flex flex-col justify-center gap-3">
          <p className="text-4xl text-black">Checkout in a few clicks.</p>
          <p className="flex flex-wrap w-[500px] text-black">
            Check out simply and more securely at thousands of online stores
            with just an email address and password. You don't need to type in
            your card details every time you pay.
          </p>
          <button className="w-[350px] py-3 px-3 bg-blue-600 rounded-full">
            Sign Up and Start Shopping
          </button>
          <a href="./" className="text-blue-800 flex w-[200px]">
            Shop on eBay
          </a>
        </div>
      </div>
      <div className="w-full h-[15vh] bg-zinc-800 flex justify-center items-center">
        <div className="w-[70%] h-full flex">
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-12 h-12 rounded-full border border-white-1 flex justify-center items-center">
              1
            </div>
            <p className="flex flex-wrap w-[350px]">
              Shop around the world from your computer or mobile.
            </p>
          </div>
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-12 h-12 rounded-full border border-white-1 flex justify-center items-center">
              2
            </div>
            <p className="flex flex-wrap w-[350px]">
              Checkout quickly with a simple login.
            </p>
          </div>
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-12 h-12 rounded-full border border-white-1 flex justify-center items-center">
              3
            </div>
            <p className="flex flex-wrap w-[350px]">
              Jump for joy when your order is complete.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh] bg-white flex justify-center items-center">
        <div className="w-[40%] flex justify-center items-center flex-col gap-2">
          <p className="text-3xl text-black">Speed through checkout.</p>
          <p className="flex flex-wrap text-black text-center">
            All you need to know is your email address and password so you can
            forget all your card numbers and secret codes.
          </p>
        </div>
      </div>
      <div className="w-full h-[50vh] bg-orange-100 flex justify-end items-center">
        <div className="w-[50%] h-full flex flex-col justify-center gap-3">
          <p className="text-2xl text-black">You've got the whole world in your hands.</p>
          <p className="text-black">
            Buy from thousands of merchants around the world. We accept 25
            currencies from 202 countries and markets. Currency conversion fees
            may apply.
          </p>
          <a className="text-sky-700" href="./">Read more about currency conversion</a>
        </div>
      </div>
    </div>
  );
}
