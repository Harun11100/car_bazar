import { CarProps } from "@/Components/CarCards";


export interface FilterProps{
  
   manufacturer:string;
   year: number;
   fuel:string;
   limit:number;
   model:string;
}

export async function fetchCars(filter:FilterProps){

    const {manufacturer,year,model,limit,fuel}=filter



const headers:HeadersInit={
'x-rapidapi-key':'6cdaa68426msh9fbe734a4c1ba77p1fbbf4jsn79e14363a607',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
}

   const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
      headers:headers
     
   });

   const result =await response.json()
   return result ;



}

// import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// export const updateSearchParams = (type: string, value: string) => {
//   // Get the current URL search params
//   const searchParams = new URLSearchParams(window.location.search);

//   // Set the specified search parameter to the given value
//   searchParams.set(type, value);

//   // Set the specified search parameter to the given value
//   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

//   return newPathname;
// };

// export const deleteSearchParams = (type: string) => {
//   // Set the specified search parameter to the given value
//   const newSearchParams = new URLSearchParams(window.location.search);

//   // Delete the specified search parameter
//   newSearchParams.delete(type.toLocaleLowerCase());

//   // Construct the updated URL pathname with the deleted search parameter
//   const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

//   return newPathname;
// };


 

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAG IN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// } 