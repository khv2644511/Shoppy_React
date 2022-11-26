import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login } from "../../api/firebase";
import "./navbar.css";

export default function Navbar() {
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
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}
