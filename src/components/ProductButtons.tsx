
import React, { ReactElement, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"


import styles from "../styles/styles.module.css";

export interface ProductButtonsProps_I {
    className?: string;
    children?: ReactElement | ReactElement[],
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className }: ProductButtonsProps_I) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext)

    const isMaxReached = useCallback( () => {

        if (counter === maxCount) {
            return true
        }
        return false

      }, [counter, maxCount])

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>

            <button className={`${styles.buttonMinus} ${className}`}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={`${styles.countLabel} ${className}`}>
                {counter}
            </div>

            <button
            disabled={isMaxReached()}
            className={`${styles.buttonAdd} ${className} ${ isMaxReached() && styles.disabled }`}
                onClick={() => increaseBy(+1)}
            >
                +
            </button>

        </div>
    )

}