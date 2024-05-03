import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const Activity = () => {
  return (
    <>
      <main className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h3 className="text-center text-lg font-bold mb-4">Activities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <img
                alt="Activity 1"
                className="rounded-t-md object-cover w-full h-48"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Activity 1</h3>
                <p className="text-gray-500 mt-2">
                  A brief description of the first activity.
                </p>
                <div className="mt-4">
                  <Button size="sm" variant="link">
                    View Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Activity 2"
                className="rounded-t-md object-cover w-full h-48"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Activity 2</h3>
                <p className="text-gray-500 mt-2">
                  A brief description of the second activity.
                </p>
                <div className="mt-4">
                  <Button size="sm" variant="link">
                    View Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Activity 3"
                className="rounded-t-md object-cover w-full h-48"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Activity 3</h3>
                <p className="text-gray-500 mt-2">
                  A brief description of the third activity.
                </p>
                <div className="mt-4">
                  <Button size="sm" variant="link">
                    View Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Activity;
