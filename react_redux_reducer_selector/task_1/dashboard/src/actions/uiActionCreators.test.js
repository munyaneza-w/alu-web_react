import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "./uiActionCreators";
import nodeFetch from "node-fetch";

// Middleware for mocking the store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("login", () => {
    const user = { email: "diahancaroll@hotmail.com", password: 12345 };
    const data = { type: LOGIN, user };
    const result = login(user.email, user.password);
    expect(result).toEqual(data);
  });

  it("logout", () => {
    const data = { type: LOGOUT };
    const result = logout();
    expect(result).toEqual(data);
  });

  it("displayNotificationDrawer", () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const result = displayNotificationDrawer();
    expect(result).toEqual(data);
  });

  it("hideNotificationDrawer", () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const result = hideNotificationDrawer();
    expect(result).toEqual(data);
  });
});

describe("loginRequest actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches LOGIN and LOGIN_SUCCESS on successful login", () => {
    const user = { email: "diahancaroll@hotmail.com", password: "12345" };
    const response = { token: "1234567890abcdef" };

    fetchMock.postOnce("/login", {
      body: response,
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: LOGIN, user },
      { type: LOGIN_SUCCESS, payload: response },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatches LOGIN and LOGIN_FAILURE on failed login", () => {
    const user = { email: "diahancaroll@hotmail.com", password: "12345" };
    const error = { message: "Invalid credentials" };

    fetchMock.postOnce("/login", {
      throws: error,
    });

    const expectedActions = [
      { type: LOGIN, user },
      { type: LOGIN_FAILURE, error },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(user.email, user.password)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
