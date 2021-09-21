// import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";

const SingleImage = (props) => {
  return (
    <div className="imageContainer" key={props.image.identifier}>
      <img src={props.image.src} alt="earth from space" className="imggg" />
      <div className="imageDetails">
        <h5>{props.image.caption}</h5>
        <div className="dateAndHeart">
          <p className="date">{props.image.date}</p>
          <FaRegHeart className="heart" />
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
