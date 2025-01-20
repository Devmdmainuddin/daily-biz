"use client";

// import Script from "next/script";
// import { useEffect } from "react";

function Ads() {
  // useEffect(() => {
  //   try {
  //     (adsbygoogle = Window.adsbygoogle || []).push({});
  //   } catch (err) {
  //     console.error("AdSense Error:", err);
  //   }
  // }, []);

  return (
    <>
   
      {/* <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
      ></Script>
      <div className="text-center adsbygoogle my-3 !h-[120px]">
        <ins
          className="adsbygoogle"
          style={{display: "block"}}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
          data-ad-slot="4536157756"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div> */}
    </>
  );
}

export default Ads;
