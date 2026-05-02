import JackfruitsCard from "../JacksFruitsCard/JackfruitsCard";


const Jackfruits = async() => {

    const res = await fetch("https://assingment-8-jacfruits.vercel.app/data.json",{
        cache: "no-store"
    });
    const allfruits = await res.json();
    const jackfruits = allfruits.slice(0,3);

    // console.log(jackfruits);
    
    return (
        <div className="max-w-[96%] lg:max-w-[80%] mx-auto my-8">
            <h1 className='text-4xl text-transparent bg-linear-65 from-purple-500 to-pink-500 bg-clip-text font-bold my-6 text-center lg:text-left'>The jackfruit is the largest tree fruit.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">

                {
                    jackfruits.map((fruit) => <JackfruitsCard key={fruit.id} fruit={fruit}></JackfruitsCard>)
                }

            </div>
        </div>
    );
};

export default Jackfruits;