import React, { useState } from "react";

const Auth = ({ auth, setAuth }) => {
  const [pass, setPass] = useState("");
  const getLocal = localStorage.getItem("pass");

  function checkAuth() {
    if (pass === "120177") {
      localStorage.setItem("pass", JSON.stringify("120177"));
      //   setAuth(!auth);
    }
  }
  console.log(pass);
  return (
    <div>
      <form className="auth">
        <div className="auth__control">
          <label>Введіть пароль</label>
          <input
            type="password"
            placeholder="пароль"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            checkAuth();
          }}
          className="edit"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Auth;
