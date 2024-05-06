import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
const CardTemp = ({}) => {
  return (
    <div className=" rounded-lg bg-gradient-to-r from-[#7303c0] from-20% via-[#ec38bc]  to-[#fdeff9] to-97% p-0.5">
      <Card className="size-full bg-[#171717] text-violet-50 border-0 pt-1 flex flex-col">
        <img
          alt="s"
          className="rounded-t-lg object-cover w-full h-64 px-1  "
          height="800"
          src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="1540"
        />
        <CardContent className="p-4 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-semibold">Lorem ipsum</h3>
          <p className="text-gray mt-2">lorem200</p>
          <div className="mt-4 flex gap-2 justify-end">
            <a
              className="inline-flex items-center justify-center"
              href="#"
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
  );
};

export default CardTemp;
