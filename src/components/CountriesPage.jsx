import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesData, getCovidData } from '../redux/covid-reducer'

import './styles.css'

const Countries = props => {
  const dispatch = useDispatch
  const [alpha, setAlpha] = useState('')

  const { countries, covid } = useSelector(({ covidData }) => ({
    countries: covidData.countries,
    covid: covidData.covid
  }))

  React.useEffect(() => {
    // dispatch(getCountriesData())
    dispatch(getCovidData())
  }, [dispatch])
  
  console.log(countries)
  console.log(covid)

  return (
    <div className="covid-wrapper">
      {/* <div className="countries-wrapper">
        {props.countries.map(i => <div className="country" onClick={() => setAlpha(i.alpha2) } key={i.id} >{i.name}</div>)}
      </div>
      <div className="covid-data">
        <div>
        <h2>Данные по Covid-19 на сегодняшний день:</h2>
        {props.covid.map(i => {
          if(alpha === i.country) {
            return (<>
            <span>Всего зара­жений {i.cases}</span>
            <span>Смер­тельные случаи {i.deaths}</span>
          </>)
          }
        })}
        </div>
        
      </div> */}
    </div>
  )
}

export default Countries
