import React from 'react';
import { Box, Typography } from '@mui/material';

const Profile = () => {
  const profileData = {
    firstName: 'Dhrumil',
    lastName: 'Gosaliya',
    email: 'dhrumil.gosaliya@dal.ca'
  };

  return (
    <Box className="profile" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h2" gutterBottom>
        Profile
      </Typography>
      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="subtitle1">
          <strong>First Name:</strong> {profileData.firstName}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="subtitle1">
          <strong>Last Name:</strong> {profileData.lastName}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">
          <strong>Email:</strong> {profileData.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
