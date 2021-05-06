import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBntWrap, 
    SidebarRoute
} 
from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
            <CloseIcon /> 
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    ABOUT
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                    DISCOVER
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    SERVICES
                </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>
                    SIGN UP
                </SidebarLink>
               </SidebarMenu>
               <SideBntWrap>
                   <SidebarRoute to="/signin">SIGN IN</SidebarRoute>
               </SideBntWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
