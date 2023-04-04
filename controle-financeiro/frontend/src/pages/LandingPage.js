import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div />;
}
