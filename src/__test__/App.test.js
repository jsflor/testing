import React from 'react';
import App from '../App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});

describe('App component', () => {
  
  test('Rendering App Component', () => {

    const wrapper = shallow(<App />);

    //expect(wrapper.html()).toBe('<div><h1>Unit Testing</h1></div>');

    expect(wrapper.find('h1').html()).toBe('<h1>Unit Testing</h1>');
    expect(wrapper.find('h1')).toHaveLength(1);

  });

});