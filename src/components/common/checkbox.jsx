import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
`;

export default Checkbox;
