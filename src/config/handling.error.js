import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// Display an error alert when a server connection error occurs.
export function errorServer() {
  MySwal.fire({
    icon: "error",
    title: "Erreur",
    text: "Une erreur est survenue lors de la tentative de connexion. Veuillez réessayer plus tard.",
  });
};

// Display a custom error alert using the provided message.
export function showErrorMessage(message) {
  MySwal.fire({
    icon: 'error',
    title: 'Erreur',
    text: message,
  });
};

// Display a warning alert indicating that the user does not meet the minimum age requirement.
export function checkMinimumAge() { 
  MySwal.fire({
    icon: 'warning',
    title: 'Âge insuffisant',
    text: 'Vous devez avoir au moins soixante ans pour vous inscrire.',
    confirmButtonText: 'Compris'
  });
};

// Validate the signup form based on the provided step (count) and data.
// Returns an error message if validation fails or null if the data is valid.
export function validateFormSignup(data, count) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lettersPattern = /^[A-Za-zÀ-ÿ\s]+$/;
  
  switch (count) {
    case 1:
      if (!data.height) {
        return "Veuillez renseigner votre taille.";
      }
      const height = Number(data.height);
      if (!Number.isInteger(height)) {
        return "Veuillez entrer une taille valide.";
      }
      break;
      
    case 6:
      if (!lettersPattern.test(data.music)) {
        return "Veuillez entrer uniquement des lettres pour le style de musique.";
      }
      break;
      
    case 10:
      if (!data.firstname) {
        return "Veuillez renseigner votre prénom.";
      }
      if (!lettersPattern.test(data.firstname)) {
        return "Le prénom ne doit contenir que des lettres.";
      }
      
      if (!data.email) {
        return "L'email est requis.";
      }
      if (!emailPattern.test(data.email)) {
        return "Veuillez entrer une adresse email valide.";
      }
      
      // Validate password requirements.
      const pw = data.password || '';
      const pwErrors = [];
      if (pw.length < 8) pwErrors.push("8 caractères minimum.");
      if (pw.length > 100) pwErrors.push("100 caractères maximum.");
      if (!/[A-Z]/.test(pw)) pwErrors.push("Au moins une lettre majuscule.");
      if (!/[a-z]/.test(pw)) pwErrors.push("Au moins une lettre minuscule.");
      if (!/\d/.test(pw)) pwErrors.push("Au moins un chiffre.");
      if (/\s/.test(pw)) pwErrors.push("Pas d'espaces.");
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(pw)) {
        pwErrors.push("Au moins un caractère spécial (ex: !@#$%).");
      }
      if (pwErrors.length > 0) {
        return "Mot de passe invalide: " + pwErrors.join(' ');
      }
      
      if (!data.confirmPassword) {
        return "Veuillez confirmer votre mot de passe.";
      }
      if (pw !== data.confirmPassword) {
        return "Les mots de passe ne correspondent pas.";
      }
      break;
    default:
      return null;
  }
  
  return null;
};

// Validate the signin form data by checking the email format and password requirements.
// Returns true if both email and password are valid, false otherwise.
export function validateFormSignin(data) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = data.email && emailPattern.test(data.email);
    
  const password = data.password || '';
  const isPasswordValid = 
      password.length >= 8 && 
      password.length <= 100 && 
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) && 
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      !/\s/.test(password);
    
  return isEmailValid && isPasswordValid;
};

// Show a confirmation dialog asking if the user really wants to delete their account.
// Returns the result of the confirmation prompt.
export async function showConfirmationDialog() {
  return await MySwal.fire({
    title: 'Attention',
    text: 'Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer mon compte',
    cancelButtonText: 'Non, annuler',
    reverseButtons: true 
  });
};

// Display a success alert after the account has been successfully deleted, then navigate to the home page.
export async function showSuccessMessage(navigate) {
  await MySwal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'Votre compte a bien été supprimé.',
  });
  navigate('/accueil', { replace: true });
};

// Display an informational alert to indicate that the account deletion was canceled.
export function showCancelAction() {
  MySwal.fire({
    icon: 'info',
    title: 'Annulé',
    text: 'Votre compte n\'a pas été supprimé.',
    timer: 2000,
    showConfirmButton: false
  });
};

// Display a success alert after a successful signup and inform the user about redirection to the login page.
export function successSignup() { 
  MySwal.fire({
    title: "Parfait!",
    text: "Vous êtes bien inscrit, vous allez etre rediriger vers la page de connexion.",
    icon: "success",
    confirmButtonText: "OK"
  });
};

// Display a success alert confirming that the profile has been successfully updated.
export function successProfileUpdate() {
  MySwal.fire({
    title: "Mise à jour réussie !",
    text: "Vos informations ont été mises à jour avec succès.",
    icon: "success",
    confirmButtonText: "OK"
  });
};

// Display a success alert indicating that the message has been sent successfully.
export function successSendMessage() {
  MySwal.fire({
    title: "Message Envoyé !",
    text: "Votre message a été envoyé avec succès.",
    icon: "success",
    confirmButtonText: "OK"
  });
};

// Display a success alert confirming that the registration for the event was successful.
export function successRegister() {
  MySwal.fire({
    title: "Inscription a l'événement !",
    text: "Vous êtes bien inscrit a notre événement.",
    icon: "success",
    confirmButtonText: "OK"
  });
};



