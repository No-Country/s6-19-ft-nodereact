import "./index.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCredentials } from "./redux/slices/authSlice";
import Home from "./pages/Home";
import EbooksPage from "./pages/EbooksPage";
import EbooksDetail from "./pages/EbooksDetail";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setCredentials(user));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/ebooks/:ebookId" element={<EbooksDetail />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
