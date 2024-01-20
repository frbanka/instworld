import "./Project.css";
import { NavLink } from "react-router-dom";
import hand from "../../graphics/hand.jpg";
import plant from "../../graphics/plant.jpg";
import dinner from "../../graphics/dinner.jpg";
import dinnermaking from "../../graphics/dinner-making.jpg";
import manyhands from "../../graphics/many-hands.jpg";
import moneyinhand from "../../graphics/money-in-hand.jpg";
import time from "../../graphics/time.png";
import trust from "../../graphics/trust.png";
import will from "../../graphics/will.png";
import beach from "../../graphics/beach.jpg";
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
            <div className="p4 h5">
              The first example that comes to mind: when you go to barber you
              want him to cut your hair. If he is your friend - he can do it for
              free. But if he's a stranger - you have to give him something for
              it. For donating his time for you and using his skills.
            </div>
            <div className="p4 h4">Why he can't do it for free?</div>
            <div className="p4 h5">
              Because he knows that there are people willing to pay for this
              service, for his time - time he could use, for example, to meet
              with his friends.
            </div>
          </div>
          <div className="pr12_right">
            <img src={hand} alt="pent" className="pr12_img"></img>
          </div>
        </div>
        <div className="projectsection2">
          <p className="h2">So, you give barber money and what then?</p>
        </div>
        <div className="projectsection23">
          <div className="prbarber h3">
            Lets say the barber wants to use the money at the groceries - he
            wants to buy food and make a dinner.
          </div>
        </div>
        <div className="projectsection23">
          <div className="dinner_wrapper">
            <img src={dinner} alt="dinner" className="dinner"></img>
          </div>
        </div>
        <div className="projectsection23">
          <div className="prbarber2 p3 h2">
            That's right, 'buy'. Why food costs money?
          </div>
          <div className="prbarber2 p3 h4">
            You could say, that every fruit and vegetable that grows on Earth,
            every animal that lives on this planet - it belongs to every
            inhabitant of the Earth.
          </div>
          <div className="prbarber2 p3 h4">
            So why you have to pay for it? Why you need money to buy a food?
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
            <div className="h1">Because someone took their time</div>
          </div>
          <div className="pr3_desc">
            <div className="pr3_img_container">
              <img src={plant} alt="plant" className="pr3_img"></img>
            </div>
            <div className="pr3_description">
              <p className="p3 h3">
                Someone took the time to plant, care for and harvest
              </p>
              <p className="p5 h5">
                It required a lot of work, time and willingness. And the outcome
                of this 3 things is that you can easily go to grocery and pick
                whatever you like.
              </p>
              <p className="p5 h5">
                Of course, you can plant your own vegetables and fruits, raise
                animals and have food 'for free'. But most people prefer to pay
                for someone else to do it, just to save their time and energy.
              </p>
            </div>
          </div>
        </div>
        <div className="projectsection4">
          <div className="pr4">
            <div className="h2 p4">
              Can you see money as social relation in this example?
            </div>
            <div className="p3 h4">
              Money are usually only a reflection of few things - the quantity
              of a product you want to have or just the time it takes to provide
              a given service. Or both - time it takes to make a product.
            </div>
            <div className="p3 h4">
              You can agree with me that money is just a symbol.
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
            If you get paid for doing something - you can pay then someone else
            to do something.
          </p>
        </div>
        <div className="projectsection6">
          <div className="pr6">
            <div className="p4 h3">
              But there is one important thing that money provides - a warranty.
              A promise.
            </div>
            <div className="p4 h5">
              A promise, that you can and you will have something in return for
              sure, 100%. I mean, if you are a tattoo artist you can offer the
              barber a tattoo service for cutting the hair. But what if you
              trick him? Or what if he just doesn't want tattoo?
            </div>
            <div className="p4 h5">
              Thats why we use money. We can exchange it for a tattoo or for
              whatever and whenever we want.
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
              So finally - what is a 'social relation'?
            </div>
            <div className="p2 pr7_social">
              <img src={time} alt="time" className="time"></img>
              <div className="p5 h2">It is Time</div>
              <div className="p5 h5">
                The time (your time) you can devote to someone
              </div>
              <img src={trust} alt="trust" className="p3 trust"></img>
              <div className="p5 h2">Trust</div>
              <div className="p5 h5">
                so that someone can be 100% sure of your intentions
              </div>
              <img src={will} alt="will" className="p3 will"></img>
              <div className="p5 h2">and Willingness</div>
              <div className="p5 h5">
                Sincere desire, will to take any action
              </div>
            </div>
          </div>
        </div>
        <div className="projectsection6 p2">
          <img src={beach} alt="beach" className="beach"></img>
        </div>
        <div className="projectsection8">
          <div className="h2">It is the heart of this project</div>
          <div className="h4 p3">
            Let me explain you why I am telling you all of this, what is this
            project all about and how you could participate. And then you will
            decide if you want or not.
          </div>
          <div className="p4">
            <a href="/project" className="hs2323_button">
              THE IDEA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
