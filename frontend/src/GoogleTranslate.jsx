import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (!window.google || !window.google.translate) {
      // Check if the script is already being loaded
      if (!window.googleTranslateScriptLoaded) {
        // Load the Google Translate script dynamically
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        // Mark the script as loaded
        window.googleTranslateScriptLoaded = true;

        // Define the initialization function
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        };
      }
    } else {
      // If the script is already loaded, initialize the widget directly
      window.googleTranslateElementInit();
    }

    // Cleanup function to avoid memory leaks
    return () => {
      // Cleanup logic (if needed)
    };
  }, []);

  return (
    <div className="fixed top-0 right-40 bg-white p-2 rounded-lg shadow-lg">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
