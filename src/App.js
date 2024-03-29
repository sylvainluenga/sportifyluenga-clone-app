import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  // this effect runs the code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log("I HAVE A TOKEN", token);
 }, []);

  return (
    // stopped at 1h18min
    <div className="app">
      {
        token ? (
          <h1> I am logged in </h1>
        ) : (
          <Login />
        )
      }
    </div>      
  );
}

export default App;
