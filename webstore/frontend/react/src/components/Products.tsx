import "../styles/Products.css";

interface Product {
    _id: string;
    productNames: string;
    productPrices: string;
    productImages: string;
}

interface Props {
    heading: string;
    products: Product[];
}

const Products: React.FC<Props> = ({ heading, products }) => {  
    return (
        <>
            <h1>{heading}</h1>
            <ul className="products">
                {products.map((product) => (
                    <li className="products-item" key={product._id}>  
                        <a href={`/products/${product._id}`} className="product-link">
                            <img 
                                src={`https://orange-carnival-979p44qgprgw377vp-3000.app.github.dev${product.productImages}`} 
                                alt={product.productNames} 
                                className="product-image"
                            />
                            <div className="product-info">
                                <div>{product.productNames}</div> 
                                <div>{product.productPrices}$</div>
                            </div>
                        </a>
                    </li> 
                ))}
            </ul>
        </>
    );
};

export default Products;
