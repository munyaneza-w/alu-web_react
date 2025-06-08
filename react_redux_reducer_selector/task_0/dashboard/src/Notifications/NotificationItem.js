import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    NotificationListItemDefault: {
        color: 'blue',
    },

    NotificationListItemUrgent: {
        color: 'red',
    },


    // Notification list item
    NotificationsListItem: {
        listStyleType: 'none',
        fontSize: '20px',
        padding: '10px 8px',
        borderBottom: '1px solid black',
    },
});

// functional component ES6 shortcut
const NotificationItem = ({ type, html, value, markAsRead }) => {
    // JSX goes here
    return (
        <li
            data-notification-type={ type }
            dangerouslySetInnerHTML={ html }
            onClick={ markAsRead }
            className={ type === 'default' ? css(styles.NotificationsListItem, styles.NotificationListItemDefault) : css(styles.NotificationsListItem, styles.NotificationListItemUrgent) }
        >{ value }</li>
    );
};

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    type: PropTypes.string.isRequired
};

NotificationItem.defaultProps = {
    type: 'default',
}

export default memo(NotificationItem);