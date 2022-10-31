import React from "react";
import zuri from "../resources/img/zuri.png";
import I4G from "../resources/img/I4G.png";

export default function Footer() {
  return (
    <div className="footer section">
      <img src={zuri} alt="Zuri icon" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="I4G icon" />
    </div>
  );
}
