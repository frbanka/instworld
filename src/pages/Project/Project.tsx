import "./Project.css";
import { NavLink } from "react-router-dom";
import hand from "../../graphics/hand.jpg";
import plant from "../../graphics/plant.jpg";
import dinner from "../../graphics/dinner.jpg";
import dinnermaking from "../../graphics/dinner-making.jpg";
import manyhands from "../../graphics/many-hands.jpg";
import moneyinhand from "../../graphics/money-in-hand.jpg";
export const Project = () => {
  return (
    <div className="projecttext">
      <div className="projectcontainer">
        <div className="projectsection1">
          {" "}
          <div className="prbanner_title h12 p1">
            Money is not a thing, but a social relation
          </div>
          <div className="p4 h3">What does it mean?</div>
        </div>
        <div className="projectsection12">
          <div className="pr12_left">
            <div className="h4">
              It actually connects to definition that you can find in books or
              Wikipedia. People use money to get something done from someone
              else.
            </div>
            <div className="p5 h5">
              The first example that comes to mind: when you go to barber you
              want him to cut your hair. If he is your friend - he can do it for
              free. But if he's a stranger - you have to give him something for
              it. For donating his time for you. For using his skills and making
              you look good and happy.
            </div>
            <div className="p5 h4">Why he can't do it for free?</div>
            <div className="p5 h5">
              Because he knows that he can get money for that one way or
              another, or do something else, or he can meet with his friends at
              the same time instead of cutting your hair.
            </div>
          </div>
          <div className="pr12_right">
            <img src={hand} alt="pent" className="pr12_img"></img>
          </div>
        </div>
        <div className="projectsection2">
          <p className="h2">So, the barber gets your money and what then?</p>
        </div>
        <div className="projectsection23">
          <div className="prbarber h3">
            Let's say, the barber takes the money and enters the groceries
            store. He wants to buy food and make a dinner.
          </div>
        </div>
        <div className="projectsection23">
          <div className="dinner_wrapper">
            <img src={dinner} alt="dinner" className="dinner"></img>
          </div>
        </div>
        <div className="projectsection23">
          <div className="prbarber2 p3 h3">
            That's right, "buy". Why food costs money?
          </div>
          <div className="prbarber2 p4 h4">
            Every fruit and vegetable that grows on Earth, every animal that
            lives in here - on the planet that is own by no one (or maybe it
            is..?) - it belongs to every inhabitant of the Earth.
          </div>
          <div className="prbarber2 p3 h4">
            So why he needs the money? Why he needs money to buy a food?
          </div>
        </div>
        <div className="projectsection23">
          <div className="dinner_wrapper">
            <img
              src={dinnermaking}
              alt="dinnermaking"
              className="dinnermaking"
            ></img>
          </div>
        </div>
        <div className="projectsection3">
          <div className="pr3_title">
            <div className="h1">Because someone took their time to do this</div>
          </div>
          <div className="pr3_desc">
            <div className="pr3_img_container">
              <img src={plant} alt="plant" className="pr3_img"></img>
            </div>
            <div className="pr3_description">
              <p className="p3 h3">
                Someone planted it, took care of it and collect it
              </p>
              <p className="p5 h5">
                It requires a lot of work, time and willingness. The outcome of
                this three things is that you can easily go to grocery and pick
                whatever you like.
              </p>
              <p className="p5 h5">
                You can plant your own food - plant vegetables, raise animals
                and have food "for free". But most people prefer to pay for it
                to someone else, just to save their time and health.
              </p>
            </div>
          </div>
        </div>
        <div className="projectsection4">
          <div className="pr4">
            <div className="h2 p3">
              What is "money as social relation" in this barber-example?
            </div>
            <div className="p4 h4">
              You see, money are usually only a reflection of two things - the
              quantity of a given product or just the time it takes to provide a
              given service.
            </div>
            <div className="p3 h4">
              To make it simple, money is just a symbol.
            </div>
            <div className="p3 h3">A symbol of having something in return.</div>
          </div>
        </div>
        <div className="projectsection5">
          <div className="pr5_wrapper">
            <img src={manyhands} alt="manyhands" className="manyhands"></img>
          </div>
        </div>
        <div className="projectsection2">
          <p className="h2">
            Every type of money in different countries gives you one very
            important thing - a promise. A warranty.
          </p>
        </div>
        <div className="projectsection6">
          <div className="pr6">
            <div className="p4 h3">
              A warranty that you can and you will have something in return for
              sure, 100%.
            </div>
            <div className="p4 h5">
              I mean, you can tell barber that you will clean his house next day
              in exchange for cutting the hair. Or do something else he needs to
              be done. Maybe you are a tattoo artist and you will get him a
              tattoo? But what if you won't? Or he change his mind?
            </div>
            <div className="p4 h5">
              Thats why you give him this little paper thing. And he can
              exchange it for a tattoo whenever he wants.
            </div>
          </div>
          <div className="pr6_img">
            <img
              src={moneyinhand}
              alt="moneyinhand"
              className="moneyinhand"
            ></img>
          </div>
        </div>
        <div className="projectsection7">
          <div className="pr7">
            <div className="p2 h1">
              So finally - what is the social relation?
            </div>
            <div className="p2 pr7_social">
              <div className="p3 h3">It is Time</div>
              <div className="p5 h5">
                The time - your time you can use for someone
              </div>
              <div className="p3 h3">Trust</div>
              <div className="p5 h5">
                so he or she can be 100% sure and not to be dissapointed
              </div>
              <div className="p3 h3">and Willingness</div>
              <div className="p5 h5">Trust</div>
            </div>
          </div>
        </div>
        <div className="projectsection8"></div>
      </div>
    </div>
  );
};
