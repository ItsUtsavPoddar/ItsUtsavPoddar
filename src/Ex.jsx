import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Ex = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-white underline-offset-4 hover:underline">
          Case Study
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]  bg-[#000000] border-0 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          <DialogHeader>
            <DialogTitle className="text-center underline">
              Satellite Tracker
            </DialogTitle>
            <DialogDescription className="text-center text-white">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <img
                alt="s"
                className="rounded-t-md object-cover "
                height="800"
                src="/satellite-project.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1540"
              />
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur provident dolore quidem itaque suscipit. A quo animi
                maiores modi recusandae assumenda, libero dicta neque aut.
                Minima aliquid mollitia quae necessitatibus.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Ex;
