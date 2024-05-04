import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Activity from "./Activity";
import Contact from "./Contact";
import Contact2 from "./Contact2";

function App() {
  return (
    <>
      <div className="font-cust bg-[#27272a] text-violet-50 ">
        <Header />
        <About />
        <div id="projects">
          <Projects />
        </div>
        <div id="activity">
          <Activity />
        </div>
        <div id="contact">
          <Contact2 />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
