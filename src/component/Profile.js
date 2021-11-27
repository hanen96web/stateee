import React from "react";

const styleObject = {
  
color: "blue",
  width: "100%",
};

const Profile = ({ user }) => {
  return (
    <div>
      <div style={styleObject}>
        <div className="dada">
          <h1>{user.name}</h1>
          <h1>{user.profession}</h1>
          <h1>{user.bio}</h1>
          <h1>{user.lastname}</h1>
          <img  className="hann" src={user.img} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
