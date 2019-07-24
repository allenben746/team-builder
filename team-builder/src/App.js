import React, { useState } from 'react';

import './App.css';

function App() {
  const [userData, setUserData] = useState({username: "", email: "", password: ""})

  function handleChange(event) {

    const updatedUser = { ...userData, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedUser
    );
    setUserData(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("username", userData.username);
  }

  const TeamCard = () => {
    return (
    <div>
      <p>{userData.username}</p>
    </div>
    )
  }

  return (
    <div className="App">
      <section className="formContainer">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Sign Up</legend>
              <label for="username">Username</label>
                <input type="text" name="username" placeholder="username" value={userData.username} onChange={handleChange}></input>
              <label for="email">Email</label>
                <input type="text" name="email" placeholder="email" value={userData.email} onChange={handleChange}></input>
              <label for="password">Password</label>
                <input type="password" name="password" placeholder="password" value={userData.password} onChange={handleChange}></input>
              <button>Submit</button>
          </fieldset>
        </form>
      </section>
    <TeamCard />
    </div>
  );
}

export default App;
