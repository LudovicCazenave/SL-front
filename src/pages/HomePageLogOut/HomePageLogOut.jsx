import { useEffect, useState } from "react";

import { getLastEvent } from "../../api/api.js";

import Events from "../../components/Events/Events.jsx";
import SignUp from "../../components/SignUp/SignUp.jsx";
import Tagline from "../../components/Tagline/Tagline.jsx";

function HomePageLogOut({ updateFormData }){
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const data = await getLastEvent();
      if(data) {
        setEvents(data);
      }
    }
    loadEvents();
  },[]);
  
  return (
    <>
      <SignUp updateFormData={updateFormData} />
      <Tagline />
      <Events events={events}/>
    </>
  );
};

export default HomePageLogOut;