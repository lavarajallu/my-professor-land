import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import VideoSec from "./components/VideoSec";
import UniversitySec from "./components/UniversitySec"
import BrowseDegree from "./components/BrowseDegree";
import OnlineCourse from "./components/OnlineCourse";
import ScanSec from "./components/ScanSec";
import ReadBlock from "./components/ReadBlock";
import Newalatter from "./components/Newalatter";
import Footer from "./components/Footer";
import Copyrt from "./components/Copyrt";

function App() {
  return (
    <div className="mypr-main">
      <Header />
      {/*
        <section class="main-banner">
            <div class="banner-wrap">
                <div class="container">
                    <div class="col-md-7 bnr-text">
                        <p class="wlc-text">Welcome to our all study</p>
                        <h1 class="bnr-title">Computer Science and Engineering</h1>
                        <p class="bnr-disp">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintockContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                        <button type="button" class="btn btn-white">Primary</button>
                    </div>
                </div>
            </div>
        </section>
*/}
      <MainBanner />
      <VideoSec />
      <UniversitySec />
      <BrowseDegree />
      <OnlineCourse />
      <ScanSec />
      <ReadBlock />
      <Newalatter />
      <Footer />
      <Copyrt />
    </div>
  );
}

export default App;
