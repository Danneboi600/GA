import React from "react";

interface Props {
    productName: string;
    productPrice: string;
    productImg: string;  
}

const ProductPage = ({productName, productPrice, productImg}: Props) => {
    return <div>
        {productName}
        {productPrice}
        {productImg}
    </div>;
};

export default ProductPage;