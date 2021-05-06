import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {
FooterContainer, 
FooterWrap, 
FooterLinksContainer, 
FooterLinksWrapper,
FooterLinkItems, 
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink
} from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>

            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carriers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo tp='/'>
                            Logo
                        </SocialLogo>
                        <WebsiteRights>Logo © {new Date().getFullYear()} 
                        All Rights Reserved
                        <SocialIcons>
                            <SocialIconLink href="//" target="_blank" 
                            aria-lable="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//" target="_blank" 
                            aria-lable="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="//" target="_blank" 
                            aria-lable="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
