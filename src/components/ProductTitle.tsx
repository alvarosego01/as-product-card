import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";


export interface ProductTitleProps_I {
    title?: string;
    className?: string;
}


export const ProductTitle = ({ title = '', className}: ProductTitleProps_I) => {

    const { title: prodTitle } = useContext(ProductContext).product;

    if(!title) title = prodTitle;

    return (
        <span className={`${ styles.productDescription } ${className}`}>
            {title}
        </span>
    )
}

