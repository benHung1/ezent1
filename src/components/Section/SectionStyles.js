import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Left_Right_Container = styled(motion.div)`
  display: flex;
  background-color: ${({ inverse }) => (inverse ? "#f8f8f8" : "#000")};
  color: ${({ inverse }) => (inverse ? "#000" : "#f8f8f8")};
  @media screen and (max-width: 395px) {
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled(motion.div)`
  flex: 1;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  transform: rotate(2deg);
  width: 70%;
  box-shadow: ${({ change }) =>
    change ? "5px 5px 10px 10px #d12d2d" : "5px 5px 10px 10px orange"};
`;

export const RightContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  letter-spacing: 1.3px;
`;

export const Top = styled.span`
  padding: 10px 15px;
  border-radius: 10px;
  color: #f8f8f8;
  background-color: #d12d2d;
`;

export const Title = styled.h1`
  margin: 20px 0;
  padding: 20px;
`;

export const Content = styled.p`
  padding: 20px;
`;

export const Bbutton = styled.button`
  padding: 12px 64px;
  border-radius: 4px;
  border: 2px solid #d12d2d;
  margin-top: 20px;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  color: ${({ inverse }) => (inverse ? "#000" : "#f8f8f8")};

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
    color: ${({ inverse }) => (inverse ? "#f8f8f8" : "#000")};
  }
`;
