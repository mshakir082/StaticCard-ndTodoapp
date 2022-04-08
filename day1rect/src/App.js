import logo from './logo.svg';
import './App.css';
import Join from "./day1/JoinUS"
import {Settings} from "./day1/Settings"
import {Login} from "./day1/Login"
import {Contact} from "./day1/ContactUs"
import {Search} from "./day1/Search"
import {Help} from "./day1/Help"
import {Home} from "./day1/Home"
import {Download} from "./day1/Download"

// Day2 Imports --------------------------------
import {EmployeeDetails} from "./day2/EmployeeDetails"
import {Counter} from "./day2/Counter"
import TodoList from './day3/TodoList';


function App() {
  
  return (
    // <div className="App">
    //   {/* <h1>Masai School</h1> */}
    //  <div className="flecDicv"><Join/> <Settings/></div>
    //  <div className="flecDicv"><Login/> <Contact/></div>
    //  <div className="flecDicv"><Search/> <Help/></div>
    //  <div className="flecDicv"><Home/> <Download/></div>
      
    // </div>
    // <EmployeeDetails/>
    // <Counter/>
   <TodoList/>
  );
}

export default App;
