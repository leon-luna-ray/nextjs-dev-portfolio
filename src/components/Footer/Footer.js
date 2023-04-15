import React from 'react';

import { FooterText, FooterWrapper } from './FooterStyles';

const Footer = ({ name }) => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <FooterWrapper>
      <FooterText>
        © {name} {year}
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
