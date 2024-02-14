import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clearing error when input changes
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, redirect to profile page
      navigate('/profile');
    } else {
      // Update errors state with validation errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.firstName.match(/^[a-zA-Z]+$/)) {
      errors.firstName = 'First name must contain only letters';
    }

    if (!values.lastName.match(/^[a-zA-Z]+$/)) {
      errors.lastName = 'Last name must contain only letters';
    }

    if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!isValidPassword(values.password)) {
      errors.password = 'Password must contain at least one letter, one number, and one special character';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    for (let key in formData) {
      if (formData[key] === '') {
        errors[key] = 'This field is required';
      }
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // Password must contain at least one letter, one number, and one special character
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  return (
    <Box className="registration-form" sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        First Name:
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          fullWidth
          margin="normal"
          required
        />
        Last Name:
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          fullWidth
          margin="normal"
          required
        />
        Email:
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          margin="normal"
          required
        />
        Password:
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          fullWidth
          margin="normal"
          required
        />
        Confirm Password:
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Box>

  );
};

export default RegistrationForm;
