import React from 'react';
import './Login.css';

function SignUp({ registerData, setRegisterData, signUp }) {
    return (
        <div>
            <div className="grid">
                <form className="form login" onSubmit={signUp}>
                    <div className="form__field">
                        <svg className="icon">
                            <use xlinkHref="#icon-user" />
                        </svg>
                        <span className="hidden">Full Name</span>

                        <input
                            autoComplete="username"
                            // id="login__username"
                            type="text"
                            name="Full Name"
                            className="form__input"
                            placeholder="Full Name"
                            required
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    fullName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form__field">
                        <svg className="icon">
                            <use xlinkHref="#icon-user" />
                        </svg>
                        <span className="hidden">Email</span>

                        <input
                            autoComplete="username"
                            id="login__username"
                            type="text"
                            name="email"
                            className="form__input"
                            placeholder="Email"
                            required
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    email: e.target.value.split(' ').join('').toLowerCase(),
                                })
                            }
                        />
                    </div>

                    <div className="form__field">
                        <svg className="icon">
                            <use xlinkHref="#icon-lock" />
                        </svg>
                        <span className="text-warning">
                            Min 8 With Special Char Also Capital And LowerCase
                        </span>

                        <input
                            id="login__password"
                            type="password"
                            name="password"
                            className="form__input mt-3"
                            placeholder="Password"
                            required
                            onChange={(e) =>
                                setRegisterData({
                                    ...registerData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form__field">
                        <input type="submit" value="Sign Up" />
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

export default SignUp;
