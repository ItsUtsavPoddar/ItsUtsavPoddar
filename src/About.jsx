import { Button } from "./components/ui/button";

const About = () => {
  return (
    <>
      <main className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-center">
          <img
            alt="John Doe"
            className="rounded-full w-32 h-32 object-cover"
            height="128"
            src="https://preview.redd.it/just-adding-some-head-v0-ll4ohqytd2za1.png?auto=webp&s=d40e36d9828c43875f70ea467df41b6df1867f4f"
            style={{
              aspectRatio: "128/128",
              objectFit: "cover",
            }}
            width="128"
          />
          {/* <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500">Software Engineer</p>
          </div> */}
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-4">
          <div>
            <h3 className="text-xl font-bold">
              Hello! I'm Utsav, a developer based in India.
            </h3>
            <p className="text-gray-500 mt-2">
              I am a passionate software engineer with experience in building
              innovative web applications. I love exploring new technologies and
              constantly learning to improve my skills.
            </p>
          </div>
          <div>
            <div className="mt-2 flex items-center gap-4">
              <a
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Button>View Linkedin</Button>
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                href="https://www.github.com/itsutsavpoddar"
                target="_blank"
              >
                <Button>View Github</Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
