export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "ed0fc791camsh49249699d1eeef9p16670ajsn8c23f70cb0f2",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

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
