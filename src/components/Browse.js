import React from "react";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
  return (
    <div>
      <Header />
      <div>
        <MainContainer></MainContainer>
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
