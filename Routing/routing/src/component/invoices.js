import React from "react";
import { Outlet, Link } from "react-router-dom";

const Ivoices = () => {
  return (
    <div>
      Ivoices
      <Link to="/invoices/name">ivoices 1</Link>
      <Outlet />
    </div>
  );
};

export default Ivoices;
