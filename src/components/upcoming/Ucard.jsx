import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Ucard = ({ item: { id, cover, name, time }, item }) => {
  const { history, setHistory } = UserAuth();

  const historyHandler = () => {
    setHistory([...history, { ...item }]);
  };

  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt="cover" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span> <br />
          <Link to={`/singlepage/${id}`}>
            <button onClick={historyHandler} className="primary-btn">
              <i className="fa fa-play"></i> PLAY NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ucard;
