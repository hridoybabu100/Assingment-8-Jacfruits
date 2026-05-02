import Card from "./Card";


const BannedCard = async () => {
  const res = await fetch("http://localhost:3000/card.json");
  const banneds = await res.json();
  // console.log("banned", banneds);

  return (
    <div className="max-w-[96%] lg:max-w-[80%] mx-auto my-6">
      <h1 className="text-center text-4xl py-5 font-bold text-purple-500">
        Top Brands
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-pink-200 p-10">
        {
            banneds.map((banned) => <Card key={banned.id} banned={banned}></Card> )
        }
      </div>
    </div>
  );
};

export default BannedCard;
