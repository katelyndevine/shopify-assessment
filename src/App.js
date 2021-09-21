import { useState, useEffect } from "react";
import SingleImage from "./components/SingleImage";
import getImages from "./utils/nasaImages";
import Loader from "react-loader-spinner";

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
      <div className="imagesContainer">
        {images.map((image) => {
          return <SingleImage image={image} />;
        })}
      </div>
    </div>
  );
};

export default App;
