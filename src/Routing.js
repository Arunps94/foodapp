import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
const Routing = () => {
    return(
        <BrowserRouter> 
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/Checkout" component={Checkout}/>
                <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
}


export default Routing;