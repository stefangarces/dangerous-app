import {Copyright} from "./components/Copyright";
import {Navigation} from "./components/Navigation";
import {Routes} from "./routes/Routes";
import {UserProvider} from "./shared/provider/UserProvider";
import {Paper} from "@mui/material";
import logo from "./img/logo.png";

function App() {
  return (
      <Paper elevation={3}
          sx={{
          marginTop: 8, padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
              background: '#C8D8E4'
      }}>
          <img src={logo} />
      <UserProvider>
          <Routes>
              <Navigation />
          </Routes>
          <Copyright sx={{ mt: 5 }} />
      </UserProvider>
      </Paper>
  );
}

export default App;