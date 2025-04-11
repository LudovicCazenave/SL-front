import { apiUrl } from "../config/config.js";
import { errorServer, showErrorMessage } from "../config/handling.error.js";

export async function getLastEvent() {
  try {

    const httpResponse = await fetch(`${apiUrl}/filter-event`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    const events = await httpResponse.json();
    return events;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function signUp(data) {
  try {
    const httpResponse = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!httpResponse.ok) {
      showErrorMessage('erreur dans les données renseignées lors de l\'inscription.')
      return null;
    }

    const createdUser = await httpResponse.json();
    return createdUser;

  } catch (error) {
    errorServer();  
    console.error("API non accessible...", error);
  }
};

export async function signIn(data) {
  try {
    const httpResponse = await fetch(`${apiUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!httpResponse.ok) {
      showErrorMessage('Utilisateur non trouvé, veuillez verifier vos informations de connexion.')
      return null;
    }

    const connectedUser = await httpResponse.json();
    return connectedUser;

  } catch (error) {
    errorServer();
    console.error("API non accessible...", error);
  }
};

export async function authentificationUser() {
  try {
    const httpResponse = await fetch(`${apiUrl}/verify-token`, {
      credentials: 'include',
    });

    if (!httpResponse.ok) {
      return false
    }

    return true;

  } catch (error) {
    console.error('Erreur de vérification du token :', error)
    return false;
  }
};

export async function getLastProfilesMatch() {
  try {

    const httpResponse = await fetch(`${apiUrl}/homepage-profiles`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON
    const profiles = await httpResponse.json();
    return profiles;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function getLastEventsMatch() {
  try {

    const httpResponse = await fetch(`${apiUrl}/homepage-events`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON
    const events = await httpResponse.json();
    return events;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function getMyAccount() {
  try {

    const httpResponse = await fetch(`${apiUrl}/my-account`, {
      credentials: "include",
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON
    const myProfil = await httpResponse.json();
    return myProfil;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function editMyAccount(data) {
  try {
    const httpResponse = await fetch(`${apiUrl}/my-account`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON
    const updatedUser = await httpResponse.json();
    return updatedUser;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function deleteMyAccount() {
  try {

    const httpResponse = await fetch(`${apiUrl}/my-account`, {
      method: "DELETE",
      credentials: "include",
    });


    if (!httpResponse.ok) {
      return null;
    }

    const myProfil = await httpResponse.json();
    return myProfil;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function logOutMyAccount(){
  try {
    
    const httpResponse = await fetch(`${apiUrl}/logout`, {
      method: "POST",
      credentials: "include",
    });

    if(!httpResponse.ok){
      return null;
    }

    const logOut = await httpResponse.json();
    return logOut;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function getAllEvents() {
  try {

    const httpResponse = await fetch(`${apiUrl}/events`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    const events = await httpResponse.json();
    return events;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function getAllProfiles() {
  try {

    const httpResponse = await fetch(`${apiUrl}/profiles`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    const profiles = await httpResponse.json();
    return profiles;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

export async function getOneProfil(slug){
  try {
    
    const httpResponse = await fetch(`${apiUrl}/profiles/${slug}`, {
       credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    const profil = await httpResponse.json();
    return profil;

  } catch (error) {
    console.error("API non accessible...", error);
  }
}