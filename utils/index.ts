import { headers } from "next/headers";




export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '77e0ba7236mshcff3b078dc3937cp1d8eefjsnb04d71d3088c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers,});
    const result = await response.json();
    return result;
	
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const currentYear: number = new Date().getFullYear();
    const age: number = currentYear - year;
    const mileageAdjustment: number = Math.floor(city_mpg / 10000);
  
    const basePrice: number = 50;
    const ageDiscount: number = age * 5;
    const mileageDiscount: number = mileageAdjustment * 2;
  
    const price: number = basePrice - ageDiscount - mileageDiscount;
    return Math.max(price, 0);
  };