import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  ButtonArrow,
} from "./Header.styled";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ButtonArrow src={arrow} />
        <Logo src={logo} alt="Logo" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
