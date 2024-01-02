import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectToHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/basvuru-olustur");
  });

  return null;
};
