import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const SingleImage = (props) => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <div className="imageContainer" key={props.image.identifier}>
      <img
        src={props.image.src}
        alt={`Earth as seen from space. ${props.image.caption}.`}
        title="Earth as seen from space"
        className="imggg"
      />
      <div className="imageDetails">
        <h5>{props.image.caption}</h5>
        <div className="dateAndHeart">
          <p className="date">{props.image.date}</p>
          {/* show a different heart based on user click(s) */}
          {heartClicked ? (
            <IconContext.Provider value={{ color: "red", title: "heart icon" }}>
              <FaHeart
                className="heart"
                onClick={() => setHeartClicked(false)}
              />
            </IconContext.Provider>
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
