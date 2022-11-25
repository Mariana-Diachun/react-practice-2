import { useTheme } from '@emotion/react';
import { IoLogoReact } from 'react-icons/io5';

import { Container } from 'components';

import { NavBar, HeaderWrapper, NavText } from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <NavBar>
      <Container>
        <HeaderWrapper>
          <IoLogoReact size="40px" color={theme.colors.accent} />

          <NavText>Lesson 4</NavText>
        </HeaderWrapper>
      </Container>
    </NavBar>
  );
};
