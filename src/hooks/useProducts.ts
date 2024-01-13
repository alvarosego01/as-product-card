import { useEffect, useRef, useState } from "react";
import { InitialValues_I, Product_I, onChangeArgs_I } from "../interfaces/interfaces";


interface useProductArgs_I {
    product: Product_I;
    onChange?: (args: onChangeArgs_I) => void
    value?: number;
    initialValues?: InitialValues_I
}

export const useProducts = ({ onChange, product, value = 0, initialValues }: useProductArgs_I) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (_value: number) => {

        let newValue = Math.max(counter + _value, 0);

        if( initialValues?.maxCount ) newValue = Math.min(newValue, initialValues.maxCount);

        setCounter(newValue);

        onChange && onChange({
            count: newValue,
            product
        });

    }

    const reset = () => {
        // return
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        // setCounter(value);
    }, [value]);


    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        reset,
        increaseBy,
    }

}
