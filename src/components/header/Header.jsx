import React, { useState } from "react";
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
  const renderTooltipHistory = (props) => (
    <Tooltip
      className="text-white bg-black/20  px-3 py-1 rounded-lg text-xs md:text-base -mt-1 "
      id="button-tooltip"
      {...props}
    >
      Watch History
    </Tooltip>
  );

  const renderTooltipLogout = (props) => (
    <Tooltip
      className="text-white bg-black/20 px-3 py-1 rounded-lg text-xs md:text-base "
      id="button-tooltip"
      {...props}
    >
      Log Out
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
            <Link to={"/history"}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 200, hide: 100 }}
                overlay={renderTooltipHistory}
              >
                <button className="font-semibold rounded-xl text-green-500 cursor-pointer">
                  <i className="fa-brands fa-youtube"></i>
                </button>
              </OverlayTrigger>
            </Link>
            <Link to={"/"}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 200, hide: 100 }}
                overlay={renderTooltipLogout}
              >
                <button className="font-semibold rounded-xl text-red-500 cursor-pointer">
                  <i className="fa-solid fa-right-from-bracket"></i>{" "}
                </button>
              </OverlayTrigger>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
