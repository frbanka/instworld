import "./About.css";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="abouttext">
        <div className="aboutsection1">
          <div className="h12 p12">Why? Let me ask you something:</div>
          <p className="h3 p3">
            Why would anybody give their money to someone in the internet,
            someone they never seen (and will propably never see) in real life,
            in person?
          </p>
        </div>
        <div className="aboutsection2">
          <p className="h3 p3">
            Lot of people support gamers, streamers, youtubers, strippers,
            instagram celebrities etc.<br></br>But.. why?
          </p>
          <p className="h3 p5">
            Because they work hard? Because they make a world a better place?
          </p>
          <p className="h3 p5">Because they are your friends?</p>
        </div>
        <div className="aboutsection3">
          <p className="h1 p3">No.</p>
          <p className="p4 h4">
            Because they sell their bodies, their privacy, their time, they show
            butts and tits, they laugh, chat, get you horny and excited
          </p>
          <p className="p4 h4">
            Because they gather more and more money - to buy cars, go on
            vacation, to party, eat, drink, buy new clothes, houses and more
            cars
          </p>
          <p className="p4 h3">
            And they show people how they live with all of that - all of that,
            that You help them get
          </p>
        </div>
        <div className="aboutsection4">
          <p className="h12 p2">But don't get me wrong!</p>
          <p className="p5 h2">
            Lot of this internet celebrities are great persons and really hard
            working!
          </p>
          <p className="p5 h3">
            And everybody wants to earn money - there is nothing wrong with
            that!
          </p>
        </div>
        <div className="aboutsection5">
          <p className="p4 h2">so what is the point in all of that?</p>
        </div>
        <div className="aboutsection6">
          <p className="p12 h1">Thats right. The choice.</p>
          <p className="p2 h4">Why people donate?</p>
          <p className="p5 h1">Because they want. And they can.</p>
        </div>
        <div className="aboutsection7">
          <p className="p2 h3">
            Because they can do with their money whatever they want.
          </p>
          <p className="p4 h2">
            Lot of things in the internet that you buy, support/donate - you can
            have for free.<br></br>So still, why pay?
          </p>
          <p className="p3 h2">Let me tell you this:</p>
          <p className="p2 h1">Donate me</p>
        </div>
        <div className="aboutsection8">
          <p className="p2 h3">
            and you will be one of the many or few people, who will be the first
            one ever creators
          </p>
          <p className="p4 h3">of brand new social media celebrity</p>
          <p className="p5 h2">with no name and no face</p>
          <p className="p5 h3">and with no content whatsoever</p>
        </div>
        <div className="aboutsection9">
          <p className="p2 h1">Is it stupid? Maybe.</p>
          <p className="p3 h2">
            Then don't donate. Forget about it. But don't regret this later
          </p>
          <p className="p3 h3">
            (I still regret not buying Bitcoin 12 years ago for 3$..)
          </p>
          <p className="p5 h4">
            (Because I thought it was stupid and waste of money)
          </p>
        </div>
        <div className="aboutsection10">
          <p className="p2 h3">It is matter of time here, but..</p>
          <p className="p3 h1">
            I will be rich. I will be famous. I will succeed.
          </p>
          <p className="p5 h3">You can be a part of that success. Now.</p>
          <p className="p3 h2">
            I will be a new star. I will be the one that everybody is talking
            about.
          </p>
          <p className="p3 h3">And you can be a father of that success.</p>
          <p className="p2 h3">
            <NavLink
              to="/money"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              How? ➡
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};

export default About;
