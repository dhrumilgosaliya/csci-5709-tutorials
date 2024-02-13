# Tutorial3

* *Date Created*: 11 Feb 2024
* *Last Modification Date*: 13 Feb 2024
* *Tutorial URL*: 
* *Git URL*: 

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

### RegistrationForm.js

*Lines 80 - 157*

```
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

```

The code above was created by adapting the code in [Material UI - React-Text-Field](https://mui.com/material-ui/react-text-field/) as shown below:

```
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
}

```

*Line 70*

```
return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
```

The code above was created by using tool [Password Regex](https://gist.github.com/frizbee/5318c77d2084fa75cd00ea131399581a) for creating regular expression for email address:


```
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
```
- The code in [Password Regex](https://gist.github.com/frizbee/5318c77d2084fa75cd00ea131399581a) was implemented by including in it the regex pattern in the password validaiton.
- [Password Regex](https://gist.github.com/frizbee/5318c77d2084fa75cd00ea131399581a)'s Code was used because it is optimized regex pattern compared to my implementation.
- [Password Regex](https://gist.github.com/frizbee/5318c77d2084fa75cd00ea131399581a)'s Code was used without changes as it satisfy required validation.

## Built With

[React](https://legacy.reactjs.org/docs/getting-started.html)
[React-Router](https://reactrouter.com/en/main/start/tutorial)
[Material-UI](https://mui.com/material-ui/api/box/)
