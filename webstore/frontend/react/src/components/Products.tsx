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
                    <li className="products-item" key={index}
                    >{product.productNames}</li>
                ))}
            </ul>
        </>
    )
}

export default Products