import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const DatePicker = () => {
  const [availabilityDay, setAvailabilityDay] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setAvailabilityDay} value={availabilityDay} />
      {console.log(availabilityDay)}
    </div>
  );
};
