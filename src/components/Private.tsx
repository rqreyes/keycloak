import Keycloak, { KeycloakInstance } from "keycloak-js";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import UserInfo from "./UserInfo";

const Private = () => {
  const history = useHistory();
  const [keycloak, setKeycloak] = useState<null | KeycloakInstance>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const logout = () => {
    history.push("/");
    keycloak?.logout();
  };

  useEffect(() => {
    const keycloak = Keycloak({
      url: "http://localhost/auth/",
      realm: "my-realm",
      clientId: "my-client",
    });
    setKeycloak(keycloak);

    (async () => {
      try {
        const authenticated = await keycloak.init({ onLoad: "login-required" });
        setAuthenticated(authenticated);

        const userInfo = await keycloak.loadUserInfo();
        setUserInfo(userInfo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!keycloak || !authenticated) return <p>loading...</p>;

  return (
    <div>
      <h2>private component</h2>
      <UserInfo userInfo={userInfo} />
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default Private;
