import React from 'react'
import {Button} from "../ButtonElements";
import Fade from 'react-reveal/Fade';

import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper,
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap, 
    Img} from './InfoElements';

const InfoSection = ({
    lightBg,
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    descriptionInfo, 
    buttonLabel,
    img, 
    alt, 
    primary, 
    dark, 
    dark2}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{descriptionInfo}</Subtitle>
                        <BtnWrap>
                          <Button to="home" 
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}
                          
                          >{buttonLabel}</Button>
                        </BtnWrap>
                     </TextWrapper>
                </Column1>
               <Fade right>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt} />
                </ImgWrap>
                </Column2>
                </Fade>
            </InfoRow>
         </InfoWrapper>
     </InfoContainer> 
        </>
    )
};

export default InfoSection ;
