import React from 'react';
import './Notifications.css';

// functional component ES6 shortcut
const NotificationItem = ({ type, html, value }) => {
    // JSX goes here
    return (
        <li data-notification-type={ type } dangerouslySetInnerHTML={ html }>{ value }</li>
    );
};

export default NotificationItem;