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
