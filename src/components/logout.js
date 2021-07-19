import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '1051900366163-uug3fp44cmthn7d2o9pmtprtjs9o53mo.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;