import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Satellite_Case from "./Satellite_Case";

const Projects = () => {
  return (
    <>
      <main className="px-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#27272a] text-violet-50 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 ">
          {/* <h3 className=" text-center text-lg font-bold mb-4">Projects</h3> */}
          <h2 className=" text-center text-3xl font-bold tracking-tighter pb-7 md:text-4xl">
            Projects
          </h2>
          <div className=" relative  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" rounded-lg bg-gradient-to-r from-[#b92b27] from-20% to-[#1565C0] to-97% p-0.5">
              {/* className=
              {cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
              )} */}
              <Card className="size-full bg-[#27272a] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="Satellite Tracker"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="/satellite-project.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">Satellite Tracker</h3>
                  <p className="text-gray mt-2">lorem200</p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <a
                      className="inline-flex items-center justify-center"
                      href="https://satellite.utsavpoddar.tech"
                      target="_blank"
                    >
                      <Button
                        className="text-white bg-[#18181b] justify-end"
                        size="sm"
                        variant="link"
                      >
                        View Project
                      </Button>
                    </a>

                    <Satellite_Case />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className=" rounded-lg bg-gradient-to-r from-[#7303c0] from-20% via-[#ec38bc]  to-[#fdeff9] to-97% p-0.5">
              <Card className="size-full bg-[#27272a] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="s"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">Lorem ipsum</h3>
                  <p className="text-gray mt-2">lorem200</p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <a
                      className="inline-flex items-center justify-center"
                      href="#"
                      target="_blank"
                    >
                      <Button
                        className="text-white bg-[#18181b] justify-end"
                        size="sm"
                        variant="link"
                      >
                        View Project
                      </Button>
                    </a>

                    <Satellite_Case />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className=" rounded-lg bg-gradient-to-r from-[#7303c0] from-20% via-[#ec38bc]  to-[#fdeff9] to-97% p-0.5">
              <Card className="size-full bg-[#27272a] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="s"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">Lorem ipsum</h3>
                  <p className="text-gray mt-2">lorem200</p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <a
                      className="inline-flex items-center justify-center"
                      href="#"
                      target="_blank"
                    >
                      <Button
                        className="text-white bg-[#18181b] justify-end"
                        size="sm"
                        variant="link"
                      >
                        View Project
                      </Button>
                    </a>

                    <Satellite_Case />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
