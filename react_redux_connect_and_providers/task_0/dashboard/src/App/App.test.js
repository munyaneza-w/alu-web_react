/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import App from './App';
import { mapStateToProps } from './App'; // Import mapStateToProps
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

const loggedInUser = {
    email: 'zac@mail.com',
    password: 'zac',
    isLoggedIn: true
}

describe('<App />', () => {
    // App parent component
    it('renders an <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    it('verifies that the default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('verifies that the state property displayDrawer correctly updates', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
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

    it('verifies that the Login component is included.', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ user: loggedInUser });
        expect(wrapper.find(Login)).toHaveLength(0);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });

    it('verifies that the user can log out using ctrl + h', () => {
        const events = {};
        window.addEventListener = jest.fn().mockImplementation((event, cb) => {
            events[event] = cb;
        });
        window.alert = jest.fn();

        const wrapper = shallow(<App />);
        events.keydown({ ctrlKey: true, key: "h" });
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(wrapper.state('user').isLoggedIn).toBe(false);
        window.alert.mockRestore();
    });
});

describe('mapStateToProps', () => {
    it('should return the right object when passing the state with isUserLoggedIn true', () => {
        let state = fromJS({
            isUserLoggedIn: true
        });
        const expectedResult = {
            isLoggedIn: true
        };
        expect(mapStateToProps(state)).toEqual(expectedResult);
    });

    it('should return the right object when passing the state with isUserLoggedIn false', () => {
        let state = fromJS({
            isUserLoggedIn: false
        });
        const expectedResult = {
            isLoggedIn: false
        };
        expect(mapStateToProps(state)).toEqual(expectedResult);
    });
});