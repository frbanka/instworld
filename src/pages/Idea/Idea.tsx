import "./Idea.css";
import { NavLink } from "react-router-dom";
import bulb from "../../graphics/bulb.jpg";
import heart from "../../graphics/heart.jpg";
import food from "../../graphics/food.jpg";
import streamer from "../../graphics/streamer.jpg";
import gamer from "../../graphics/gamer.jpg";
const Idea = () => {
  return (
    <div className="ideatext">
      <div className="ideacontainer2">
        <div className="ideasection1">
          <div className="idea p1">The Idea</div>
        </div>
      </div>
      <div className="ideasection12"></div>
      <div className="ideacontainer">
        <div className="ideasection2">
          <div className="p4">
            <img src={bulb} alt="bulb" className="bulb"></img>
          </div>
          <div className="is2_right">
            <div className="h2">The idea that stands behind all of this</div>
            <div className="h4 p4">
              is the result of observing how today's world works when it comes
              to money flow and earning, especially in the Internet environment.
            </div>
            <div className="h4 p4">How does it work?</div>
            <div className="h4 p4">
              Lets take few most popular social networking services, like
              Instagram, Youtube, Twitch or TikTok and check how you can earn
              money there
            </div>
          </div>
        </div>
        <div className="ideasection3">
          <div className="is3_inst">
            <div className="p4 h12">Instagram</div>
            <div className="p2 h4">
              As the{" "}
              <a
                className="is_link"
                href="https://creators.instagram.com/earn-money/branded-content"
                target="_blank"
                rel="noreferrer"
              >
                Instagram Creators page
              </a>{" "}
              says: '..to share the brands and products you love'
            </div>
            <div className="p4 h5">
              In other words, people get money from advertising products, like
              cosmetics, clothes and jewelery or food - by posting photos while
              they eat or wear the advertised goods. Showing how they spend time
              involving these products, review them and recommend them.
            </div>
          </div>
          <div className="is3_img p2">
            <img src={food} alt="food" className="food"></img>
            <img src={heart} alt="heart" className="heart"></img>
          </div>
        </div>
        <div className="ideasection12"></div>
        <div className="ideasection4">
          <div className="is4_twitch">
            <div className="h12">Twitch</div>
            <div className="p3 h5">
              Almost the same. Working with different brands and advertising
              their products. But with some more other options like channel
              subscriptions, donations (called Twitch bits) or by running ads on
              their stream.
            </div>
            <div className="p4 h5">
              Despite the fact Twitch was made for gaming content, category
              ‘Just Chatting’ became the top watch content on the platform. So..
              streamers earn just on casual conversations between them and the
              viewers.
            </div>
            <div className="p4 h4">
              You can read more on
              <a
                className="is_link"
                href="https://www.thoughtleaders.io/blog/how-do-twitch-streamers-make-money"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                this blog{" "}
              </a>
              found in the Internet
            </div>
          </div>
          <div className="is4_img">
            <img src={streamer} alt="streamer" className="streamer"></img>
          </div>
        </div>
        <div className="ideasection12"></div>
        <div className="ideasection5">
          <div className="is5_youtube">
            <div className="is5_img">
              <img src={gamer} alt="gamer" className="gamer"></img>
            </div>
            <div className="is5_descr">
              <div className="h12">Youtube</div>
              <div className="p3 h4">
                Similar to the others. Partnership with brands, subscriptions,
                ads, donations
              </div>
              <div className="p4 h4">
                It is often the second step of Twitch - people upload recorded
                live streams and earn money again on the same content.
              </div>
              <div className="p5 h4">
                (Read more here:{" "}
                <a
                  className="is_link"
                  href="https://support.google.com/youtube/answer/72857?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  click)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ideasection6">
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
        <div className="ideasection7">
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
        <div className="ideasection8">
          <p className="p2 h12">How?</p>
          <p className="p4 h2">By this experiment</p>
          <p className="p3 h3">
            Just imagine that I am your favourite streamer or Youtuber. Or your
            favourite Instagram model. Or any other Creator, social media Star
            you like and follow.
          </p>
        </div>
        <div className="ideasection9">
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

export default Idea;
