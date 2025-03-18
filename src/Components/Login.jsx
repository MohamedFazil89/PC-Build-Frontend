import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/Login', { email, password });
            console.log(response.data);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="login-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="login-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Sign In</button>
                <Link to="/signup">SignUp</Link>

            </form>
        </div>
    );
}

export default Login;
