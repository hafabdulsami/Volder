import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layouts from "./layouts/Layouts";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layouts />
    </Router>
  );
};

export default App;
