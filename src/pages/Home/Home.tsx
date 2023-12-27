import "./Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className="homecontainer">
      <div className="hometext">
        <h1 className="h1">
          Hello stranger! Welcome to my official social experiment page
        </h1>
        <h2 className="h2">
          Before we start - remember - you don't have to do anything here, you
          don't have to buy, send money, give feeback - nothing!
        </h2>
        <p className="p2">It is your choice why you are here</p>
        <p className="answer2">So.. what social experiment?</p>
        <p>Let me tell you a short story:</p>
        <p>
          One random day I woke up with a tought and asked myself a question:
        </p>
        <p className="p2">
          "can anybody, any random person, become a milionare just like that?"
        </p>
        <p className="p2">Or.. </p>
        <p className="p2">Do you have to be famous? Genius? Beautiful?</p>
        <p className="p2">Do you have to work hard? Day and night?</p>
        <p className="p2">
          Do you have to have many talents, sing or dance well, be great stock
          investor, soccerplayer, actor?
        </p>
        <p className="p2">
          Do you need to stream games on twitch, be an instagram model, make
          asmr videos, show funny cats on youtube?
        </p>
        <p className="p2">
          Or maybe you need to invent something? <br></br>Sell great idea - make
          car that uses water to drive?
        </p>
        <p className="p2">Or maybe not?</p>
        <p className="p2">Maybe..</p>
        <p>None of the above?</p>
        <p className="p2">So how?</p>
        <p>Simple.</p>
        <p>Maybe other people will do it for you?</p>
        <p></p>
        <p>So, this is the clue of the experiment</p>
        <p>
          Let me prove that money can come for nothing.<br></br>I can achieve
          that with your help.
        </p>
        <p className="p2">Lets say..</p>
        <p className="p2">Help me gather 1 milion Dollars</p>
        <p className="p2">1 000 000 $</p>
        <p className="p2">
          You can share with 100$<br></br> 10$<br></br> 1$<br></br>or a penny
        </p>
        <p className="p2">Or do some other stuff (see page here: xx )</p>
        <p>Or say: "f*ck you man"</p>
        <p>Whatever you want to do.. You propably think:</p>
        <p className="p2">
          <NavLink
            to="/why"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            "Why would I ever give you anything?!"
          </NavLink>
        </p>
      </div>
    </div>
  );
};
