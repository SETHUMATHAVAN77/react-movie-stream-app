import React, { useState } from "react";
import { trending } from "../../dummyData";
import Home from "../homes/Home";
import "./trending.css";

const Trending = () => {
  const [items] = useState(trending);
  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
};

export default Trending;
