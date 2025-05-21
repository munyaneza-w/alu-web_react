import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    it('renders an <Footer /> component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders a <div> with class App-footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div.App-footer')).toHaveLength(1);
    });
});
