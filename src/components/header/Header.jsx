import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/logo.png" alt="" />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home">Series</a>
              </li>
              <li>
                <a href="/home">Movies</a>
              </li>
              <li>
                <a href="/home">Pages</a>
              </li>
              <li>
                <a href="/home">Pricing</a>
              </li>
              <li>
                <a href="/home">Contact</a>
              </li>
            </ul>
            <Link
              to={"/"}
              className="px-3 py-1 font-semibold rounded-xl bg-bill-600 text-red cursor-pointer"
            >
              Sign Out
            </Link>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i class="fas fa-bell"></i>
            <i className="fas fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
