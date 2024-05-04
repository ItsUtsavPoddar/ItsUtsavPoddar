const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <footer className=" bg-[#27272a] text-violet-50 px-4 py-6 flex justify-between items-center">
        <div>© {currentYear} Utsav Poddar. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
