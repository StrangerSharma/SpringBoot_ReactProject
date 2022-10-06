import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
         <HeaderComponent />
          <div className="container">
            <Switch>  {/*Whenever "https://localhost:3000/  or https://localhost:3000/employees " this url will be entered in the browser then ListEmployeeComponent will be rendered*/}
              <Route path="/" exact component={ListEmployeeComponent} />
              <Route path="/employees" component={ListEmployeeComponent} />
              <Route path="/add-employee" component={CreateEmployeeComponent} />
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent} />
              {/* <ListEmployeeComponent /> */}
            </Switch>
          </div>
          <FooterComponent />
       </Router>
    </div>
    
  );
}

export default App;
