import { useState, useEffect } from "react";
import SingleImage from "./components/SingleImage";
import getImages from "./utils/nasaImages";
import Loader from "react-loader-spinner";
import { FaRegHeart } from "react-icons/fa";

const App = () => {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // get images from our nasalImages util file and set state
  // once finished, set images Loaded to true
  useEffect(() => {
    (async () => {
      const imgs = await getImages();
      await setImages(imgs);
      setImagesLoaded(true);
    })();
  }, []);

  console.log("this is images outsite UseEffect: ", images);
  // Loader until getImages() is complete
  if (!imagesLoaded) {
    return (
      <div id="loader">
        <Loader type="Circles" color="black" />
      </div>
    );
  }
  // Once finished loading return our images
  return (
    <div className="App">
      <header>
        <h1>Spacetagram</h1>
        <h4>Brought to you by NASA's Epic Daily “Blue Marble” API.</h4>
        <h6>
          Click the <FaRegHeart /> to keep track of your favorite images!
        </h6>
      </header>
      <main className="imagesContainer">
        {images.map((image) => {
          return <SingleImage image={image} key={image.identifier} />;
        })}
      </main>
    </div>
  );
};

export default App;
