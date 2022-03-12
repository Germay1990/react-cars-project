import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import EditProduct from "./components/editProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCar from "./components/addCar";
import ResultsPage from "./components/resultsPage";
import RegistrationPage from "./components/registrationPage";
import LoginPage from "./components/loginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/editProduct/:id">
            <EditProduct />
          </Route>
          <Route exact path="/addCar">
            <AddCar title={"Add New Car"} />
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
