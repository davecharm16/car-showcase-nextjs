export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '568fa5d91emsh132e6696e0cf287p17416djsna92ba1a421d3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers : headers
    });

    const result = await response.json();

    return result;
}