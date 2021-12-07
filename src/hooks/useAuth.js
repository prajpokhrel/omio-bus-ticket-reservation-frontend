import * as React from "react";
import axios from "../axios-omio-frontend";
import {useEffect} from "react";

const authContext = React.createContext();

function useAuth() {
    const [authed, setAuthed] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    useEffect(() => {
        getCurrentLoggedInUser();
    }, []);

    const getCurrentLoggedInUser = () => {
        axios.get('/users/me', {withCredentials: true, credentials: 'include'})
            .then((response) => {
                setCurrentUser(response.data);
                setAuthed(true);
            }).catch((error) => {
                setAuthed(false);
                console.log(error.response);
            }
        );
    }

    const refreshCurrentUser = () => {
        axios.get('/users/me', {withCredentials: true, credentials: 'inclide'})
            .then((response) => {
                setCurrentUser(response.data);
            }).catch((error) => {
                console.log(error);
        })
    }

    const logOutUsers = () => {
        axios.get('/users/logout', {withCredentials: true, credentials: 'include'})
            .then((response) => {
                setAuthed(false);
            }).catch((error) => {
                console.log(error);
        });
    }

    return {
        authed,
        currentUser,
        refresh() {
            return new Promise((res) => {
                refreshCurrentUser();
                res();
            });
        },
        login() {
            return new Promise((res) => {
                getCurrentLoggedInUser();
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                logOutUsers();
                res();
            });
        }
    }
}

export function AuthProvider({ children }) {
    const auth = useAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}