import './App.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    // State:
    // - displayDrawer is a boolean controlling the view of the notifications
    this.state = { displayDrawer: false };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  // Display the drawer when displayDrawer is true
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Hide the drawer when displayDrawer is false
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  // Lifecycle Methods
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  // Handle Log out
  handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { displayDrawer } = this.state;
    const { isLoggedIn, logOut } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const htmlObj = getLatestNotification();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New course available' },
      { id: 3, type: 'urgent', html: htmlObj },
    ]

    return (
      <>
        <Notifications
          displayDrawer={ displayDrawer }
          listNotifications={ listNotifications }
          // Pass functions by reference
          handleDisplayDrawer={ this.handleDisplayDrawer }
          handleHideDrawer={ this.handleHideDrawer }
          />
        <div className="App">
          <Header />
          { isLoggedIn ?
          <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={ listCourses } />
          </BodySectionWithMarginBottom>
           :
          <BodySection title="Log in to continue">
            <Login />
          </BodySection>
          }
          <BodySection title="News from the School">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </BodySection>
          <Footer />
        </div>
      </>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default hot(module)(App);
