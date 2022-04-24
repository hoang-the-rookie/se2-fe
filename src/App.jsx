import React from 'react';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router";
import Menu from './components/menu/Menu.jsx';
import ProductPage from './pages/product/ProductPage.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Profile from './pages/profile/Profile.jsx';
import Footer from './components/footer/Footer';
import Forgot from './pages/forgot/Forgot.jsx';
import CategoryProduct from './pages/categoryProduct/categoryProduct.jsx';
import './App.css';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            checkLogin: false,
            URL: "https://be-project23421.herokuapp.com"
            //"start": "node --max_old_space_size=2560 node_modules/.bin/react-scripts start",
            //"build": "node --max_old_space_size=2560 node_modules/.bin/react-scripts build",
        }
    }

    handleCallback = (childData) => {
        this.setState({checkLogin: childData})
    }

    isLogging(){
        this.setState({isLogin: true})
    }

    render(){
        const url = this.state.URL;
            return<>
                {!this.state.isLogin ?
                    <Menu checkLogin = {this.state.checkLogin} url={url}/>
                :
                    <></>
                }
                <main>
                    <Switch>
                        <Route exact path="/">
                            <HomePage checkLogin = {this.handleCallback} url={url}/>
                        </Route>
                        <Route exact path="/product/:id" render={(props) => <ProductPage url={url} {...props} />} />
                        <Route exact path="/category/:id/:name" render={(props) => <CategoryProduct url={url} {...props} />} />
                        <Route exact path="/login">
                            <Login isLogin = {this.isLogging.bind(this)} url={url}/>                              
                        </Route>
                        <Route exact path="/signup">
                            <Signup isLogin = {this.isLogging.bind(this)} url={url}/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile isLogin = {this.isLogging.bind(this)} url={url}/>
                        </Route>
                        <Route exact path="/forgot">
                            <Forgot isLogin = {this.isLogging.bind(this)} url={url}/>                              
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </>;
    }
}
