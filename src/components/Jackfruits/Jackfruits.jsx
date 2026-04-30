import JackfruitsCard from "../JacksFruitsCard/JackfruitsCard";


const Jackfruits = async() => {

    const res = await fetch("http://localhost:3000/data.json");
    const allfruits = await res.json();
    const jackfruits = allfruits.slice(0,3);

    // console.log(jackfruits);
    
    return (
        <div className="max-w-[80%] mx-auto my-8">
            <h1 className='text-4xl font-bold text-black my-6'>The jackfruit is the largest tree fruit : {jackfruits.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">

                {
                    jackfruits.map((fruit) => <JackfruitsCard key={fruit.id} fruit={fruit}></JackfruitsCard>)
                }

            </div>
        </div>
    );
};

export default Jackfruits;