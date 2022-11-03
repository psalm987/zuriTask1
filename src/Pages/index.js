import React from "react";
import LinkSection from "../Section/linksection.js";
import ProfileSection from "../Section/profilesection.js";

export default function Index() {
  return (
    <React.Fragment>
      <ProfileSection />
      <LinkSection />
    </React.Fragment>
  );
}
