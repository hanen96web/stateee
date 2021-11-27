import React from "react";
import { useState } from "react";
import Profile from "./component/Profile";
import hanen from "./component/hanen.jpg";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "Name:hanen",
    profession: "profession:developper",
    bio: "bio:playing guitare",
    lastname: "Last Name:frioui",
    img: hanen,
  });
  const [show, setShow] = useState(true);
  return (
    <div className="bbtn">
      <div className="">
        {show ? <Profile user={user} /> : ""}
        <button onClick={() => setShow(!show)}>show</button>
      </div>
    </div>
  );
}

export default App;
