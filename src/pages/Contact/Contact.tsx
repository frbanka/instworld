import { NavLink } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="text">
        <h1 className="h1">Is it bad?</h1>
        <h2 className="h2">No</h2>
        <p className="answer">Everybody wants money</p>
        <p className="answer2">Everybody needs money</p>
        <p>And everybody deserves it.</p>
        <p>
          To have good life. To have nice car. To buy clothes they like. To have
          new phone. Eat great food.
        </p>
        <p>
          They work hard?<br></br>They do it just for you?
        </p>
        <p>No.</p>
        <p>They do it for money.</p>
        <p className="p2">Your money</p>
        <p>They sell their bodies</p>
        <p className="p2">Their privacy, their time</p>
        <p className="p2">Their boobs, butts</p>
        <p className="p2">They talk, laugh </p>
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
        <p className="p2">
          <NavLink
            to="/money"
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "none" }
                : { textDecoration: "none" };
            }}
          >
            is it bad?
          </NavLink>
        </p>
      </div>
    </div>
  );
};
