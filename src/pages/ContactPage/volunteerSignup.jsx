import "./Signup.css";
import Volunteer from "./Assets/volunteer.svg";

export default function volunteerSignup() {
  return (
    <div id="VolunteerSignup" className="Signup">
      <div className="Signup-left">
        <h1>Volunteer Signup</h1>
        <img src={Volunteer} alt="" />
        <p>
          Interested in volunteering at community service events?
        </p>
        <button class="signupFormBtn volunteerPinkBtn">click here!</button>
      </div>
      <div className="Signup-right">
        <h1>FAQ</h1>
        <label htmlFor="VolunteerEdit-q1">
          <h2>What is the Berkeley Project?</h2>
          <input type="checkbox" id="VolunteerEdit-q1" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
        <label htmlFor="VolunteerEdit-q2">
          <h2>
            How can I get involved in as a volunteer for the Berkeley
            Project?
          </h2>
          <input type="checkbox" id="VolunteerEdit-q2" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
        <label htmlFor="VolunteerEdit-q3">
          <h2>Question 3</h2>
          <input type="checkbox" id="VolunteerEdit-q3" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
        <label htmlFor="VolunteerEdit-q4">
          <h2>Question 4</h2>
          <input type="checkbox" id="VolunteerEdit-q4" />
          <p>
            The Berkeley Project matches volunteers with community service
            organizations to maintain a culture of community service and other
            cool things whoooooo description. The Berkeley project exists once
            upon a time and we are whoooooooooooo description description
          </p>
        </label>
      </div>
    </div>
  );
}
