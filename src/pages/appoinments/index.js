import React, { useState, useEffect } from "react";
import List from "components/list";
import { useParams, Link } from "react-router-dom";
import data from "lib/data";

const Appointments = () => {
  const { clinic, doctor } = useParams();
  const [appointments, setList] = useState([]);
  useEffect(() => {
    const list =
      data[clinic][data[clinic].findIndex((info) => info.doctor === doctor)]
        .appointments;

    setList(list);
  }, []);
  return (
    <>
      <div className="m-8">
        <div className="w-1/2 px-2 m-8">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 ml-3 rounded-full mt-3 "
            onClick={() => {
              localStorage.removeItem("name");
            }}
          >
            <Link to={`/doctors/${clinic}`}>Back</Link>
          </button>
        </div>
        <List list={appointments} />
      </div>
    </>
  );
};

export default Appointments;
