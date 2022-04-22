//create homepage component
import React from 'react';
import axios from 'axios';
import './Homepage.css';
import Product from '../../components/product/Product';
import video from "./bg.mp4"

export default class Homepage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            all_products: [],
            token: null,
            visible: false.valueOf,
            isLoading: true
        };
    }

    componentDidMount(){
        if(this.state.token !== null){
            this.props.checkLogin(true);
        }

        axios.get('https://be-project23421.herokuapp.com/api/products').then(res => {
            const all_products = res.data;
            this.setState({ all_products });
        }).then(() => {
            this.setState({ isLoading: false });
        }).catch(err => {
            console.log(err);
        });
    }


    render(){
        const user = this.state.user;

        return(
            <>
            {
                !this.state.isLoading ?
                <>
                    <section className="banner_main">                   
                        <video id="video" controls autoPlay loop muted >
                            <source src={video} type="video/mp4"/>
                        </video>

                        <div className="container">
                            <div className="banner_po">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="text_box">
                                        <span className="text-light">Welcome {user.name}</span>
                                        <h1><strong className="text-danger"><u>What you need, we have!</u></strong> </h1>
                                        <a href="#all_product" className="read_more" role="button">All products</a>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="products">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-7">
                                <div className="titlepage">
                                    <h2>Top Products</h2>
                                </div>
                            </div>
                            </div>

                            
                            
                        </div>
                    </div>

                    <div className="products">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="titlepage">
                                        <h2>New Products</h2>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="products">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="titlepage" id="all_product">
                                        <h2>All Products</h2>
                                        <div className="top_bar_menu">
                                            <ul className="standard_dropdown top_bar_dropdown">
                                                <li><a>Sort by:<i className="fas fa-chevron-down"/></a></li>
                                                <li> <a href="#">Price<i className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Ascending</a></li>
                                                        <li><a href="#">Descending</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="#">Release Date<i className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Ascending</a></li>
                                                        <li><a href="#">Descending</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="#">Category<i className="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">EUR Euro</a></li>
                                                        <li><a href="#">GBP British Pound</a></li>
                                                        <li><a href="#">JPY Japanese Yen</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item_list">
                            {this.state.all_products.map(product => (
                                <Product key={product.productId} product={product}/>
                            ))}
                            </div>

                        </div>
                    </div>
                </>
            :
                <div className="loading">
                        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/>
                </div>
            }
        </>
        )
    }           
}