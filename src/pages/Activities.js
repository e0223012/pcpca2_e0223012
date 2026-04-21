import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Activities = () => {
  const { state } = useContext(AppContext);

  console.log("DATA:", state.activities);

  return (
    <div>
      <h2>Activities</h2>

      {/* TEMP DEBUG: show raw data */}
      <pre>{JSON.stringify(state.activities, null, 2)}</pre>
    </div>
  );
};

export default Activities;