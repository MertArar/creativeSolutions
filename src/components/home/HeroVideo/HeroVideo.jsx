import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import "./HeroVideo.css";

const HeroVideo = () => {
  const Navigate = useNavigate();

  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          url="https://res.cloudinary.com/darwtgzlk/video/upload/v1687841755/Ecommerce-app/video-3_bvxghi.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="hero-text">
        <h1>Explore bla bla bla</h1>
        <a onClick={() => Navigate("contact")} className="contact-btn">
          <span>Get a Quote</span>
          <svg
            width="26"
            height="12"
            viewBox="0 0 26 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </div>
    </div>
  );
};

export default HeroVideo;
