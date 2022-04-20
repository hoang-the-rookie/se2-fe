import './Product.css';

export default function Product(product) {
    return (
        
        <div className="product-item border-normal corner-2 cursor-pointer bg-white">
            <div className="product-item__img">
                <img src="" alt={product.image} className="cursor-pointer"/>
            </div>

            <div className="product-item__text p-2 cursor-pointer">
                <div className="" id = {product.id}>
                    <h6 className="cursor-pointer">{product.name}</h6>
                </div>
                <p className="cursor-pointer">{product.price}</p>
            </div>

        </div>
    )
}