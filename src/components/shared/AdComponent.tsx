// "use client";

// import React, { useEffect } from "react";
// import Script from "next/script";

function Ads() {
  // useEffect(() => {
  //   try {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   } catch (err) {
  //     console.error("AdSense Error:", err);
  //   }
  // }, []);

  return (
    <>
      {/* AdSense Script */}
      {/* <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
      /> */}

      {/* Ad Container */}
      {/* <div className="text-center adsbygoogle my-3 h-[66px]">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6182407366748084"
          data-ad-slot="4536157756"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div> */}
    </>
  );
}

export default Ads
