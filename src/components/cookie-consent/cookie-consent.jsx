import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';


export const CookieComponent = () =>{
    const { t } = useTranslation();
    return(<
        
        CookieConsent 
        expires={365}
        // debug={true}
        style={{textAlign:"right"}}
        buttonText={t("cookieConfirm")}
        >
    
          <span>{t("cookieInfo1")}</span> 
          <a target="_blank" href="https://www.freeprivacypolicy.com/live/13aaa5dd-c830-46ce-8e8a-010efe1a66f1">{t("cookieLink1")}</a>
          <span> {t("cookieInfo2")} </span> 
          <a target="_blank" href="https://www.freeprivacypolicy.com/live/72425419-22ef-4dd3-893a-0e012dba1688">{t("cookieLink2")}</a>
          <span>{t("cookieInfo3")} </span>
          </CookieConsent>)
}
