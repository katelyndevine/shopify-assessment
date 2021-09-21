// import logo from "./logo.svg";
// import "./App.css";
const axios = require("axios");
const apiKey = "96mPPwoUqI3v9Gj2LYa28fOsAhClkyfKVERkhrFZ";
const url = `https://api.nasa.gov/EPIC/api/enhanced/images?api_key=${apiKey}`;

// const url = "https://epic.gsfc.nasa.gov/api/enhanced";
//

const getImages = async () => {
  try {
    const { data } = await axios.get(url);
    console.log("this is data: ", data);
    const imag = getUrl(data);
  } catch (err) {
    console.log("error in get function", err);
  }
};

getImages();

const getUrl = async (images) => {
  console.log("this is images", images);
  // let finalImgs = [];
  images[0]
    ? images.map((obj) => {
        const year = obj.date.slice(0, 4);
        const month = obj.date.slice(5, 7);
        const day = obj.date.slice(8, 10);
        console.log("this is date", year, month, day);
        obj.date = `${month}/${day}/${year}`;
        obj.src = `https://api.nasa.gov/EPIC/archive/enhanced/${year}/${month}/${day}/png/${obj.image}.png?api_key=${apiKey}`;
        // finalImgs.push(obj);
      })
    : console.log("we never mapped");
  console.log(images);
  return images;
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
