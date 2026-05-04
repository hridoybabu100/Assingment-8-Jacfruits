import React from "react";
import {
  FaStar,
  FaFire,
  FaShippingFast,
  FaLeaf,
  FaTags,
  FaGift,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Hot Offer",
    desc: "Get up to 40% discount on fresh jackfruits",
    icon: <FaFire />,
    color: "bg-red-100 text-red-500",
  },
  {
    id: 2,
    title: "Top Rating",
    desc: "Rated 4.9★ by our happy customers",
    icon: <FaStar />,
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    id: 3,
    title: "Fast Delivery",
    desc: "Delivery within 24 hours",
    icon: <FaShippingFast />,
    color: "bg-blue-100 text-blue-500",
  },
  {
    id: 4,
    title: "Organic",
    desc: "100% chemical-free natural jackfruit",
    icon: <FaLeaf />,
    color: "bg-green-100 text-green-500",
  },
  {
    id: 5,
    title: "Best Price",
    desc: "Affordable & competitive price guaranteed",
    icon: <FaTags />,
    color: "bg-purple-100 text-purple-500",
  },
  {
    id: 6,
    title: "Special Gift",
    desc: "Free gift on special combo orders",
    icon: <FaGift />,
    color: "bg-pink-100 text-pink-500",
  },
];

const HotOffer = () => {
  return (
    <div className="py-12 px-4 bg-linear-to-r from-green-50 to-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Our Jackfruits 🍈
      </h2>

      <div className="max-w-[96%] lg:max-w-[80%] mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`text-3xl w-14 h-14 flex items-center justify-center mx-auto rounded-full mb-4 ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
