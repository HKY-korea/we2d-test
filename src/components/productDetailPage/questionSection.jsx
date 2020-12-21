import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../common/button";
import NonItem from "../common/nonItem";
import Pagination from "../common/pagination";
import paginate from "../../utils/paginate";

const questionData = [
  {
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    writer: "asdasd",
    date: "2020.07.03",
    isAnswer: false,
    answer: "",
    answerDate: "2020.09.10",
  },
  {
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    writer: "asdasd",
    date: "2020.07.03",
    isAnswer: false,
    answer: "",
    answerDate: "2020.09.10",
  },
  {
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    writer: "asdasd",
    date: "2020.07.03",
    isAnswer: true,
    answer: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    answerDate: "2020.09.10",
  },
  {
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    writer: "asdasd",
    date: "2020.07.03",
    isAnswer: false,
    answer: "",
    answerDate: "2020.09.10",
  },
  {
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    writer: "asdasd",
    date: "2020.07.03",
    isAnswer: false,
    answer: "",
    answerDate: "2020.09.10",
  },
  {
    content: `mmmmm
mmmmmm
mmmmmmㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`,
    writer: "asdasd",
    date: "2020.07.03",
    isAnswer: false,
    answer: "",
    answerDate: "2020.09.10",
  },
];

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto 4.25rem;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    p {
      font-size: 1.1rem;
      font-weight: 700;
    }
  }

  & > div:nth-child(2) {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const Question = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 0.8rem;

  ${({ isAnswer }) =>
    isAnswer
      ? css`
          background-color: ${({ showAnswer, theme }) =>
            showAnswer && theme.colors.lightGray};
          cursor: pointer;
        `
      : css`
          p:first-child {
            color: ${({ theme }) => theme.colors.gray};
          }
        `}

  p:first-child {
    font-weight: 500;
  }

  & > p:nth-of-type(2),
  & > p:nth-of-type(3) {
    font-weight: 400;
    display: inline-block;
    font-size: 0.65rem;
    margin: 0.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  span {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  pre {
    font-weight: 300;
    text-align: left;
    overflow: hidden;
    white-space: pre-wrap;
    line-height: 1rem;
  }
`;

const Answer = styled(Question)`
  display: none;

  ${({ showAnswer }) =>
    showAnswer &&
    css`
      display: block;
    `}

  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.lightGray};

  div {
    margin-left: -1rem;

    span {
      margin: 0 0.2rem 0 0;
      color: ${({ theme }) => theme.colors.gray};
    }

    p {
      font-size: 0.8rem;
      font-weight: 500;
      display: inline-block;
      padding: 0.25rem 0.5rem;
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 0.25rem;
    }
  }

  & > p:nth-of-type(1),
  & > p:nth-of-type(2) {
    font-weight: 400;
    display: inline-block;
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const QuestionSection = ({ obj, questionRef }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const questions = paginate(questionData, currentPage, obj.pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <StyledSection ref={questionRef}>
      <div>
        <p>{obj.title}</p>
        <Button outline size="xSmall" color="gray" font_color="darkGray">
          {obj.writeBtnTitle} <IoIosArrowForward style={{ marginTop: 2 }} />
        </Button>
      </div>

      {questions.length === 0 ? (
        <NonItem
          title={obj.nonQuestion.title}
          description={obj.nonQuestion.description}
        />
      ) : (
        questions.map((question, i) => (
          <React.Fragment>
            <Question
              key={i}
              onClick={() =>
                question.isAnswer ? setShowAnswer(!showAnswer) : null
              }
              isAnswer={question.isAnswer}
              showAnswer={showAnswer}
            >
              <p>
                {question.isAnswer ? obj.status.completed : obj.status.waiting}
              </p>
              <p>{question.writer.slice(0, 3)}****</p>
              <span>|</span>
              <p>{question.date}</p>
              <pre>{question.content}</pre>
            </Question>
            {question.isAnswer && (
              <Answer showAnswer={showAnswer}>
                <div>
                  <span>┗</span>
                  <p>{obj.answerText}</p>
                </div>
                <p>위투디</p>
                <span>|</span>
                <p>{question.answerDate}</p>
                <pre>{question.answer}</pre>
              </Answer>
            )}
          </React.Fragment>
        ))
      )}

      <Pagination
        itemsCount={questionData.length}
        pageSize={obj.pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledSection>
  );
};

export default QuestionSection;
