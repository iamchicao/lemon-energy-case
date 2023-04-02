import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  ButtonOption,
} from "./Header.styled";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <ButtonOption src={arrow} />
        </div>
        <Logo src={logo} alt="logo" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
