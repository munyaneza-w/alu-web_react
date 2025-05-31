import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

const rowStyle = {
    backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
    backgroundColor: '#deb5b545',
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <>
            <tr style={isHeader ? headerRowStyle : rowStyle}>
                { isHeader && !textSecondCell && (
                    <th colSpan={ 2 }>{ textFirstCell }</th>
                ) }
                { isHeader && textSecondCell && (
                    <>
                        <th>{ textFirstCell }</th>
                        <th>{ textSecondCell }</th>
                    </>
                ) }
                { !isHeader && (
                    <>
                        <td>{ textFirstCell }</td>
                        <td>{ textSecondCell }</td>
                    </>
                ) }
            </tr>
        </>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textFirstCell: "Holberton",
    textSecondCell: null,
};

export default CourseListRow;