import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer
      className="text-gray-600 body-font fixed
             inset-x-0
             bottom-0
            "
    >
      <hr />
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Book an Appointment</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © Sesha Sai
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link to="/clincs" className="text-teal-300 underline">
            List of Appointments
          </Link>
        </span>
      </div>
    </footer>
  </>
);

export default Footer;
