import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  background-color: #000;
  flex: 1;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  font-size: clamp(0.8rem, 1vw, 1.5rem);
`;

export const TextTitle = styled.h1`
  color: ${({ inverse }) => (inverse ? "#000" : "#f8f8f8")};
  margin: 20px 20px 20px 80px;
`;

export const TextContent = styled.h3`
  margin: 20px 20px 20px 80px;
  color: ${({ inverse }) => (inverse ? "#000" : "#f8f8f8")};
`;

export const Number = styled.div`
  display: flex;
  justify-content: space-around;
  color: #f8f8f8;
  padding: 20px 0;
`;

export const NumberText = styled.p`
  margin-right: 60px;
  font-weight: 600;
  @media screen and (max-width: 395px) {
    margin-right: 0px;
  }
  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`;
