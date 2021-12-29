import styled from "styled-components";

export const Button = styled.button `
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;