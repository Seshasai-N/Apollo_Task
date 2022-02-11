import React, { useState, useEffect } from "react";
import Infocard from "components/info-card";
import Booking from "components/booking";
import { useParams, Link } from "react-router-dom";
import data from "lib/data";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BookingSlot = () => {
  const { clinic, doctor } = useParams();
  const [suuccess, setSuccess] = useState(false);
  const [doctorInfo, setInfo] = useState({});
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelected] = useState("");
  const [bookedSlots, setBooked] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const doctordata = data[clinic].find((info) => info.doctor === doctor);
    setInfo(doctordata);
    getTimeLines(doctordata.from, doctordata.to);
    if (doctordata.appointments.length > 0) {
      const bookedSlotTimes = [];
      doctordata.appointments.forEach((e) => {
        console.log(e);
        bookedSlotTimes.push(e.slot);
      });

      setBooked(bookedSlotTimes);
    }
  }, []);

  const getTimeLines = (start, end) => {
    const startTime = new Date("11.02.2022 " + start).getTime() / 1000;
    const endTime = new Date("11.02.2022 " + end).getTime() / 1000;
    const minutes = Math.abs(endTime - startTime) / 60 - 20;
    const periodsInADay = moment.duration(1, "day").as("m");
    const timeLabels = [];
    const startTimeMoment = moment(start.split(" ")[0], "hh:mm");
    for (let i = 0; i <= minutes / 20; i++) {
      startTimeMoment.add(i === 0 ? 0 : 20, "m");
      timeLabels.push(startTimeMoment.format("hh:mm A"));
    }
    setSlots(timeLabels);
  };
  const bookanAppointment = () => {
    data[clinic][
      data[clinic].findIndex((info) => info.doctor === doctor)
    ].appointments.push({
      name: localStorage.getItem("name"),
      slot: selectedSlot,
    });
    setSuccess(true);
    localStorage.removeItem("name");
  };

  const sweetAlert = () => (
    <>
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex m-8">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Your Appointment is Booked</p>
            <p className="text-sm">Make sure you will be on right time.</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <section classNameName="text-gray-600 body-font overflow-hidden">
        <div classNameName="container px-5 py-24 mx-auto">
          {suuccess ? sweetAlert() : ""}
          <div className="w-1/2 px-2 m-8">
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 ml-3 rounded-full mt-3 ">
              <Link to={`/doctors/${clinic}`}>Back</Link>
            </button>
          </div>
          <div className="flex -mx-2 mb-8">
            <div className="w-1/2 px-2 m-8">
              <Infocard info={doctorInfo} />
            </div>
            <div className="w-1/2 px-2 m-8">
              <div className="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <label className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Slots
                </label>
                <div className="w-full">
                  {slots.map((slot) => {
                    return (
                      <span
                        disabled={
                          bookedSlots.findIndex((e) => e === slot) !== -1
                            ? true
                            : false
                        }
                        className={
                          "inline-flex items-center w-1/4 justify-center px-2 py-1 text-xs font-bold leading-none rounded-full " +
                          (bookedSlots.findIndex((e) => e === slot) !== -1
                            ? "text-orange-100 bg-orange-800"
                            : slot === selectedSlot
                            ? "text-teal-100 bg-teal-500"
                            : "text-green-100 bg-green-800")
                        }
                        onClick={() => {
                          setSelected(slot);
                        }}
                      >
                        {slot}
                      </span>
                    );
                  })}
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3 "
                onClick={bookanAppointment}
              >
                Book
              </button>
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 ml-3 rounded-full mt-3 "
                onClick={() => {
                  localStorage.removeItem("name");
                }}
              >
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BookingSlot;
