import './Product.css';
import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    handleCLick(e) {
        axios.get(`https://be-project23421.herokuapp.com/api/product/${this.props.match.params.id}`).then(res => {
            if(res.status === 200) {
                this.setState({product: res.data});
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const product = this.state.product;

        return (
        
            <div className="product-item border-normal corner-2 cursor-pointer bg-white">
                <div className="product-item__img">
                    <img src="" alt={product.image} className="cursor-pointer"/>
                </div>

                <div className="product-item__text p-2 cursor-pointer">
                    <div className="" id = {product.productId}>
                        <h6 className="cursor-pointer">{product.name}</h6>
                    </div>
                    <p className="cursor-pointer">{product.price}</p>
                </div>

            </div>
        )
    }
}