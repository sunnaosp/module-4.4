import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { useEffect, useState } from "react";

function Panel(props) {
  const getTimeFromResponse = (r) => {
    var date = new Date(r);
    var hr = date.getHours();
    var min = date.getMinutes();
    if (min.toString().length == 1) min = "0" + min;
    return `${hr}:${min}`;
  };

  // I use an api to get the current time and display it in this component
  const [time, setTime] = useState("");
  const setTimeFromApi = () => {
    fetch("http://worldclockapi.com/api/json/utc/now")
      .then((r) => r.json())
      .then((r) => setTime(getTimeFromResponse(r.currentDateTime)));
    setTimeout(setTimeFromApi, 10000);
  };
  useEffect(() => setTimeout(setTimeFromApi, 10), []);
  return (
    <div className="score-panel">
      <h4>{time}</h4>
    </div>
  );
}
export default Panel;
