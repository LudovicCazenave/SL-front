import './App.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SignUpWizzard from '../SignUpWizzard/SignUpWizzard.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import HomePageLogOut from '../HomePageLogOut/HomePageLogOut.jsx';
import HomePageConnected from '../HomePageConnected/HomePageConnected.jsx';

function App() {
  return (
    <>
      <div className="vh-100 d-flex flex-column p-0">
        <header className="sticky-top">
          <Header />
        </header>

        <main>
          <HomePageLogOut />
          <SignUpWizzard />
          <SignIn />
          <HomePageConnected />
        </main>

        <footer className="footer mt-auto bg-primary py-4">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
