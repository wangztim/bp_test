import "./ContactPage.css";
import { Link } from "react-router-dom";
import Volunteer from "./Assets/volunteer.svg";
import Site from "./Assets/site.svg";

export default function ContactPage() {
  return (
    <div id="contactpage">
      <h1 className="contactTitle">CONTACT US</h1>
      <div className="contactMain">
        <div className="contactBox contactBox-blue">
          <div>
            <h2>Site Planning</h2>
            <img src={Site} className="contactPictures" alt="volunteer" />
            <p>
              Want to host
              <span class="boldText"> IMPACTFUL </span>
              volunteer events?
            </p>
          </div>
          <Link to="/site-signup">
            <button type="button">click here!</button>
          </Link>
        </div>
        <div className="contactBox contactBox-pink">
          <div>
            <h2>Volunteer Planning</h2>
            <img src={Volunteer} className="contactPictures" alt="volunteer" />
            <p>
              Want to
              <span class="boldText"> GIVE BACK </span>
              to the community?
            </p>
          </div>
          <Link to="/volunteer-signup">
            <button type="button">click here!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
