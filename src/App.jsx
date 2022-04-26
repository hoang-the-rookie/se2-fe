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
            username: "",
            userId: "",
            URL: "http://localhost:8080",
            token: null
            //"start": "node --max_old_space_size=2560 node_modules/.bin/react-scripts start",
            //"build": "node --max_old_space_size=2560 node_modules/.bin/react-scripts build",
        }
    }

    handleCallback = (childData) => {
        this.setState({checkLogin: childData})
    }

    isLogging= (childData) => {
        this.setState({isLogin: childData})
    }

    checkLogging =(childData) => {
        this.setState({checkLogin: childData})
    }

    homeRedirect(){
        this.props.history.push("/");
    }

    setToken(token){
        this.setState({token: "BEARER "+token})
        console.log(this.state.token);
    }

    render(){
        const url = this.state.URL;
        const token = this.state.token;
            return<> 
                <main>
                    {!this.state.isLogin ?
                        <Menu checkLogin={this.state.checkLogin} logout={this.handleCallback} url={url} token={token}/>
                    :
                        <></>
                    }
                    <Switch>
                        <Route exact path="/">
                            <HomePage checkLogin = {this.handleCallback} url={url}/>
                        </Route>
                        <Route forceRefresh={true} exact path="/product/:id" render={(props) => <ProductPage url={url} token={token} {...props} />} />
                        <Route exact path="/category/:id/:name" render={(props) => <CategoryProduct url={url} token={token} {...props} />} />
                        <Route exact path="/login" render={(props) => <Login isLogin = {this.isLogging.bind(this)} checkLogin = {this.checkLogging.bind(this)} url={url} token={token} setToken={this.setToken.bind(this)} {...props}/> } />
                        <Route exact path="/signup">
                            <Signup isLogin = {this.isLogging.bind(this)} url={url} token={token}/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile isLogin = {this.isLogging.bind(this)} url={url} token={token}/>
                        </Route>
                        <Route exact path="/forgot">
                            <Forgot isLogin = {this.isLogging.bind(this)} url={url} token={token}/>                              
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </>;
    }
}
