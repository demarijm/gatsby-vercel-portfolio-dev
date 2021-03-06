import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Demari and I’m a Front-End engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Resume
          </Button>
          <Button as={AnchorLink} href="#contact">
            Hire Me
          </Button>
          <Button tertiary as={AnchorLink} href="#contact">
            Download Resume
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Demari and I’m a Front-End engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
