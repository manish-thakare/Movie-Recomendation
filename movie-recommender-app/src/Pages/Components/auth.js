import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/auth.css";
import Logo from "./images/Logo2.png";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle sign-in logic here
     
    };

    
    return (
        <div className="auth-container">
            <img src={Logo} className="logo" alt="" />
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) =>
        setConfirmPassword(e.target.value);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle sign-up logic here
        
    };
    
    return (
        <div className="auth-container">
            <img src={Logo} className="logo" alt="" />
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                <button type="submit">Sign Un</button>
            </form>
            <p>
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    );
};

export { SignIn, SignUp };
