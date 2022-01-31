import React, { useEffect } from "react";
import axios from "axios";

export default function BPDayToggle() {
  const [isBPDay, setBPDay] = React.useState(false);

  async function toggleBPDay() {
    axios.post("https://the-berkeley-project-website.appspot.com:8080/server/bpday");
    setBPDay(!isBPDay);
  }

  useEffect(() => {
    async function checkBPDay() {
      const res = await axios.get("https://the-berkeley-project-website.appspot.com:8080/server/bpday");
      setBPDay(res.data);
    }

    checkBPDay();
  });

  function BPDayString() {
    if (isBPDay) {
      return "The BP Day setting is currently ON.";
    }
    return "The BP Day setting is currently OFF.";
  }

  return (
    <div>
      <div className="ts-text">{BPDayString()}</div>
      <button type="button" onClick={toggleBPDay} className="ts-button">
        Toggle BP Day
      </button>
    </div>
  );
}
