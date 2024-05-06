import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Hackathons = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className=" bg-[#18181b] h-9 rounded-md px-3 text-white underline-offset-4 text-sm font-medium  hover:underline">
          Hackathons' List
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]  bg-[#000000] border-0 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          <div className=" rounded-lg bg-gradient-to-r from-[#525252] from-0% to-[#3d72b4] to-100% p-0.5">
            <div className="bg-black rounded-lg p-1.5">
              <DialogHeader>
                <DialogTitle className="text-center  text-2xl py-1">
                  Hackathons
                </DialogTitle>
                <DialogDescription className="text-center text-white ">
                  <p className="py-4 px-0.5">
                    Hackodex Hackathon by CODEX 2022
                    <br /> 4th in Smart Odisha Hackathon 2023 (Healthcare)
                  </p>
                </DialogDescription>
              </DialogHeader>
              <img
                alt="s"
                className="rounded-t-md object-cover my-10"
                height="800"
                src="/hackathon2.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
              <img
                alt="s"
                className="rounded-t-md object-cover my-10"
                height="800"
                src="/hackathon3.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
              <img
                alt="s"
                className="rounded-t-md object-cover my-10"
                height="800"
                src="/hackathon1.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
              <p className="py-4 px-2"></p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hackathons;
