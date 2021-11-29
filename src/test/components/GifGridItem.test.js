import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"
import React from 'react';

describe('Pruebas en GifGridItem', () => {
    const title ='Un titulo';
    const url ='https://blabla.com'

    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
