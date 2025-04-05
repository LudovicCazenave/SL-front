import Events from "../Events/Events.jsx";
import SignUp from "../SignUp/SignUp.jsx";
import Tagline from "../Tagline/Tagline.jsx";

function HomePageLogOut({ updateFormData }){
  return (
    <>
      <SignUp updateFormData={updateFormData} />
      <Tagline />
      <Events />
    </>
  );
};
export default HomePageLogOut;