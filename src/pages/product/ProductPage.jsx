import './ProductPage.css';
import React from 'react';
import axios from 'axios';

export default class ProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            isRender: false,
            num: 1
        }
    }

    componentDidMount() {
        axios.get(`${this.props.url}/api/product/${this.props.match.params.id}`).then(res => {
            const product = res.data;
            this.setState({product});
        }).then(() =>{
            this.setState({
                isRender: true
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    decreaseNum(e) {
        e.preventDefault();
        if(this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            })
        }   
    }

    increaseNum(e) {
        e.preventDefault();
        if(this.state.num <= this.state.product.quantity) {
            this.setState({
                num: this.state.num + 1
            })
        }  
    }

    formatNum(num) {
        return (num*1000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    render() {
        const product = this.state.product;
        const price = product.price;
        const category = product.category;

        return(
            <>
            {
                this.state.isRender
                ?
                <div className="product-container">
                    <div className="left-column">
                        <figure><img src={product.imageName} alt=""/></figure>
                    </div>
                    
                    
                    <div className="right-column">
                    
                        <div className="product-description">
                            
                            <span>{category.name}</span>
                            <br />
                            <br />
                            <h1>{product.name}</h1>
                            <br />
                            <p>{product.description}</p>
                        </div>

                        <div className="product-configuration">
                            <div className="cable-config">
                                <span>Quantity: {product.quantity}</span>
                                <br />
                            </div>
                        </div>
                        <div className="number">
                            <button className="minus" onClick={this.decreaseNum.bind(this)}>&#45;</button>
                            <input type="text" defaultValue={this.state.num}/>
                            <button className="plus" onClick={this.increaseNum.bind(this)}>&#43;</button>
                        </div>
                        <br />
                        <div className="product-price">
                            <span>{this.formatNum(price)} VND</span>
                            
                            <a href="#" className="cart-btn">Add to cart</a>
                        </div>
                    </div> 
                </div>
                :
                <div className="loading">
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/>
                </div>
            }
            </>
        )
    }
}