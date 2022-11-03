import React from "react";
import zuri from "../Resource/Image/zuri.png";
import I4G from "../Resource/Image/I4G.png";

export default function Footer() {
  return (
    <React.Fragment>
      <hr />
      <div className="footer section">
        <img src={zuri} alt="Zuri icon" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G icon" />
      </div>
    </React.Fragment>
  );
}
