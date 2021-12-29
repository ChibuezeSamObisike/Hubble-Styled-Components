import styled from "styled-components";

export const Flex = styled.div `
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-bottom: 40px;
    text-align: center;
  }
`;