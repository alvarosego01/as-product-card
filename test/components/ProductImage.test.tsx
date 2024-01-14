import ProductCard, { ProductImage } from "../../src/components";
import renderer from 'react-test-renderer';
import React from 'react';
import { product2 } from "../data/products";


describe('Pruebas en ProductImage', () => {

    test('Debe mostrar el componente con imagen', () => {

        const wrapper = renderer.create(
            <ProductImage img="https://picsum.photos/100"  />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

        expect(wrapper.root.findByType('img').props.src).toBe('https://picsum.photos/100');

    })

    test('Debe mostrar el componente con imagen del producto', () => {

        const wrapper = renderer.create(
           <ProductCard product={product2} >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    })



})
