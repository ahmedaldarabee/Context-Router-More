import ContainedButtons from "./components/Material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange,purple } from '@mui/material/colors';
import Challenge from "./components/Challenge1";

//Global theme define around the provider in App components
const theme = createTheme({
  status: {
    danger: orange[500],
  },
  // customized or main colors around the app
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Challenge />
      </div>
    </ThemeProvider>
  )
}

export default App;