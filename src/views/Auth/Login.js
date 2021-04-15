import React from 'react';
import './Login.css';

function Login({ setUserLoginData, userLoginData, login }) {
    return (
        <div>
            <div className="grid">
                <form className="form login" onSubmit={login}>
                    <div className="form__field">
                        <svg className="icon">
                            <use xlinkHref="#icon-user" />
                        </svg>
                        <span className="hidden">Email</span>

                        <input
                            autoComplete="username"
                            id="login__username"
                            type="text"
                            name="username"
                            className="form__input"
                            placeholder="Email"
                            required
                            onChange={(e) =>
                                setUserLoginData({
                                    ...userLoginData,
                                    email: e.target.value.split(' ').join('').toLowerCase(),
                                })
                            }
                        />
                    </div>

                    <div className="form__field">
                        <svg className="icon">
                            <use xlinkHref="#icon-lock" />
                        </svg>
                        <span className="hidden">Password</span>

                        <input
                            id="login__password"
                            type="password"
                            name="password"
                            className="form__input"
                            placeholder="Password"
                            required
                            onChange={(e) =>
                                setUserLoginData({
                                    ...userLoginData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form__field">
                        <input type="submit" value="Sign In" />
                    </div>
                </form>

                {/* <p className="text--center">
                    Not a member? <a href="#">Sign up now</a>{' '}
                    <svg className="icon">
                        <use xlinkHref="#icon-arrow-right" />
                    </svg>
                </p> */}
            </div>
        </div>
    );
}

export default Login;
