import React from 'react';

import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
