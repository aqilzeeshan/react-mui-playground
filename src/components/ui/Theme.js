import { createTheme} from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const arcBlue = "#0BBBBB"
const arcOrange = "#FFBA60"

export default createTheme({
    palette:{
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main: `${arcOrange}`
        }
    }
})

