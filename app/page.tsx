import { CustomFilter, Hero, Searchbar } from "@/Components";


export default function Home() {
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

        </div>
    </main>
   
  );
}
