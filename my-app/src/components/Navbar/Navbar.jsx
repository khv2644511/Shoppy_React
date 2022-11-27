import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout } from "../../api/firebase";
import "./navbar.css";
import { useState } from "react";
import { onUserStateChanged } from "../../api/firebase";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged(setUser);
  }, []);

  return (
    <header className="header-navbar">
      <Link to="/" className="header-logo">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="header-nav">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="header-nav-pencil">
          <BsFillPencilFill />
        </Link>
        {/* firebase 로그인 되면 로그인 아니면 로그아웃 */}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
