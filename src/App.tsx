import { Row } from "antd";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import "./index.scss";
import "./App.css";

function App() {
  return (
    <>
      <Row className="un-auth-wrapper">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="../" />} />
        </Routes>
      </Row>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
