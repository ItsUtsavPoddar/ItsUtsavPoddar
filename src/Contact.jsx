import { Link } from "react-scroll";
const Contact = () => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
      <div className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:justify-center">
        <div className="flex flex-col items-center justify-center">
          <a
            className="flex flex-col items-center justify-center space-y-2"
            href="#"
          >
            {/* <MailIcon className="h-8 w-8 text-gray-500" /> */}
            <div className="text-center">
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-gray-500">johndoe@example.com</p>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            className="flex flex-col items-center justify-center space-y-2"
            href="#"
          >
            {/* <GithubIcon className="h-8 w-8 text-gray-500" /> */}
            <div className="text-center">
              <h4 className="text-lg font-semibold">GitHub</h4>
              <p className="text-gray-500 hover:underline">@johndoe</p>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            className="flex flex-col items-center justify-center space-y-2"
            href="#"
          >
            {/* <InstagramIcon className="h-8 w-8 text-gray-500" /> */}
            <div className="text-center">
              <h4 className="text-lg font-semibold">Instagram</h4>
              <p className="text-gray-500 hover:underline">@johndoe</p>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            {/* <DiscIcon className="h-8 w-8 text-gray-500" /> */}
            <div className="text-center">
              <h4 className="text-lg font-semibold">Discord</h4>
              <p className="text-gray-500">johndoe#1234</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            className="flex flex-col items-center justify-center space-y-2"
            href="#"
          >
            {/* <LinkedinIcon className="h-8 w-8 text-gray-500" /> */}
            <div className="text-center">
              <h4 className="text-lg font-semibold">LinkedIn</h4>
              <p className="text-gray-500 hover:underline">
                linkedin.com/in/johndoe
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
