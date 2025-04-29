import { useEffect } from "react";

const CookieConsent = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tarteaucitron/tarteaucitron.min.js";
    script.async = true;
    script.onload = () => {
      if (window.tarteaucitron) {
        window.tarteaucitron.init({
          privacyUrl: "",
          bodyPosition: "top",
          hashtag: "#tarteaucitron",
          cookieName: "tarteaucitron",
          orientation: "middle",
          groupServices: true,
          showDetailsOnClick: true,
          serviceDefaultState: "wait",
          showAlertSmall: false,
          cookieslist: false,
          closePopup: true,
          showIcon: true,
          iconPosition: "BottomRight",
          adblocker: false,
          DenyAllCta: true,
          AcceptAllCta: true,
          highPrivacy: true,
          alwaysNeedConsent: false,
          handleBrowserDNTRequest: false,
          removeCredit: false,
          moreInfoLink: true,
          useExternalCss: false,
          useExternalJs: false,
          mandatory: true,
          mandatoryCta: false,
          googleConsentMode: true,
          bingConsentMode: true,
          softConsentMode: false,
          dataLayer: false,
          serverSide: false,
          partnersList: true,
          cookies: [],
        });

        window.tarteaucitron.user.googlemapsKey = "AIzaSyAJgVAY8IphlYThiG6tFg6PmyzF0a48qcQ";
        window.tarteaucitron.job = window.tarteaucitron.job || [];
        window.tarteaucitron.job.push("googlemaps");

      }else {
        
        console.error("Tarteaucitron n'est pas chargé.");
      }
    };

    script.onerror = () => {
      console.error("Erreur lors du chargement de tarteaucitron.min.js");
    };


    document.head.appendChild(script);
  }, []);

  return null;
};

export default CookieConsent;