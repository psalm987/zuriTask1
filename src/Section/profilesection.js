import React from "react";
import ProfilePicture from "../Component/profilepicture";
import Share from "../Resource/Image/share.png";
import Dots from ".../Resource/Image/dots.png";

export default function ProfileSection() {
  return (
    <div className="section profileSection">
      <div className="menu">
        <img src={Dots} alt="Menu icon" className="monly" />
        <img src={Share} alt="Share icon" className="nmob" />
      </div>
      <ProfilePicture />
      <h1 id="twitter">Samuel Seibidor</h1>
      <p id="slack">@seibidor.samuel</p>
    </div>
  );
}
