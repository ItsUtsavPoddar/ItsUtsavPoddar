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
          <div className=" rounded-lg bg-gradient-to-r from-[#1a2a6c] from-0% via-[#b21f1f] via-50% to-[#fdbb2d] to-100% p-0.5">
            <div className="bg-black rounded-lg p-1.5">
              <DialogHeader>
                <DialogTitle className="text-center underline py-1">
                  Satellite Tracker
                </DialogTitle>
                <DialogDescription className="text-center text-white ">
                  <p className="py-4 px-0.5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur provident
                  </p>
                </DialogDescription>
              </DialogHeader>
              <img
                alt="s"
                className="rounded-t-md object-cover"
                height="800"
                src="/satellite-project.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
              <p className="py-4 px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4 px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Satellite_Case;
