import { NavLink } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="contacttext">
        <div className="contactsection1">
          <p className="h12 p2">For fun.</p>
          <div className="h12 p3">
            <p className="h3 p4">
              To have fun. To give me fun. To proove yourself, proove me or the
              other people - the whole Internet - that it doesn't matter why and
              who you give your money. Because you can.
            </p>
          </div>
        </div>
        <div className="contactsection2">
          <p className="h2 p3">It is your choice</p>
          <p className="h3 p3">
            And there is one important thing that comes from it:
          </p>
          <p className="h3 p5">
            You created famous people. You create Internet Stars. All of these
            famous youtubers and influencers wouldn't exist if it only wasn't
            for you
          </p>
          <p className="h2 p5">Thats why I am asking you to 'create me'</p>
        </div>
        <div className="contactsection3">
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
          <p className="p4 h4">
            'Money is not a thing, but a social relation' - Karl Marx
          </p>
          <p className="p4 h2">But.. can it be opposite?</p>
        </div>
        <div className="contactsection4">
          <p className="h2 p2">
            Can I get your attention.. now? Can you support me, donate me, treat
            me like I was famous and popular?
          </p>
          <p className="p5 h2">So I will become one truly?</p>
          <p className="p5 h3">And you will be creator of me</p>
          <p className="p5 h3"></p>
        </div>
        <div className="contactsection5">
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
        <div className="contactsection7">
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
