import { NavLink } from "react-router-dom";

const Link2 = () => {
  return (
    <ul>
      <li>
        <NavLink className="anh" to="/products">
          products
        </NavLink>
      </li>
      <li>
        <NavLink className="anh" to="/invoices">
          invoices
        </NavLink>
      </li>
      <li>
        <NavLink className="anh" to="/cart">
          cart
        </NavLink>
      </li>
      <li>
        <NavLink className="anh" to="/profile">
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="anh" to="/about">
          about
        </NavLink>
      </li>
    </ul>
  );
};

export default Link2;
