import { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatchPage";
import { Route, Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
    render () {
        return (
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/dashboard" element ={<Dashboard></Dashboard>}></Route>
        <Route path="/customers" element={<CustomersList></CustomersList>}></Route>
        <Route  path="/cart"  element={<ShoppingCart></ShoppingCart>} ></Route>
        <Route  path="*"  element={<NoMatchPage></NoMatchPage>} ></Route>
        </Routes>
        
        </BrowserRouter>
             
             
             
          
        )
    }
}