import React, { useEffect } from "react";
import "./InfoStyles";
import {
  ImgContainer,
  Container,
  Img,
  TextContainer,
  TextTitle,
  TextContent,
  Number,
  NumberText,
} from "./InfoStyles";
import { infoData } from "../../data/InfoData";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const url =
  "https://images.pexels.com/photos/1916819/pexels-photo-1916819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const Info = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={url} />
      </ImgContainer>
      <TextContainer>
        <TextTitle>{infoData.headline}</TextTitle>
        <TextContent>{infoData.description}</TextContent>
        <Number>
          {infoData.bottomLine.map((item, index) => (
            <div key={index}>
              <NumberText>{item.number}</NumberText>
              <NumberText style={{ color: "#d12d2d" }}>
                {item.numberText}
              </NumberText>
            </div>
          ))}
        </Number>
      </TextContainer>
    </Container>
  );
};

export default Info;
