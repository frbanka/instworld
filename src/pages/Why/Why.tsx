import "./Why.css";
import { NavLink } from "react-router-dom";
import bulb from "../../graphics/bulb.jpg";
import heart from "../../graphics/heart.jpg";
import food from "../../graphics/food.jpg";
import streamer from "../../graphics/streamer.jpg";
import gamer from "../../graphics/gamer.jpg";
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
      <div className="whysection12"></div>
      <div className="whycontainer">
        <div className="whysection2">
          <div className="p4">
            <img src={bulb} alt="bulb" className="bulb"></img>
          </div>
          <div className="is2_right">
            <div className="h2">Actually, it is all about having fun</div>
            <div className="h4 p4">
              Isn't it? Why do you follow instagram influencers? Or watch Twitch
              and TikTok? To have fun. On different ways.
            </div>
            <div className="h4 p4">
              Why do you spend money on OnlyFans pages? Well, better not answer
              that..
            </div>
            <div className="h4 p4">
              Of course, people who make videos on YouTube put lot of work in
              it. From recording to editing.
            </div>
          </div>
        </div>
        <div className="whysection3">
          <div className="is3_img p2">
            <img src={food} alt="food" className="food"></img>
            <img src={heart} alt="heart" className="heart"></img>
          </div>
        </div>
        <div className="whysection12"></div>
        <div className="whysection6">
          <p className="p2 h1">This it is nothing wrong</p>
          <p className="p4 h3">
            It is normal now, that whole Internet is about advertising. To gain
            customers. Followers. Clients. Audience. Fans. To sell your time,
            your life, your body, to sell products.
          </p>
          <p className="p4 h3">
            'It's no trick to make a lot of money, if all you want to do is make
            a lot of money. ' - Herman J. Mankiewicz
          </p>
        </div>
        <div className="whysection7">
          <p className="p2 h2">But why normal people make donations?</p>
          <p className="p3 h3">
            Why people give their private money to the Internet celebrities?
            <br></br>It's simple. I will tell you.
          </p>
          <p className="p4 h3">
            Because they can.<br></br>It's their choice. Whatever the reason is
            - it just doesn't matter. And I want to show you
          </p>
        </div>
        <div className="whysection8">
          <p className="p2 h12">How?</p>
          <p className="p4 h2">By this experiment</p>
          <p className="p3 h3">
            Just imagine that I am your favourite streamer or Youtuber. Or your
            favourite Instagram model. Or any other Creator, social media Star
            you like and follow.
          </p>
        </div>
        <div className="whysection9">
          <p className="p2 h2">
            And make donation on this page<br></br>To me.
          </p>
          <p className="p3 h3">
            Yes, donate me. You can donate a dollar, a thousand dollars or just
            a penny
          </p>
          <p className="p3 h3">It doesn't matter how much it will be.</p>
          <p className="p4 h2">Just do it</p>
          <p className="p2 h3">
            <NavLink
              to="/money"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              but why? ➡
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
