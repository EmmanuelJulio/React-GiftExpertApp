import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom';
describe('Pruebas en el componente <AddCategory/>', () => {
    const setCategories=jest.fn();
    let wrapper;
      beforeEach(()=>{
        jest.clearAllMocks();
        wrapper= shallow(<AddCategory setCategories={setCategories}/>)

    })
    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value ='hola mundo'
        input.simulate('change',{ target:{value:value} })
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear informacion on submint', () => {
        wrapper.find('form').simulate('submin',{preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    // test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    //     const value ='HOLA MUNDO';
    //     //1. simular el imputChange
    //     wrapper.find('input').simulate('change',{target:{value}});
    //     //2. simular el submint
    //     wrapper.find('input').simulate('submint',{preventDefault(){}});
    //     //3 setVategories se debe haber llamado
    //    expect(setCategories).toHaveBeenCalled(1);
    //     //4. El valor del imput debe de estar ''
    // expect(wrapper.find('input').prop('value')).toBe('');

    // })
    
    
})
