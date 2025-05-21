import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export const Notifications = () => {
    return (
        <div className="Notifications">
            <button
                aria-label="Close"
                onClick={() => {
                    console.log('Close button has been clicked');
                }}
                style={{
                    float: 'right',
                    height: '25px',
                    width: '25px',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'none',
                    border: 'none',
                }}
                ><img
                    src={close_icon}
                    style={{
                        height: '20px',
                        width: '20px'
                    }} alt="Close"/></button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
        </div>
    );
}
