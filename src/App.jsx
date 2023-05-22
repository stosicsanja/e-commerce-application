import { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";

export default class App extends Component {
    render () {
        return (
            <div>
               <NavBar></NavBar>
               <CustomersList></CustomersList>
            </div>
        )
    }
}