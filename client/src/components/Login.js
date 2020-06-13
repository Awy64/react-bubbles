import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const [person, setPerson] = useState({ username: "", password: "" });

    const handleChange = e => {
      setPerson({
        ...person,
        [e.target.name]: e.target.value,
      })
    };

    const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/login', person)
        .then(res => {
          localStorage.setItem('token', res.data.payload)
          props.history.push('/BubblePage')
          console.log(res);
        })
        .catch(err => console.log(err.message))
    };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={person.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name='password'
          value={person.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
