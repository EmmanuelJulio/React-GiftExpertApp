import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"
import React from 'react';

describe('Pruebas en GifGridItem', () => {
    const title ='Un titulo';
    const url ='https://blabla.com'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Deve de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props('src'))
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })
    test('Debe de tener animate__backInLeft', () => {
        const div = wrapper.find('div');
        const classname=div.prop('className');
        expect(classname.includes('animate__backInLeft')).toBe(true)
    })
    
    
})
