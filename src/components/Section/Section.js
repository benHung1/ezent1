import React, { useEffect } from "react";
import "./SectionStyles";
import {
  Container,
  Content,
  Img,
  LeftContainer,
  RightContainer,
  Title,
  Top,
  Bbutton,
  Left_Right_Container,
} from "./SectionStyles";
import { heroFour, heroOne, heroThree, heroTwo } from "../../data/HeroData";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log(inView);
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <Left_Right_Container inverse>
        <LeftContainer>
          <Img change src={heroOne.img}></Img>
        </LeftContainer>
        <RightContainer>
          <Top>{heroOne.topLine.tex}</Top>
          <Title>{heroOne.headline}</Title>
          <Content>{heroOne.description}</Content>
          <Bbutton inverse>{heroOne.buttonLabel}</Bbutton>
        </RightContainer>
      </Left_Right_Container>
      <Left_Right_Container>
        <RightContainer>
          <Top>{heroTwo.topLine.tex}</Top>
          <Title>{heroTwo.headline}</Title>
          <Content>{heroTwo.description}</Content>
          <Bbutton>{heroTwo.buttonLabel}</Bbutton>
        </RightContainer>
        <LeftContainer>
          <Img src={heroTwo.img}></Img>
        </LeftContainer>
      </Left_Right_Container>
      <Left_Right_Container
        inverse
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={Variants}
      >
        <LeftContainer>
          <Img change src={heroThree.img}></Img>
        </LeftContainer>
        <RightContainer>
          <Top>{heroThree.topLine.tex}</Top>
          <Title>{heroThree.headline}</Title>
          <Content>{heroThree.description}</Content>
          <Bbutton inverse>{heroThree.buttonLabel}</Bbutton>
        </RightContainer>
      </Left_Right_Container>
      <Left_Right_Container>
        <RightContainer
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={Variants}
        >
          <Top>{heroFour.topLine.tex}</Top>
          <Title>{heroFour.headline}</Title>
          <Content>{heroFour.description}</Content>
          <Bbutton>{heroFour.buttonLabel}</Bbutton>
        </RightContainer>
        <LeftContainer
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={Variants}
        >
          <Img src={heroFour.img}></Img>
        </LeftContainer>
      </Left_Right_Container>
    </Container>
  );
};

export default Section;
