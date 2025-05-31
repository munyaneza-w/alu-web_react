import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    /* bodySectionWithMarginBottom */

    bodySection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px 0px 0px',
        width: '90%',
        maxWidth: '600px',
        margin: '0 auto',
    },
    bodySectionWithMargin: {
        marginBottom: '40px',
    },

    centeredWithMargin: {
        margin: '12px auto',
    }
});

class BodySection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css(styles.bodySection)}>
                <h2 className={css(styles.centeredWithMargin)}>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};

BodySection.defaultProps = {
    title: '',
    children: {},
};

export default BodySection;