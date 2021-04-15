import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { GrowContext } from '../../context/GrowContext';
import {
    loginUserValidationSchema,
    // eslint-disable-next-line prettier/prettier
    userValidationSchema
} from '../../yupValidator/yupUserValidation';
import Login from './Login';
import SignUp from './SignUp';

function Auth() {
    const [userLoginData, setUserLoginData] = useState();
    const [registerData, setRegisterData] = useState({});
    const [toggleForm, setToggleForm] = useState(true);

    const { setCurrentUser, setLoggedIn } = useContext(GrowContext);
    const history = useHistory();
    const setLocalStorage = (user) => {
        if (user.data.message) {
            toast.error(user.data.message);
        } else {
            setCurrentUser(user.data);
            console.log(user.data);
            const { name } = user.data;
            localStorage.setItem('growUser', JSON.stringify(user.data));
            setLoggedIn(true);
            toast.success(`Welcome ${name} 💕 Lets Order Some Food!`);
            history.push('/');
        }
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const isValid = await loginUserValidationSchema.isValid(userLoginData, {
                abortEarly: false,
            });
            if (!isValid) {
                toast.error('Invalid Information');
            }
            const loggedUser = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}api/auth/login`,
                userLoginData
            );
            setLocalStorage(loggedUser);
        } catch (err) {
            console.log(err);
        }
    };

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const isValid = await userValidationSchema.isValid(registerData, {
                abortEarly: false,
            });
            if (!isValid) {
                toast.error('Invalid Information');
            }
            const registeredUser = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}api/auth/register`,
                registerData
            );
            setLocalStorage(registeredUser);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            {toggleForm ? (
                <Login
                    setUserLoginData={setUserLoginData}
                    userLoginData={userLoginData}
                    login={login}
                />
            ) : (
                <SignUp
                    registerData={registerData}
                    setRegisterData={setRegisterData}
                    signUp={signUp}
                />
            )}

            <div className="pt-4">
                <button
                    className="btn_custom btn d-block  m-auto  bg-dark"
                    type="button"
                    onClick={() => setToggleForm(!toggleForm)}
                >
                    Toggle
                </button>
            </div>
        </div>
    );
}

export default Auth;
