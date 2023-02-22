import React, { useContext } from "react";
import { FormContext } from "./context";
function Header() {
  const { setShowForm } = useContext(FormContext);
  const { showForm } = useContext(FormContext);

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="logo" width="68" height="68" />
        <h1>Today I learned</h1>
      </div>

      <button
        className="btn sp btn-large"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "close" : "Share a fact"}
      </button>
    </header>
  );
}
export default Header;
