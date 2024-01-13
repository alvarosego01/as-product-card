import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons, ProductImage, ProductTitle } from '.';
import { ProductCardHOCProps_I } from "../interfaces/interfaces";


export * from "./ProductButtons";
export * from "./ProductImage";
export * from "./ProductTitle";
// export * from "./ProductCard";


export const ProductCard: ProductCardHOCProps_I = Object.assign(
    ProductCardHOC,
    {
        Buttons: ProductButtons,
        Image: ProductImage,
        Title: ProductTitle,
    }
)

export default ProductCard;