import "./EventLocation.scss"; 

import { useCallback, useEffect, useRef, useState } from "react"; 
import Container from "react-bootstrap/Container";

function EventLocation({ children, event }) {
  // Reference for the map container div
  const mapRef = useRef(null);
  const [isMapAllowed, setIsMapAllowed] = useState(false);


  // Initialize the Google Map using a callback
  const initMap = useCallback(() => {
    // Check if the Google Maps API and map container are available
    if (!window.google || !window.google.maps || !mapRef.current) {
      return;
    }

    // Build the full address string from the event data
    const fullAddress = `${event.street_number} ${event.street}, ${event.zip_code} ${event.city}, France`;

    // Create a Geocoder instance to convert the address into coordinates
    const geocoder = new window.google.maps.Geocoder();

    // Create a new map, centered at a default location
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 43.604652, lng: 1.444209 },
      zoom: 15,
    });

    // Geocode the full address to get the location
    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === "OK" && results[0]) {
        // Center the map on the geocoded location
        map.setCenter(results[0].geometry.location);
        // Place a marker at the location
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        console.error("Le géocodage a échoué pour la raison suivante : " + status);
      }
    });
  }, [event]);

  // Run the map initialization when the event data is available
  useEffect(() => {
    if (!event) return;

    const checkAndLoadMap = () =>{
      if (window.tarteaucitron && window.tarteaucitron.state.googlemaps) {
        setIsMapAllowed(true);
    
      // Charger le script Google Maps
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${window.tarteaucitron.user.googlemapsKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
    
    // Ajouter la fonction globale initMap
      window.initMap = initMap;
    
      document.body.appendChild(script);
    }
  };
  checkAndLoadMap();

    if(window.tarteaucitron){
      window.tarteaucitron.user.googlemapsCallback = checkAndLoadMap;
      
    }
    // Cleanup: remove the map callback when the component unmounts
    return () => {
      if (window.tarteaucitron) {
        window.tarteaucitron.user.googlemapsCallbackk = null;
      }
      window.initMap = null;
    };
  }, [event, initMap]);

  // If no event data is available, display a fallback message
  if (!event) {
    return (
      <Container>
        <p>Données de l'évènement indisponibles.</p>
      </Container>
    );
  }

  // Render the event location details along with the map container
  return (
    <Container className="bg-warning text-white my-3 py-4 rounded">
      <article>
        <h2 className="mb-3 text-center">Accès</h2>
        <div>
          <p>
            <strong>
              {event.street_number} {event.street}
            </strong>
          </p>
          <p>
            <strong>
              {event.zip_code} {event.city}
            </strong>
          </p>
        </div>
        {/* Map container where the Google Map will be rendered */}
        {isMapAllowed ? (
          <div
          ref={mapRef}
          className="googlemaps-canvas rounded size-format"
          data-cookieconsent="googlemaps"
        ></div>
        ) : (
          <p>Veuillez accepter les cookies pour afficher la carte.</p>

        )}
        <div>
          {children}
        </div>
      </article>
    </Container>
  );
}

export default EventLocation;
