import axios from "axios"

export const getCovidDataApi = () => {
  return axios.get('https://covid19-api.org/api/status').then(response => {
    return response.data
  })
}

export const getCountriesDataApi = () => {
  return axios.get('https://covid19-api.org/api/countries').then(response => {
    return response.data
  })
}
