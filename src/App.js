import React from "react";
import LandingPage from "./pages";
import ClinicalPage from "./pages/clinic";
import Layout from "pages/layout";
import Doctor from "pages/doctor";
import BookingSlot from "pages/bookingSlot";
import Appointments from "pages/appoinments";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/clincs" element={<ClinicalPage />} />
          <Route path="/doctors/:clinic" element={<Doctor />} />
          <Route path="/booking/:clinic/:doctor" element={<BookingSlot />} />
          <Route
            path="/appointments/:clinic/:doctor"
            element={<Appointments />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
