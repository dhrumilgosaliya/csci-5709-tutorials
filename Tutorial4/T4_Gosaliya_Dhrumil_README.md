# Tutorial4

* *Date Created*: 18 Feb 2024
* *Last Modification Date*: 19 Feb 2024
* *Tutorial URL*: https://main--tutorial4-csci-5709.netlify.app/
* *Git URL*: https://git.cs.dal.ca/gosaliya/csci5709-tutorials/-/tree/main/Tutorial4?ref_type=heads

## Authors

[Dhrumil Gosaliya](dh411197@dal.ca) - (Developer)

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Installing
To Install npm
```
npm install
```

To start the server

```
npm start
```
## Deployment

I've mirrored a GitLab repository to GitHub and deployed it on Netlify. After configuring the build settings on Netlify as needed, the website is now live at the specified URL.

Before deploying, build your React app to create optimized production-ready files
```
npm run build
```

Start production build with 
```
npm run start
```

## Sources Used

### Login.js

*Lines 18 - 34*

```
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
```

The code above was created by adapting the code in [Using Axios POST](https://blog.logrocket.com/how-to-use-axios-post-requests/) as shown below:

```
const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
    axios.post("https://reqres.in/api/login", userData).then((response) => {
      console.log(response.status, response.data.token);
    });
  };

```

### Profile.js

*Line 31 - 43*

```
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
```

The code above was created by adapting the code in [Async await with try and Catch Get Api](https://medium.com/@biplavmazumdar5/async-await-with-try-and-catch-get-api-8df3a9d25a7b) as shown below:


```
useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

```

*Line 79*

```
<Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }}> 
```

The code above was created by adapting the code in [How to style your React-Router links using styled-components](https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350) as shown below:


```
<Link to="/" style={linkStyle}>
  Home
</Link>

```

### ProfileDetail.js
*Line 33-56*

```
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
```
The code above was created by adapting the code in [Typography](https://mui.com/material-ui/react-typography/) as shown below:

```
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
```


## Built With

[React](https://legacy.reactjs.org/docs/getting-started.html)
[React-Router](https://reactrouter.com/en/main/start/tutorial)
[Material-UI](https://mui.com/material-ui/api/box/)
