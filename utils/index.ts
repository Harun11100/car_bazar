

export async function fetchCars(){

const headers={
'x-rapidapi-key': '6cdaa68426msh9fbe734a4c1ba77p1fbbf4jsn79e14363a607',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
}

   const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
      headers:headers
   
   });

   const result =await response.json()
   return result 



}