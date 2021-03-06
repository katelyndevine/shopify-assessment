const axios = require("axios");
const apiKey = "96mPPwoUqI3v9Gj2LYa28fOsAhClkyfKVERkhrFZ";
const url = `https://api.nasa.gov/EPIC/api/enhanced/images?api_key=${apiKey}`;

// get the images from our NASA API
const getImages = async () => {
  try {
    const { data } = await axios.get(url);
    return formatedImages(data);

    // Update our array of image objects to improve date format
    // and add a new src property (which is the image url)
    function formatedImages(images) {
      images[0]
        ? images.forEach((obj) => {
            const year = obj.date.slice(0, 4);
            const month = obj.date.slice(5, 7);
            const day = obj.date.slice(8, 10);
            obj.date = `${month}/${day}/${year}`;
            obj.src = `https://api.nasa.gov/EPIC/archive/enhanced/${year}/${month}/${day}/png/${obj.image}.png?api_key=${apiKey}`;
          })
        : console.log("we never mapped");
      return images;
    }
  } catch (err) {
    console.log("error in get function", err);
  }
};

export default getImages;
