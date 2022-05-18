import axios from "axios"

export const getCovidDataApi = () => {
  return axios.get('https://disease.sh/v3/covid-19/countries').then(response => {
    return response.data
  })
}
