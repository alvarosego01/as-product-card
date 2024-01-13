import { ReactElement } from "react";
import { Props_I } from "../components/ProductCard";
import { ProductButtonsProps_I, ProductImageProps_I, ProductTitleProps_I } from "../components";

export interface ProductInCart_I extends Product_I {
    count: number;
}

export interface Product_I {

    id: string;
    title: string;
    img?: string;

}
export interface ProductContextProps_I {
    counter: number;
    maxCount?: number;
    increaseBy: (value: number) => void;
    product: Product_I;
}

export interface ProductCardHOCProps_I {
    (Props: Props_I): ReactElement;
    Title: (Props: ProductTitleProps_I) => ReactElement;
    Image: (Props: ProductImageProps_I) => ReactElement;
    Buttons: (Props: ProductButtonsProps_I) => ReactElement;
}

export interface onChangeArgs_I {
    product: Product_I,
    count: number
}

export interface InitialValues_I {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers_I {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product_I;

    increaseBy: (value: number) => void;
    reset: () => void;
}