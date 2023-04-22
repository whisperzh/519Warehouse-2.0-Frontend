// import logo from './logo.svg';
import './App.css';

import Home from './components/Home';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <div className="App" style={{ width: "100vw", height: "100vh" }}>
         {Home()}
      </div>
      </ThemeProvider>

  );
}

export default App;
