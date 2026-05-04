
import "animate.css";
import Image from "next/image";

const Animation = () => {
  return (
    <section className="bg-linear-to-r from-green-100 to-yellow-50 py-16 px-5">
      
      <div className="max-w-[96%] lg:max-w-[80%] mx-auto text-center">
        
        
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 
        animate__animated animate__fadeInDown">
          Fresh Jackfruit Collection 🍈
        </h1>

       
        <p className="text-gray-600 mb-10 text-lg 
        animate__animated animate__fadeInUp animate__delay-1s">
          Naturally sweet, organic and full of nutrition — straight from farm to your home.
        </p>

       
        <div className="grid md:grid-cols-3 gap-6">
          
          
          <div className="bg-white rounded-2xl shadow-lg p-6 
          animate__animated animate__fadeInLeft">
            <Image
              src="https://www.fitterfly.com/blog/wp-content/uploads/2023/08/Is-jackfruit-good-for-diabetes-copy-scaled.webp" 
               height={200}
              width={200}
              alt="Fresh Jackfruit"
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Farm Fresh
            </h2>
            <p className="text-gray-500">
              Directly collected from local farms with full freshness.
            </p>
          </div>

         
          <div className="bg-white rounded-2xl shadow-lg p-6 
          animate__animated animate__fadeInUp animate__delay-1s">
            <Image
              src="https://cdn.mos.cms.futurecdn.net/5E2SHL2eDGvh7aNUzWnDrT-1165-80.jpg" 
               height={200}
              width={200}
              alt="Organic Jackfruit"
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              100% Organic
            </h2>
            <p className="text-gray-500">
              No chemicals, fully natural and safe for your health.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-lg p-6 
          animate__animated animate__fadeInRight animate__delay-2s">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jackfruit_Flesh.jpg/330px-Jackfruit_Flesh.jpg" 
              height={200}
              width={200}
              alt="Nutritious"
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Rich Nutrition
            </h2>
            <p className="text-gray-500">
              Packed with vitamins, fiber, and natural energy.
            </p>
          </div>

        </div>

      
        <button className="mt-10 px-8 py-3 bg-green-600 text-white rounded-full shadow-md
        animate__animated animate__zoomIn animate__delay-2s hover:bg-green-700 transition">
          Explore More
        </button>

      </div>
    </section>
  );
};

export default Animation;