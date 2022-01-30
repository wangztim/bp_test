import React, { useEffect } from "react";
import axios from "axios";
import "./FAQPage.css";

export default function FAQPage() {
  const [isBPDay, setBPDay] = React.useState(null);
  useEffect(() => {
    async function checkBPDay() {
      const res = await axios.get("http://localhost:8000/server/bpday");
      setBPDay(res.data);
    }

    checkBPDay();
  }, []);

  if (isBPDay !== null) {
    return (
      <div className="FAQPage">
        <div className={`FAQtop FAQsub ${isBPDay ? "" : "dn"}`}>
          <h1>BP Day FAQ</h1>
          <label htmlFor="v-q1">
            <h2>What is the Berkeley Project?</h2>
            <input type="checkbox" id="v-q1" />
            <p>
              The Berkeley Project matches volunteers with community service
              organizations to maintain a culture of community service and other
              cool things whoooooo description. The Berkeley project exists once
              upon a time and we are whoooooooooooo description description
            </p>
          </label>
          <label htmlFor="v-q2">
            <h2>
              How can I get involved in as a site planner for the Berkeley
              Project?
            </h2>
            <input type="checkbox" id="v-q2" />
            <p>
              The Berkeley Project matches volunteers with community service
              organizations to maintain a culture of community service and other
              cool things whoooooo description. The Berkeley project exists once
              upon a time and we are whoooooooooooo description description
            </p>
          </label>
          <label htmlFor="v-q3">
            <h2>Question 3</h2>
            <input type="checkbox" id="v-q3" />
            <p>
              The Berkeley Project matches volunteers with community service
              organizations to maintain a culture of community service and other
              cool things whoooooo description. The Berkeley project exists once
              upon a time and we are whoooooooooooo description description
            </p>
          </label>
          <label htmlFor="v-q4">
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
        <div className="FAQbottom">
          <div className="FAQleft FAQsub">
            <h1>Volunteer FAQ</h1>
            <label htmlFor="v-q1">
              <h2>What is the Berkeley Project?</h2>
              <input type="checkbox" id="v-q1" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
            <label htmlFor="v-q2">
              <h2>
                How can I get involved in as a site planner for the Berkeley
                Project?
              </h2>
              <input type="checkbox" id="v-q2" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
            <label htmlFor="v-q3">
              <h2>Question 3</h2>
              <input type="checkbox" id="v-q3" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
            <label htmlFor="v-q4">
              <h2>Question 4</h2>
              <input type="checkbox" id="SiteEdit-q4" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
          </div>
          <div className="FAQright FAQsub">
            <h1>Site FAQ</h1>
            <label htmlFor="s-q1">
              <h2>What is the Berkeley Project?</h2>
              <input type="checkbox" id="s-q1" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
            <label htmlFor="s-q2">
              <h2>
                How can I get involved in as a site planner for the Berkeley
                Project?
              </h2>
              <input type="checkbox" id="s-q2" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
            <label htmlFor="s-q3">
              <h2>Question 3</h2>
              <input type="checkbox" id="s-q3" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
            <label htmlFor="s-q4">
              <h2>Question 4</h2>
              <input type="checkbox" id="s-q4" />
              <p>
                The Berkeley Project matches volunteers with community service
                organizations to maintain a culture of community service and
                other cool things whoooooo description. The Berkeley project
                exists once upon a time and we are whoooooooooooo description
                description
              </p>
            </label>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}
