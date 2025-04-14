import "./EventLocation.scss";

import { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";


function EventLocation({ children, event }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!event) return;
    
    const fullAddress = `${event.street_number} ${event.street}, ${event.zip_code} ${event.city}, France`;
    
    const initMap = () => {
      if (!window.google || !mapRef.current) return;
      
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
    };

    if (window.google && window.google.maps) {
      initMap();
      return;
    } 

    window.initMap = initMap;

    if (!document.getElementById("google-maps-script")) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJgVAY8IphlYThiG6tFg6PmyzF0a48qcQ&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

  }, [event]);

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
        <div id="map" ref={mapRef} className="rounded size"
        ></div>
        <div>
          {children}
        </div>
      </article>
    </Container>
  );
}

export default EventLocation;
