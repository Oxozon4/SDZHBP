import React from 'react';
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  GreenIconStyleWrapper,
  SearchBarImg,
  WhiteButton,
  SearchBarContainer,
  BottomMenu,
  ContentContainer,
  ContentLeftContainer,
  TextSection,
  ContentRight,
  SectionHeader,
} from './Step4-styled';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import '@fontsource/montserrat';
const Step3 = () => {
  return (
    <Wrapper>
      <Header>
        <Logo>Bookify</Logo>
        <IconStyleWrapper>
          <AccountCircle size="60" />
        </IconStyleWrapper>
      </Header>
      {/* search bar */}
      <SearchBarContainer>
        <SearchBarImg></SearchBarImg>
      </SearchBarContainer>
      <ContentContainer>
        <ContentLeftContainer>
          <GreenIconStyleWrapper>
            <CheckCircle size="96" />
          </GreenIconStyleWrapper>
          <SectionHeader>Dziękujemy!</SectionHeader>
          <TextSection>Twoja rezerwacja została rozpatrzona pozytywnie a jej potwierdzenie otrzymasz wkrótce na podany adres e-mail!</TextSection>
          <TextSection>Dziękujemy za skorzystanie z Bookify.</TextSection>
        </ContentLeftContainer>
        <ContentRight>
          Podsumowanie rezerwacji
          <GreenIconStyleWrapper>
            <KeyboardArrowDown size="36" />
          </GreenIconStyleWrapper>
        </ContentRight>
      </ContentContainer>
      <BottomMenu>
        <IconStyleWrapper>
          <span>
            <KeyboardArrowLeft size="36" />
            Wstecz
          </span>
        </IconStyleWrapper>
        <WhiteButton>Dalej</WhiteButton>
      </BottomMenu>
    </Wrapper>
  );
};

export default Step3;
