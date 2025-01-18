import React from "react";
import {Adsense} from "@ctrl/react-adsense";

export function Ads() {
  return (
    <div className="text-center adsbygoogle my-3">
      <Adsense
        client="ca-pub-6182407366748084"
        slot="use-your-slot-id-here"
        style={{display: "block"}}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}
