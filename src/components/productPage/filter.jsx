import React, { useContext, useState } from "react";
import styled, { ThemeContext, css } from "styled-components";
import Button from "../common/button";
import { IoMdArrowDropdown } from "react-icons/io";
import engNameToKor from "../../utils/engNameToKor";

const OpenButton = styled.button`
  display: block;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 100;
  width: 100%;
  height: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: white;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkGray};

  svg {
    font-size: 1.5rem;
  }

  ${({ isOpen }) =>
    isOpen
      ? css`
          svg {
            transition: transform 0.5s;
            transform: rotate(180deg);
          }
        `
      : css`
          svg {
            transition: transform 0.5s;
            transform: rotate(0deg);
          }
        `}
`;

const Controller = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 2.4rem;
  z-index: 100;
  background-color: white;

  & > div {
    display: flex;
    border: 0.05rem solid ${({ theme }) => theme.colors.gray};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
    `}
`;

const Classification = styled.p`
  min-width: 7rem;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0.5rem;
`;

const ContentButton = styled.button`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 23px;
  background-color: white;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 400;
  margin: 0.5rem 0.5rem;
`;

const ControlButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;

  button:first-child {
    margin-right: 0.5rem;
  }
`;

const Filter = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("nothing");
  const [tags, setTags] = useState([]);
  const [model, setModel] = useState("nothing");

  const themeContext = useContext(ThemeContext);

  const handleClick = (classification, item) => {
    if (classification === "category")
      setCategory(category === item ? "nothing" : item);
    else if (classification === "model")
      setModel(model === item ? "nothing" : item);
  };

  const handleTagClick = (item) => {
    const index = tags.indexOf(item);

    if (index === -1) tags.push(item);
    else tags.splice(index, 1);
    setTags([...tags]);
  };

  const changingStyle = (classification, item) => {
    if (classification.includes(item))
      return { backgroundColor: themeContext.colors.primary, color: "white" };
  };

  const handleReset = () => {
    setCategory("nothing");
    setTags([]);
    setModel("nothing");
  };

  return (
    <React.Fragment>
      <OpenButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        세부필터 <IoMdArrowDropdown isOpen />
      </OpenButton>
      <Controller isOpen={isOpen}>
        {content.category && (
          <div>
            <Classification>카테고리</Classification>
            <Content>
              {content.category.map((item, i) => (
                <ContentButton
                  key={i}
                  onClick={() => handleClick("category", item)}
                  style={changingStyle(category, item)}
                >
                  {engNameToKor(item)}
                </ContentButton>
              ))}
            </Content>
          </div>
        )}

        {content.tags && (
          <div>
            <Classification>#해시태그</Classification>
            <Content>
              {content.tags.map((item, i) => (
                <ContentButton
                  key={i}
                  onClick={() => handleTagClick(item)}
                  style={changingStyle(tags, item)}
                >
                  {item}
                </ContentButton>
              ))}
            </Content>
          </div>
        )}

        {content.model && (
          <div>
            <Classification>기종</Classification>
            <Content>
              {content.model.map((item, i) => (
                <ContentButton
                  key={i}
                  onClick={() => handleClick("model", item)}
                  style={changingStyle(model, item)}
                >
                  {engNameToKor(item)}
                </ContentButton>
              ))}
            </Content>
          </div>
        )}

        <ControlButtons>
          <Button
            outline
            color="gray"
            font_color="darkGray"
            onClick={handleReset}
          >
            초기화
          </Button>
          <Button>검색</Button>
        </ControlButtons>
      </Controller>
    </React.Fragment>
  );
};

export default Filter;
