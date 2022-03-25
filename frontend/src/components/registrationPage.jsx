import React from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

function RegistrationPage(props) {
  let history = useHistory();

  let handleSubmit = (evt) => {
    evt.preventDefault();
    let name = evt.target.name.value;
    let email = evt.target.email.value;
    let password = evt.target.password.value;
    axios
      .post("http://localhost:3002/users", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        alert(err.response.data);
      });
    evt.target.reset();
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration </h2>
        <p>create an account</p>
        <label>Name:</label>
        <input name="name" type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input name="email" type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input
          name="password"
          type="password"
          placeholder="* * * * * * * * *"
        />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default RegistrationPage;
