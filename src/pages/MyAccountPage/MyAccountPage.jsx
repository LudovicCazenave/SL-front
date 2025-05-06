import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router";

import { getMyAccount, deleteMyAccount } from "../../api/api.js";

import { showConfirmationDialog, showSuccessMessage, showCancelAction } from "../../config/handling.error.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import ProfilEvents from "../../components/ProfilEvents/ProfilEvents.jsx";
import ProfilInfo from "../../components/ProfilInfo/ProfilInfo.jsx";
import ProfilInterest from "../../components/ProfilInterest/ProfilInterest.jsx";
import ProfilPresentation from "../../components/ProfilPresentation/ProfilPresentation.jsx";
import ProfilSection from "../../components/ProfilSection/ProfilSection.jsx";
import EditProfilSection from "../../components/EditProfilSection/EditProfilSection.jsx";
import EditProfilPresentation from "../../components/EditProfilPresentation/EditProfilPresentation.jsx";
import EditProfilInfo from "../../components/EditProfilInfo/EditProfilInfo.jsx";
import EditProfilInterest from "../../components/EditProfilInterest/EditProfilInterest.jsx";

function MyAccountPage() {
  // Local state to store the current user's account details.
  const [myAccount, setMyAccount] = useState(null);
  // Hook to allow navigation between routes.
  const navigate = useNavigate();
  // Retrieve the current edit view parameter from the URL.
  const { editView } = useParams();
  // Get the current location (URL), used here to refresh account data on path changes.
  const location = useLocation();
  // Retrieve the authentication state updater from the AuthContext.
  const { setAuthenticated } = useContext(AuthContext);

  // When the component mounts or the current pathname changes, fetch the user's account data.
  useEffect(() => {
    async function loadMyAccount() {
      const data = await getMyAccount();
      if (data) {
        setMyAccount(data);
      }
    }
    loadMyAccount();
  }, [location.pathname]);

  // Navigate to a specific edit view for updating account details.
  const handleEditView = (view) => {
    navigate(`/mon-compte/modification/${view}`);
  };

  // Navigate back to the main "My Account" page.
  const handleBackToMain = () => {
    navigate("/mon-compte");
  };

  // Handle the deletion of the user's account.
  const handleDeleteAccount = async () => {
    // Ask for confirmation before deleting the account.
    const confirmation = await showConfirmationDialog();
    if (confirmation.isConfirmed) {
      // Call API to delete the account.
      const deletedProfile = await deleteMyAccount();
      if (deletedProfile) {
        // Set authentication state to false once the account is deleted.
        setAuthenticated(false);
        // Show a success message and then navigate to the home page.
        await showSuccessMessage(navigate);
        navigate("/", { replace: true });
      }
    } else {
      // If deletion is cancelled, show an informational alert.
      showCancelAction();
    }
  };

  // If an edit view is specified in the URL, render the corresponding edit component.
  if (editView) {
    switch (editView) {
      case "identite":
        return <EditProfilSection handleBackToMain={handleBackToMain} />;
      case "generale":
        return <EditProfilInfo handleBackToMain={handleBackToMain} />;
      case "texte-introduction":
        return <EditProfilPresentation handleBackToMain={handleBackToMain} />;
      case "centre-interet":
        return <EditProfilInterest handleBackToMain={handleBackToMain} />;
      default:
        return <div>La modification demandée n'existe pas.</div>;
    }
  }

  // Render the main account page when not in edit mode.
  return (
    <>
      {/* Section displaying the user's profile picture, name, and a button to edit identity */}
      <section>
        <ProfilSection profil={myAccount}>
          <Button size="lg" onClick={() => handleEditView("identite")}>
            Modifier
          </Button>
        </ProfilSection>
      </section>

      {/* Section displaying more detailed account information and actions */}
      <section>
        <Container fluid="lg" className="px-0" style={{ overflowX: "hidden" }}>
          <Row className="d-flex flex-column flex-lg-row-reverse">
            {/* Sidebar with general account info and account deletion button */}
            <Col lg="4" className="d-flex flex-column">
              <ProfilInfo profil={myAccount}>
                <Button size="lg" onClick={() => handleEditView("generale")}>
                  Modifier
                </Button>
                <Button variant="danger" size="lg" onClick={handleDeleteAccount}>
                  Supprimer le compte
                </Button>
              </ProfilInfo>
            </Col>
            {/* Main content with introduction text, interests, and events sections */}
            <Col>
              <ProfilPresentation profil={myAccount}>
                <Button size="lg" onClick={() => handleEditView("texte-introduction")}>
                  Modifier
                </Button>
              </ProfilPresentation>
              <ProfilInterest profil={myAccount}>
                <Button size="lg" onClick={() => handleEditView("centre-interet")}>
                  Modifier
                </Button>
              </ProfilInterest>
              <ProfilEvents profil={myAccount} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MyAccountPage;