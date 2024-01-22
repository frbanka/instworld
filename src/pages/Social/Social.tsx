import "./Social.css";
import { NavLink } from "react-router-dom";
import test from "../../graphics/test1.jpg";
import heart from "../../graphics/heart.jpg";
import food from "../../graphics/food.jpg";
import streamer from "../../graphics/streamer.jpg";
import gamer from "../../graphics/gamer.jpg";
import selfie from "../../graphics/selfie.jpg";
const Social = () => {
  return (
    <div className="socialtext">
      <div className="socialcontainer2">
        <div className="socialsection1">
          <div className="p1 h12">Social media relations</div>
          <div className="p4 h4">
            Almost whole world is connected to the Internet. And Internet is a
            powerful tool for money making.
          </div>
        </div>
      </div>
      <div className="socialsection12"></div>
      <div className="socialcontainer">
        <div className="socialsection2">
          <div className="p4">
            <img src={test} alt="bulb" className="test"></img>
          </div>
          <div className="is2_right">
            <div className="h3">
              'It's no trick to make a lot of money, if all you want to do is
              make a lot of money.'
            </div>
            <div className="h4 p4">
              Is there something that nobody would never ever pay for? Like..
              would you buy some random guy's photo, a selfie?{" "}
              <a
                className="is_link"
                href="https://www.businessinsider.com/indonesia-student-makes-a-million-selling-expressionless-selfies-as-nfts-2022-1?IR=T"
                rel="nofollow"
                target="_blank"
              >
                Well, someone did..
              </a>
            </div>
            <div className="h4 p4">
              But lets take a look at few most popular social networking
              services, like Instagram, Youtube, Twitch or TikTok and check how
              people earn money there
            </div>
          </div>
        </div>
        <div className="socialsection3">
          <div className="is3_inst p2">
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
        <div className="socialsection12"></div>
        <div className="socialsection4">
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
              found somewhere in the Internet
            </div>
          </div>
          <div className="is4_img">
            <img src={streamer} alt="streamer" className="streamer"></img>
          </div>
        </div>
        <div className="socialsection12"></div>
        <div className="socialsection5">
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
        <div className="socialsection6">
          <div className="h1">Well, nothing wrong or weird in these days</div>
          <div className="p4 h4 ss6_text">
            It is normal now, that whole Internet is about advertising. To gain
            customers. Followers. Clients. Audience. Fans. To sell your time,
            your life, your body, to sell products.
          </div>
        </div>
        <div>
          <div className="is3_img p2">
            <img src={selfie} alt="selfie" className="selfie"></img>
          </div>
        </div>
        <div className="socialsection7">
          <p className="p2 h12">But..</p>
          <div className="p4 h3">
            why people (fans, followers, viewers) give their private money to
            the Internet celebrities? Because they get something in return? Or
            maybe just because they can and they like them?
          </div>
          <div className="p3">
            <a href="/idea" className="hs2323_button">
              WHY ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
