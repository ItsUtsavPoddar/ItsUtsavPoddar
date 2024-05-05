import { Link } from "react-scroll";
const Header = () => {
  return (
    <>
      <header className=" fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-[#181818] bg-opacity-96 text-violet-50">
        <div className="text-lg  font-light">UTSAV PODDAR</div>
        <nav className="flex gap-4 justify-center">
          <Link
            className="hover:underline"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
          <Link
            className="hover:underline"
            activeClass="active"
            to="activity"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Activity
          </Link>
          <Link
            className="hover:underline"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            s
            duration={500}
          >
            Projects
          </Link>
        </nav>
        {/* <div>
          <Toggle aria-label="Toggle dark mode">
            <MoonIcon className="h-6 w-6" />
          </Toggle>
        </div> */}
      </header>
    </>
  );
};

export default Header;
