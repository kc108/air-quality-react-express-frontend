import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router className="App">
      <Header />
        <main>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </main>
      <Footer />
    </Router>
  );
}

export default App;
