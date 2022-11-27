import React from "react";
import "./user.css";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="header-user">
      <img src={photoURL} alt={displayName} />
      <span className="user-name">{displayName}</span>
    </div>
  );
}
