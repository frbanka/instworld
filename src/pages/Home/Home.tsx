import "./Home.css";
import { NavLink } from "react-router-dom";
import pentimg from "../../graphics/pentagram.jpg";
export const Home = () => {
  return (
    <div className="hometext">
      <div className="homecontainer">
        <div className="homesectionbanner">
          <div className="banner_left">
            <div className="banner_title h12">
              "Money is not a thing, but a social relation"
            </div>
            <div className="banner_title_name">Karl Marx</div>
            <p className="h3">Welcome to my official social experiment page.</p>
          </div>
          <div className="banner_right">
            <img src={pentimg} alt="pent" className="banner_img"></img>
          </div>
        </div>
        <div className="homesectionphoto"></div>
        <div className="homesection2">
          <p className="h2"></p>
        </div>
        <div className="homesectionphoto"></div>
        <div className="homesection3">
          <div className="experiment">
            <p className="h1">So.. what is this experiment about?</p>
          </div>
          <div className="experiment_desc">
            <div className="ex_description">
              <p className="p3 h4">Let me tell you a short story.</p>
              <p className="p4 h5">
                One random day I woke up with a tought: 'can any random, regular
                person, become a milionare without having any inheritance or
                winning a lottery, just by doing nothing?'
              </p>
            </div>
            <div className="experiment_img">
              <img src={pentimg} alt="pent" className="ex_img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
