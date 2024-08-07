import React from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  return (
    <div>
      {intl.formatMessage({ id: "welcome" })}
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Home;
