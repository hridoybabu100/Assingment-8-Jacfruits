import Marquee from "react-fast-marquee";

const jackfruits = [
  {
    id: 1,
    headline: "Jackfruit Demand Rises in Summer Season",
    summary:
      "Local markets are seeing a huge increase in jackfruit sales due to high summer demand.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jackfruit_hanging.JPG",
    date: "2026-05-01",
    category: "Market News",
  },
  {
    id: 2,
    headline: "Farmers Get Better Profit from Jackfruit Cultivation",
    summary:
      "Farmers are earning higher profits this year as jackfruit production increases.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Jackfruit_tree.jpg",
    date: "2026-04-30",
    category: "Agriculture",
  },
  {
    id: 3,
    headline: "Jackfruit Becomes Popular Healthy Snack",
    summary:
      "Nutrition experts recommend jackfruit as a healthy and natural energy source.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Jackfruit_flesh.jpg",
    date: "2026-04-28",
    category: "Health",
  },
  {
    id: 4,
    headline: "Export of Jackfruit Increases Internationally",
    summary:
      "Global demand for jackfruit is growing, boosting export opportunities.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Artocarpus_heterophyllus_fruits.jpg",
    date: "2026-04-27",
    category: "Export",
  },
];

const BreakingFruits = () => {
  return (
    <div className="bg-pink-200 p-2">
      <div className="flex max-w-[96%] lg:max-w-[80%] mx-auto">
        <button className="btn bg-linear-65 from-purple-500 to-pink-500 text-white">Updates</button>
        <Marquee pauseOnHover={true}>
          {jackfruits.map((news) => (
            <span key={news.id} className="text-purple-500 font-bold">
              {news.headline}
              {news.category}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingFruits;
