import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/organ");
        }}
      >
        organ
      </button>
      <button
        onClick={() => {
          navigate("/disease");
        }}
      >
        disease
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        homepage
      </button>
    </div>
  );
};

export default Header;
