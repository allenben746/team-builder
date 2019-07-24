import React, { useState } from 'react';

import './App.css';

function App() {
  const [userData, setUserData] = useState({username: "", email: "", password: ""})
  return (
    <div className="App">
      <section className="formContainer">
        <form>
          <legend>Sign Up</legend>
            <label for="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
            <label for="email">Email</label>
              <input type="text" name="email" placeholder="email"></input>
            <label for="password">Password</label>
              <input type="text" name="password" placeholder="password"></input>
        </form>
      </section>
    </div>
  );
}

export default App;
