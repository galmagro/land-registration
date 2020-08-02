import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "landlords": "Landlords",
            "lands": "Lands",
            "land_register": "Land register",
            "home": "Home",
            "new_landlord" : "New landlord",
            "landlord_id_title": "Identification",
            "landlord_first_name": "First name",
            "landlord_last_name": "Last name",
            "landlord_dob": "Date of birth",
            "landlord_id": "Id",
            "landlord_id_placeholder": "Id card number",
            "landlord_ref": "Reference number",
            "landlord_ref_placeholder": "Internal reference/customer number for landlord",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
          resources,
          lng: "en",
          keySeparator: false,
          interpolation: {
              escapeValue: false // react already safes from xss
          }
    });

export default i18n;