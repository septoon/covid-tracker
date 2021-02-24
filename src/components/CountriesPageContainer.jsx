import React from 'react';
import { connect } from 'react-redux';
import Countries from './CountriesPage'
import './styles.css'
import { getCountriesData, getCovidData } from '../redux/covid-reducer'

class CountriesContainer extends React.Component {
  componentDidMount() {
    this.props.getCountriesData()
    this.props.getCovidData()
  }
  render () {
    return (
      <div>
        <Countries countries={this.props.countries} covid={this.props.covid} />
      </div>
    ) 
  }
}

const mapStateToProps = (state) => ({
  countries: state.covidData.countries,
  covid: state.covidData.covid
})

export default connect(mapStateToProps, { getCountriesData, getCovidData }) (CountriesContainer)
