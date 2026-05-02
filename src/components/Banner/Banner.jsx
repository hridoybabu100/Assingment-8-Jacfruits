import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="max-w-[96%] lg:max-w-[80%] mx-auto mt-8">
        <div className="bg-[url('https://www.gardenia.net/wp-content/uploads/2025/05/shutterstock_2453997129.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="pl-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl">
            Jackfruits taste depends  on demenises.
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Generate high-quality images from simple text prompts.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Generate Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;