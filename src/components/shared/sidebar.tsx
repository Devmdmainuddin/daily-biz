import CommentsCard from "./card/CommentsCard";
import WidgetCard from "./card/WidgetCard";
import WidgetCardRight from "./card/WidgetCardRight";
import InstagramImage from "./home/imageGarary/InstagramImage";

const Sidebar = () => {
  return (
    <div>
      <div>
        <h1 className="HeadingTitle">Recently Published</h1>
        <div className="my-[30px]">
          <WidgetCard />
          <WidgetCard />
          <WidgetCard />
        </div>
      </div>

      <div>
        <h1 className="HeadingTitle">most popular</h1>
        <div className="my-[30px]">
          <WidgetCardRight />
          <WidgetCardRight />
          <WidgetCardRight />
        </div>
      </div>
      <div>
        <h1 className="HeadingTitle">last comments</h1>
        <div className="my-[30px]">
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
        </div>
      </div>
      <div>
        <h1 className="HeadingTitle"> instagram</h1>
        <div className="my-[30px]">
          <InstagramImage />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
