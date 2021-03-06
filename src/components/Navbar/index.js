import React, {useEffect, useState} from 'react';
// import {FaBars} from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import {animateScroll as scroll} from 'react-scroll';
import{
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])


  const toggleHome = () => {
    scroll.scrollToTop();
  }

    return (
       <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>LOGO</NavLogo>
            <MobileIcon onClick={toggle}>
              <RiBarChartHorizontalLine/> 
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >ABOUT</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover">DISCOVER</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">SERVICES</NavLinks>
              </NavItem> 
              <NavItem>
                <NavLinks to="signup">SIGN UP</NavLinks>
              </NavItem> 
            </NavMenu> 
            <NavBtn>
                <NavBtnLink to="/signin">SIGN IN</NavBtnLink>    
            </NavBtn> 
          </NavbarContainer>
        </Nav>
       </>
    );
}

export default Navbar
