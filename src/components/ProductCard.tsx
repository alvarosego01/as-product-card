

import { useProducts } from "../hooks/useProducts";
import React, { createContext } from "react";
import { InitialValues_I, ProductCardHandlers_I, ProductContextProps_I, Product_I, onChangeArgs_I } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";


export const ProductContext = createContext({

} as ProductContextProps_I)
const { Provider } = ProductContext;


export interface Props_I {
    product: Product_I;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers_I) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs_I) => void;
    value?: number;
    initialValues?: InitialValues_I
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props_I) => {

    const {
        counter,
        increaseBy,
        maxCount,
        isMaxCountReached,
        reset
    } = useProducts({
        onChange,
        product,
        value,
        initialValues
    });

    return (
        // Se provee la informaci´pn que necesitan los hijos
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )

}


