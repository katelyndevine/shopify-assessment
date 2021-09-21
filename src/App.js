import { useState, useEffect } from "react";
import SingleImage from "./components/SingleImage";
// import { FaRegHeart } from "react-icons/fa";
import getImages from "./utils/nasaImages";

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
    return <div>loading!!!!</div>;
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
