import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { Header } from './ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme'

import logo from '../assets/logo.svg'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>

    </ThemeProvider>
  );
}

export default App;
