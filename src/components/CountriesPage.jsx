import { useState } from 'react'
import './styles.css'

const Countries = props => {
  const [alpha, setAlpha] = useState('')
console.log(alpha)
  return (
    <div className="covid-wrapper">
      <div className="countries-wrapper">
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
        
      </div>
    </div>
  )
}

export default Countries
