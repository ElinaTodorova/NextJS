// The Card to be exported goes here
"use client";
import Image from "next/image";
import Link from "next/link";
import "./Card.sass";

import SectionParagraph from "@/components/Typography/SectionParagraph/SectionParagraph.jsx";
import SectionSubheading from "@/components/Typography/SectionSubheading/SectionSubheading.jsx";
import CardContainer from "@/components/Containers/CardContainer/CardContainer.jsx";
import InfoContainer from "@/components/Containers/InfoContainer/InfoContainer.jsx";

export const Card = ({ icon, index, ...card }) => {
  return (
    <CardContainer>
      <div className="icon">
        <Image
          layout="responsive"
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </div>
      <InfoContainer>
        {card.title === "Pitch" ? (
          <Link href="/">
            <SectionSubheading data={card.title} />
          </Link>
        ) : (
          <SectionSubheading data={card.title} />
        )}
        <SectionParagraph data={card.content} />
      </InfoContainer>
    </CardContainer>
  );
};
