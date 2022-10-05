import { Routes, Route, Form } from "react-router-dom";
import "./App.css";
import Auth from "./component/auth";
import Login from "./component/login";
import Register from "./component/register";
import Products from "./component/products";
import ProductDetail from "./component/productDetail";
import InvoicesDetail from "./component/invoicesDetail";
import Invoices from "./component/invoices";
import Cart from "./component/cart";
import Profile from "./component/profile";
import About from "./component/about";
import Link1 from "./component/Link1";
import Link2 from "./component/Link2";
import { useState } from "react";
import { isLogin } from "./component/register";
function App() {
  const [state, setState] = useState("");

  return (
    <isLogin.Provider value={true}>
      <div className="App">
        <Link1 />
        <Link2 />
        <Routes>
          <Route path="*" element={<h1>TRANG KHÔNG TỒN TẠI!!!</h1>} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/invoices" element={<Invoices />}>
            <Route path=":id" element={<InvoicesDetail />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </isLogin.Provider>
  );
}
// export { ClickRegister };
export default App;
