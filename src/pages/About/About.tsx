import "./About.css";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="text">
        <h1 className="h1">Okay, so this is the main question:</h1>
        <h2 className="h2">Why ?</h2>
        <p>Here is an answer:</p>
        <p className="answer2">Why not?</p>
        <p>Seriously, think about it.</p>
        <p className="p2">
          Why would anybody give their money to people in the internet, people
          they never seen (and will never see) in real life, in person?
        </p>
        <p>
          Lot of people support gamers, streamers, youtubers, strippers,
          instagram celebrities etc. Why?
        </p>
        <p>Because..</p>
        <p>
          They work hard?<br></br>They make a world a better place?
        </p>
        <p>No.</p>
        <p>They do it for money.</p>
        <p className="p2">Your money</p>
        <p>They sell their bodies</p>
        <p className="p2">Their privacy, their time</p>
        <p className="p2">Their butts</p>
        <p className="p2">They talk and laugh with friends</p>
        <p className="p2">Get you excited </p>
        <p className="p2">Horny</p>
        <p className="p2">and whatever..</p>
        <p>Their goal is - to get more money</p>
        <p className="p2">Be more popular</p>
        <p className="p2">Then get more money</p>
        <p className="p2">
          To buy cars, go on vacation, party, eat, drink, buy clothes, houses,
          more cars, have top-high-end life
        </p>
        <p>So why people support them?</p>
        <p>Because they can.</p>
        <p className="p2">Because the want to.</p>
        <p>
          Thats why You can do the same here. <br></br>If you want, of course
        </p>
        <p>YOU CAN BECOME A PART OF THIS EXPERIMENT</p>
        <p className="p2">(if you want to)</p>
        <p>But what can I give you? What would have get from it?</p>
        <p className="p2">Hmm..</p>
        <p>
          <NavLink
            to="/money"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            Everything.
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default About;
