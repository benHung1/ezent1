import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Section = styled.div`
  color: #f8f8f8;
  padding: 160px;
  background: ${({ inverse }) => (inverse ? "#020305" : "#f8f8f8")};
`;

export const MainHeading = styled.h1`
  font-style: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "#f8f8f8" : "#020305")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: space nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-weight: 600;
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid #d12d2d;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background-color: #d12d2d;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 1.5s ease;
    width: 102%;
    height: 0%;
  }

  &:hover:before {
    height: 200%;
  }

  &:hover {
    z-index: 1;
    color: black;
  }
`;

export default GlobalStyle;
