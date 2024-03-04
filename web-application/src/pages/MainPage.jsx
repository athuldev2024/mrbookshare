/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ChatSection from "components/ChatSection";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p onClick={() => navigate("/profile")}>Navigate to profile page</p>
      <br />
      <ChatSection />
    </div>
  );
};

export default Main;
