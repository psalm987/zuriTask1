import React from "react";
import "../src/styles.css";

export default function ProfilePicture() {
  const imageSource =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  return <img alt="Profile Image" src={imageSource} id="profile__img" />;
}
