import { CustomFilter, Hero, Searchbar } from "@/Components";
import CarCards from "@/Components/CarCards";
import { fetchCars } from "@/utils";


export default async function Home() {

  const allCars =await fetchCars(); 
  const isdataEmpty=!Array.isArray(allCars) ||allCars.length<1|| !allCars
  return (
    <main className="overflow-hidden">
        <Hero/>
        <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
           <h1 className="text-4xl">
            Car Catalouge
           </h1>
           <p>Explore the cars you might like</p>

        </div>
           <div className="home__filters">
            <Searchbar/>
            <div className="home__filter-container">
            
            <CustomFilter title='fuel'/>
            <CustomFilter title='fuel'/>
            </div>

           </div>

           {!isdataEmpty?(
            <section>
              <div className="home__cars-wrapper">
             {allCars?.map(car=>(
              <CarCards car={car}/>
             ))}

              </div>
            </section>
           ): <>Sorry there is no Cars to show</>}

        </div>
    </main>
   
  );
}
