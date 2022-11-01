import React from "react";
import ProfilePicture from "../Component/profilepicture";

export default function ProfileSection() {
  return (
    <div className="section profileSection">
      <div className="mmenu"></div>
      <ProfilePicture />
      <h1 id="twitter">Samuel Seibidor</h1>
      <p id="slack">@seibidor.samuel</p>
    </div>
  );
}
