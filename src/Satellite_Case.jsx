import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Satellite_Case = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className=" bg-[#18181b] h-9 rounded-md px-3 text-white underline-offset-4 text-sm font-medium  hover:underline">
          Case Study
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]  bg-[#000000] border-0 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          <div className=" rounded-lg bg-gradient-to-r from-[#232526] from-0% via-[#b21f1f] via-50% to-[#414345] to-100% p-0.5">
            <div className="bg-black rounded-lg p-1.5">
              <DialogHeader>
                <DialogTitle className="text-center  text-2xl py-1">
                  Satellite Tracker
                </DialogTitle>
                <DialogDescription className="text-center text-white ">
                  <p className="py-4 px-0.5">
                    Giving the project a total makeover, updating the codebase,
                    and giving it a fresh new look. Will update the case study
                    as well
                  </p>
                </DialogDescription>
              </DialogHeader>
              <img
                alt="s"
                className="rounded-t-md object-cover"
                height="800"
                src="/Screenshot 2024-05-28 150210.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
              <p className="py-4 px-2">Stay Tuned</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Satellite_Case;
