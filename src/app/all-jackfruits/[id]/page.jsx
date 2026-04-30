import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";

const Detailspage = async ({ params }) => {
  const { id } = await params;
  // console.log(data);
  const res = await fetch(`http://localhost:3000/data.json`);
  const fruits = await res.json();

  const fruit = fruits.find((fruit) => fruit.id == id);

  // console.log(fruit);

  return (
    <div className="max-w-[80%] mx-auto my-6">
      <h1 className="text-3xl font-bold text-black my-6">
        Jackfruits Details in hare
      </h1>
      
    </div>
  );
};

export default Detailspage;
