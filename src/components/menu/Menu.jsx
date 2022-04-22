// create menu component
import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin: this.props.isLogin,
            cart: 0,
            products: this.props.products
        };
    }

    showCart(){
        this.state.cart === 0 ?
        this.setState({
            cart:
                <>
                    <div className="user-utilities__cart--preview-heading cursor-default">
                        <h3 className="user-utilities__cart--preview-title mx-2">List of products</h3>
                    </div>

                    <div className="user-utilities__cart--preview-list">

                        {this.state.products.map((product) => (
                            <div className="user-utilities__cart--preview-item d-flex px-2 py-2" key={product.id}>
                                <img src="" alt="" className="user-utilities__cart--preview-item__image col-3" width="100%" height="100%"/>

                                <div className="user-utilities__cart--preview-item__content px-2 col-9">
                                    <p className="user-utilities__cart--preview-item__name">Name: <span>{product.name}</span> </p>
                                    <p className="user-utilities__cart--preview-item__extra d-flex justify-content-between">
                                        <span className="user-utilities__cart--preview-item__price">${product.price}</span>
                                        <span className="user-utilities__cart--preview-item__quantity px-3">Quantity: <span className="">{product.quantity}</span> </span>
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="user-utilities__cart--preview-total p-2 d-flex justify-content-between align-items-center cursor-default">
                        <div className=""> Total: 

                            <span className="">
                                {this.state.products.reduce((total, product) => 
                                    total + product.price * product.quantity,0
                                )}
                            </span> 
                            
                        </div>

                        <div className="">
                            <button className="btn user-utilities__cart--preview-submit border-normal">Make order</button>
                        </div>
                    </div>
                </>
        })
        :
        this.setState({
            cart: 0
        })
    }

    render(){
        const isLogin = this.state.isLogin;
        let button;
        if (!isLogin) {
            button = <>
                <div className="register-btn">
                    <Link to="/signup" className="register-btn__control d-inline-block btn text-white fw-bold px-4">Register</Link>
                </div>
                <div className="login-btn">
                    <Link to="/login" className="login-btn__control d-inline-block btn fw-bold text-white px-4">Log In</Link>
                </div>
            </>
                
        }else{
            button = <>
                <div className="user-utilities__item user-utilities__cart border-0">
                        <a href="/#" className="btn px-3 py-2 m-1 bg-white"><i className="fa-solid fa-cart-shopping cursor-pointer"></i></a>
    
                        <div className="user-utilities__item-extra user-utilities__cart--preview border-thin corner-5 py-3 px-2 cursor-default" onClick={this.showCart}>

                            {this.state.cart}
    
                        </div>
                    </div>
    
                    <div className="user-utilities__item user-utilities__account">
                        <Link to="" className=""><img src="" alt={"User " + this.props.id} className="user-utilities__account--photo cursor-pointer"/></Link>
    
                        <div className="user-utilities__item-extra user-utilities__account--info py-3 px-2 corner-5">
                            <div className="user-utilities__account--info-preview pb-2 px-2 border-bottom cursor-default">
                                <p className="">Hello <span className="">{this.props.username}</span> !</p>
                                <p className="">Balance: <span className="">$ {this.props.balance}</span></p>
                            </div>
    
                            <div className="user-utilities__account--info-options">
                                <div className="user-utilities__account--info-item px-1">
                                    <a href="/#" className="btn">Profile</a>
                                </div>
                                <div className="user-utilities__account--info-item px-1">
                                    <a href="/#" className="btn">Wallet</a>
                                </div>
                                <div className="user-utilities__account--info-item px-1">
                                    <a href="/#" className="btn">Setting</a>
                                </div>
                            </div>
    
                            <div className="user-utilities__account--info-item px-1">
                                <a href="/#" className="btn text-danger" onClick={this.setState({
                                    isLogin: false
                                })}>Logout</a>
                            </div>
                        </div>
                </div>
            </>
        }
        return (
        
            <div className="navbar d-flex py-3 justify-content-center">
                <div className="logo flex-grow-1"></div>
                <div className="search-bar d-flex justify-content-center flex-grow-2">
                    <div className="search-bar__control d-inline-block">
                        <span className="search-bar__control--submit d-inline-block bg-white ps-3 pe-2 py-2 border-thin"><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <div className="search-bar__input d-inline-block">
                        <input type="text" name="search-bar" id="" className="border-thin w-100 px-2 py-2" placeholder="Search..."/>
                    </div>
                </div>
    
    
                <div className="user-utilities d-flex justify-content-end flex-grow-1">
                    
                    {button}
                    
                </div>
            </div>
        )
    }
}       