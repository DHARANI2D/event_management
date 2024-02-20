import { useState } from 'react';
import '../assets/css/Signin.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [city, setCity] = useState('');
    const [usernameError, setUsernameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [passwordConfirmError, setPasswordConfirmError] = useState(true);
    const [isSignup, setIsSignup] = useState(true);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (event.target.value.length === 0 || event.target.value.length > 1 && event.target.value.length <= 6) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (event.target.value.length === 0) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
        if (event.target.value !== password) {
            setPasswordConfirmError(true);
        } else {
            setPasswordConfirmError(false);
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (usernameError || emailError || passwordError || passwordConfirmError) {
            // Handle error case
            return;
        } else {
            // Submit form
            console.log('Form submitted successfully!');
            // You can perform any additional actions here, like sending data to a server
        }
    };

    const handleSwitchForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="container">
            <section id="formHolder">
                <div className="row">
                    <div className="col-sm-6 brand">
                        <a href="#" className="logo">
                            <img src="event_front/src/assets/images/logo.png" alt="Logo" /></a>                      
                            <div className="heading">
                            <h2>EveBliss</h2>
                            <p>Your Right Choice</p>
                        </div>
                        <div className="success-msg">
                            <p>Great! You are one of our members now</p>
                            <a href="#" className="profile">Your Profile</a>
                        </div>
                    </div>
                    <div className="col-sm-6 form">
                        <div className={`form-peice ${isSignup ? 'signup' : 'login'}`}>
                            <form className={`${isSignup ? 'signup-form' : 'login-form'}`} onSubmit={handleSubmit}>
                                {isSignup && (
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" name="username" id="name" className="name" value={username} onChange={handleUsernameChange} />
                                        <span className="error">{usernameError && 'Please type your full name (at least 6 characters)'}</span>
                                    </div>
                                    
                                )}
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" name="email" id="email" className="email" value={email} onChange={handleEmailChange} />
                                    <span className="error">{emailError && 'Please type your email address'}</span>
                                </div>
                                {isSignup && (
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number - <small>Optional</small></label>
                                        <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="pass" value={password} onChange={handlePasswordChange} />
                                    <span className="error">{passwordError && 'Please type at least 8 characters'}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordCon">Confirm Password</label>
                                    <input type="password" name="passwordCon" id="passwordCon" className="passConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
                                    <span className="error">{passwordConfirmError && 'Passwords don\'t match'}</span>
                                </div>
                                {isSignup && (
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" id="city" value={city} onChange={handleCityChange} />
                                    </div>
                                )}
                                <div className="CTA">
                                    <input type="submit" value={`${isSignup ? 'Signup Now' : 'Login'}`} id="submit" />
                                    <a href="#" className="switch" onClick={handleSwitchForm}>{`${isSignup ? 'I have an account' : 'I\'m New'}`}</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignupForm;
