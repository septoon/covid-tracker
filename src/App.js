import './App.css';
import CovidContainer from './components/CovidContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useSelector} from 'react-redux'


const App = () => {
  const { isChecked } = useSelector(({covidData}) => ({
    isChecked: covidData.isChecked
  }))
  console.log(isChecked)
  const darkTheme = createTheme({
    palette: {
      mode: isChecked ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">      
        <CovidContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
