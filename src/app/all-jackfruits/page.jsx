import JackfruitsCard from '@/components/JacksFruitsCard/JackfruitsCard';
import React from 'react';

const AllJackfruits = async() => {

    const res = await fetch("https://assingment-8-jacfruits.vercel.app/data.json");
    const allfruits = await res.json();
   
    return (
        <div className=' max-w-[96%] lg:max-w-[80%] mx-auto my-10'>

             <h1 className='text-4xl font-bold text-black my-6'>All jackfruit is the largest tree fruit.</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

            {
                allfruits.map((fruit) => <JackfruitsCard key={fruit} fruit={fruit}></JackfruitsCard>)
            }

           </div>
        </div>
    );
};

export default AllJackfruits;