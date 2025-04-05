import './App.scss';

import { useState } from 'react';
import { Routes, Route } from 'react-router';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import HomePageLogOut from '../HomePageLogOut/HomePageLogOut.jsx';
import HomePageConnected from '../HomePageConnected/HomePageConnected.jsx';
import MyAccountPage from '../MyAccountPage/MyAccountPage.jsx';
import SignUpWizzard from '../SignUpWizzard/SignUpWizzard.jsx';

function App() {

  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };


  return (
    <>
      <div className="min-vh-100 d-flex flex-column p-0">
        <header className="sticky-top">
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/accueil" element={<HomePageLogOut updateFormData={updateFormData} />} />
            <Route path="/inscription" element={<SignUpWizzard formData={formData} updateFormData={updateFormData} />} />
            <Route path="/connexion" element={<SignIn />} />
            <Route path="/tableau-de-bord" element={<HomePageConnected />} />
            <Route path="/mon-compte" element={<MyAccountPage />} />
            <Route path="/mon-compte/modification/:editView" element={<MyAccountPage />} />
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
