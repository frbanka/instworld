import "./Project.css";
import { NavLink } from "react-router-dom";
import pentimg from "../../graphics/pentagram.jpg";
export const Project = () => {
  return (
    <div className="projecttext">
      <div className="projectcontainer">
        <div className="projectsectionbanner">
          <div className="banner_left">
            <div className="banner_title h12">
              Money is not a thing, but a social relation
            </div>
            <div className="banner_title_name">Karl Marx</div>
            <p className="h3">
              Welcome to my official social experiment page. Before we start,
              just remember:
            </p>
            <p className="h4">
              You don't have to do anything here, you don't have to download,
              buy, donate money, give feeback - nothing!
            </p>
          </div>
          <div className="banner_right">
            <img src={pentimg} alt="pent" className="banner_img"></img>
          </div>
        </div>
        <div className="projectsectionphoto"></div>
        <div className="projectsection2">
          <p className="h2">
            Being a part of this experiment it is your choice
          </p>
        </div>
        <div className="projectsectionphoto"></div>
        <div className="projectsection3">
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
        <div className="projectsectionphoto"></div>
        <div className="projectsection4">
          <p className="h2 p3">
            Or maybe ONLY when you work hard every day and night?
          </p>
          <p className="p4 h3">
            Or maybe.. you need to become an Internet Star?
          </p>
          <p className="p4 h4">
            Become a streamer on Twitch or Youtube, be instagram model or
            influencer? Tiktoker?<br></br>Start making ASMR videos?
          </p>
        </div>
        <div className="projectsection5">
          <p className="p3 h2">Or maybe start an OnlyFans page?</p>
          <p className="p3 h3">With your nude photos?</p>
        </div>
        <div className="projectsectionphoto"></div>
        <div className="projectsection6">
          <p className="p3 h1">Maybe not.</p>
          <p className="p4 h3">
            But we need to find answer to one more important question
          </p>
        </div>
        <div className="projectsectionphoto"></div>
        <div className="projectsection7">
          <p className="p2 h3">
            How all of these internet celebrities that became so famous and
            rich, do that?
          </p>
          <p className="p4 h2">I know you know the answer</p>
        </div>
        <div className="projectsection8">
          <p className="p2 h1">Partnership & Sponsorship.</p>
          <p className="p3 h2">And donations.</p>
        </div>
        <div className="projectsectionphoto"></div>
        <div className="projectsection4">
          <p className="p2 h2">
            But why companies, brands or just other people pay to Instagram
            influencers, Youtubers, streamers etc.?
          </p>
          <p className="p3 h3">
            <NavLink
              to="/why"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              Why ➡
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};
