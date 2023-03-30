import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Login />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
