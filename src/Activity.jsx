import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Hackathons from "./Hackathons";
import OpenSource from "./OpenSource";
import Twitch from "./Twitch";
const Activity = () => {
  return (
    <>
      <main className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h2 className=" text-center text-3xl font-bold tracking-tighter pb-7 md:text-4xl">
            Activities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" rounded-lg bg-gradient-to-r from-[#0F2027] from-0% via-[#2C5364] via-50% to-[#0F2027] to-100% p-0.5">
              <Card className="size-full bg-[#171717] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="s"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="./opensource.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">
                    Open Source and Organizing
                  </h3>
                  <p className="text-gray mt-2">
                    Passionate about giving back, I've actively contributed to
                    open source projects. As a coding club coordinator, We have
                    organized engaging events like Blind code and female-centric
                    coding event.
                  </p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <OpenSource />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className=" rounded-lg bg-gradient-to-r from-[#0F2027] from-0% via-[#eef2f3] via-50% to-[#0F2027] to-100% p-0.5">
              <Card className="size-full bg-[#171717] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="s"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="./hackathon2.jpg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">Hackathons</h3>
                  <p className="text-gray mt-2">
                    Honed my skills in team collaboration, rapid
                    problem-solving, and innovative thinking. These experiences
                    have not only sharpened my technical skills but also taught
                    me the value of teamwork and creativity in overcoming
                    obstacles.
                  </p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <Hackathons />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className=" rounded-lg bg-gradient-to-r from-[#42275a] from-0% via-[#734b6d] via-50% to-[#42275a] to-100% p-0.5">
              <Card className="size-full bg-[#171717] text-violet-50 border-0 pt-1 flex flex-col">
                <img
                  alt="s"
                  className="rounded-t-lg object-cover w-full h-64 px-1  "
                  height="800"
                  src="./streamstarting.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">
                    Streaming and Community
                  </h3>
                  <p className="text-gray mt-2">
                    On my Twitch channel, I stream development and practice Data
                    Structures and Algorithms (DSA) to improve public speaking
                    and engagement. I also showcase my skills and interact with
                    viewers, sharing knowledge and learning together.
                  </p>
                  <div className="mt-4 flex gap-2 justify-end">
                    <Twitch />
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

export default Activity;
