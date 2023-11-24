import { CarProps, FilterProps } from "@/types";

// export async function fetchCars(filters: FilterProps) {
//   const {manufacturer, year, model, limit, fuel} = filters
//   const headers = {
//     "X-RapidAPI-Key": "ed0fc791camsh49249699d1eeef9p16670ajsn8c23f70cb0f2",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   const url = (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}}`);

//   const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
//   const response = await fetch(url, { headers: headers });

//   const result = await response.json();

//   console.log(response)

//   console.log(result);

//   return result;
// }

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    "X-RapidAPI-Key": "ed0fc791camsh49249699d1eeef9p16670ajsn8c23f70cb0f2",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const response = await fetch(url, { headers: headers });

  const result = await response.json();

  console.log(result);

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const baseProcePerDay = 50; //Base rental price per day in dollars
  const mileageFactor = 0.1; //Additional rate per mile driven
  const ageFactor = 0.05; //Additional rate per year of vehicle age

  //Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //Calculate total rental rate per day
  const rentalRatePerDay = baseProcePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascipt-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
