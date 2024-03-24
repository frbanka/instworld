import { NavLink } from "react-router-dom";
import "./Experiment.css";
import money1 from "../../graphics/money1.jpg";
import money2 from "../../graphics/money2.jpg";
import money3 from "../../graphics/money3.jpg";
import money4 from "../../graphics/money4.jpg";
import money5 from "../../graphics/money5.jpg";
export const Experiment = () => {
  return (
    <div className="experimenttext">
      <div className="experimentcontainer2">
        <div className="experimentsection1">
          <div className="experiment">EXPERIMENT</div>
        </div>
      </div>
      <div className="experimentcontainer">
        <div className="experimentsection2">
          <div className="h12 p2">I created this website</div>
          <div className="h3 p4">
            to be my first own project - to practice my web-designing skills
          </div>
          <div className="h4 p3">
            and by the way, to sum up todays Internet sociaty - to understand
            what people need or why they do all the things they do.
          </div>
          <div className="p3">
            <img src={money2} alt="experiment2" className="experiment2"></img>
          </div>
          <div className="ms2_right"></div>
        </div>
        <div className="experimentsection3">
          <div className="p3 h12">The Experiment is</div>
          <div className="p3 h3">
            to get at least 1 million dollars from donations
          </div>
        </div>
        <div className="experimentsection3">
          <p className="h1 p3">In other words</p>
          <p className="p4 h3">
            I want to become the first person in the Internet who became
            millionare totally for nothing - only because of generosity of
            thousands of people
          </p>
        </div>
        <div className="experimentsection4">
          <p className="h2 p2">
            All I ask you to is to make 1$ donation (or more!) on this page:
          </p>
          <p className="p5 h3">
            <a href="/pay" className="hs2323_button">
              DONATE
            </a>
          </p>
          <p className="p5 h4">
            Or you can help in other way - share this page on your social media
            profiles. But I encourage you to send 1$.
          </p>
          <p className="p5 h3"></p>
        </div>
        <div className="experimentsection5">
          <p className="p2 h1">What you will get from it?</p>
          <p className="p4 h3">Nothing.</p>
          <p className="p4 h3">Or maybe just a little one thing</p>
        </div>
        <div className="experimentsection7">
          <p className="h2 p2">
            I will put You (your name, nick or whatever you choose)
          </p>
          <p className="p5 h3">
            on the <a href="/pay">fames page</a>
          </p>
          <p className="p5 h4">
            And someday, when the project is succeed - you will not be
            forgotten. And you will have a chance to be famous. Or just have
            clear satisfaction that you could be a part of it.
          </p>
          <p className="p5 h4">
            Because maybe.. when you send one dollar to me it will start a chain
            reaction that will spread all over the world. Remember - money are
            social relation.
          </p>
          <div className="p4">
            <a href="/goals" className="hs2323_button">
              GOALS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
