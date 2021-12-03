import {Copyright} from "./components/Copyright";
import {Navigation} from "./components/Navigation";
import {Routes} from "./routes/Routes";
import {UserProvider} from "./shared/provider/UserProvider";
import logo from "./img/logo.png";
import {Background, BoxCard} from "./styles/styleComponens";
import {GlobalStyles} from "@mui/material";

function App() {
  return (
      <Background>
          <GlobalStyles
              styles={{
                  body: { backgroundColor: "#F5F5F5" }
              }}
          />
          <BoxCard>
              <img src={logo} />
          <UserProvider>
              <Routes>
                  <Navigation />
              </Routes>
              <Copyright sx={{ mt: 5 }} />
          </UserProvider>
          </BoxCard>
      </Background>
  );
}

export default App;