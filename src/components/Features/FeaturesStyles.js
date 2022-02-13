import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  background-color: #000;
  color: #f8f8f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;
  text-align: center;
  letter-spacing: 1.5px;
  flex: 1;
`;

export const TextTitle = styled.h1`
  margin-bottom: 50px;
`;

export const TextContent = styled.p``;

export const FeaturesContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex: 1;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  width: 25vw;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const FeaturesIcon = styled.p``;
export const FeaturesTitle = styled.h3`
  padding: 20px;
`;
export const FeaturesContent = styled.p`
  color: gray;
`;
