import "./Signup.css";
import Site from "./Assets/site.svg";
import { check } from "prettier";

export default function siteSignup() {
  return (
    <div id="SiteSignup" className="Signup">
      <div className="Signup-left">
        <h1>Site Signup</h1>
        <img src={Site} alt="" />
        <p>
          Interested in hosting community service events?
        </p>
        <button class="signupFormBtn signupBlueBtn">click here!</button>
      </div>
      <div className="Signup-right">
        <h1>FAQ</h1>
        <label htmlFor="SiteEdit-q1">
          <h2>What is the Berkeley Project?</h2>
          <input type="checkbox" id="SiteEdit-q1" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
        <label htmlFor="SiteEdit-q2">
          <h2>
            How can I get involved in as a site planner for the Berkeley
            Project?
          </h2>
          <input type="checkbox" id="SiteEdit-q2" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
        <label htmlFor="SiteEdit-q3">
          <h2>Question 3</h2>
          <input type="checkbox" id="SiteEdit-q3" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
        <label htmlFor="SiteEdit-q4">
          <h2>Question 4</h2>
          <input type="checkbox" id="SiteEdit-q4" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
      </div>
    </div>
    /*
    <div id="siteSignup" className="box">
      <div className="leftBox">
        <div className="components">
          <h1 className="leftText components">Site Signup</h1>
        </div>
        <div className="components leftMobile">
          <div className="centerSiteIcon">
            <img src={Site} className="leftPicture" alt="site" />
          </div>
          <h1 className="leftDescrip components">
            Interested in hosting community service events? Click on the button
            below!
          </h1>
        </div>
      </div>
      <div className="rightBox">
        <h1 className="rightTitle">FAQ</h1>
        <button className="faqBtn" type="button">
          What is the Berkeley Project?
        </button>
        <button className="faqBtn" type="button">
          How can I get involved in as a site planner for the Berkeley Project?
        </button>
        <button className="faqBtn" type="button">
          Question 3
        </button>
        <button className="faqBtn" type="button">
          Question 4
        </button>
      </div>
    </div>
    */
  );
}
