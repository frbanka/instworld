import "./Project.css";
import hand from "../../graphics/hand.jpg";
import plant from "../../graphics/plant.jpg";
import dinner from "../../graphics/dinner.jpg";
import dinnermaking from "../../graphics/dinner-making.jpg";
import manyhands from "../../graphics/many-hands.jpg";
import moneyinhand from "../../graphics/money-in-hand.jpg";
import time from "../../graphics/time.png";
import trust from "../../graphics/trust.png";
import will from "../../graphics/will.png";
import ladder from "../../graphics/ladder.jpg";
import moneybag from "../../graphics/money-bag.jpg";
export const Project = () => {
  return (
    <div className="projecttext">
      <div className="projectcontainer2">
        <div className="projectsection1">
          <div className="prbanner_title h12 p1">
            Money is not a thing, but a social relation
          </div>
          <div className="p4 h3">
            and how this 'relation' circulates around the world?
          </div>
        </div>
      </div>
      <div className="projectcontainer">
        <div className="projectsection12">
          <div className="p3 pr12_left">
            <div className="h3">And what is money then?</div>
            <div className="p4 h5">
              The easiest way to understand it is this example: when you go to
              barber you want him to get your hairs done. He could do it for
              free if you were his friend. But if he's a stranger - you have to
              give him something for it.
            </div>
            <div className="p4 h3">You have to give him money.</div>
            <div className="p4 h5">
              Why? Because he knows that there are people willing to pay for
              this service, for skills he has and for his time - time he could
              use, for example, to meet with his friends.
            </div>
          </div>
          <div className="p2 pr12_right">
            <img src={hand} alt="hand" className="pr12_img"></img>
          </div>
        </div>
        <div className="projectsection2">
          <p className="h2">
            Ok, so you give barber money and now he can use it
          </p>
        </div>
        <div className="projectsection9">
          <div>
            <div className="prbarber h3">
              Lets say the <span className="font_barber">barber</span> wants to
              use the money at the groceries
            </div>
            <div className="prbarber h4 p4">
              He wants to buy food - but some vegetables, fruits, meat, snacks
              and drinks
            </div>
            <div className="prbarber h4 p4">
              He wants to make a dinner for friends.
            </div>
          </div>
          <div className="dinner_wrapper">
            <img src={dinner} alt="dinner" className="dinner"></img>
          </div>
        </div>
        <div className="projectsection23">
          <div className="prbarber2 p3 h2">
            A small digression - why food costs money?
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
            <div className="h1 p2">Because someone took their time</div>
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
                It required a lot of{" "}
                <span className="bold">work, time and willingness</span>. And
                the outcome of this 3 things is that you can easily go to
                grocery and pick whatever you like.
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
            <div className="h1 p4">
              Can you see why money are just a social relation?
            </div>
            <div className="p3 h4">
              They are usually only a reflection of few things - the quantity of
              a product you want to have or just the time it takes to provide a
              given service. Or both - time it takes to make a product.
            </div>
            <div className="p3 h4">
              So we can agree that money have no value in itself - they are just
              a symbol.
            </div>
            <div className="p3 h3">A symbol of having something in return.</div>
          </div>
        </div>
        <div className="projectsection5">
          <div className="pr5_wrapper">
            <img src={manyhands} alt="manyhands" className="manyhands"></img>
          </div>
        </div>
        <div className="projectsection8">
          <p className="h2">
            If you get paid for something - then you can pay someone else for
            something too.
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
              sure, 100%. They guarantee you that exchange will happen.
            </div>
            <div className="p4 h5">
              I mean, if you are a tattoo artist you can offer the barber a
              tattoo service for his service. But what if you trick him? Or what
              if he just doesn't want a tattoo?
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
        <div className="projectsection2">
          <p className="h2">
            That's why money were made for. You can choose what and when you
            want in return
          </p>
        </div>
        <div className="projectsectionphoto">
          <div className="prp_moneybag">
            <img src={moneybag} alt="moneybag" className="moneybag"></img>
          </div>
        </div>
        <div className="projectsection7">
          <div className="pr7">
            <div className="p2 h1">
              So let's get it together what money (or social relation) is in 3
              points:
            </div>
            <div className="p2 pr7_social">
              <img src={time} alt="time" className="time"></img>
              <div className="p5 h2">It is Time</div>
              <div className="p5 h5">
                The time (your time) you can devote for someone
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
        <div className="projectsectionphoto p2">
          <img src={ladder} alt="ladder" className="ladder"></img>
        </div>
        <div className="projectsection8">
          <div className="h2">Social relation in social media</div>
          <div className="h4 p3">
            Most of today's social relations and money exchange takes place in
            the Internet. Place, where you can see more clearly how money become
            just a 'relation' and have nothing to do with real goods or
            services. After further consideration - they don't have any value at
            all. And you can get them - almost for nothing.
          </div>
          <div className="p4">
            <a href="/social" className="hs2323_button">
              SOCIAL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
