import React from 'react';
import { BurgerBuilder } from './BurgerBuilder'; //1
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ ings: { salad: 0 } });
    // wrapper.setProps({ ings: null }); //it ll fail

    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});

