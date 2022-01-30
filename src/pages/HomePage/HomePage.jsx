import "./HomePage.css";
import { Link } from "react-router-dom";
import React from "react";
import HomePageGallery from "./HomePageGallery";

export default function HomePage() {
  return (
    <div id="homepage">
      <div id="HomePage-gallerydiv">
        <HomePageGallery />
      </div>
      <div id="HomePage-bannerdiv">
        <div id="HomePage-topbanner">
          <span id="HomePage-bannerjoinus">JOIN US</span>
          <br />
          <span id="HomePage-bannerdate">November 5th 2021</span>
        </div>
        <div id="HomePage-bkdescription">
          The Berkeley Project matches volunteers with community service
          organizations to maintain a culture of community service and other
          cool things whoooooo description. The Berkeley project exists once
          upon a time and we are whoooooooooooo description description.
        </div>
        <Link to="/volunteer-signup">
          <div className="HomePage-signupbutton" id="signVolunteer">
            I&apos;m a volunteer
          </div>
        </Link>
        <Link to="/site-signup">
          <div className="HomePage-signupbutton" id="signSite">
            I&apos;m a site
          </div>
        </Link>
      </div>
    </div>
  );
}
