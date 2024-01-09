import "./Why.css";
import { NavLink } from "react-router-dom";
const Why = () => {
  return (
    <div className="aboutcontainer">
      <div className="abouttext">
        <div className="aboutsection1">
          <div className="h12 p12">Why?</div>
          <p className="h3 p3">
            Why people get pay on few popular websites like YouTube, Twitch,
            Instagram, OnlyFans?{" "}
          </p>
        </div>
        <div className="aboutsection2">
          <p className="h3 p3">
            When it comes to OnlyFans.. there is not much to talk about. Mostly,
            people pay to see some naked ass and get horny. That's all.
          </p>
          <p className="h2 p4">But how the others earn money?</p>
        </div>
        <div className="aboutsection3">
          <p className="p4 h12">Instagram influencers</p>
          <p className="p4 h3">
            As the{" "}
            <a
              href="https://creators.instagram.com/earn-money/branded-content"
              target="_blank"
              rel="noreferrer"
            >
              Instagram Creators page
            </a>{" "}
            says: '..to share the brands and products you love'
          </p>
          <p className="p3 h4">
            In other words, the get money from advertising products, like
            clothes and jewelery or food - by posting photos while they eat or
            wear the advertised goods. Showing how they spend time involving
            these products, review them and recommend them.
          </p>
        </div>
        <div className="aboutsection4">
          <p className="h12 p2">Twitch streamers?</p>
          <p className="p5 h4">
            Almost the same. Working with different brands and advertising their
            products.<br></br>But with some more other options like channel
            subscriptions, donations (called Twitch bits) or by running ads on
            their stream
          </p>
          <p className="p5 h3">
            You can read more on{" "}
            <a
              href="https://www.thoughtleaders.io/blog/how-do-twitch-streamers-make-money"
              target="_blank"
              rel="noreferrer"
            >
              this blog
            </a>{" "}
            I just randomly found
          </p>
        </div>
        <div className="aboutsection5"></div>
        <div className="aboutsection6">
          <p className="p2 h12">And Youtube?</p>
          <p className="p3 h3">
            Similar to the others. Partnership with brands, subscriptions, ads,
            donations
          </p>
          <p className="p5 h3">
            (Read more here:{" "}
            <a
              href="https://support.google.com/youtube/answer/72857?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              click)
            </a>
          </p>
        </div>
        <div className="aboutsection7">
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
        <div className="aboutsection8">
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
        <div className="aboutsection9">
          <p className="p2 h12">How?</p>
          <p className="p4 h2">By this experiment</p>
          <p className="p3 h3">
            Just imagine that I am your favourite streamer or Youtuber. Or your
            favourite Instagram model. Or any other Creator, social media Star
            you like and follow.
          </p>
        </div>
        <div className="aboutsection10">
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
