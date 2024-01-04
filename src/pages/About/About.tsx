import "./About.css";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="abouttext">
        <div className="aboutsection1">
          <div className="h12 p12">Why?</div>
          <p className="h3 p3">
            Why companies, brands or just other people pay to Instagram
            influencers, Youtubers, streamers etc.?
          </p>
        </div>
        <div className="aboutsection2">
          <p className="h2 p3">
            When it comes to OnlyFans.. there is not much to talk about. People
            pay to see some naked ass and get horny. That's all.
          </p>
          <p className="h3 p5">
            (not that you can see ass for free, just by googling it..)
          </p>
          <p className="h2 p4">But how the others earn money?</p>
        </div>
        <div className="aboutsection3">
          <p className="p4 h1">Instagram influencers</p>
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
            wear the advertised goods
          </p>
        </div>
        <div className="aboutsection4">
          <p className="h12 p2">What about Twitch streamers?</p>
          <p className="p5 h3">
            Same. <br></br>But with some more other options like channel
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
        <div className="aboutsection5">
          <p className="p4 h1">And Youtube?</p>
        </div>
        <div className="aboutsection6">
          <p className="p12 h1">The same as Twitch</p>
          <p className="p3 h2">But different naming</p>
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
          <p className="p1 h2">All of this is nothing strange today</p>
          <p className="p4 h3">Whole Internet is about advertising</p>
          <p className="p4 h3">
            To gain customers. Followers. Clients. Audience. Fans.
          </p>
          <p className="p4 h2">But why do people Donate?</p>
        </div>
        <div className="aboutsection8">
          <p className="p2 h2">
            Why people send money to the Internet celebrities?
          </p>
          <p className="p4 h3">
            If You did that by yourself at least once - then you will know
          </p>
          <p className="p3 h2">
            But If you didn't.. then you will know very soon
          </p>
        </div>
        <div className="aboutsection9">
          <p className="p2 h1">How?</p>
          <p className="p3 h1">By this experiment:</p>
          <p className="p3 h3">
            Imagine that I am your favourite streamer or Youtuber. Or your
            favourite Instagram model. Or any other Creator, social media Star
            you like and follow.
          </p>
        </div>
        <div className="aboutsection10">
          <p className="p2 h2">
            And donate me.<br></br>Yes, thats right.
          </p>
          <p className="p3 h3">
            You can donate a dollar, a thousand dollars or a penny
          </p>
          <p className="p3 h3">Doesn't matter how much.</p>
          <p className="p4 h2">Just do it</p>
          <p className="p1 h3">
            <NavLink
              to="/money"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              but for what? ➡
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};

export default About;
