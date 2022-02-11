import React, { useState, useEffect } from "react";
import main from "assets/images/main.jpg";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const bookanAppointment = () => {
    localStorage.setItem("name", name);
    navigate("/clincs");
  };
  useEffect(() => {
    localStorage.removeItem("name");
  }, []);
  const handleInput = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={main}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Book an Appointment
            </h1>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label className="leading-7 text-sm text-gray-600">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  onChange={handleInput}
                  value={name}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                className={
                  "text-white font-bold py-2 px-4 rounded-full " +
                  (name.length === 0
                    ? "bg-gray-500"
                    : "bg-blue-500 hover:bg-blue-700")
                }
                disabled={name.length === 0}
                onClick={bookanAppointment}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
