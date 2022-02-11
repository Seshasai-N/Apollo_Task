import React from "react";
import moment from "moment";

const Booking = () => {
  const timelineLabels = (desiredStartTime, interval, period) => {
    const periodsInADay = moment.duration(1, "day").as(period);

    // convert into something like a unix timestamp by adding a date

    const timeLabels = [];
    const startTimeMoment = moment(desiredStartTime, "hh:mm");
    for (let i = 0; i <= 180 / 20; i++) {
      startTimeMoment.add(i === 0 ? 0 : interval, period);
      timeLabels.push(startTimeMoment.format("hh:mm A"));
    }
    console.dir(timeLabels);
    return timeLabels;
  };
  return <></>;
};

export default Booking;
