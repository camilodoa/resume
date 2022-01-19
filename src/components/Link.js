import React from 'react'
import styled from 'styled-components';

const A = styled.a`
  color:  #0059a7;
`;

const Link = ({ src, children }) => {
  return <A href={src} rel='noopener noreferrer' target='_blank'>
      {children}
    </A>;
}

export default Link;
