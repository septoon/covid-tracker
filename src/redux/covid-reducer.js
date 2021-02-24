import { getCountriesDataApi, getCovidDataApi } from "../api/api"

const SET_COUNTRIES = 'covid/SET_COUNTRIES'
const SET_COVID_DATA = 'covid/SET_COVID_DATA'

const initialState = {
  countries: [],
  covid: []
}

const covidReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_COUNTRIES: {
      return {...state, countries: action.countries}
    }
    case SET_COVID_DATA: {
      return {...state, covid: action.covidData}
    }
    default: {
      return state
    }
  }
}

const setCountries = (countries) => ({type: SET_COUNTRIES, countries})
const setCovidData = (covidData) => ({type: SET_COVID_DATA, covidData})

export const getCountriesData = () => async (dispatch) => {
  const response = await getCountriesDataApi()
  // console.log(response)
  dispatch(setCountries(response))
}

export const getCovidData = () => async (dispatch) => {
  const response = await getCovidDataApi()
  console.log(response)
  dispatch(setCovidData(response))
}

export default covidReducer
