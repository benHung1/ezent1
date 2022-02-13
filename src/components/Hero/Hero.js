import React from "react";
import "../Hero/HeroStyles";
import { Link } from "react-router-dom";
import {
  Container,
  TextButton,
  TextContainer,
  TextContent,
  TextTitle,
} from "../Hero/HeroStyles";

const Hero = () => {
  return (
    <Container>
      <TextContainer>
        <TextTitle inverse>FIND THE BEST EVENTS & MEETUP WITH US</TextTitle>
        <TextContent inverse>
          We Help You Find All Of Your Favorite Events In One Place
        </TextContent>
        <Link to="/sign">
          <TextButton>FIND YOR EVENT</TextButton>
        </Link>
      </TextContainer>
    </Container>
  );
};

export default Hero;
