import "./AboutPage.css";
import PositiveChange from "./assets/PositiveChange.svg";
import HandsOnImpact from "./assets/HandsOnImpact.svg";
import CommunityService from "./assets/CommunityService.svg";

export default function AboutPage() {
  return (
    <div className="AboutPage" id="aboutpage">
      <div className="FillViewport">
        <div className="FlexParent">
          <div className="LeftFlex">
            <div className="AboutTitle">
              <span>POSITIVE CHANGE</span>
              <img
                className="RightFlex MobileRight"
                src={PositiveChange}
                alt=""
              />
            </div>
            <div className="Description">
              The Berkeley Project aims to {" "}
              <mark className="color">permanently change </mark>
              the relationship between the students and residents of Berkeley
              through{" "}
              <mark className="color">
                hands-on and virtual community service.
              </mark>
            </div>
          </div>
          <img className="RightFlex DesktopRight" src={PositiveChange} alt="" />
        </div>

        <div className="FlexParent">
          <div className="LeftFlex">
            <div className="AboutTitle">
              <span>HANDS-ON IMPACT</span>
              <img
                className="RightFlex MobileRight"
                src={HandsOnImpact}
                alt=""
              />
            </div>
            <div className="Description">
              From working at elementary schools to planting trees, our
              volunteers devote a total of{" "}
              <mark className="color">12,000+ hours</mark> and save the City of
              Berkeley over
              <mark className="color"> $400,000 every year.</mark>
            </div>
          </div>
          <img
            className="RightFlex DesktopRight HandsOnImpactImgc"
            src={HandsOnImpact}
            alt=""
          />
        </div>

        <div className="FlexParent">
          <div className="LeftFlex">
            <div className="AboutTitle">
              <span>COMMUNITY SERVICE</span>
              <img
                className="RightFlex MobileRight"
                src={CommunityService}
                alt=""
              />
            </div>
            <div className="Description">
              The Berkeley Project hosts one
              <mark className="color"> large-scale community service </mark>
              even every semester. Berkeley Project Day is a{" "}
              <mark className="color">2,000 person event </mark> where
              volunteers work on service projects throughout the City of
              Berkeley.
            </div>
          </div>
          <img
            className="RightFlex DesktopRight"
            src={CommunityService}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
