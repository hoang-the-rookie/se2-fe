import './Product.css';

export default function Product(product) {
    return (
        
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div id="ho_bo" className="our_products">
                    <div className="product">
                        <figure><img src="images/pro1.png" alt={product.image}/></figure>
                    </div>
                    <h3>{product.name}</h3>
                    <span>{product.category}</span>
                    <p>{product.info}</p>
                </div>
            </div>
        </div>
    )
}