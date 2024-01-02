import "./Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className="homecontainer">
      <div className="hometext">
        <div className="homesection1">
          <div className="h12 p12">Hello stranger!</div>
          <p className="h5 p3">
            Welcome to my official social-money experiment page. Before we
            start, just remember:
          </p>
          <p className="h4 p2">
            You don't have to do anything here, you don't have to donate, send
            money, give feeback - nothing!
          </p>
        </div>
        <div className="homesection2">
          <p className="h2">It is your choice</p>
        </div>
        <div className="homesection3">
          <p className="h1 p3">So.. what's about this social experiment?</p>
          <p className="p3 h4">Let me tell you a short story.</p>
          <p className="p4 h5">
            One random day I woke up with a tought: 'can any random, regular
            person, become a milionare just like that, without any inheritance
            or winning a lottery or nothing else?'
          </p>
        </div>
        <div className="homesection4">
          <p className="h1 p2">Or maybe you need to be famous? Beautiful?</p>
          <p className="p5 h4">Do you need to work hard every day and night?</p>
          <p className="p5 h3">
            Do you need to have many talents, be a soccerplayer, actor or a
            rockstar?
          </p>
          <p className="p5 h2">
            Become a streamer on Twitch, be instagram model? <br></br>Or make
            ASMR videos?
          </p>
        </div>
        <div className="homesection5">
          <p className="p4 h3">Or maybe not?</p>
        </div>
        <div className="homesection6">
          <p className="p12 h2">Maybe.. you can just ask for it?</p>
          <p className="p2 h3">
            This is what I want to achieve. By doing almost nothing.
          </p>
          <p className="p5 h1">But only with your help.</p>
        </div>
        <div className="homesection7">
          <p className="p2 h2">How You can help? That's easy</p>
          <p className="p4 h4">
            You can donate me any amount of money - 100$, 10$, 5$, 1$, 50 cent
            (yeah) or a penny
          </p>
          <p className="p4 h3">Help me gather at least 1 milion Dollars</p>
          <p className="p4 h2">
            Make me a millionare. <br></br>And I promise you:
          </p>
          <p className="p4 h3"> I will spend your money well.</p>
        </div>
        <div className="homesection8">
          <p className="p2 h1">
            But. <br></br> Wait a minute
          </p>
          <p className="p2 h2">
            Why in the world you should give me a single penny?
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
              Let me tell you why ➡
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};
