import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
    return (
        <>
        <div className="menuItem">
            Your notifications
        </div>
        {displayDrawer &&
        <div className="Notifications">
            { listNotifications.length > 0 ? (
                <>
                    <button
                        aria-label="Close"
                        onClick={ () => {
                            console.log('Close button has been clicked');
                        } }
                    ><img
                            src={ close_icon }
                            alt="Close"
                        />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        { listNotifications.map((notification) => (
                            <NotificationItem
                                key={ notification.id }
                                type={ notification.type }
                                value={ notification.value }
                                html={ notification.html }
                            />
                        )) }
                    </ul>
                </>
            ) : <p>No new notification for now</p> }
        </div>
        }
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;