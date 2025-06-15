import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    CourseList: {
        width: '90vw',
        margin: '0 5vw',
        border: '1px solid grey',
    },
});

function CourseList({ listCourses }) {
    return (
        <>
            <table className={css(styles.CourseList)}>
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={ true } />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={ true } />
                </thead>
                <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" />
                ) : (
                listCourses.map((course) => (
                    <CourseListRow
                        key={ course.id }
                        textFirstCell={ course.name }
                        textSecondCell={ course.credit }
                    />
                    ))
                )}
                </tbody>
            </table>
        </>
    );
}

// propType listcourses takes an array of the courseShape
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

// listCourses is an empty array by default
CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;