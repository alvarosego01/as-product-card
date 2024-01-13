# Product card

Proyecto de pruebas npm

## Ejemplo

```
import {
ProductCard
ProductImage
ProductTitle
ProductButtons
} from 'as-product-card'
```

```
<ProductCard
    product={product}
    initialValues={
        {
            count: 4,
            // maxCount: 10
        }
    }
>
    {
        ({
            reset,
            count,
            maxCount,
            increaseBy,
            isMaxCountReached
        }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />

            </>
        )
    }
</ProductCard>
```
