import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
    it('renders an <CourseList /> component', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders a <CourseList /> component and verifies 5 rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});
