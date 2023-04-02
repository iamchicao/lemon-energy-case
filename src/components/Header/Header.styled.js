import styled from "styled-components";

// HeaderContainer, HeaderContent, Logo, Nav, NavItem


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  flex-direction: row-reverse;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const ButtonOption = styled.button`
  margin-left: -340px;
  font-size: 18px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

// export const Nav = styled.nav`
//   margin-left: 40px;
// `;

// export const NavItem = styled.a`
//   margin-right: 20px;
//   font-size: 18px;
//   color: #000;
//   text-decoration: none;
//   cursor: pointer;
// `;