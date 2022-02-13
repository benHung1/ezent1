import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background-color: #000;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 395px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled(motion.div)`
  padding: 20px;
`;

export const TextTitle = styled.h1`
  color: #f8f8f8;
  padding: 10px; ;
`;

export const Text = styled.p`
  color: #f8f8f8;
  padding: 10px; ;
`;

export const Div = styled(motion.div)`
  display: flex;
  background-color: #000;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 395px) {
    flex-direction: column;
  }
`;

export const Icon = styled.div``;

export const Img = styled.img``;

export const Content = styled.h3`
  color: #f8f8f8;
`;
