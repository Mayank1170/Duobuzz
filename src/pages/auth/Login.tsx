import React from "react";
import { loginEndpoint } from "../../spotify";
const Login = () => {
  return (
    <div>
      <a href={loginEndpoint}>
        <div>Login with Spotify</div>
      </a>
    </div>
  );
};

export default Login;
