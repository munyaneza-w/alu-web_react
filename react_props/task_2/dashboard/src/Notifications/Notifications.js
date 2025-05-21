import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
    return (
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
    );
}

export default Notifications;