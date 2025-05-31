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
import { user as defaultUser, AppContext } from './AppContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({ user: defaultUser });
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New course available' },
        { id: 3, type: 'urgent', html: getLatestNotification() },
      ],
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    const newNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: newNotifications });
  }


  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }
  handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  render() {
    const { displayDrawer } = this.state;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    return (
      <AppContext.Provider value={ { user: this.state.user, logOut: this.state.logOut } }>
        <>
          <Notifications
            displayDrawer={ displayDrawer }
            listNotifications={ this.state.listNotifications }
            handleDisplayDrawer={ this.handleDisplayDrawer }
            handleHideDrawer={ this.handleHideDrawer }
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App">
            <Header />
            { this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={ listCourses } />
              </BodySectionWithMarginBottom>
              :
              <BodySection title="Log in to continue">
                <Login logIn={ this.logIn } />
              </BodySection>
            }
            <BodySection title="News from the School">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </BodySection>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}
App.propTypes = {
};
App.defaultProps = {
};

export default hot(module)(App);
