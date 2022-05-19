import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import './styles.css'
import './styles.media.css'

function createData(name, calories, fat) {
  return { name, calories, fat };
}



const DenseTable = (props) => {
  return (
    <div className="tables_wrapper">
      
      {props.filterCovid.length === 0 ? (
        <Typography >
          Enter Country Name
        </Typography>
      ) :
        props.filterCovid.map((i, item) => {
          const rows = [
            createData('Deaths', i.deaths, i.todayDeaths),
            createData('Cases', i.cases, i.todayCases),
            createData('Recovered', i.recovered, i.todayRecovered),
            createData('Critical', i.critical),
            createData('Active', '', i.active),
          ];
          
          return (
            <TableContainer component={Paper} key={item} className="table" >
            <Table sx={{ minWidth: 390 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>{i.country} <img src={i.countryInfo.flag} alt="flag" className="flag"/></TableCell>
                  <TableCell align="right">All time</TableCell>
                  <TableCell align="right">Today</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell>Population - {i.population}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          )
        })
      }
    </div>
  );
}

export default DenseTable