import Keycloak from "keycloak-js"
import { KEYCLOAK_CONFIG } from "./configurations/configuration"

const keycloak = new Keycloak({
    url: KEYCLOAK_CONFIG.url,
    realm: KEYCLOAK_CONFIG.realm,
    clientId: KEYCLOAK_CONFIG.clientId
})


// Khởi tạo Keycloak với cấu hình `check-sso`
keycloak
    .init({ onLoad: "check-sso" })
    .then(authenticated => {
        if (authenticated) {
            // console.log("Authenticated:", authenticated);
            // console.log("AccessToken:", keycloak.token); // In AccessToken ra console
            console.log(authenticated)
        } else {
            console.log("Not authenticated");
        }
    })
    .catch(err => {
        console.error("Keycloak initialization error:", err);
    });

export default keycloak;