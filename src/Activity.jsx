import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const Activity = () => {
  return (
    <>
      <main className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h3 className="text-center text-lg font-bold mb-4">Activities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" rounded-lg bg-gradient-to-r from-[#333333] from-0% to-[#dd1818] to-100% p-0.5">
              {/* className=
              {cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
              )} */}
              <Card className="bg-[#27272a] text-violet-50 border-0">
                <img
                  alt=""
                  className="rounded-t-md object-cover w-full h-64 px-1  "
                  height="800"
                  src="/satellite-sproject.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="1540"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">activity 1</h3>
                  <p className="text-gray mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deserunt corrupti ullam neque vel laboriosam sapiente sit
                    libero nihil fugit, dolores sunt beatae recusandae,
                    obcaecati nostrum cum reprehenderit, eveniet veniam iure?
                  </p>
                  <div className="mt-4 flex gap-2">
                    <a
                      className="inline-flex items-center justify-center"
                      href="https://satellite.utsavpoddar.tech"
                      target="_blank"
                    >
                      <Button
                        className="text-white bg-[#18181b]"
                        size="sm"
                        variant="link"
                      >
                        View activity
                      </Button>
                    </a>
                    <a
                      className="inline-flex items-center justify-center"
                      href="https://satellite.utsavpoddar.tech"
                      target="_blank"
                    >
                      <Button
                        className="text-white bg-[#18181b]"
                        size="sm"
                        variant="link"
                      >
                        Case Study
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

export default Activity;
