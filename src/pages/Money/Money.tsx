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
          <p className="h1 p3">What about 1$ ?</p>
          <p className="p4 h3">
            Is it much for you? Or for any "normal, everyday working person"?
          </p>
          <p className="p4 h4">
            I think we can agree that the answer is "no". It is not much.
          </p>
        </div>
        <div className="moneysection4">
          <p className="h1 p2">Money money money.. all is about money.</p>
          <p className="p5 h3">
            Life is about money. You don't have money - you don't have anything
          </p>
          <p className="p5 h4">
            Oh, please. Stop talking under your breath about friends, family,
            love etc. You don't need money to have all of it, of course. But
            just take a minute and think - how would you life look like now if
            you were broke, with no money at all?
          </p>
          <p className="p5 h3"></p>
        </div>
        <div className="moneysection5">
          <p className="p2 h1">
            I think it would suck. At least for the most of you.
          </p>
          <p className="p4 h3">
            Now think otherwise - how would it look like if you were rich?
          </p>
          <p className="p4 h3">Seriously, think about it. It's good, right?</p>
        </div>
        <div className="moneysection7">
          <p className="h2 p2">
            Is 1$ less makes you poor? Is 1$ more makes you rich?
          </p>
          <p className="p5 h3">
            You know that the right answers are: "no" and "yes"?
          </p>
          <p className="p5 h4">
            You are poor when you have nothing. You are rich when you have
            something. And the more you get - the more rich you'll become.
          </p>
          <div className="p4">
            <a href="/experiment" className="hs2323_button">
              EXPERIMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
