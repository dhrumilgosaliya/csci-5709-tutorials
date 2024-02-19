import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid } from '@material-ui/core';

const Login = () => {
    // hook for navigation
    const navigate = useNavigate();
    // State variables for email, password, and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // login credentials api check
            const response = await axios.post('https://express-t4.onrender.com/api/login', {
                username: email,
                password: password
            });
            // navigate to other page
            navigate('/profilelist');
            // login successful
            console.log('Login successful:', response.data);
            
        } catch (error) {
            // Handling login error
            console.error('Login error:', error);
            // error message for invalid login
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <Container maxWidth="xs">
            <div style={{ marginTop: '100px' }}>
                {/* Login form */}
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Email:
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            Password:
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: '20px' }}
                    >
                        Login
                    </Button>
                </form>
                {errorMessage && (
                    <Typography variant="body1" color="error" align="center" style={{ marginTop: '20px' }}>
                        {errorMessage}
                    </Typography>
                )}
            </div>
        </Container>
    );
};

export default Login;
