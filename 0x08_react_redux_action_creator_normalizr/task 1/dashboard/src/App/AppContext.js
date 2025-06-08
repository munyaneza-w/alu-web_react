import { createContext } from 'react';

const user = {
    email: '',
    password: '',
    isLoggedIn: false
};

function logOut() { };

const AppContext = createContext({ user, logOut });

export { user, AppContext };