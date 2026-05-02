
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ banned }) => {
  return (
    <div className="bg-base-100 shadow-sm rounded-xl p-6">
      <figure className="">
        <Image
          src={banned.image}
         height={80}
         width={80}
          alt={banned.title}
          className="mx-auto rounded-full h-20 w-20"
        />
      </figure>
      <div className="space-y-3">
        <h2 className="text-xl text-center font-bold">
         {banned.title}
          
        </h2>
        <p>
          {banned.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline btn bg-pink-400 text-white">{banned.category}</div>
          <Link href={"/all-jackfruits"}>
          <div className="badge bg-primary text-white">Jackfruits</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
