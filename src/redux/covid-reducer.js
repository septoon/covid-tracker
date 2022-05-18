import { getCovidDataApi } from "../api/api"

const SET_COVID_DATA = 'covid/SET_COVID_DATA'

const initialState = {
  covid: []
}

const covidReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_COVID_DATA: {
      return {...state, covid: action.payload}
    }
    default: {
      return state
    }
  }
}

const setCovidData = (payload) => ({type: SET_COVID_DATA, payload})

export const getCovidData = () => async (dispatch) => {
  const response = await getCovidDataApi()
  dispatch(setCovidData(response))
}

export default covidReducer
