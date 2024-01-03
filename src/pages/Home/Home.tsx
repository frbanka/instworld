import "./Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className="homecontainer">
      <div className="hometext">
        <div className="homesection1">
          <div className="h12 p12">Hello stranger!</div>
          <p className="h5 p3">
            Welcome to my official social experiment page. Before we start, just
            remember:
          </p>
          <p className="h4 p4">
            You don't have to do anything here, you don't have to download, buy,
            donate money, give feeback - nothing!
          </p>
        </div>
        <div className="homesection2">
          <p className="h2">
            Being a part of this experiment it is your choice
          </p>
        </div>
        <div className="homesection3">
          <p className="h1 p3">So.. what is this experiment about?</p>
          <p className="p3 h4">Let me tell you a short story.</p>
          <p className="p4 h5">
            One random day I woke up with a tought: 'can any random, regular
            person, become a milionare without having any inheritance or winning
            a lottery, just by doing nothing?'
          </p>
        </div>
        <div className="homesection4">
          <p className="h2 p2">
            Or maybe ONLY when you work hard every day and night?
          </p>
          <p className="p5 h3">
            Or maybe.. you need to become an Internet Star?
          </p>
          <p className="p5 h4">
            Become a streamer on Twitch or Youtube, be instagram model or
            influencer? Tiktoker?<br></br>Start making ASMR videos?
          </p>
        </div>
        <div className="homesection5">
          <p className="p3 h2">Or maybe start an OnlyFans page?</p>
          <p className="p3 h3">With your nude photos?</p>
        </div>
        <div className="homesection6">
          <p className="p1 h1">Maybe not.</p>
          <p className="p5 h2">But we need to find answer to one question</p>
        </div>
        <div className="homesection7">
          <p className="p1 h3">
            How all of these people in the internet that became so famous and
            rich, do that?
          </p>
          <p className="p4 h1">I think we all know</p>
        </div>
        <div className="homesection8">
          <p className="p1 h1">Partnership & Sponsorship.</p>
          <p className="p3 h2">And donations.</p>
        </div>
        <div className="homesection4">
          <p className="p2 h2">
            But why THEY can have it - but other people can't?
          </p>
          <p className="p2 h3">
            <NavLink
              to="/why"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              Lets see why ➡
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};
