import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SinglePage from "./components/watch/SinglePage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserInfo from "./pages/UserInfo";
import AddProfile from "./pages/AddProfile";

// user context
import { UserAuth } from "./context/AuthContext";
// firebase
import { db } from "./utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import WatchHistory from "./pages/WatchHistory";

const App = () => {
  const {
    user,
    setUserName,
    setImageAsset,
    setEmail,
    setNumber,
    setAddress,
    setDocId,
    setUserId,
  } = UserAuth();

  // getting user profile
  const fetchUserDetails = async () => {
    if (user && user?.uid) {
      const q = query(
        collection(db, "userInfo"),
        where("userId", "==", user?.uid)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.map((doc) => {
        setDocId(doc.id);
        const userData = doc.data();
        if (userData) {
          setUserId(userData.userId);
          setUserName(userData.userName);
          setImageAsset(userData.image);
          setEmail(userData.email);
          setNumber(userData.number);
          setAddress(userData.address);
        }
        return doc.id;
      });
    }
  };

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, user?.uid]);

  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={<HomePage fetchUserDetails={fetchUserDetails} />}
          />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/userinfo"
            element={<UserInfo fetchUserDetails={fetchUserDetails} />}
          />
          <Route path="/history" element={<WatchHistory />} />
          <Route path="/addprofile" element={<AddProfile />} />
          <Route path="/editprofile/:id" element={<AddProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
