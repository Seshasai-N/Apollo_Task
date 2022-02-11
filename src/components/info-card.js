import React from "react";

const Infocard = (props) => {
  const { info } = props;
  return (
    <>
      <div className="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        <label className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
          INFORMATION
        </label>
        <p className="flex items-center text-gray-600 mb-2">
          {"Name"} {":"} {info.doctor}
        </p>
        <p className="flex items-center text-gray-600 mb-2">
          {"Specialization"} {":"} {info.specialization}
        </p>
        <p className="flex items-center text-gray-600 mb-6">
          {"Timmings"} {":"} {info.from} {"-"} {info.to}
        </p>
      </div>
    </>
  );
};

export default Infocard;
