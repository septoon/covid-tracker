import './styles.css'
import './styles.media.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
      <div className="cards_wrapper">
        {
        props.filterCovid.map((i, item) => {
          return (
            <Card key={item} sx={{ minWidth: 275 }} className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Country - <b>{i.country}</b>
                  <img src={i.countryInfo.flag} alt="flag" className="flag"/>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Population - <b>{i.population}</b>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Number of deaths - <b>{i.deaths}</b>
                </Typography>
                {
                  !isOpen ? '' :
                  (
                    <>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Cases - <b>{i.cases}</b>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Active - <b>{i.active}</b>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Critical - <b>{i.critical}</b>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Recovered - <b>{i.recovered}</b>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Today Cases - <b>{i.todayCases}</b>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Today Deaths - <b>{i.todayDeaths}</b>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Today Recovered - <b>{i.todayRecovered}</b>
                      </Typography>
                    </>
                  )
                }
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>Learn More</Button>
              </CardActions>
            </Card>
          )
        })
        }
      </div>
  )
}

export default Cards