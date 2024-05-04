import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Activity from "./Activity";
import Contact from "./Contact";

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
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
