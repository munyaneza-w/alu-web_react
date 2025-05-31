import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    headerRowStyle: {
        backgroundColor: '#deb5b545',
    },

    defaultRowStyle: {
        backgroundColor: '#f5f5f5ab',
    },

    rowChecked: {
        backgroundColor: '#e6e6e4',
    }
})

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.rowStyle)}>
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
                        {/* rowNotChecked is a default class name with no styling */ }
                        <td className={ isChecked ? css(styles.rowChecked) : "rowNotChecked" }>
                            <input
                                type="checkbox"
                                name="styleCheckbox"
                                onChange={ () => { setIsChecked(!isChecked); } }
                            />
                            { textFirstCell }</td>
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