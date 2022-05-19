import { getCovidDataApi } from "../api/api"

const SET_COVID_DATA = 'covid/SET_COVID_DATA'
const SET_FILTER_COVID_DATA = 'covid/SET_FILTER_COVID_DATA'
const SET_IS_CHECKED = 'covid/SET_IS_CHECKED'

const initialState = {
  covid: [],
  filterCovid: [],
  isChecked: false
}

const covidReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_COVID_DATA: {
      return {...state, covid: action.payload}
    }
    case SET_FILTER_COVID_DATA: {
      return {...state, filterCovid: action.payload}
    }
    case SET_IS_CHECKED: {
      return {...state, isChecked: action.payload}
    }
    default: {
      return state
    }
  }
}

const setCovidData = (payload) => ({type: SET_COVID_DATA, payload})
export const setFilterCovidData = (payload) => ({type: SET_FILTER_COVID_DATA, payload})
export const setIsChecked = (payload) => ({type: SET_IS_CHECKED, payload})

export const getCovidData = () => async (dispatch) => {
  const response = await getCovidDataApi()
  dispatch(setCovidData(response))
}

export default covidReducer
