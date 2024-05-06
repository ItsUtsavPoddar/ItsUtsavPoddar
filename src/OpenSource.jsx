import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const OpenSource = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className=" bg-[#18181b] h-9 rounded-md px-3 text-white underline-offset-4 text-sm font-medium  hover:underline">
          Know More
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]  bg-[#000000] border-0 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          <div className=" rounded-lg bg-gradient-to-r from-[#CAC531] from-0% to-[#F3F9A7] to-20% p-0.5">
            <div className="bg-black rounded-lg p-1.5">
              <DialogHeader>
                <DialogTitle className="text-center  text-2xl py-1">
                  Open Source and Organizing Events
                </DialogTitle>
                <DialogDescription className="text-center text-white ">
                  <p className="py-4 px-0.5"></p>
                </DialogDescription>
              </DialogHeader>
              <p className="pt-4 px-2">
                Open Source Contributions
                <br />
                (Hacktoberfests and my friends' codebases)
              </p>
              <img
                alt="s"
                className="rounded-t-md object-cover mb-16"
                height="800"
                src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkOHVrb3MwMDk0MDlqbnVuaGRhcDd3IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0="
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width="800"
              />
              <p className="pt-4 px-2">
                Collaborated with a team to organize hackathons and
                female-centric coding events to encourage women to actively
                participate in the tech world, as part of the coding club.
              </p>
              <img
                alt="s"
                className="rounded-t-md object-cover mb-28"
                height="800"
                src="/extra-activities-shecodex.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OpenSource;
