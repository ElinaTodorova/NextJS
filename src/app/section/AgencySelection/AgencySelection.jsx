"use client";
import Image from "next/image";

import { Card } from "@/app/collections/Card/Card.jsx";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledBackgroundContainer,
  StyledFlexContainer,
  StyledImageContainer,
  StyledFlexItem,
} from "./elements.jsx";

export default function AgencySelection({ video, ...data }) {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledSubtitle>{data.subtitle}</StyledSubtitle>
      </StyledTextContainer>
      <StyledBackgroundContainer />
      <StyledFlexContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={video.src}
            alt={video.alt}
            width={video.width}
            height={video.height}
          />
        </StyledImageContainer>
        <StyledFlexItem>
          {data.cards.map((card, index) => (
            <Card {...card} icon={card.icon} index={index} key={card.id} />
          ))}
        </StyledFlexItem>
      </StyledFlexContainer>
    </StyledContainer>
  );
}
