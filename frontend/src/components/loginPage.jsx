import React from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

function LoginPage(props) {
  let history = useHistory();

  let handleSubmit = (evt) => {
    evt.preventDefault();
    let email = evt.target.email.value;
    let password = evt.target.password.value;
    axios
      .post("http://localhost:3002/users", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login </h1>
        <label>Email:</label>
        <input name="email" type="text" placeholder="Enter email" />
        <label>Password:</label>
        <input name="password" type="text" placeholder="* * * * * * * *" />
        <button className="btn btn-success"> Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
