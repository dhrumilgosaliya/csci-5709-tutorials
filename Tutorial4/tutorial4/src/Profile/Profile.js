import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Custom style
const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProfileCard = styled(Card)(({ theme }) => ({
  height: '100%',
}));

const CardMediaWrapper = styled(CardMedia)(({ theme }) => ({
  height: 200,
}));

const Profile = () => {
  // State variables-users data and search term
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetching users data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // API to fetch list of user
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Filtering users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler for search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    // Root container 
    <RootContainer maxWidth="md">
      <SearchTextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* Grid for user profiles */}
      <Grid container spacing={3}>
        {filteredUsers.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" align="center">
              User not in list
            </Typography>
          </Grid>
        ) : (
          // Display user profiles
          filteredUsers.map((user) => (
            <Grid item key={user._id} xs={12} sm={6} md={4}>
              {/* Link for individual profile */}
              <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }}>
                <ProfileCard>
                  <CardMediaWrapper
                    component="img"
                    image={user.picture}
                    alt={user.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {user.email}
                    </Typography>
                  </CardContent>
                </ProfileCard>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </RootContainer>
  );
};

export default Profile;
