import { NavLink } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="contacttext">
        <div className="contactsection1">
          <p className="h1 p2">For the money.</p>
          <div className="h12 p3">
            <p className="h2 p4">
              I mean, my money. I want you to help me become rich, just like
              that. For nothing.
            </p>
          </div>
        </div>
        <div className="contactsection2">
          <p className="h2 p3">I want to become rich.</p>
          <p className="h2 p3">
            The main goal is to reach 1 million dollars. And then more.
          </p>
          <p className="h3 p5">
            Why would you donate me anything?<br></br>To have fun. To give me
            fun. To proove yourself, proove me or the other people - the whole
            Internet - that it doesn't matter why and who you give your money.
          </p>
          <p className="h2 p5">It is your choice. It is everybody's choice</p>
        </div>
        <div className="contactsection3">
          <p className="h1 p3">You say: it is stupid</p>
          <p className="p4 h3">Maybe. But think about it this:</p>
          <p className="p4 h4">
            there are people who are trying day by day to become popular in the
            Internet to earn lot of money - like those streamers and influencers
          </p>
          <p className="p4 h3">But.. why can't it be opposite?</p>
        </div>
        <div className="contactsection4">
          <p className="h2 p2">
            Can somebody become popular because he earn lot of money for
            nothing?
          </p>
          <p className="p5 h2">Can people 'create' an internet star?</p>
          <p className="p5 h3">
            Do you remember{" "}
            <a
              href="https://www.joe.co.uk/news/man-becomes-millionaire-after-taking-selfie-every-day-for-five-years-312593"
              rel="nofollow"
            >
              that guy who took selfies everday
            </a>{" "}
            for five years and became millionare?
          </p>
        </div>
        <div className="contactsection5">
          <p className="p2 h2">This is what I'm talking about. But..</p>
          <p className="p4 h3">maybe we can push it more?</p>
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
