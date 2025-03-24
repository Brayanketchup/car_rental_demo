import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, model, limit } = filters;

  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST as string,
  };

  const queryParams = new URLSearchParams();

  if (manufacturer && manufacturer !== 'undefined') {
    queryParams.append('make', manufacturer);
  }

  if (model && model !== 'undefined') {
    queryParams.append('model', model);
  }

  queryParams.append('limit', (limit || 10).toString());

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      console.error('API Error:', response.status, response.statusText);
      return [];
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Fetch Error:', error);
    return [];
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const currentYear: number = new Date().getFullYear();
  const age: number = currentYear - year;
  const mileageAdjustment: number = Math.floor(city_mpg / 10000);

  const basePrice: number = 120;
  const ageDiscount: number = age * 5;
  const mileageDiscount: number = mileageAdjustment * 2;

  const price: number = basePrice - ageDiscount - mileageDiscount;
  console.log('price', price);

  return Math.max(price, 25);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};