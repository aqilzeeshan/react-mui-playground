import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { Header } from './ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Container>
        <Box sx={{ my: 10 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <Button 
        sx={{
              width: 300,
              color: '#FFFFFF',
              backgroundColor: '#000000'
        }}>Click Me
      </Button>
    </ThemeProvider>
  );
}

export default App;
