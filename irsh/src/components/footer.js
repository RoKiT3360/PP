import React from "react";

export default function Footer() {
    return(
        <div className="bg-white w-full h-[40vh] flex justify-center items-center">
        <div className="w-[70%] h-full flex flex-col justify-center gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-black flex-wrap">
              <a className="hover:underline-offset-2 hover:underline" href="./">Help</a>
              <a className="hover:underline-offset-2 hover:underline" href="./">Contact</a>
              <a className="hover:underline-offset-2 hover:underline" href="./">Fees</a>
              <a className="hover:underline-offset-2 hover:underline" href="./">Security</a>
              <a className="hover:underline-offset-2 hover:underline" href="./">Features</a>
              <a className="hover:underline-offset-2 hover:underline" href="./">Shop</a>
            </div>
            <div>
              <a href="./">
                <img
                  className="w-4"
                  src="https://www.iconarchive.com/download/i129272/wikipedia/waved-flags/Mongolia-Waved-Flag.1024.png"
                ></img>
              </a>
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[1px] flex-wrap"></div>
          <div className="flex w-full flex-wrap sm:justify-between">
            <div className="flex gap-3">
                <a className="opacity-90 hover:underline-offset-2 hover:underline text-black" href="./">About</a>
                <a className="opacity-90 hover:underline-offset-2 hover:underline text-black" href="./">Newsroom</a>
                <a className="opacity-90 hover:underline-offset-2 hover:underline text-black" href="./">Jobs</a>
                <a className="opacity-90 hover:underline-offset-2 hover:underline text-black" href="./">Developers</a>
            </div>
            <div className="flex gap-3">
                <p className="opacity-80">© 1999–2023 All rights reserved.</p>
                <a className="opacity-90 hover:underline-offset-2 hover:underline">Accesibility</a>
                <a className="opacity-90 hover:underline-offset-2 hover:underline">Cookies</a>
                <a className="opacity-90 hover:underline-offset-2 hover:underline">Privacy</a>
                <a className="opacity-90 hover:underline-offset-2 hover:underline">Legal</a>
            </div>
          </div>
          <div className="text-black opacity-60 text-xs">
            PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore
            as a Major Payment Institution under the Payment Services Act 2019.
          </div>
        </div>
      </div>
    )
}