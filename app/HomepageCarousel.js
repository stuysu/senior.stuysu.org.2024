"use client";

import slides from "@/data/carousel.json";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel  } from "react-responsive-carousel";

export default function HomepageCarousel() {
  return (
    <Carousel showThumbs={false} emulateTouch={true}>
      {
        slides.map(slide => (
          <div>
            <img
              src={slide.image}
              className="h-[40vw]"
            />
            <p className="legend">{slide.desc}</p>
          </div>
        ))
      }
    </Carousel>
  );
}