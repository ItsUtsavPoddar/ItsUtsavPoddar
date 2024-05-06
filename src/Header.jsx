import { Link } from "react-scroll";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Button } from "./components/ui/button";

const Header = () => {
  return (
    <>
      <header className=" fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-[#0a0a0a] bg-opacity-96 text-lg">
        <div className="text-xl  font-light">
          <Link
            className="cursor-pointer"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            UTSAV PODDAR
          </Link>
        </div>
        <nav className=" hidden gap-4 justify-center lg:flex ">
          <Link
            className="hover:underline cursor-pointer"
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
            className="hover:underline cursor-pointer"
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
            className="hover:underline cursor-pointer"
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
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="lg:hidden bg-[#000000] text-white"
              size="icon"
              variant=""
            >
              <MenuIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="bg-[#171717] text-white border-0 w-60"
            side="right"
          >
            <div className="grid gap-4 p-4 ">
              <Link
                className="hover:underline cursor-pointer"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                s
                duration={500}
              >
                About
              </Link>
              <Link
                className="hover:underline cursor-pointer"
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
                className="hover:underline cursor-pointer"
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
                className="hover:underline cursor-pointer"
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
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default Header;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
