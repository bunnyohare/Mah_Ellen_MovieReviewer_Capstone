import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import LogIn from "./Pages/LogIn/LogIn";
import ReviewsHome from "./Pages/ReviewsHome/ReviewsHome";
import Landing from "./Pages/Landing/Landing";
import AllReviews from "./Pages/AllReviews/AllReviews";
//import SingleReview from "./Pages/SingleReview/SingleReview";
import { useLogin } from './LoginContext.jsx';
import MovieSelect from './components/MovieSelect/MovieSelect.jsx'

function App() {
  const { isLoggedIn, login, logout } = useLogin();

  const handleLogin = () => {
    login();
    return <Navigate to="/show-reviews" />;
  };

  const handleLogout = () => {
    logout();
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
            <Route path="/home" element={<Landing />} />
            <Route path="/add-review" element={<MovieSelect />} />
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
