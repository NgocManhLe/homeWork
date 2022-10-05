import React from "react";
import { useState } from "react";
const Login = () => {
  const [dataLogin, setDataLogin] = useState({});
  const onChangeLogin = (e) => {
    setDataLogin(e.target.value);
  };
  const onClickLogin = () => {
    console.log(dataLogin);
    localStorage.setItem("dataLogin", dataLogin);
    alert(` Đăng ký thành công với : ${dataLogin}.
    Vui lòng chuyển qua đăng nhập để xem thông tin`);
  };
  return (
    <div>
      <input
        type={"text"}
        placeholder="đăng ký tại đây"
        onChange={onChangeLogin}
      ></input>
      <button onClick={onClickLogin}>ĐĂNG KÝ</button>
    </div>
  );
};

export default Login;
