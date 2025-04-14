import './App.scss';

import { useState, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { AuthContext } from "../contexts/AuthContext.jsx";

import ProtectedRoute from '../routes/ProtectedRoute.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SignIn from '../pages/SignIn/SignIn.jsx';
import HomePageLogOut from '../pages/HomePageLogOut/HomePageLogOut.jsx';
import HomePageConnected from '../pages/HomePageConnected/HomePageConnected.jsx';
import MyAccountPage from '../pages/MyAccountPage/MyAccountPage.jsx';
import SignUpWizzard from '../pages/SignUpWizzard/SignUpWizzard.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import EventsPage from '../pages/EventsPage/EventsPage.jsx';
import ProfilesPage from '../pages/ProfilesPage/ProfilesPage.jsx'
import ProfilPage from '../pages/ProfilPage/ProfilPage.jsx';
import EventPage from '../pages/EventPage/EventPage.jsx';
import MessagesPage from '../pages/MessagesPage/MessagesPage.jsx';

function App() {

  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  const { authenticated } = useContext(AuthContext);


  return (
    <>
      <div className="min-vh-100 d-flex flex-column p-0">
        <header className="sticky-top">
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/accueil"/>} />
            <Route path="/accueil" element={
              authenticated ? (
                <Navigate to="/tableau-de-bord" replace />
                ) : (
                <HomePageLogOut updateFormData={updateFormData} />
                )
              }
            />
            
            <Route path="/inscription" element={<SignUpWizzard formData={formData} updateFormData={updateFormData} />} />
            <Route path="/connexion" element={<SignIn />} />
            <Route path="/tableau-de-bord" element={
              <ProtectedRoute>
                <HomePageConnected />
              </ProtectedRoute>
            } />

            <Route path="/mon-compte" element={
              <ProtectedRoute>
                <MyAccountPage />
              </ProtectedRoute>
            } />

            <Route path="/mon-compte/modification/:editView" element={
              <ProtectedRoute>
                <MyAccountPage />
              </ProtectedRoute>
            } />

            <Route path="/evenements" element={
              <ProtectedRoute>
                <EventsPage />
              </ProtectedRoute>
            } />

            <Route path="/evenements/:slug" element={
              <ProtectedRoute>
                <EventPage />
              </ProtectedRoute>
            } />

            <Route path="/profils" element={
              <ProtectedRoute>
                <ProfilesPage />
              </ProtectedRoute>
            } />

            <Route path="/profils/:slug" element={
              <ProtectedRoute>
                <ProfilPage />
              </ProtectedRoute>
            } />

            <Route path="/messages" element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            } />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer className="footer mt-auto bg-primary py-4">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default App;
