import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

export const TitleContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #f8f8f8;
  font-size: 10vw;
  text-align: center;
`;

export const Gallery = styled(motion.div)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-auto-rows: 375px;
  grid-auto-flow: dense;
  margin-top: 4rem;
  background-color: black;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  transition: 0.5s all ease;
  z-index: -50;
`;

export const DivContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:hover > Div {
    left: 0;
  }
`;

export const Div = styled.div`
  background-color: #000;
  position: absolute;
  top: 0;
  left: -90%;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in;
  /* &:hover {
    left: 0;
  } */
`;

export const DivTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #f8f8f8;
`;
