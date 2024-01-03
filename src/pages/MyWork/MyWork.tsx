import { NavLink } from "react-router-dom";
import "./MyWork.css";
export const MyWork = () => {
  return (
    <div className="workcontainer">
      <div className="worktext">
        <div className="worksection1">
          <div className="h12 p12">Important!</div>
          <p className="h3 p3">
            Every single donate will be listed on this website (on Donate page)
            - with a donors name, nick, instagram nickname, link to your youtube
            channel, your OF page - whatever you leave me in the donate
            feedback. <br></br>
            Even your photo.
          </p>
        </div>
        <div className="worksection2">
          <p className="h1 p4">The Goals</p>
          <p className="h3 p5">
            I am not sure if we will reach a million here or just few bucks.. or
            maybe we will reach even more, like few millions.. Whatever it will
            be, I came up with some Goals (something like 'rewards' on
            Kickstarer or 'perks' on Indiegogo)
          </p>
          <p className="h2 p5">Why this is not a crowdfunding page? See FAQ</p>
        </div>
        <div className="worksection3">
          <p className="h2 p3">
            Coming up with the Goals I wanted it to be something that gives you
            a REAL feeling of being a part of this experiment
          </p>
          <p className="p4 h3">
            Something that you can use, really like or maybe interact with.
          </p>
          <p className="p4 h4">
            It has to be the something very fun and entertaining for You
          </p>
          <p className="p4 h3">
            Similar to those things You can get from other Creators, but a
            little bit more.. interactive
          </p>
        </div>
        <div className="worksection4">
          <p className="h12 p2">So here are the Goals</p>
          <p className="p5 h4">(the value is the sum of all donations)</p>
        </div>
        <div className="worksection5">
          <p className="p5 h3">Starting with 10$</p>
          <p>
            <ul className="h5">
              <li>
                What can I do for 10$? Not much, you say..?<br></br>FALSE!
                <br></br>The first donations will be the most important
                donations of all. After the experiment end, the first donators
                will receive a personal gift from me, including a postcard sent
                from the first vacation I will go to, and, what's more
                important, I will meet with them in person (we'll work out the
                details later).<br></br>Let's say - the first 5 people who make
                a donate at least 2$ value<br></br>(2$ multiply by 5 is 10$)
              </li>
            </ul>
          </p>
          <p className="p5 h3">Then - 100$</p>
          <p>
            <ul className="h5">
              <li>
                To make this more fair - every donate made of value 10$ or more
                will get a postcard from me
              </li>
              <li>After I get 100$ from all donations</li>
            </ul>
          </p>
          <p className="p5 h3">Maybe - 1.000$ ?</p>
          <p className="p5 h3">Something bigger - 10.000$</p>
          <p className="p5 h3">Is this real? - 100.000$</p>
          <p className="p5 h3">Nope. We never get here - 1.000.000$</p>
          <p className="p5 h3">Nope x2 - 2.000.000$</p>
          <p className="p5 h3">In the middle of insanity - 5.000.000$</p>
          <p className="p5 h3">Just for fun - 10.000.000$</p>
          <p className="p5 h3">More? Just stop..</p>
        </div>
        <div className="worksection10">
          <p className="p2 h5">#onemilliondollarman</p>
        </div>
      </div>
    </div>
  );
};
