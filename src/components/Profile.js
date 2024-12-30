import React, { useEffect, useState } from "react";
import keycloak from "../keycloak";
import { getMyProfile } from '../services/userService'

function Profile() {
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const response = await getMyProfile();
      const data = response.data;

      setProfile(data.result);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (keycloak.authenticated) {
      getProfile();
    }
  }, []);

  return (
    <div className="profile">
      {profile.email}
    </div>
  );
}

export default Profile;