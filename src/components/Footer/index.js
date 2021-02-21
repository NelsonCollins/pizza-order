import React from 'react'
import{FooterContainer, FooterWrap, SocialIconLink, SocialIcons, 
    SocialMedia, SocialMediaWrap, SocialLogo } from './FooterElements';
import{FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
