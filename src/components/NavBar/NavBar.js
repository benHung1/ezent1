import React, { useState } from "react";
import {
  ImgContainer,
  List,
  NavList,
  Container,
  Div,
  MobileList,
  MobList,
  Icon,
} from "./NavBarStyles";
import { navbarData } from "../../data/NavbarData";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const url =
  "https://seeklogo.com/images/M/morfose-ossion-logo-C1FD988105-seeklogo.com.png?t=637799108890000000";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

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
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <Container>
      <ImgContainer src={url} />
      <NavList
        show={show}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={Variants}
      >
        {navbarData.map((item) => (
          <List key={item.text}>{item.text}</List>
        ))}
      </NavList>
      <Div onClick={handleClick}>
        {show ? (
          <FaTimes color="red" size={30} />
        ) : (
          <Icon color="red" size={30} />
        )}
      </Div>
    </Container>
  );
};

export default NavBar;
