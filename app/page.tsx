import { CustomFilter, Hero, Searchbar } from "@/Components";
import CarCards from "@/Components/CarCards";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars, FilterProps } from "@/utils";

export interface HomeProps {
  searchParams: FilterProps;
}



export default async function Home({searchParams}:HomeProps) {

  const allCars =await fetchCars({
    manufacturer:searchParams.manufacturer ||'',
    year: searchParams.year || 2000,
    fuel:searchParams.fuel ||'',
    limit:searchParams.limit || 10,
    model:searchParams.model ||''
  }); 
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
            
            <CustomFilter title='bugati' options={fuels} />
            <CustomFilter title='fuel' options={yearsOfProduction}/>
            </div>

           </div>

           {!isdataEmpty &&(
            <section>
              <div className="home__cars-wrapper">
             {allCars?.map(car=>(
              <CarCards car={car} key={car.model}/>
             ))}

              </div>
            </section>
           )}

        </div>
    </main>
   
  );
}
