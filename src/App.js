import { useState, useEffect } from "react";
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
          return (
            <div className="imageContainer" key={image.identifier}>
              <img src={image.src} alt="earth from space" className="imggg" />
              <div className="imageDetails">
                <h5>{image.caption}</h5>
                <p>{image.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
