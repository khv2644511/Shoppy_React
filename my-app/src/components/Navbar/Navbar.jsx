import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout } from "../../api/firebase";
import "./navbar.css";
import { useState } from "react";
import { onUserStateChanged } from "../../api/firebase";
import User from "../User/User";
import Button from "../ui/Button";
import { useAuthcontext } from "../context/AuthContext";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged((user) => {
      setUser(user);
    });
  }, []);

  // const { user, login, logout } = useAuthcontext();
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
        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
