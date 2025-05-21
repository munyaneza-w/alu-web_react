import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
    return (
        <>
        <div className="menuItem">
            Your notifications
        </div>
        {displayDrawer &&
        <div className="Notifications">
            <button
                aria-label="Close"
                onClick={() => {
                    console.log('Close button has been clicked');
                }}
                ><img
                    src={close_icon}
                    alt="Close"
                />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem html={getLatestNotification()} />
            </ul>
        </div>
        }
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
}

export default Notifications;