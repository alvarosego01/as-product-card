import React from 'react';
import ProductCard, { ProductTitle } from '../../src/components';
// import { render } from 'react-dom';
// import { render, screen } from "@testing-library/react";

import renderer from 'react-test-renderer';


import { product1 } from '../data/products';

describe('Pruebas en productTitle', () => {

    test('Debe mostrar component con titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title='hola mundo' />
        );

        // console.log('wrapper', wrapper.toJSON());

        expect(wrapper.toJSON()).toMatchSnapshot();


    })

    test('Debe mostrar component con titulo por defecto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        // console.log('wrapper', wrapper.toJSON());

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

});
