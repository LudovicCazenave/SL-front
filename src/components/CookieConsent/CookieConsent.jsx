import { useEffect } from "react";

// Component to handle cookie consent by dynamically loading the tarteaucitron script
const CookieConsent = () => {
  useEffect(() => {
    // Create a script element to load the tarteaucitron library
    const script = document.createElement("script");
    script.src = "/tarteaucitron/tarteaucitron.min.js";
    script.async = true; // Load the script asynchronously

    // When the script has loaded, initialize tarteaucitron if available
    script.onload = () => {
      if (window.tarteaucitron) {
        // Initialize tarteaucitron with desired configuration options
        window.tarteaucitron.init({
          privacyUrl: "", // URL to your privacy policy if applicable
          bodyPosition: "top", // Position of the consent banner in the body
          hashtag: "#tarteaucitron", // Hashtag for targeting the consent banner
          cookieName: "tarteaucitron", // Cookie name used by tarteaucitron
          orientation: "middle", // Banner orientation (e.g., middle of the page)
          groupServices: true, // Group similar services together in the banner
          showDetailsOnClick: true, // Show detailed info when the user clicks on a service
          serviceDefaultState: "wait", // Default state for services: wait for consent
          showAlertSmall: false, // Do not show a small alert bar
          cookieslist: false, // Do not display a detailed list of cookies
          closePopup: true, // Allow closing the consent popup manually
          showIcon: true, // Display an icon representing the cookie consent
          iconPosition: "BottomRight", // Position of the cookie consent icon
          adblocker: false, // Do not show an adblocker prompt
          DenyAllCta: true, // Enable "Deny All" call-to-action button
          AcceptAllCta: true, // Enable "Accept All" call-to-action button
          highPrivacy: true, // Enable high privacy mode: obtain user consent before setting cookies
          alwaysNeedConsent: false, // Do not always require consent on each page load
          handleBrowserDNTRequest: false, // Do not handle browser "Do Not Track" requests automatically
          removeCredit: false, // Do not remove tarteaucitron credit from the banner
          moreInfoLink: true, // Include a link for more information on cookies
          useExternalCss: false, // Use internal CSS rather than loading external styles
          useExternalJs: false, // Use internal JS rather than loading additional external scripts
          mandatory: true, // Make certain cookies or services mandatory
          mandatoryCta: false, // Do not require a separate CTA for mandatory cookies
          googleConsentMode: true, // Enable Google consent mode integration
          bingConsentMode: true, // Enable Bing consent mode integration
          softConsentMode: false, // Disable the soft consent mode
          dataLayer: false, // Not integrating with an external dataLayer
          serverSide: false, // Server-side integration is not used
          partnersList: true, // Show a list of partners that might set cookies
          cookies: [], // An empty list that can be filled with specific cookies if necessary
        });

        // Set the Google Maps API key for tarteaucitron to use when necessary
        window.tarteaucitron.user.googlemapsKey = "AIzaSyAJgVAY8IphlYThiG6tFg6PmyzF0a48qcQ";
        // Ensure the job array exists and then add "googlemaps" to load the Google Maps service
        window.tarteaucitron.job = window.tarteaucitron.job || [];
        window.tarteaucitron.job.push("googlemaps");
      } else {
        // Log an error if the tarteaucitron library is not available
        console.error("Tarteaucitron is not loaded.");
      }
    };

    // Log an error if the script fails to load
    script.onerror = () => {
      console.error("Error loading tarteaucitron.min.js");
    };

    // Append the created script element to the document head to execute it
    document.head.appendChild(script);
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // This component doesn't render any visual output
  return null;
};

export default CookieConsent;