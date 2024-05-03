import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Activity from "./Activity";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <div className="font-cust bg-[#27272a] text-violet-50 ">
        <Header />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="activity">
          <Activity />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
