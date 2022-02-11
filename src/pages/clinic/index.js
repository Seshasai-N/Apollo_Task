import React from "react";
import Card from "components/card";
import data from "lib/data";

const Clinic = () => {
  const clincs = Object.keys(data);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Clinics
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {clincs.map((e) => (
            <Card key={e} name={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clinic;
