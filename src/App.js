import './App.css';
import Welcome from './components/welcome';
// import About from './components/about';
// import Projects from './components/projects';
// import Contact from './components/contact';
// import Header from './components/header';
// import Blogs from './components/blogs';

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
// import { Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  }
});


function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Welcome id="Welcome" />
      </div>
    </ThemeProvider>
  );
}

export default App;
