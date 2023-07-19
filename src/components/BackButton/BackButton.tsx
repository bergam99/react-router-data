import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return <button onClick={back}>Retour</button>;
};

export default BackButton;
