import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoPlay from "./components/VideoPlay";

function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Navbar />
      <Main />
      <Footer />
      <VideoPlay />
    </div>
  );
}

export default App;
