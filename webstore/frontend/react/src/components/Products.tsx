
interface Props {
    heading: string;
    productNames: string[]; 
}

const Products = ({heading, productNames}: Props) => {

    return (
        <>
            <h1>{heading}</h1>
            <ul className="products">
                {productNames.map((productName) => (
                    <li className="products-item" key={productName}
                    >{productName}</li>
                ))}
            </ul>
        </>
    )
}

export default Products