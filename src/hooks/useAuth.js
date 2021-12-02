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
                setCurrentUser({});
                console.log(error.response);
            }
        );
    }

    const logOutUsers = () => {
        // do something here...
    }

    return {
        authed,
        currentUser,
        login() {
            return new Promise((res) => {
                getCurrentLoggedInUser();
                res();
            });
        },
        logout() {
            // do something later...
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