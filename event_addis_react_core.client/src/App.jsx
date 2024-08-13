import { useEffect, useState } from "react";
// import "./App.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./pages/Home/HomePage";
import UserContext from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import FindEventsPage from "./pages/EventsPage/FindEventsPage";
import CreateEventPage from "./pages/EventsPage/CreateEventPage";

const App = () => {
  const [forecasts, setForecasts] = useState();
  const { isAuthenticated } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/test" element={"Test"} />
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/user-profile/:userId"
          element={
            isAuthenticated ? (
              <Layout>
                <UserProfile />
              </Layout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        {/* <Route path="/user/verify/:token" element={<Verification />} /> */}
        <Route
          path="/events"
          element={
            <Layout>
              <FindEventsPage />
            </Layout>
          }
        />
        <Route
          path="/create-event"
          element={
            <Layout>
              <CreateEventPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );

  async function populateWeatherData() {
    const response = await fetch("weatherforecast");
    const data = await response.json();
    setForecasts(data);
  }
};

export default App;
