const Footer = () => {
  return (
    <>
      <footer className=" bg-[#27272a] text-violet-50 px-4 py-6 flex justify-between items-center">
        <div>© 2024 Utsav Poddar. All rights reserved.</div>
        <div className="flex gap-4">
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/itsutsavpoddar/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:underline"
            href="https://www.github.com/itsutsavpoddar/"
            target="_blank"
          >
            Github
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
