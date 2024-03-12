# Tutorial5

* *Date Created*: 11 Mar 2024
* *Last Modification Date*: 11 Mar 2024
* *Tutorial URL*: https://csci-5709-tutorial-5-r5yo.onrender.com/
* *Git URL*: https://git.cs.dal.ca/gosaliya/csci5709-tutorials/-/tree/main/Tutorial5?ref_type=heads

# APIs
* Get : https://csci-5709-tutorial-5-r5yo.onrender.com/users
* Put : https://csci-5709-tutorial-5-r5yo.onrender.com/update/:id
* Post : https://csci-5709-tutorial-5-r5yo.onrender.com/add
* Get : https://csci-5709-tutorial-5-r5yo.onrender.com/user/:id

## Authors

[Dhrumil Gosaliya](dh411197@dal.ca) - (Developer)

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Installing
To Install npm
```
npm install
```

## Deployment

I've mirrored a GitLab repository to GitHub and deployed it on Render. After configuring the build settings on Render as needed, the website is now live at the specified URL.

Start build with 
```
node server.js
```

## Sources Used

### server.js

*Line 3*

```
const { v4: uuidv4 } = require('uuid');
```
The code above was created by adapting the code in [Generate and log unique request ID in Express.js](https://medium.com/@joshuagame/generate-and-log-unique-request-id-in-express-js-part-1-a7b11411a69) as shown below:

```

const ruid = require('express-ruid')
```

*Lines 16 - 23*

```
// get api to get list of all users
app.get('/users', (req, res) => {
    if (users.length === 0) {
        res.status(404).json({ message: "No users found", success: false });
    } else {
        res.json({ message: "Users retrieved", success: true, users: users });
    }
});
```

The code above was created by adapting the code in [EXPRESS ROUTES: URIS ARE REST RESOURCES](https://www.robinwieruch.de/node-express-server-rest-api/) as shown below:

```
app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});

```

*Line 34 - 45*

```
// put api to update value
app.put('/update/:id', (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        res.json({ message: "User updated", success: true });
    } else {
        res.status(404).json({ message: "User not found", success: false });
    }
});
```
The code above was created by adapting the code in [Simplifying Data Input in Express: An Overview of req.params, req.query, and req.body](https://visheshism.medium.com/simplifying-data-input-in-express-an-overview-of-req-params-req-query-and-req-body-179ab07b2256) as shown below:

```

app.post('/users', (req, res) => {
  const userData = req.body;
  // Perform operations using the userData
});
```

*Lines 58 - 61*

```
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error", success: false });
});
```

The code above was created by adapting the code in [Centralized Node.js Error-handlingS](https://www.toptal.com/nodejs/node-js-error-handling) as shown below:

```
try {
 userService.addNewUser(req.body).then((newUser: User) => {
   res.status(200).json(newUser);
 }).catch((error: Error) => {
   next(error)
 });
} catch (error) {
 next(error);
}
```

## Built With

[Node JS](https://nodejs.org/docs/latest/api/)
[Express JS](https://expressjs.com/en/starter/installing.html)
