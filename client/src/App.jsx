import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import LogIn from "./Pages/LogIn/LogIn";
import ReviewsHome from "./Pages/ReviewsHome/ReviewsHome";
import Landing from "./Pages/Landing/Landing";
import AllReviews from "./Pages/AllReviews/AllReviews";
import SingleReview from "./Pages/SingleReview/SingleReview";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    return <Navigate to="/" />;
  };

  return (
    <Router>
      <div className="App">
        <TopNav
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <main>
          <Routes>
            <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
            <Route path="/add-review" element={<SingleReview />} />
            <Route path="/show-reviews" element={<AllReviews />} />
            <Route
              path="/"
              element={
                isLoggedIn ? <ReviewsHome /> : <Landing onLogin={handleLogin} />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
