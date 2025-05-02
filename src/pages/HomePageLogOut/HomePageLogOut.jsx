import { useEffect, useState } from "react";
import { getLastEvent } from "../../api/api.js";

import Events from "../../components/Events/Events.jsx";
import SignUp from "../../components/SignUp/SignUp.jsx";
import Tagline from "../../components/Tagline/Tagline.jsx";

// HomePageLogOut component displays the homepage for logged-out users.
// It fetches the most recent event data, and renders the SignUp, Tagline, and Events components.
function HomePageLogOut({ updateFormData }) {
  // State to store event data fetched from the API
  const [events, setEvents] = useState([]);

  // When the component mounts, fetch the most recent event via the API
  useEffect(() => {
    async function loadEvents() {
      const data = await getLastEvent();
      if (data) {
        setEvents(data);
      }
    }
    loadEvents();
  }, []);

  return (
    <>
      <SignUp updateFormData={updateFormData} />
      <Tagline />
      <Events events={events} />
    </>
  );
}

export default HomePageLogOut;