import { shallow } from "enzyme";
import { GrifGrid } from "../../components/GrifGrid";
import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGif";
import '@testing-library/jest-dom'
jest.mock('../../hooks/useFetchGif');



describe("Prueabas en <GifGrid/>", () => {
  const category = "One punch";


  test("Deeb de hacer mach con el snapshot", () => {


      useFetchGifs.mockReturnValue({
          data:[],
          loading:true
      })


    const wrapper = shallow(<GrifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });



  test('debe de mostrar cuando se cargan las imagenes UseFethGif', () => {
    const gif=[{
        id:'ABC',
        url:'https://localhost/cualquier/cosa.jpg',
        title:'cualquier cosa'

    },
    {
        id:'1234u',
        url:'https://localhost/cualquier/cosa.jpg',
        title:'cualquier cosa'

    }
  
  
  ];

    useFetchGifs.mockReturnValue({
        data:gif,
        loading:false
    })
    const wrapper = shallow(<GrifGrid category={category}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe( gif.length )

   
  })
  
});
