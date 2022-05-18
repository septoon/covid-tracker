import React from 'react'
import { useState } from 'react';
import './styles.css'
import './styles.media.css'

const Countries = props => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const filteredData = props.data.filter((el) => {
    if (inputText === '') return el
    else return el.country.toLowerCase().includes(inputText)
})
  return (
    <>
      <input id="outlined-basic" onChange={inputHandler} type="search" />
      <div className="cards_wrapper">
        {
        filteredData.map((i, item) => {
          return (
            <div key={item} className="card">
              <div>
                <span>Country - <b>{i.country}</b></span> 
                <img src={i.countryInfo.flag} alt="flag" className="flag"/>
              </div>
              <span>Population - <b>{i.population}</b></span>
              <span>Number of deaths - <b>{i.deaths}</b></span>
              <span>Cases - <b>{i.cases}</b></span>
              <span>Active - <b>{i.active}</b></span>
              <span>Critical - <b>{i.critical}</b></span>
              <span>Recovered - <b>{i.recovered}</b></span>
              <span>Today Cases - <b>{i.todayCases}</b></span>
              <span>Today Deaths - <b>{i.todayDeaths}</b></span>
              <span>Today Recovered - <b>{i.todayRecovered}</b></span>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Countries