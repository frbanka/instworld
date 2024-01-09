import { NavLink } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrap">
        <div className="footer_banner"></div>
        <div className="footer_pack">
          <div className="footer_item">
            <div className="footer_item_title h4">LINKS 1</div>
            <ul className="footer_links">
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
            </ul>
          </div>
          <div className="footer_item">
            <div className="footer_item_title h4">LINKS 1</div>
            <ul className="footer_links">
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
            </ul>
          </div>
          <div className="footer_item">
            <div className="footer_item_title h4">LINKS 1</div>
            <ul className="footer_links">
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
            </ul>
          </div>
        </div>
        <div className="footer_credits">
          <div className="p4 h5">#onemilliondollarman</div>
        </div>
      </div>
    </div>
  );
};
