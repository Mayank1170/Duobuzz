import React from "react";
import { loginEndpoint } from "../../spotify";
const Login = () => {
  return (
    <div>
      <a href={loginEndpoint} className="h-[100vh]  w-full flex items-center justify-center">
        <div>Login with Spotify</div>
      </a>
    </div>
  );
};

export default Login;
