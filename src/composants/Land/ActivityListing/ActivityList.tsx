import React from "react";

function ActivityList(props) {
  return (
    <div>
      {props.activities &&
        props.activities.map((activity) => (
          <div key={activity._id}>
            <hr />
            <h3>{activity._id}</h3>
            <h3>{activity.label}</h3>
            <h3>{activity.clientMax}</h3>
            <h3>{activity.description}</h3>
            <div>
              <select>
                {activity.disponibility.map((dispo) => (
                  <option key={dispo._id}>
                    {dispo.startOfDay} {dispo.startOfHour}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ActivityList;
