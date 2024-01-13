import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";



export interface ProductImageProps_I {
    img?: string;
    className?: string;
        style?: React.CSSProperties;
}

export const ProductImage = ({img = '', className, style}: ProductImageProps_I) => {

    const { product } = useContext(ProductContext);

    let imgShow: string;

    if(img) {
        imgShow = img;
    }else if(product.img) {
        imgShow = product.img;
    } else {
        imgShow = noImage;
    }

    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={imgShow} alt="cofee mug" />
    )
}
