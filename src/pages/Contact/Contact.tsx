import { NavLink } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="contacttext">
        <div className="contactsection1">
          <div className="h12 p12">The Money Counter</div>
          <p className="h1 p3">0,00 $</p>
        </div>
        <div className="contactsection2">
          <p className="h2 p3">
            Every single donate will be added and updated in the Counter above,
            once a day
          </p>
          <p className="h3 p5">
            Every single donate will be listed on this website - with a donors
            name, nick, instagram nickname, link to your youtube channel, your
            OF page - whatever you leave me in the donate feedback. <br></br>
            Even your photo.
          </p>
          <p className="h2 p5">And that's it?</p>
        </div>
        <div className="contactsection3">
          <p className="h1 p3">Nope.</p>
          <p className="p4 h3">
            With more and more money on The Counter, with more and more donates,
            I will start to spend the donated money
          </p>
          <p className="p4 h4">
            Every single use (buy) of large amount (see{" "}
            <NavLink
              to="/goals"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              The Goals page
            </NavLink>
            ) - I will share with the everybody on my instagram channel
          </p>
          <p className="p4 h3">
            If you are a donator (or if you are not) - you are welcome to
            contact with me anytime (see{" "}
            <NavLink
              to="/pay"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              Donate page
            </NavLink>
            )
          </p>
        </div>
        <div className="contactsection4">
          <p className="h12 p2">You can write and send me anything</p>
          <p className="p5 h2">And I promise to reply</p>
        </div>
        <div className="contactsection5">
          <p className="p1 h2">
            (I still regret not buying Bitcoin 12 years ago for 3$.. Because I
            thought it was stupid and waste of money)
          </p>
          <p className="p3 h2">
            <NavLink
              to="/goals"
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none" }
                  : { textDecoration: "none" };
              }}
            >
              See here
            </NavLink>
          </p>
          <p className="p4 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};
