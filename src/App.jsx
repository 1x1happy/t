import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import styles from "./styles/App.module.css";
import { Link } from "react-router";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/">Главная</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
