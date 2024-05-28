import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Satellite_Case from "./Satellite_Case";

const Projects = () => {
  return (
    <>
      <main className="px-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 ">
          <h2 className=" text-center text-3xl font-bold tracking-tighter pb-7 md:text-4xl">
            Projects
          </h2>
          <div className=" relative  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" rounded-lg bg-gradient-to-r from-[#232526] from-0% via-[#061161] via-20% to-[#414345] to-100% p-0.5">
              <Card className="size-full bg-[#171717] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="Satellite Tracker"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="/Screenshot 2024-05-28 150210.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">Satellite Tracker</h3>
                  <p className="text-gray mt-2">
                    WebApp that leverages satellites' orbital data from
                    Celestrak. Discover real-time positioning, height details,
                    and track the next 80 minutes of their orbital path and
                    beyond.
                  </p>
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
            <div className=" rounded-lg bg-gradient-to-r from-[#BA8B02] from-30% to-[#181818] to-100% p-0.5">
              <Card className="size-full bg-[#171717] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="s"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="/pexels-pixabay-371917.jpg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">
                    ML Research Project (Solaris){" "}
                  </h3>
                  <p className="text-gray mt-2">
                    This project uses Machine Learning and Deep Learning to
                    predict GHI values (net solar power output) based on the
                    past 5 years of historical weather data from a city in
                    India. This helps people determine the long-term economic
                    viability of solar panels, aiming for a minimum 10-20%
                    Return On Investment.
                  </p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <a
                      className="inline-flex items-center justify-center"
                      href="https://github.com/ItsUtsavPoddar/solaris"
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
