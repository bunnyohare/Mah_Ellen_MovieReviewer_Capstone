import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import LogIn from "./pages/LogIn/LogIn.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import AllReviews from "./pages/AllReviews/AllReviews.jsx";
import EditReview from "./pages/EditReview/EditReview.jsx";
import { useLogin } from "./LoginContext.jsx";
import MovieSelect from "./components/MovieSelect/MovieSelect.jsx";

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
            <Route path="/edit-review/:id" element={<EditReview />} />
            <Route
              path="/"
              element={
                isLoggedIn ? <Landing /> : <Landing onLogin={handleLogin} />
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
