import { Button } from "./components/ui/button";

const About = () => {
  return (
    <>
      <section className=" py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center order-1 md:order-2">
              <img
                alt="John Doe"
                className="rounded-md shadow-sm"
                src="https://avatars.githubusercontent.com/u/85995114?v=4"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello! I'm Utsav, a developer from Planet E118208
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6"></h2>
              <p className="text-lg md:text-xl mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur laboriosam nemo eum iste libero perspiciatis impedit
                eius temporibus excepturi possimus recusandae officiis, itaque
                aliquid molestiae architecto quam nesciunt iure non?
              </p>
              <div className="mt-2 flex items-center gap-4">
                <a
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                  href="https://www.linkedin.com/in/itsutsavpoddar/"
                  target="_blank"
                >
                  <Button className="bg-[#18181b]">View Linkedin</Button>
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                  href="https://www.github.com/itsutsavpoddar"
                  target="_blank"
                >
                  <Button className="bg-[#18181b]">View Github</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        {/* 
        <main className="pt-20 px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-xl font-bold">
                Hello! I'm Utsav, a developer based in India.
              </h3>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit sint consequuntur laudantium error at soluta enim
                dolores perferendis ab voluptas, explicabo dolorum est, nostrum,
                odio inventore similique velit delectus blanditiis.
              </p>
            </div>

            <div className="mt-2 flex items-center gap-4">
              <a
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                href="https://www.linkedin.com/in/itsutsavpoddar/"
                target="_blank"
              >
                <Button className="bg-[#18181b]">View Linkedin</Button>
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                href="https://www.github.com/itsutsavpoddar"
                target="_blank"
              >
                <Button className="bg-[#18181b]">View Github</Button>
              </a>
            </div>
          </div>
        </main> */}
      </>
    </>
  );
};

export default About;
