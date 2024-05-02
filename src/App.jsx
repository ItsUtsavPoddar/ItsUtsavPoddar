import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Activity from "./Activity";
function App() {
  return (
    <>
      <div className="font-cust bg-[#27272a] text-violet-50 dark:text-black bg-[#fafafa]">
        <Header />
        <About />
        <Projects />
        <Activity />
        <Footer />
      </div>
    </>
  );
}

export default App;
