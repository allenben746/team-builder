import React, { useState } from 'react';

import './App.css';

function App() {
  const [userData, setUserData] = useState({username: "", email: "", role: ""})
  const [userDataStorage, setUserDataStorage] = useState([])
 

  function handleChange(event) {

    const updatedUser = { ...userData, [event.target.name]: event.target.value };
    setUserData(updatedUser);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserDataStorage([...userDataStorage, userData])
  }

  const EditInfo = () => {
    alert("It worked!");
    return (
      <div>
        <form>
          <fieldset>
            <legend>Sign Up</legend>
              <label for="username">New username</label>
                <input type="text" name="username" placeholder="username" value={userData.username} onChange={handleChange}></input>
              <label for="email">Email</label>
                <input type="text" name="email" placeholder="email" value={userData.email} onChange={handleChange}></input>
              <label for="role">Role</label>
                <input type="text" name="role" placeholder="Role" value={userData.role} onChange={handleChange}></input>
              <button>Submit</button>
          </fieldset>
        </form>
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
              <label for="role">Role</label>
                <input type="text" name="role" placeholder="Role" value={userData.role} onChange={handleChange}></input>
              <button>Submit</button>
          </fieldset>
        </form>
      </section>
    {userDataStorage.map((user) => {
      return(
        <div className="TeamContainer">
          {user.username}
          <br></br>
          {user.email}
          <button onClick={EditInfo}>Edit Info</button>
          
          
        </div>
      )
    })}
    </div>
  );
}

export default App;
