import {Copyright} from "./components/Copyright";
import {Navigation} from "./components/Navigation";
import {Routes} from "./routes/Routes";

function App() {
  return (
      <div>
          <a>Hello dude!</a>
          <Routes>
              <Navigation />
          </Routes>
          <Copyright sx={{ mt: 5 }} />
      </div>
  );
}

export default App;