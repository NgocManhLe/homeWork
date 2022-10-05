import { createContext } from "react";

const isLogin = createContext();

const Register = () => {
  const ClickRegister = () => {
    const dataRegister = localStorage.getItem("dataLogin");
    alert(` đăng nhập thành công với : ${dataRegister}`);
  };
  return (
    <div>
      <input type={"text"} placeholder="đăng nhập tại đây"></input>
      <button onClick={ClickRegister}>ĐĂNG NHẬP</button>
    </div>
  );
};

export { isLogin };
export default Register;
