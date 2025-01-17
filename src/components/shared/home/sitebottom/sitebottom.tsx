import React from "react";
import WidgetCard from "../../card/WidgetCard";

const Sitebottom = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <h1 className="HeadingTitle">destinations</h1>
        <div className="my-[30px]">
          <WidgetCard />
          <WidgetCard />
          <WidgetCard />
        </div>
      </div>

      <div>
        <h1 className="HeadingTitle">lifestyle</h1>
        <div className="my-[30px]">
          <WidgetCard />
          <WidgetCard />
          <WidgetCard />
        </div>
      </div>
      <div>
        <h1 className="HeadingTitle">photography</h1>
        <div className="my-[30px]">
          <WidgetCard />
          <WidgetCard />
          <WidgetCard />
        </div>
      </div>
    </div>
  );
};

export default Sitebottom;
