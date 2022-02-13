import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 69;
`;

export const ImgContainer = styled.img`
  @media screen and (max-width: 940px) {
  }
`;

export const NavList = styled(motion.ul)`
  list-style: none;
  display: flex;
  align-items: center;
  color: #f8f8f8;
  @media screen and (max-width: 940px) {
    position: absolute;
    background-color: black;
    flex-direction: column;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    opacity: 0;
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
  }
`;

export const List = styled.li`
  font-weight: 600;
  font-size: clamp(1.5rem, 1vw, 2.5rem);
  cursor: pointer;
  width: 100%;
  margin: 0 30px;
  list-style: none;
  &:hover {
    color: #d12d2d;
  }
`;

export const Icon = styled(FaBars)`
  color: red;
  z-index: 5;
  display: none;
  @media screen and (max-width: 940px) {
    display: block;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 699;
  cursor: pointer;
`;

export const MobileList = styled.div``;
