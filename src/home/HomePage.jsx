import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcomming from "../components/upcoming/Upcomming";
import { latest, recommended, upcome } from "../dummyData";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

const HomePage = ({ fetchUserDetails }) => {
  const [items] = useState(upcome);
  const [item] = useState(latest);
  const [rec] = useState(recommended);
  const { user } = UserAuth();

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, user?.uid]);

  return (
    <>
      <Header />
      <Homes />
      <Upcomming items={items} title="Upcomming Movies" />
      <Upcomming items={item} title="Latest Movies" />
      <Trending />
      <Upcomming items={rec} title="Recommended Movies" />
      <Footer />
    </>
  );
};

export default HomePage;
