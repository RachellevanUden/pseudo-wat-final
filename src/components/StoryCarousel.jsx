import { useState } from "react";
import TextBlock from "./TextBlock";
import "../styles/OverMij.css";

function StoryCarousel({ stories }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {stories.map((story, index) => (
            <div className="carousel-slide" key={index}>
              <TextBlock title={story.title} subtitle={story.subtitle}>
                <p>{story.text}</p>
              </TextBlock>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        {stories.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default StoryCarousel;
