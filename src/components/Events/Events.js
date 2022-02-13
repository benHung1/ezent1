import React, { useEffect } from "react";
import "./EventsStyles";
import {
  Container,
  TitleContainer,
  Title,
  Gallery,
  Img,
  Div,
  DivTitle,
  DivContainer,
} from "./EventsStyles";
import { eventsData } from "../../data/EventsData";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Events = () => {
  const [ref, inView] = useInView();

  const animation = useAnimation();

  const Variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <>
      <Container>
        <TitleContainer>
          <Title>EZENT IMAGE EVENTS</Title>
        </TitleContainer>
        <Gallery
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={Variants}
        >
          {eventsData.map((item, index) => (
            <DivContainer>
              <Img src={item.img} key={index} />
              <Div>
                <DivTitle>Find More</DivTitle>
              </Div>
            </DivContainer>
          ))}
        </Gallery>
      </Container>
    </>
  );
};

export default Events;
