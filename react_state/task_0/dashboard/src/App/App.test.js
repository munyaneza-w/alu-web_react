import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('<App />', () => {
    // App parent component
    it('renders an <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    it('verifies that the default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    })

    it('verifies that the state property displayDrawer correctly updates', () => {
        const instance = mount(<App />).instance();
        instance.setState({displayDrawer: false});
        expect(instance.state['displayDrawer']).toBe(false);
        instance.handleDisplayDrawer();
        expect(instance.state['displayDrawer']).toBe(true);
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

    it('verifies that the user can log out using ctrl + h', () => {
        const events = {};
        window.addEventListener = jest.fn().mockImplementation((e, cb) => {
            events[e] = cb;
        });

        const props = {
            isLoggedIn: true,
            logOut: jest.fn()
        }
        window.alert = jest.fn();

        const wrapper = shallow(<App {...props} />);
        events.keydown({ ctrlKey: true, key: 'h' });
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(props.logOut).toHaveBeenCalled();
        window.alert.mockRestore();
    })
});
