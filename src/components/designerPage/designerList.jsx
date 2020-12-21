import React from "react";
import styled from "styled-components";
import Grid from "../common/grid";
import DesignerCard from "./designerCard";

const designers = [
  {
    image: "https://picsum.photos/id/237/300/300",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 1,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 2,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 3,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 4,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 5,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 6,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 7,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 8,
    sellingCount: 0,
    follower: ["", "", ""],
  },
  {
    image: "/images/banner/designer_banner.png",
    tags: ["심플한", "모던한", ""],
    name: "디자이너",
    profileImage: "https://picsum.photos/id/237/300/300",
    reviewCount: 9,
    sellingCount: 0,
    follower: ["", "", ""],
  },
];

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 4rem;

  & > div:first-child {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    p:first-child {
      font-size: 1.1rem;
      font-weight: 400;

      b {
        font-weight: 700;
      }
    }

    p:last-child {
      font-size: 0.65rem;
      font-weight: 300;
    }
  }
`;

const DesignerList = () => {
  return (
    <StyledSection>
      <div>
        <p>
          <b>All</b> Designer
        </p>
        <p>등록순</p>
      </div>

      <Grid
        items={designers}
        colNum={3}
        ItemComponent={DesignerCard}
        breakpoint="tablet"
        row_space={"0.25rem"}
      />
    </StyledSection>
  );
};

export default DesignerList;
