import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import './styles.css'
import { getCovidData, setFilterCovidData } from '../redux/covid-reducer'
import Cards from './Cards';

class CovidContainer extends React.Component {
  componentDidMount() {
    this.props.getCovidData()
  }
  render () {

    return (
      <>
        <Header data={this.props.covid} />
        <Cards data={this.props.covid} filterCovid={this.props.filterCovid} />
      </>
    ) 
  }
}

const mapStateToProps = (state) => ({
  covid: state.covidData.covid,
  filterCovid: state.covidData.filterCovid
})

export default connect(mapStateToProps, { getCovidData, setFilterCovidData }) (CovidContainer)
