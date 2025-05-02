import { apiUrl } from "../config/config.js";
import { errorServer, showErrorMessage } from "../config/handling.error.js";

// Asynchronous function to get the last event
export async function getLastEvent() {
  try {
    // Send API request with credentials included
    const httpResponse = await fetch(`${apiUrl}/filter-event`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON and return the events
    const events = await httpResponse.json();
    return events;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to sign up a user
export async function signUp(data) {
  try {
    // Create a FormData object if data is not already an instance of FormData
    const formData = data instanceof FormData ? data : new FormData();

    if (!(data instanceof FormData)) {
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(item => formData.append(key, item));
        } else {
          formData.append(key, value);
        }
      });
    }

    // Send a POST request to the signup endpoint with credentials and form data
    const httpResponse = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      credentials: "include",
      body: formData
    });

    if (!httpResponse.ok) {
      showErrorMessage('erreur dans les données renseignées lors de l\'inscription.');
      return null;
    }

    // Parse the response as JSON and return the created user
    const createdUser = await httpResponse.json();
    return createdUser;

  } catch (error) {
    errorServer();
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to sign in a user
export async function signIn(data) {
  try {
    // Send a POST request to the signin endpoint with JSON data
    const httpResponse = await fetch(`${apiUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!httpResponse.ok) {
      showErrorMessage('Utilisateur non trouvé, veuillez verifier vos informations de connexion.');
      return null;
    }

    // Parse and return the JSON response
    const connectedUser = await httpResponse.json();
    return connectedUser;

  } catch (error) {
    errorServer();
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to authenticate the user
export async function authentificationUser() {
  try {
    // Send a request to verify the token with credentials included
    const httpResponse = await fetch(`${apiUrl}/verify-token`, {
      credentials: 'include',
    });

    if (!httpResponse.ok) {
      return false;
    }

    // Parse and return the user data from the response
    const user = await httpResponse.json();
    return user;

  } catch (error) {
    console.error('Erreur de vérification du token :', error);
    return false;
  }
};

// Asynchronous function to get the last profiles match
export async function getLastProfilesMatch() {
  try {
    // Fetch homepage profiles with credentials included
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

// Asynchronous function to get the last events match
export async function getLastEventsMatch() {
  try {
    // Fetch homepage events with credentials included
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

// Asynchronous function to get the user's account details
export async function getMyAccount() {
  try {
    // Fetch account info with credentials included
    const httpResponse = await fetch(`${apiUrl}/my-account`, {
      credentials: "include",
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse and return the account data as JSON
    const myProfil = await httpResponse.json();
    return myProfil;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to edit the user's account
export async function editMyAccount(data) {
  try {
    // Create a FormData instance if data isn't already FormData
    const formData = data instanceof FormData ? data : new FormData();

    // If data is not FormData, append its entries to formData
    if (!(data instanceof FormData)) {
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(item => formData.append(key, item));
        } else {
          formData.append(key, value);
        }
      });
    }

    // Send a PATCH request with the form data to update the account
    const httpResponse = await fetch(`${apiUrl}/my-account`, {
      method: "PATCH",
      credentials: "include",
      body: formData
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse and return the updated user data as JSON
    const updatedUser = await httpResponse.json();
    return updatedUser;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to delete the user's account
export async function deleteMyAccount() {
  try {
    // Send DELETE request to remove the account with credentials included
    const httpResponse = await fetch(`${apiUrl}/my-account`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse and return the response as JSON
    const myProfil = await httpResponse.json();
    return myProfil;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to log out the user's account
export async function logOutMyAccount() {
  try {
    // Send a POST request to the logout endpoint with credentials included
    const httpResponse = await fetch(`${apiUrl}/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON and return the result
    const logOut = await httpResponse.json();
    return logOut;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to get all events
export async function getAllEvents() {
  try {
    // Send a GET request to the events endpoint with credentials included
    const httpResponse = await fetch(`${apiUrl}/events`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON and return the events
    const events = await httpResponse.json();
    return events;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to get all profiles
export async function getAllProfiles() {
  try {
    // Fetch profiles with credentials included
    const httpResponse = await fetch(`${apiUrl}/profiles`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse and return the JSON response
    const profiles = await httpResponse.json();
    return profiles;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to get one profile by slug
export async function getOneProfil(slug) {
  try {
    // Fetch the profile using the provided slug with credentials included
    const httpResponse = await fetch(`${apiUrl}/profiles/${slug}`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON and return the profile data
    const profil = await httpResponse.json();
    return profil;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to get one event by slug
export async function getOneEvent(slug) {
  try {
    // Send a request to the API endpoint with the given slug and credentials included
    const httpResponse = await fetch(`${apiUrl}/events/${slug}`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse and return the event data from the response as JSON
    const event = await httpResponse.json();
    return event;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to register for an event
export async function registerForEvent(slug, data) {
  try {
    // Send a POST request with JSON data to register for the event
    const httpResponse = await fetch(`${apiUrl}/events/${slug}/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse and return the response JSON
    const registerForOneEvent = await httpResponse.json();
    return registerForOneEvent;

  } catch (error) {
    errorServer();
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to get all messages
export async function getAllMessages() {
  try {
    // Send a request to get messages with credentials included
    const httpResponse = await fetch(`${apiUrl}/messages`, {
      credentials: "include"
    });

    if (!httpResponse.ok) {
      return null;
    }

    // Parse the response as JSON and return the messages
    const messages = await httpResponse.json();
    return messages;

  } catch (error) {
    console.error("API non accessible...", error);
  }
};

// Asynchronous function to send a message
export async function sendMessage(data) {
  try {
    // Send a POST request with JSON data
    const httpResponse = await fetch(`${apiUrl}/messages`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!httpResponse.ok) {
      showErrorMessage('Message non envoyé');
      return null;
    }

    // Parse and return the new message as JSON
    const newMessage = await httpResponse.json();
    return newMessage;

  } catch (error) {
    errorServer();
    console.error("API non accessible...", error);
  }
};