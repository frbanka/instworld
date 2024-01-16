import "./Home.css";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import onemilliondollars from "../../graphics/1milliondollars.png";
import stock from "../../graphics/stock.jpg";
import guywall from "../../graphics/guy_wall.jpg";
import experiment from "../../graphics/experiment.jpg";
import sky3 from "../../graphics/sky3.jpg";
import moneyhand from "../../graphics/money-hand.jpg";
import useScrollTriggeredCountUp from "./Trigger.js";

export const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const count = useScrollTriggeredCountUp(ref, 38);
  const count2 = useScrollTriggeredCountUp(ref2, 4747);
  const count3 = useScrollTriggeredCountUp(ref2, 8);
  return (
    <div className="hometext">
      <div className="homecontainer">
        <div className="homesectionbanner">
          <div className="banner_left">
            <p className="banner_welcome">
              Welcome to official social experiment page.
            </p>
            <div className="banner_title">
              "Money is not a thing, but a social relation"
            </div>
            <div className="banner_title_descr">
              Karl Marx once said. That pretty simple sentence is the main
              reason why this page and project came to life.
            </div>
            <a href="#money" className="banner_button">
              JOIN IN
            </a>
          </div>
          <div className="banner_right">
            <img
              src={onemilliondollars}
              alt="pent"
              className="banner_img"
            ></img>
          </div>
        </div>
        <div className="homesection2">
          <img
            src={experiment}
            alt="experiment"
            className="experiment_photo"
          ></img>
          <img src={guywall} alt="guy" className="guywall_photo"></img>
        </div>
        <div className="homesection23" id="money">
          <div className="h1">What is money?</div>
          <div className="h4 p4 hs23">
            As Wikipedia says: money is any item or verifiable record that is
            generally accepted as payment for goods and services and repayment
            of debts, such as taxes, in a particular country or socio-economic
            context{" "}
          </div>
        </div>
        <div className="homesectionphoto">
          <img src={stock} alt="stock" className="stock_photo"></img>
          <div className="stock_text">
            <div className="h1">Did you know?</div>
            <div className="h4 p4">
              It has been reported that there is $37.4 Trillion worth of money
              in the world. However, with all the money that is not able to be
              tracked, it is estimated that the true figure is closer to $86
              Trillion, and when you include Cryptocurrencies the figure is
              almost $1.2 Quadrillion (1,200,000,000,000,000).
            </div>
          </div>
        </div>
        <div className="homesection3">
          <div className="experiment" id="level">
            <div className="h2" ref={ref}>
              There is approx. ${count} Trillion worth of money in the world
            </div>
          </div>
        </div>
        <div className="homesection4">
          <div className="much_desc">
            <div className="much_description">
              <div className="h1">Is it much?</div>
              <div className="p4 h4" ref={ref2}>
                Taking the total global population number ({count3} billion)
                that gives us approximately ${count2} per person
              </div>
            </div>
            <div className="much_photo">
              <img src={moneyhand} alt="pent" className="moneyhand"></img>
            </div>
          </div>
        </div>
        <div className="homesectionsky">
          <img src={sky3} alt="guy" className="sky3"></img>
        </div>
        <div className="homesection2323">
          <div className="h1">What all of that exactly means?</div>
          <div className="h4 p4 hs2323">
            To understand it, we need to get back to Karl Marx sentence and ask
            this question once again. If money is something that you give as
            payment (or repayment) how it is not a thing? Help me answer that by
            participating in this project{" "}
          </div>
          <a href="/project" className="hs2323_button">
            THE PROJECT
          </a>
        </div>
      </div>
    </div>
  );
};
