import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HelpSection from "./components/HelpSection";
import Footer from "./components/Footer";

import DonateFood from "./components/DonateFood";
import DonateItems from "./components/DonateItems";
import JoinVolunteer from "./components/JoinVolunteer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar type="landing" />
              <Hero />
              <HelpSection />
              <Footer />
            </>
          }
        />

        {/* Donate Pages */}
        <Route
          path="/donate-food"
          element={
            <>
              <Navbar type="form" />
              <DonateFood />
            </>
          }
        />

        <Route
          path="/donate-items"
          element={
            <>
              <Navbar type="form" />
              <DonateItems />
            </>
          }
        />

        <Route
          path="/volunteer"
          element={
            <>
              <Navbar type="form" />
              <JoinVolunteer />
            </>
          }
        />

        {/* Auth Pages */}
        <Route
          path="/login"
          element={
            <>
              <Navbar type="form" />
              <Login />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Navbar type="form" />
              <Register />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
