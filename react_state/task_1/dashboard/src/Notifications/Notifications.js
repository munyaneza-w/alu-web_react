import React from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const translateKeyframes = {
    '0%': {
        transform: 'translateY(0px)',
    },
    '20%': {
        transform: 'translateY(-5px)',
    },
    '60%': {
        transform: 'translateY(5px)',
    },
    '90%': {
        transform: 'translateY(-2px)',
    },
    '100%': {
        transform: 'translateY(0px)',
    },
};

const opacityKeyframes = {
    'from': {
        opacity: 0.5,
    },

    'to': {
        opacity: 1,
    },
}

const styles = StyleSheet.create({
    // Notifications Panel
    Notifications: {
        border: '2px dashed var(--holb-red)',
        padding: '24px',
        height: '100vh',
        width: '100vw',
        // '@media (max-width: 900px)': {
        //     height: '100vh',
        //     width: '100vw',
        // }
    },

    // Notification List Container
    NotificationUnorderedList: {
        listStyleType: 'none',
    },


    // Notification list item
    NotificationsListItem: {
        listStyleType: 'disc',
        fontSize: '20px',
        padding: '10px 8px',
        borderBottom: '1px solid black',
    },

    NotificationsButton: {
        float: 'right',
        height: '25px',
        width: '25px',
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'none',
        border: 'none',
    },

    NotificationsButtonImg: {
        height: '20px',
        width: '20px',
    },

    menuItem: {
        position: 'absolute',
        top: '0',
        right: '0',
        margin: '10px',
        cursor: 'pointer',
        ':hover': {
            animationName: [opacityKeyframes, translateKeyframes],
            animationDuration: '1s, 500ms',
            animationIterationCount: '3',
        }
    },
})

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    // Lifecycle Methods
    shouldComponentUpdate(updatedProps, updatedState) {
        if (updatedProps.listNotifications.length > this.props.listNotifications.length ||
            updatedProps.displayDrawer != this.props.displayDrawer
        ) {
            return true;
        }
        return false;
    }

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

        return (
            <>
            { displayDrawer ? (
                <div className={ css(styles.Notifications) } id="Notifications">
                    { listNotifications.length > 0 ? (
                        <>
                            <button
                                className={css(styles.NotificationsButton)}
                                aria-label="Close"
                                onClick={handleHideDrawer}
                            ><img
                            className={css(styles.NotificationsButtonImg)}
                                    src={ close_icon }
                                    alt="Close"
                                />
                            </button>
                            <p>Here is the list of notifications</p>
                            <ul className={css(styles.NotificationUnorderedList)}>
                                { listNotifications.map((notification) => (
                                    <NotificationItem
                                        className={css(styles.NotificationsListItem)}
                                        key={ notification.id }
                                        type={ notification.type }
                                        value={ notification.value }
                                        html={ notification.html }
                                        markAsRead={() => this.markAsRead(notification.id)}
                                    />
                                )) }
                            </ul>
                        </>
                    ) : <p>No new notification for now</p> }
                </div> ) : (
                    <div
                        className={ css(styles.menuItem) }
                        id="menuItem"
                        // Activate function on click
                        onClick={ handleDisplayDrawer }
                        >
                        Your notifications
                    </div>

                )
            }
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
}

export default Notifications;