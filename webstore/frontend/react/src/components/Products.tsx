/*import "../styles/Products.css";

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

const Products = ({heading, products}: Props) => {

    return (
        <>
            <h1>{heading}</h1>
            <ul className="products">
                {products.map((product, index) => (
                    <a href="/products/ {student._id} "  className="products-item" key={index}
                    >
                        <div className="testImg">IMG</div> 
                        {product.productNames} 
                        {product.productPrices}
                    </a>
                ))}
            </ul>
        </>
    )
}

export default */

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

const Products = ({ heading, products }: Props) => {
    return (
        <>
            <h1>{heading}</h1>
            <ul className="products">
                {products.map((product, index) => (
                    <a 
                        href={`/products/${product._id}`} 
                        className="products-item" 
                        key={index}
                    >
                        {/* Show the uploaded product image */}
                        <img 
                            src={`https://orange-carnival-979p44qgprgw377vp-3000.app.github.dev${product.productImages}`} 
                            alt={product.productNames} 
                            className="product-image"
                        />
                        <div>{product.productNames}</div> 
                        <div>{product.productPrices} SEK</div>
                    </a>
                ))}
            </ul>
        </>
    );
}

export default Products;