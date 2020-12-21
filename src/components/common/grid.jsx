import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const StyledRow = styled(Row)`
  margin: ${({ margin }) => margin} -${({ row_space }) => row_space};

  @media (max-width: ${({ theme, breakpoint }) => theme.media[breakpoint]}) {
    display: none;
  }
`;

const StyledCol = styled(Col)`
  margin: 0 ${({ row_space }) => row_space};
  padding: 0;

  .spacer {
    margin-top: ${({ col_space }) => col_space};

    &:first-child {
      margin-top: 0;
    }
  }

  @media (max-width: ${({ theme, breakpoint }) => theme.media[breakpoint]}) {
    display: none;
  }
`;

const MobileRow = styled(StyledRow)`
  display: none;

  @media (max-width: ${({ theme, breakpoint }) => theme.media[breakpoint]}) {
    margin: ${({ margin }) => margin} -${({ row_space }) => row_space};
    display: flex;
  }
`;

const MobileCol = styled(StyledCol)`
  display: none;

  @media (max-width: ${({ theme, breakpoint }) => theme.media[breakpoint]}) {
    display: flex;
    flex-direction: column;
    margin: 0 ${({ row_space }) => row_space};

    .spacer {
      margin-top: ${({ col_space }) => col_space};
    }
  }
`;

const Grid = ({
  items,
  colNum,
  ItemComponent,
  margin = "1rem",
  row_space = "0.25rem",
  col_space = "1rem",
  breakpoint = "mobile",
}) => {
  const ColItem = (i) => (
    <div key={i} className="spacer">
      <ItemComponent data={items[i]} />
    </div>
  );

  if (colNum === 4) {
    const column = {
      col1: [],
      col2: [],
      col3: [],
      col4: [],
      mobileCol1: [],
      mobileCol2: [],
    };

    for (let i = 0; i < items.length; i++) {
      if (i % colNum === 0) {
        column.col1.push(ColItem(i));
        column.mobileCol1.push(ColItem(i));
      } else if (i % colNum === 1) {
        column.col2.push(ColItem(i));
        column.mobileCol2.push(ColItem(i));
      } else if (i % colNum === 2) {
        column.col3.push(ColItem(i));
        column.mobileCol1.push(ColItem(i));
      } else {
        column.col4.push(ColItem(i));
        column.mobileCol2.push(ColItem(i));
      }
    }

    return (
      <React.Fragment>
        <StyledRow
          margin={margin}
          row_space={row_space}
          breakpoint={breakpoint}
        >
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col1}
          </StyledCol>
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col2}
          </StyledCol>
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col3}
          </StyledCol>
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col4}
          </StyledCol>
        </StyledRow>

        <MobileRow
          margin={margin}
          row_space={row_space}
          breakpoint={breakpoint}
        >
          <MobileCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.mobileCol1}
          </MobileCol>
          <MobileCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.mobileCol2}
          </MobileCol>
        </MobileRow>
      </React.Fragment>
    );
  }

  if (colNum === 3) {
    const column = {
      col1: [],
      col2: [],
      col3: [],
      mobileCol1: [],
      mobileCol2: [],
    };

    let isOdd = true;

    for (let i = 0; i < items.length; i++) {
      if (i % colNum === 0) {
        column.col1.push(ColItem(i));

        if (isOdd) column.mobileCol1.push(ColItem(i));
        else column.mobileCol2.push(ColItem(i));
      } else if (i % colNum === 1) {
        column.col2.push(ColItem(i));

        if (isOdd) column.mobileCol2.push(ColItem(i));
        else column.mobileCol1.push(ColItem(i));
      } else if (i % colNum === 2) {
        column.col3.push(ColItem(i));

        if (isOdd) column.mobileCol1.push(ColItem(i));
        else column.mobileCol2.push(ColItem(i));

        isOdd = !isOdd;
      }
    }

    return (
      <React.Fragment>
        <StyledRow
          margin={margin}
          row_space={row_space}
          breakpoint={breakpoint}
        >
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col1}
          </StyledCol>
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col2}
          </StyledCol>
          <StyledCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.col3}
          </StyledCol>
        </StyledRow>

        <MobileRow
          margin={margin}
          row_space={row_space}
          breakpoint={breakpoint}
        >
          <MobileCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.mobileCol1}
          </MobileCol>
          <MobileCol
            row_space={row_space}
            col_space={col_space}
            breakpoint={breakpoint}
          >
            {column.mobileCol2}
          </MobileCol>
        </MobileRow>
      </React.Fragment>
    );
  }
};

export default Grid;
