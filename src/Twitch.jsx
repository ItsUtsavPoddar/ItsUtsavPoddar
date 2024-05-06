import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Twitch = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className=" bg-[#18181b] h-9 rounded-md px-3 text-white underline-offset-4 text-sm font-medium  hover:underline">
          Twitch Recap 2023
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]  bg-[#000000] border-0 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          <div className=" rounded-lg bg-gradient-to-r from-[#232526] from-0%  to-[#414345] to-100% p-0.5">
            <div className="bg-black rounded-lg p-1.5">
              <DialogHeader>
                <DialogTitle className="text-center  text-2xl py-1"></DialogTitle>
                <DialogDescription className="text-center text-white ">
                  <p className=" px-0.5"></p>
                </DialogDescription>
              </DialogHeader>

              <p className="px-2"></p>
              <img
                alt="s"
                className="rounded-t-md object-cover my-10"
                height="1760"
                src="/extra-activities-twitch.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width="1760"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Twitch;
