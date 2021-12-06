import {Copyright} from "./components/Copyright";
import logo from "./img/logo.png";
import {Background, BoxCard, Button} from "./styles/styleComponens";
import {HomeView} from "./views/homeview/HomeView";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";
import {useState} from "react";
import {GlobalStyles} from "./styles/Themes";

function App(props) {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyles/>
      <Background>
          <BoxCard>
              <img src={logo} />
              <Button variant="contained" onClick={themeToggler}>Dark mode?</Button>
              <HomeView />
              <Copyright sx={{ mt: 5 }} />
          </BoxCard>
      </Background>
      </>
</ThemeProvider>
  );
}

export default App;