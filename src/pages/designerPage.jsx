import React from "react";
import { SearchSection, DesignerList } from "../components/designerPage";
import DesignerSlider from "../components/common/designerSlider";

const DesignerPage = () => {
  return (
    <React.Fragment>
      <SearchSection />
      <DesignerSlider />
      <DesignerList />
    </React.Fragment>
  );
};

export default DesignerPage;
