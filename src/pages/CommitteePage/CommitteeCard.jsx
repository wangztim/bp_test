import "./CommitteeCard.css";
import SitePlanningImage from "./assets/SitePlanningImg.jpg";
import VolunteerCoordinationImage from "./assets/VolunteerCoordinationImg.jpg";
import FinancialAffairsImage from "./assets/FinancialAffairsImg.jpg";
import WebImage from "./assets/WebImg.jpg";
import MarketingImage from "./assets/MarketingImg.jpg";
import EventPlanningImage from "./assets/EventPlanningImg.jpg";

export default function CommitteeCard(props) {
  const { id } = props;

  const dictionary = {
    1: [
      "Site Planning",
      "Nicole and Sally",
      SitePlanningImage,
      "Site Planning is in charge of acquiring the site logistics for all BP Days. Using lists of past sites compiled from previous years and new sites from individual research and network, Site Planning co-directors and committee members have the task of contacting community organizers and city workers regarding projects for BP Days. The information gathered via phone calls and e-mails must be neatly recorded in a Google document that will be shared with all BP Core Members.",
    ],
    2: [
      "Volunteer Coordination",
      "Charles and Tong",
      VolunteerCoordinationImage,
      "Volunteer Committee is responsible for creating the Site Leader/Volunteer application and selecting Site Leaders. From here, we plan and train Site Leaders to be effective points of contact and organizers of their respective volunteers. Ultimately, we are responsible for every Site Leader and Volunteer on BP Day (roughly 2,000 people) to ensure the event runs smoothly! :)",
    ],
    3: [
      "Financial Affairs",
      "Theresa and Nikita",
      FinancialAffairsImage,
      "Description about Financial Affairs.",
    ],
    4: [
      "Web",
      "Gaurav and Stephanie",
      WebImage,
      "Web is responsible for updating and maintaining the berkeleyproject.org website and sorting volunteer/site leader applications. We communicate with other committees to provide important updates to the Berkeley Project community! This committee is a creative and diverse space open for students to take on individual projects (i.e. tabling bot) or expansion projects (i.e. redesign graphics, new subpages).",
    ],
    5: [
      "Marketing",
      "Alice and Conor",
      MarketingImage,
      "Description about Marketing",
    ],
    6: [
      "Event Planning",
      "Abby and Lim",
      EventPlanningImage,
      "We organize the logistics of Berkeley Project Day, help fundraise, plan the BP Day before/after event, reach out to campus organizations, help strategize the BP Day theme all while getting to interact a little with every team. Our goal is to help coordinate the logistics of BP Day to bring together students and the community through volunteering. We love meeting all the diverse student groups on campus and getting them excited about giving back.",
    ],
  };

  function CommitteeCardDisplay() {
    if (id % 2 === 0) {
      return (
        <div className="cFlexParent">
          <div className="cLeftFlex">
            <div className="cAboutTitle">
              <span>{dictionary[id][0]}</span>
              <img
                className="cRightFlex cMobileRight"
                src={dictionary[id][2]}
                alt=""
              />
            </div>
            <div className="cDescription">{dictionary[id][3]}</div>
          </div>
          <img
            className="cRightFlex cDesktopRight"
            src={dictionary[id][2]}
            alt=""
          />
        </div>
      );
    }
    return (
      <div className="cFlexParent">
        <img
          className="cRightFlex cDesktopRight"
          src={dictionary[id][2]}
          alt=""
        />
        <div className="cLeftFlex">
          <div className="cAboutTitle">
            <span>{dictionary[id][0]}</span>
            <img
              className="cRightFlex cMobileRight"
              src={dictionary[id][2]}
              alt=""
            />
          </div>
          <div className="cDescription">{dictionary[id][3]}</div>
        </div>
      </div>
    );
  }

  return <div>{CommitteeCardDisplay()}</div>;
}
