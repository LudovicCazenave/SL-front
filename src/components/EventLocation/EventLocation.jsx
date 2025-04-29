import "./EventLocation.scss";

import { useCallback, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";


function EventLocation({ children, event }) {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    if (!window.google || !window.google.maps || !mapRef.current){
      return;
    } 

    const fullAddress = `${event.street_number} ${event.street}, ${event.zip_code} ${event.city}, France`;
    const geocoder = new window.google.maps.Geocoder();
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 43.604652, lng: 1.444209 },
      zoom: 15,
    });

    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === "OK" && results[0]) {
       
        map.setCenter(results[0].geometry.location);
        
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        console.error(
          "Le géocodage a échoué pour la raison suivante : " + status
        );
      }
    });
  }, [event]);

  useEffect(() => {
    if (!event) return;
    
    window.initMap = initMap;
    
    if (window.tarteaucitron) {
      window.tarteaucitron.user.mapscallback = "initMap";
      
      if (window.tarteaucitron.state.googlemaps === true) {
        setTimeout(initMap, 100);
      }
    }
    
    
    return () => {
      if (window.tarteaucitron) {
        window.tarteaucitron.user.mapscallback = null;
      }
      window.initMap = null;
    };
  }, [event, initMap]);

  if (!event) {
    return (
      <Container>
        <p>Données de l'évènement indisponibles.</p>
      </Container>
    );
  }

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
        <div ref={mapRef} className="googlemaps-canvas rounded size-format" data-cookieconsent="googlemaps"></div>
        <div>
          {children}
        </div>
      </article>
    </Container>
  );
}

export default EventLocation;
