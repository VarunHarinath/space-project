import React from "react";
import Activitycomponent from "../components/ActivitiesComponent.jsx/Activitycomponent";
import OnlineBooking from "../components/ActivitiesComponent.jsx/OnlineBooking";

const Activities = () => {
  return (
    <>
      <div className="mb-12">
        <Activitycomponent />
      </div>
      <div>
        <OnlineBooking />
      </div>
    </>
  );
};

export default Activities;
