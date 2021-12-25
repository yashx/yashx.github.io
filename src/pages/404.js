import React from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/");
  }, []);

  return <div></div>;
};

export default NotFoundPage;
