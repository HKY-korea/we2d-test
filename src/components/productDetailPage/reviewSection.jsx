import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import StarIcons from "../common/starIcons";
import Button from "../common/button";
import NonItem from "../common/nonItem";
import Pagination from "../common/pagination";
import paginate from "../../utils/paginate";

const reviewData = [
  {
    writer: "sadsadas",
    date: "2020.07.02",
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
  },
  {
    writer: "sadsadas",
    date: "2020.07.02",
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
  },
  {
    writer: "sadsadas",
    date: "2020.07.02",
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
  },
  {
    writer: "sadsadas",
    date: "2020.07.02",
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
  },
];

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 3rem;

  & > p:first-child {
    font-size: 1.1rem;
    font-weight: 700;
  }

  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }

  & > div:nth-of-type(3) {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 0;
  width: 100%;
  height: 9.75rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;

  & > div {
    p:first-child {
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 2rem;
    }

    p:last-child {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.35rem;
    }
  }
`;

const Review = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 0.8rem;

  & > p:nth-of-type(1),
  & > p:nth-of-type(2) {
    font-weight: 400;
    display: inline-block;
    font-size: 0.65rem;
    margin: 0.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  span {
    margin: 0 0.5rem;
  }

  pre {
    font-weight: 300;
    text-align: left;
    overflow: hidden;
    white-space: pre-wrap;
    line-height: 1rem;
  }
`;

const ReviewSection = ({ obj, reviewRef }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviews = paginate(reviewData, currentPage, obj.pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <StyledSection ref={reviewRef}>
      <p>{obj.title}</p>
      <Preview>
        <div>
          <StarIcons icon_size="2rem" />
          <p>0/5</p>
        </div>
        <div>
          <p>{obj.countName}</p>
          <p>{reviewData.length}</p>
        </div>
      </Preview>

      <div>
        <p>{obj.totalName}</p>
        <Button outline size="xSmall" color="gray" font_color="darkGray">
          {obj.writeBtnTitle} <IoIosArrowForward style={{ marginTop: 2 }} />
        </Button>
      </div>

      {reviews.length === 0 ? (
        <NonItem
          title={obj.nonReview.title}
          description={obj.nonReview.description}
        />
      ) : (
        reviews.map((review, i) => (
          <React.Fragment>
            <Review key={i}>
              <StarIcons />
              <p>{review.writer}</p>
              <span>|</span>
              <p>{review.date}</p>
              <pre>{review.content}</pre>
            </Review>
          </React.Fragment>
        ))
      )}

      <Pagination
        itemsCount={reviewData.length}
        pageSize={obj.pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledSection>
  );
};

export default ReviewSection;
