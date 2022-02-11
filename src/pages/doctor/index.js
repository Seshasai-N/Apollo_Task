import React, { useEffect, useState } from "react";
import Table from "components/table";
import { useParams, Link } from "react-router-dom";
import data from "lib/data";

const Doctor = () => {
  const { clinic } = useParams();
  const [doctorsList, setDoctorsList] = useState([]);
  const [columns, setColumns] = useState([]);
  const [name, setName] = useState(localStorage.getItem("name"));
  useEffect(() => {
    console.log(name);
    setDoctorsList(data[clinic]);
    const keys = Object.keys(data[clinic][0]);
    setColumns(keys);
  }, []);

  return (
    <>
      <div className="m-8">
        <div className="w-1/2 px-2 m-8">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 ml-3 rounded-full mt-3 ">
            <Link to="/clincs">Back</Link>
          </button>
        </div>
        <Table
          list={doctorsList}
          columns={columns}
          actions={name ? true : false}
          clinic={clinic}
        />
      </div>
    </>
  );
};

export default Doctor;
