import React from 'react';
import { connect } from 'react-redux';
import Countries from './Countries'
import './styles.css'
import { getCovidData } from '../redux/covid-reducer'

class CountriesContainer extends React.Component {
  componentDidMount() {
    this.props.getCovidData()
  }
  render () {

    return (
      <>
        <Countries data={this.props.covid} />
      </>
    ) 
  }
}

const mapStateToProps = (state) => ({
  covid: state.covidData.covid
})

export default connect(mapStateToProps, { getCovidData }) (CountriesContainer)
