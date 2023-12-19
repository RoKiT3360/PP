import React from "react";

export default function Body() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[60vh] flex justify-center items-center bg-no-repeat bg-cover bg-[url('https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg')]">
        <div className="w-[70%] h-full flex flex-col justify-center gap-3">
          <p className="text-4xl text-white">Your account is in your hands.</p>
          <p className="flex flex-wrap w-[500px] text-white">
            PayPal is accepted on thousands of mobile sites and apps, just like
            it is on your computer. It's a simple way to pay on the go without
            sharing your financial information with the seller.
          </p>
          <button className="w-[350px] py-3 px-3 bg-blue-600 rounded-full">
            Sign Up for Free
          </button>
        </div>
      </div>
      <div className="w-full h-[15vh] bg-zinc-800 flex justify-center items-center">
        <div className="w-[70%] h-full flex">
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-12 h-12 rounded-full border border-white-1 flex justify-center items-center">
              1
            </div>
            <p className="flex flex-wrap w-[350px]">
              Shop online or in apps using your mobile.
            </p>
          </div>
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-12 h-12 rounded-full border border-white-1 flex justify-center items-center">
              2
            </div>
            <p className="flex flex-wrap w-[350px]">
              Choose PayPal as the payment method.
            </p>
          </div>
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-12 h-12 rounded-full border border-white-1 flex justify-center items-center">
              3
            </div>
            <p className="flex flex-wrap w-[350px]">
              Pay faster without reaching for your wallet.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[40vh] bg-white flex justify-center items-center">
        <div className="w-[50%] flex justify-center items-center flex-col gap-2">
          <p className="text-4xl text-black">Accepted all over the place.</p>
          <p className="flex flex-wrap text-black text-center">
            We're integrated into thousands of iOS and Android apps. Pay with
            your smartphone and tablet easily, just like on your computer.
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] bg-blue-900 flex justify-center items-center">
        <p className="text-4xl w-[60%] text-center">
          “It’s just a lot simpler to enter one password when paying on your
          mobile than using a credit card and entering all that info every
          time.”
        </p>
      </div>
      <div className="w-full h-[50vh] bg-orange-100 flex justify-end items-center">
        <div className="w-[50%] h-full flex flex-col justify-center gap-3">
          <p className="text-2xl text-black">
            You've got the whole world in your hands.
          </p>
          <p className="text-black">
            Buy from thousands of merchants around the world. We accept 25
            currencies from 202 countries and markets. Currency conversion fees
            may apply.
          </p>
          <a className="text-sky-700" href="./">
            Read more about currency conversion
          </a>
        </div>
      </div>
      <div className="w-full h-[40vh] bg-zinc-800 flex justify-center items-center">
        <div className="w-[50%] h-full flex flex-col text-center justify-center gap-3">
          <p className="text-5xl font-thin">No hidden costs, no surprises.</p>
          <p className="">
            When you purchase with PayPal there are no hidden costs or
            processing fees, so you can enjoy your shopping on your mobile.
            Currency conversion fees may apply.
          </p>
          <a className="text-white font-bold" href="./">More about fees</a>
        </div>
      </div>
    </div>
  );
}
