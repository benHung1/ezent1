import {
  Container,
  TextTitle,
  Text,
  TextContainer,
  Div,
  Img,
  Content,
  Icon,
} from "./FooterStyles";
import { footerData } from "../../data/FooterData";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
const url =
  "https://seeklogo.com/images/M/morfose-ossion-logo-C1FD988105-seeklogo.com.png?t=637799108890000000";

const Footer = () => {
  const [ref, inView] = useInView();

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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <>
      <Container>
        {footerData.map((item, index) => (
          <TextContainer
            key={index}
            ref={ref}
            variants={Variants}
            initial="hidden"
            animate={animation}
          >
            <TextTitle>{item.title}</TextTitle>
            {item.links.map((i) => (
              <Text>{i}</Text>
            ))}
          </TextContainer>
        ))}
      </Container>
      <Div>
        <Img src={url} />
        <Content>Ezent @ 2022</Content>
        <Icon>
          <AiOutlineTwitter style={{ color: "#f8f8f8", fontSize: "2rem" }} />
          <AiFillYoutube
            style={{
              color: "#f8f8f8",
              fontSize: "2rem",
              margin: "0 20px",
            }}
          />
          <FaInstagramSquare style={{ color: "#f8f8f8", fontSize: "2rem" }} />
          <BsFacebook
            style={{
              color: "#f8f8f8",
              fontSize: "2rem",
              margin: "0 20px",
            }}
          />
        </Icon>
      </Div>
    </>
  );
};

export default Footer;
