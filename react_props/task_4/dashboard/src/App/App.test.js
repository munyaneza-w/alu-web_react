import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('renders an <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Notifications />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Header />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Login />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('tests to check that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    it('renders an <App /> component checking for <Footer />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    // When isLoggedIn is true or user is logged into app
    it('verifies that the Login component is not included.', () => {
        const wrapper = shallow(<App isLoggedIn={ true } />);
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('verifies that the Login component is not included.', () => {
        const wrapper = shallow(<App isLoggedIn={ true } />);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });
});
