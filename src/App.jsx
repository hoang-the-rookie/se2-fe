import React from 'react';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router";
import Menu from './components/menu/Menu.jsx';
import Product from './pages/product/Product.jsx';
import Footer from './components/footer/Footer';
import './App.css';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }

    handleCallback = (childData) => {
        this.setState({isLogin: childData})
    }

    render(){
            return<>
                <Menu isLogin = {this.state.isLogin}/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <HomePage checkLogin = {this.handleCallback}/>
                        </Route>
                        <Route exact path="/product/:id">
                            <Product checkLogin = {this.handleCallback}/>
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </>;
    }
}
