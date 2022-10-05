import React from "react";
import { NavLink } from "react-router-dom";

const Link1 = () => {
  return (
    <ul>
      <li>
        <NavLink className="anh" to="/auth">
          auth
        </NavLink>
      </li>
    </ul>
  );
};

export default Link1;
