import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const WatchHistory = () => {
  const { history } = UserAuth();
  return (
    <div className="py-8 px-10">
      <Link to={"/home"}>
        <div className="mb-2 text-lg">
          <AiFillHome />
        </div>
      </Link>
      <h1 className="text-xl text-bold mb-3">Watch History</h1>
      <div className="flex wrap gap-2 w-full">
        {history.length > 0 ? (
          history.map((video) => {
            return (
              <>
                <div key={video.id} className="MovieBox">
                  <div className="img">
                    <img src={video.cover} alt="cover" />
                  </div>
                  <div className="text">
                    <h3>{video.name}</h3>
                    <span>{video.time}</span> <br />
                    <Link to={`/singlepage/${video.id}`}>
                      <button className="primary-btn">
                        <i className="fa fa-play"></i> PLAY NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="text-center text-3xl text-medium">
            <h1>empty...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchHistory;
