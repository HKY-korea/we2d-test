import React from "react";

import {
  Banner,
  MainCarousel,
  NewestSection,
  PopularSection,
  DesignerSlider,
} from "../components/mainPage";

const MainPage = () => {
  return (
    <React.Fragment>
      <MainCarousel />
      <PopularSection />
      <Banner />
      <DesignerSlider />
      <NewestSection />
    </React.Fragment>
  );
};

export default MainPage;
