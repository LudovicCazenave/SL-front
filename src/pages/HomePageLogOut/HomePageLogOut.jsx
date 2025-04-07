import Events from "../../components/Events/Events.jsx";
import SignUp from "../../components/SignUp/SignUp.jsx";
import Tagline from "../../components/Tagline/Tagline.jsx";

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