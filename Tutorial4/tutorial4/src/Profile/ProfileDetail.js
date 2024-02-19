import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ProfileDetail = () => {
  // Get the user ID
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // fetch user data 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // API for user detail
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  // loading message 
  if (!user) {
    return <div>Loading...</div>;
  }

  // Render user profile details
  return (
    <Container maxWidth="md">
      <Typography variant="h2">User Profile</Typography>
      <Typography variant="h4">Name: {user.name}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Age: {user.age}</Typography>
      <Typography variant="body1">Eye Color: {user.eyeColor}</Typography>
      <Typography variant="body1">Gender: {user.gender}</Typography>
      <Typography variant="body1">Company: {user.company}</Typography>
      <Typography variant="body1">Phone: {user.phone}</Typography>
      <Typography variant="body1">Address: {user.address}</Typography>
      <Typography variant="body1">About: {user.about}</Typography>
      <Typography variant="body1">Registered: {user.registered}</Typography>
      <Typography variant="body1">Favorite Fruit: {user.favoriteFruit}</Typography>
      <Typography variant="h4">Friends</Typography>
      <List>
        {user.friends.map((friend) => (
          <ListItem key={friend.id}>
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">Greeting: {user.greeting}</Typography>
      <Typography variant="body1">Tags: {user.tags.join(', ')}</Typography>
    </Container>
  );
};

export default ProfileDetail;
