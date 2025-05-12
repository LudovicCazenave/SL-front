import "./App.scss";

// Import necessary hooks from React
import { useState, useContext } from "react";
// Import routing components from React Router DOM
import { Routes, Route, Navigate } from "react-router";

// Import the authentication context to check if the user is logged in
import { AuthContext } from "../contexts/AuthContext.jsx";

// Import custom components and pages for the application
import ProtectedRoute from "../routes/ProtectedRoute.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import HomePageLogOut from "../pages/HomePageLogOut/HomePageLogOut.jsx";
import HomePageConnected from "../pages/HomePageConnected/HomePageConnected.jsx";
import MyAccountPage from "../pages/MyAccountPage/MyAccountPage.jsx";
import SignUpWizzard from "../pages/SignUpWizzard/SignUpWizzard.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import EventsPage from "../pages/EventsPage/EventsPage.jsx";
import ProfilesPage from "../pages/ProfilesPage/ProfilesPage.jsx";
import ProfilPage from "../pages/ProfilPage/ProfilPage.jsx";
import EventPage from "../pages/EventPage/EventPage.jsx";
import MessagesPage from "../pages/MessagesPage/MessagesPage.jsx";
import LegalInfoPage from "../pages/LegalInfoPage/LegalInfoPage.jsx";
import SiteMapPage from "../pages/SiteMapPage/SiteMapPage.jsx";
import DataProtectionPage from "../pages/DataProtectionPage/DataProtectionPage.jsx";

function App() {
  // State variable to hold form data (used for the sign-up wizard)
  const [formData, setFormData] = useState({});

  // Function to update the form data state with new values
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  // Get the authentication status from the AuthContext
  const { authenticated } = useContext(AuthContext);

  return (
    <>
      {/* Main container with full viewport height and a flexible column layout */}
      <div className="min-vh-100 d-flex flex-column p-0">
        {/* Header section with a sticky-top position so it remains fixed on scroll */}
        <header className="sticky-top">
          <Header />
        </header>

        {/* Main content area */}
        <main>

          {/* Define application routes */}
          <Routes>
            {/* Redirect the root path to '/accueil' */}
            <Route path="/" element={<Navigate to="/accueil" />} />

            {/* Home page route: if the user is authenticated, redirect to the dashboard;
                otherwise display the logged-out homepage */}
            <Route
              path="/accueil"
              element={
                authenticated?.isAuthenticated ? (
                  <Navigate to="/tableau-de-bord" />
                ) : (
                  <HomePageLogOut updateFormData={updateFormData} />
                )
              }
            />

            {/* Route for the sign-up wizard */}
            <Route
              path="/inscription"
              element={
                <SignUpWizzard
                  formData={formData}
                  updateFormData={updateFormData}
                />
              }
            />

            {/* Route for the sign-in page */}
            <Route path="/connexion" element={<SignIn />} />

            {/* Legal information page */}
            <Route path="/informations-legales" element={<LegalInfoPage />} />

            {/* Site map page */}
            <Route path="/plan-de-site" element={<SiteMapPage />} />

            {/* Data protection page */}
            <Route path="/protection-des-donnees" element={<DataProtectionPage />} />

            {/* Protected route for the dashboard homepage */}
            <Route
              path="/tableau-de-bord"
              element={
                <ProtectedRoute>
                  <HomePageConnected />
                </ProtectedRoute>
              }
            />

            {/* Protected route for the user's account page */}
            <Route
              path="/mon-compte"
              element={
                <ProtectedRoute>
                  <MyAccountPage />
                </ProtectedRoute>
              }
            />

            {/* Protected route for account modification views using a URL parameter */}
            <Route
              path="/mon-compte/modification/:editView"
              element={
                <ProtectedRoute>
                  <MyAccountPage />
                </ProtectedRoute>
              }
            />

            {/* Protected route for the events page */}
            <Route
              path="/evenements"
              element={
                <ProtectedRoute>
                  <EventsPage />
                </ProtectedRoute>
              }
            />

            {/* Protected route for individual event pages, identified by a 'slug' parameter */}
            <Route
              path="/evenements/:slug"
              element={
                <ProtectedRoute>
                  <EventPage />
                </ProtectedRoute>
              }
            />

            {/* Protected route for the profiles page */}
            <Route
              path="/profils"
              element={
                <ProtectedRoute>
                  <ProfilesPage />
                </ProtectedRoute>
              }
            />

            {/* Protected route for individual profile pages using a 'slug' as identifier */}
            <Route
              path="/profils/:slug"
              element={
                <ProtectedRoute>
                  <ProfilPage />
                </ProtectedRoute>
              }
            />

            {/* Protected route for the messages page */}
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <MessagesPage />
                </ProtectedRoute>
              }
            />

            {/* Fallback route for unmatched paths */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer section that sticks to the bottom with a background and padding */}
        <footer className="footer mt-auto bg-primary py-4">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
