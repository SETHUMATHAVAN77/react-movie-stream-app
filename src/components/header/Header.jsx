import React, { useState, useContext, useEffect } from "react";
import "./header.css";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import userLogo from "../../assets/images/user.jpg";
import { UserAuth } from "../../context/AuthContext";

import { ToastContainer, Slide } from "react-toastify";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const { imageAsset } = UserAuth();

  // bootstrap tooltip
  const renderTooltip = (props) => (
    <Tooltip
      className="text-white bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      Profile
    </Tooltip>
  );

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo mb-20">
              <img src="./images/logo.png" alt="" />
            </div>

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
            <ToastContainer
              position="top-right"
              pauseOnHover={false}
              transition={Slide}
            />
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
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <OverlayTrigger
                placement="left"
                delay={{ show: 200, hide: 100 }}
                overlay={renderTooltip}
              >
                <div>
                  <Link to={`/userinfo`}>
                    <img
                      src={`${imageAsset ? imageAsset : userLogo}`}
                      alt="user-logo"
                      className=" w-[40px] h-[40px] mb-14 rounded-full"
                    />
                  </Link>
                </div>
              </OverlayTrigger>
            </div>
            <i className="fa fa-search"></i>
            <i class="fas fa-bell"></i>
            {/* <i className="fas fa-user"></i> */}
            {/* <button>Subscribe Now</button> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
