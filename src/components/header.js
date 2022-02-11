import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <header className="text-gray-600 body-font bg-teal-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl text-slate-50 font-bold">
            Book an Appointment
          </span>
        </Link>
      </div>
    </header>
  </>
);

export default Header;
