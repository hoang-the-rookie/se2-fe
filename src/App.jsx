import React from 'react';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router";
import Menu from './components/menu/Menu.jsx';
import ProductPage from './pages/product/ProductPage.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Profile from './pages/profile/Profile.jsx';
import Footer from './components/footer/Footer';
import './App.css';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            checkLogin: false
        }
    }

    handleCallback = (childData) => {
        this.setState({checkLogin: childData})
    }

    isLogging(){
        this.setState({isLogin: true})
    }

    render(){
            return<>
                {!this.state.isLogin ?
                    <Menu checkLogin = {this.state.checkLogin}/>
                :
                    <></>
                }
                <main>
                    <Switch>
                        <Route exact path="/">
                            <HomePage checkLogin = {this.handleCallback}/>
                        </Route>
                        <Route exact path="/product/:id" render={(props) => <ProductPage {...props} />} />
                            <Route exact path="/login">
                                <Login isLogin = {this.isLogging.bind(this)}/>                              
                            </Route>
                            <Route exact path="/signup">
                                <Signup isLogin = {this.isLogging.bind(this)}/>
                            </Route>
                            <Route exact path="/profile">
                                <Profile isLogin = {this.isLogging.bind(this)}/>
                            </Route>
                    </Switch>
                </main>
                <Footer/>
            </>;
    }
}
