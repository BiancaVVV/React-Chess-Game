import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    background-color: antiquewhite;
`;

const FooterText = styled.p`
  font-weight: normal;
  justify-self: center;
  text-align: left;
  color: ${props => props.theme.colors.text};
`;

const FooterSpacer = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.text};
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
      </FooterText>
      <FooterSpacer />
      <FooterText>
      </FooterText>
    </FooterContainer>
  );
};