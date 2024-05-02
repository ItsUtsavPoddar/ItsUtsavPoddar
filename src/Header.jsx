import { Toggle } from "./components/ui/toggle";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-3 py-3 bg-[#27272a] text-violet-50">
        <div className="text-xl  font-semibold">Utsav Poddar</div>
        <nav className="flex gap-4 justify-center">
          <a className="hover:underline" href="/">
            About
          </a>
          <a className="hover:underline" href="/">
            Projects
          </a>
          <a className="hover:underline" href="/">
            Activity
          </a>
          <a className="hover:underline" href="/">
            Contact
          </a>
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
