import { CarProps, FilterProps } from "@/types";


export async function fetchCars(filters : FilterProps) {
  const { manufacturer, model, limit } = filters;

    const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST as string,

	}
    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}`, { headers: headers,});
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const currentYear: number = new Date().getFullYear();
    const age: number = currentYear - year;
    const mileageAdjustment: number = Math.floor(city_mpg / 10000);
  
    const basePrice: number = 120;
    const ageDiscount: number = age * 5;
    const mileageDiscount: number = mileageAdjustment * 2;
  
    const price: number = basePrice - ageDiscount - mileageDiscount;
    console.log('price' ,price);
    return Math.max(price, 25);
  };

  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };


