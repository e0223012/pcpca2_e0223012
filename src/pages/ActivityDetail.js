import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const activity = state.activities.find(
    (a) => String(a.activityId) === id
  );

  if (!activity) return <h2>Activity not found</h2>;

  const efficiency =
    activity.workoutMinutes > 0
      ? activity.calorieBurned / activity.workoutMinutes
      : 0;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>Steps: {activity.steps}</p>
      <p>Calories: {activity.calorieBurned}</p>
      <p>Workout Minutes: {activity.workoutMinutes}</p>
      <p>Efficiency: {efficiency.toFixed(2)}</p>
    </div>
  );
};

export default ActivityDetail;
