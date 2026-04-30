import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";

const JackfruitsCard = ({ fruit }) => {
  //     Each card must show:
  // Image
  // Product Name
  // Rating
  // Price
  // View Details button

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="relative w-full aspect-square">
        <Image
          src={fruit.imageUrl}
          fill
          alt={fruit.title}
          className="object-cover"
        />
      </figure>
      <div className="space-y-4">
        <h2 className="card-title text-2xl font-bold">{fruit.title}</h2>
        <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-black">Price :{fruit.price}</p>
            <p className="flex gap-2 items-center font-bold"><FcRating/> {fruit.rating}</p>
        </div>
        <div className="">
            <Link href={`/all-jackfruits/${fruit.id}`}>
          <button className="btn w-full btn-primary">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default JackfruitsCard;
