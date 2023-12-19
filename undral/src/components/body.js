import React from "react";

export default function Body() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[70vh] bg-no-repeat bg-cover bg-center bg-[url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg')] ">
        <div className="w-[70%] h-full flex justify-center items-center flex-col text-black">
          <p className="text-4xl flex flex-wrap w-[500px]">
            Great deals at thousands of stores.
          </p>
          <p className="w-[500px]">
            Shop at thousands of online stores around the world with PayPal.
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] flex justify-evenly items-center bg-blue-800">
        <div className="w-[30%] h-full flex flex-col gap-2 justify-center">
          <p className="text-2xl">Shop on eBay.</p>
          <p className="">
            Buy it now or bid instantly. New or used, we process your purchases
            on eBay in an easy and more secure way. Login, check out and wait
            for the mailman.
          </p>
          <a href="./">Shop on eBay</a>
        </div>
        <div className="w-[30%] h-full flex flex-col gap-3 justify-center">
          <p className="text-2xl">Get Protected.</p>
          <p>
            Pay for goods using your PayPal account and get covered by our Buyer
            Protection on eligible items. Conditions apply.
          </p>
          <a href="./">More about PayPal Buyer Protection</a>
        </div>
      </div>
      <div className="w-full bg-gray-200 h-[30vh] flex justify-center items-center">
        <div className="w-[70%] h-full flex flex-col justify-center">
            <div className="flex flex-col gap-2">
            <p className="text-2xl text-black">Connect with us.</p>
            <a className="text-blue-400">PayPal on Facebook</a>
            <a className="text-blue-400">PayPal on Twitter</a>
            <a className="text-blue-400">PayPal on YouTube</a>
            </div>
        </div>
      </div>
    </div>
  );
}
