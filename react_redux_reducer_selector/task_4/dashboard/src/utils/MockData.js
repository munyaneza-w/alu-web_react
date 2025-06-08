export const defaultUser = {
    user: {
        email: '',
        password: '',
        isLoggedIn: false
    },
    logOut: () => { }
};

export const defaultContext = {
    user: defaultUser,
    logOut: () => {}
}
export const loggedInUser = {
    email: 'zac@mail.com',
    password: 'zac',
    isLoggedIn: true
}

export const loggedInContext = {
    user: loggedInUser,
    logOut: () => { }
};