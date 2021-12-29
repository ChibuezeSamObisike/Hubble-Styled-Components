import styled from "styled-components";

const StyledHeader = styled.header `
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;
`;

export default StyledHeader;

export const Nav = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Image = styled.img `
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export const Logo = styled.img `
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;