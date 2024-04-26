"use client";
import Image from "next/image";
import "./AgencySelection.sass";
import { Card } from "@/app/collections/Card/Card.jsx";

import SectionBigHeading from "@/components/Typography/SectionBigHeading/SectionBigHeading.jsx";
import MainContainer from "@/components/Containers/MainContainer/MainContainer.jsx";
import SectionHeading from "@/components/Typography/SectionHeading/SectionHeading.jsx";
import ImageVideoContainer from "@/components/Containers/ImageVideoContainer/ImageVideoContainer.jsx";

export default function AgencySelection({ video, ...data }) {
  return (
    <MainContainer>
      <div className="textContainer">
        <SectionBigHeading title={data.title} />
        <SectionHeading data={data.subtitle} />
      </div>
      <div className="background" />
      <div className="flex_container">
        <ImageVideoContainer>
          <Image
            layout="responsive"
            src={video.src}
            alt={video.alt}
            width={video.width}
            height={video.height}
          />
        </ImageVideoContainer>
        <div className="flexItemContainer">
          {data.cards.map((card, index) => (
            <Card {...card} icon={card.icon} index={index} key={card.id} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}
