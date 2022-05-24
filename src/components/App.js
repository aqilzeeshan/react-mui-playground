import Button from '@mui/material/Button';
import { Header } from './ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
        hello
    </ThemeProvider>
  );
}

export default App;
