import { useState, useEffect } from "react";
import SingleImage from "./components/SingleImage";
import getImages from "./utils/nasaImages";
import Loader from "react-loader-spinner";
import { FaRegHeart } from "react-icons/fa";

const App = () => {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const imgs = await getImages();
      await setImages(imgs);
      setImagesLoaded(true);
    })();
  }, []);

  console.log("this is images outsite UseEffect: ", images);

  if (!imagesLoaded) {
    return (
      <div id="loader">
        <Loader type="Circles" color="black" />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Spacetagram</h1>
      <h4>Brought to you by NASA's Epic Daily “Blue Marble” API.</h4>
      <h6>
        Click the <FaRegHeart /> to keep track of your favorite images!
      </h6>
      <div className="imagesContainer">
        {images.map((image) => {
          return <SingleImage image={image} />;
        })}
      </div>
    </div>
  );
};

export default App;
