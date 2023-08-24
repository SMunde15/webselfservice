/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import CombineBilling from './components/combinedPages/Billing';
import CombineDashboard from "./components/combinedPages/Dashboard";
import LeftNav from "./components/left_nav/left_nav";

const App: React.FC = () => {

  return (
    <div>
      <CombineDashboard/>
      {/* <CombineBilling/> */}
      {/* <LeftNav/> */}
    </div>
  );
};

export default App;
