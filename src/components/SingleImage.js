import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const SingleImage = (props) => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <div className="imageContainer" key={props.image.identifier}>
      <img src={props.image.src} alt="earth from space" className="imggg" />
      <div className="imageDetails">
        <h5>{props.image.caption}</h5>
        <div className="dateAndHeart">
          <p className="date">{props.image.date}</p>
          {heartClicked ? (
            <FaHeart className="heart" onClick={() => setHeartClicked(false)} />
          ) : (
            <FaRegHeart
              className="heart"
              onClick={() => setHeartClicked(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
