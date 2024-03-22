import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <div>
      <Button onClick={() => handleRoute("login")}>Login</Button>
      <Button onClick={() => handleRoute("signup")}>Sign Up</Button>
    </div>
  );
}

export default LandingPage;
