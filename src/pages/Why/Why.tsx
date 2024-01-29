import "./Why.css";
import bulb from "../../graphics/bulb.jpg";
import lake2 from "../../graphics/lake2.jpg";
import giveheart from "../../graphics/give-heart.jpg";
const Why = () => {
  return (
    <div className="whytext">
      <div className="whycontainer2">
        <div className="whysection1">
          <div className="p1 h12">The Idea</div>
          <div className="p4 h3">
            The genious, mystery idea that stands behind all of this
          </div>
        </div>
      </div>
      <div className="whycontainer">
        <div className="whysection2">
          <div className="p4">
            <img src={bulb} alt="bulb" className="bulb"></img>
          </div>
          <div className="is2_right">
            <div className="h2">Actually, it's all about having fun</div>
            <div className="h4 p4">
              Why do you follow instagram influencers? Or watch Twitch and
              TikTok? To have fun!
            </div>
            <div className="h4 p4">
              Why do you spend money on OnlyFans pages? OK, better not answer
              that..
            </div>
            <div className="h4 p4">
              Of course, people support YouTube Creators who put lot of work in
              their job (from recording to editing videos). And it's like when
              you go to cinema and pay for watching a movie.
            </div>
            <div className="h4 p4">
              But you can watch YouTube or Twitch for free. So why pay for it,
              why make donations? Well, actually..
            </div>
          </div>
        </div>
        <div className="whysection3">
          <div className="h1 p5 choice">It's all about choice. Your choice</div>
          <div className="is3_img p3">
            <img src={lake2} alt="lake2" className="lake2"></img>
          </div>
        </div>
        <div className="whysection5">
          <div className="p3 h1">Nobody force people to be generous</div>
          <div className="h3">
            Nobody can tell you what you should do with your money
          </div>

          <div className="p3">
            <img src={giveheart} alt="giveheart" className="giveheart"></img>
          </div>
          <div className="h2 p4">
            You choose who and why you pay. Your gift - your business
          </div>
        </div>
        <div className="whysection12"></div>
        <div className="whysection6">
          <div className="p1 h12">This is why I started wondering</div>
          <div className="p3 h3">
            Can people be generous with no reason whatsoever? Can people share
            their money to complete stranger? Just for nothing? Or, let's say -
            just for fun?
          </div>
          <div className="p2">
            <a href="/money" className="hs2323_button">
              MONEY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
