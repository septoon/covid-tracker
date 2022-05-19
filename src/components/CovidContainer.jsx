import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import './styles.css'
import { getCovidData, setFilterCovidData } from '../redux/covid-reducer'
import DenseTable from './Tables';

class CovidContainer extends React.Component {
  componentDidMount() {
    this.props.getCovidData()
  }
  render () {

    return (
      <>
        <Header data={this.props.covid} isChecked={this.props.isChecked} />
        <DenseTable data={this.props.covid} filterCovid={this.props.filterCovid} />
      </>
    ) 
  }
}

const mapStateToProps = (state) => ({
  covid: state.covidData.covid,
  filterCovid: state.covidData.filterCovid,
  isChecked: state.covidData.isChecked
})

export default connect(mapStateToProps, { getCovidData, setFilterCovidData }) (CovidContainer)
