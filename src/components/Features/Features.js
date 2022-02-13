import React, { useEffect } from "react";
import "./FeaturesStyles";
import {
  Container,
  FeaturesContainer,
  FeaturesContent,
  FeaturesIcon,
  FeaturesTitle,
  FeaturesWrapper,
  TextContainer,
  TextContent,
  TextTitle,
} from "./FeaturesStyles";
import { featuresData } from "../../data/FeaturesData";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const Variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <Container>
      <TextContainer>
        <TextTitle>{featuresData.title}</TextTitle>
        <TextContent>{featuresData.text}</TextContent>
      </TextContainer>
      <FeaturesContainer
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={Variants}
      >
        {featuresData.content.map((item, index) => (
          <FeaturesWrapper key={index}>
            <FeaturesIcon>{item.icon}</FeaturesIcon>
            <FeaturesTitle>{item.name}</FeaturesTitle>
            <FeaturesContent>{item.desc}</FeaturesContent>
          </FeaturesWrapper>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default Features;
