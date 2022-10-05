import React from "react";
import { Outlet, Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <li>
        <Link to="/auth/login">login</Link>
        <Link to="/auth/register" style={{ marginLeft: 50 }}>
          register
        </Link>
      </li>
      <Outlet />
    </div>
  );
};

export default Auth;
