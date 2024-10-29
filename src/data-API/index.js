import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {

  const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: 'en',
      units: measurementSystem
    },
    headers: {
      'x-rapidapi-key': '970c3f8ab6msh838be89a004b60fp1d473bjsnb07feeec1d28',
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchPlace(text) {

  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
    params: {
      text,
      language: 'en'
    },
    headers: {
      'x-rapidapi-key': '970c3f8ab6msh838be89a004b60fp1d473bjsnb07feeec1d28',
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}