import React from 'react'
import './styles.css'
import './styles.media.css'

const Countries = props => {
  return (
    <div className="cards_wrapper">
      {
      props.data.map((i, item) => (
        <div key={item} className="card">
          <div>
            <span>Country - <b>{i.country}</b></span> 
            <img src={i.countryInfo.flag} alt="flag" className="flag"/>
          </div>
          <span>Number of deaths- <b>{i.deaths}</b></span>
        </div>
      ))
      }
    </div>
  )
}

export default Countries