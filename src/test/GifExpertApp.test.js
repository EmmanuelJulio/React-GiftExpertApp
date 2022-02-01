import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";


describe("Pruebas en GifexpertApp", () => {
  test("Debe de hacer match con el snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot(`""`);
  });

  test("Debe de mostrar una lista de categorias", () => {
    const categories = ['One punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defautlCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GrifGrid").length).toBe(categories.length);
  });
});
