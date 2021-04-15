import { createContext, useEffect, useState } from 'react';
import { isExpired } from 'react-jwt';

export const GrowContext = createContext();

export const GrowProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [allProducts, setProducts] = useState();
    const [apiToken, setApiToken] = useState('');
    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem('growUser'));
            const isMyTokenExpired = isExpired(userData?.token);
            setLoggedIn(!isMyTokenExpired);
            if (!isMyTokenExpired) {
                setCurrentUser(userData);
                setApiToken(userData?.token);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const data = {
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setLoggedIn,
        allProducts,
        setProducts,
        apiToken,
        setApiToken,
    };
    return <GrowContext.Provider value={data}>{children}</GrowContext.Provider>;
};
