import { SectionContainer } from "@/components/Containers/SectionContainer/SectionContainer.jsx";
import { SectionBigHeading } from "@/components/Typography/SectionBigHeading.jsx";
import { SectionSubheading } from "@/components/Typography/SectionSubheading.jsx";
import styled from "styled-components";

export const StyledContainer = styled(SectionContainer)`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledTextContainer = styled.div`
  color: black;
  width: 50%;
  margin: 0 auto;
  font-family: sans-serif;
  position: relative;
  z-index: 100;
`;

export const StyledTitle = styled(SectionBigHeading)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: black;
  text-align: center;

  @media (min-width: 1024px) {
    margin-top: 3rem;
    margin-bottom: 0.5rem; 
    font-size: 2.5rem;
  }
`;

export const StyledSubtitle = styled(SectionSubheading)`
  margin: 0;
  text-align: center;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const StyledBackgroundContainer = styled.div`
  width: 50vw;
  height: 50svh;
  margin-left: auto;
  display: block;
  position: absolute;
  bottom: 6rem;
  top: 5rem;
  left: calc(100%/3 - 200px - 2*1em);
  background-image: url("/background.png");
  background-size: cover;

  @media (min-width: 768px) {
    bottom: 0;
    top: 4rem;
    left: calc(100%/3 - 200px - 2*7em);
    width: 40vw;
    height: 50vh;
    }

  @media (min-width: 1024px) {
  bottom: 0;
  top: 10rem;
  width: 50vw;
  height: 60vh;
  }
`;

export const StyledFlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledImageContainer = styled.div`
  heigth: 20rem;
  width : 15rem;
  position: relative;
  z-index: 102;
  box-sizing: border-box;
  
  @media (min-width: 1024px) {
  heigth: 35rem;
  width : 20rem;
  position: relative;
  z-index: 102;
  box-sizing: border-box;
  }
`;

  export const StyledFlexItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & > :nth-child(3) {
      border : 1.5px solid rgb(95, 152, 226);
    }
  `;

export const StyledImgContainer = styled.div`
  width: 3.5rem;
  height : 3.5rem;
`;