import { NavLink } from "react-router-dom";
import "./Money.css";
import money1 from "../../graphics/money1.jpg";
import money2 from "../../graphics/money2.jpg";
import money3 from "../../graphics/money3.jpg";
import money4 from "../../graphics/money4.jpg";
import money5 from "../../graphics/money5.jpg";
export const Money = () => {
  return (
    <div className="moneytext">
      <div className="moneycontainer2">
        <div className="moneysection1">
          <div className="money">MONEY</div>
        </div>
      </div>
      <div className="moneycontainer">
        <div className="moneysection2">
          <div className="h12 p2">$1,000,000</div>
          <div className="h3 p4">is it much?</div>
          <div className="h3 p3">Hard to say, right?</div>
          <div className="p3">
            <img src={money2} alt="money2" className="money2"></img>
          </div>
          <div className="ms2_right"></div>
        </div>
        <div className="moneysection3">
          <div className="p3 h12">What about $82,000,000?</div>
          <div className="p3 h4">
            This is the number of $ that one guy earned in 2022 mostly through
            his YouTube channel. Take a look at this rank:{" "}
            <a
              className="is_link"
              href="https://www.cbsnews.com/news/forbes-top-10-creators-list-net-worth-mr-beast-youtube/"
              rel="nofollow"
              target="_blank"
            >
              click
            </a>
          </div>
        </div>
        <div className="moneysection3">
          <p className="h1 p3">
            Help me get money - help me become rich and become famous because of
            being rich
          </p>
          <p className="p4 h3">
            You say it is stupid. Maybe. But think about it:
          </p>
          <p className="p4 h4">
            there are many people who try hard day by day to become popular in
            the Internet and earn lot of money - like streamers and influencers,
            to get your attention for you to support them, share their work and
            pay them
          </p>
          <p className="p4 h2">But.. can it be opposite?</p>
        </div>
        <div className="moneysection4">
          <p className="h2 p2">
            Can I get your attention.. now? Can you support me, donate me, treat
            me like I was famous and popular?
          </p>
          <p className="p5 h2">So I will become one truly?</p>
          <p className="p5 h3">And you will be creator of me</p>
          <p className="p5 h3"></p>
        </div>
        <div className="moneysection5">
          <p className="p2 h2">
            Do you remember{" "}
            <a
              href="https://www.joe.co.uk/news/man-becomes-millionaire-after-taking-selfie-every-day-for-five-years-312593"
              rel="nofollow"
            >
              that guy who took selfies everday
            </a>{" "}
            for five years and became millionare?
          </p>
          <p className="p4 h3">
            This is what I'm talking about. They were just selfies. Nothing you
            don't need to live. But still there was lot of people who wanted to
            buy it.
          </p>
          <p className="p4 h3">
            Lets take in on the next level.<br></br>Lets create a senseless,
            absurd fanbase - huge group of people supporting non (yet) existing
            celebrities
          </p>
        </div>
        <div className="moneysection7">
          <p className="h2 p2">
            Starting with me. Support me. Follow me. Like me. Share me. Donate
            me.
          </p>
          <p className="p5 h3">
            Refuse to buy yourself a coffee. Or a beer. Or pornhub premium. Or
            whatever you buy everyday
          </p>
          <p className="p5 h3">It's only pennies.</p>
          <p className="p5 h3"></p>
          <p className="p4 h2">
            <NavLink
              to="/goals"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              Help me reach the Goal
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};
