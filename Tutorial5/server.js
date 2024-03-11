const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

// sample user data
let users = [
    { id: "5abf6783", email: "abc@abc.ca", firstName: "ABC" },
    { id: "5abf674563", email: "xyz@xyz.ca", firstName: "XYZ" } 
];

app.use(bodyParser.json());

// get api to get list of all users
app.get('/users', (req, res) => {
    if (users.length === 0) {
        res.status(404).json({ message: "No users found", success: false });
    } else {
        res.json({ message: "Users retrieved", success: true, users: users });
    }
});

// post api to add a new user
app.post('/add', (req, res) => {
    const newUser = req.body;
    newUser.id = uuidv4(); // create a random id for the new user
    users.push(newUser);
    res.json({ message: "User added", success: true });
});

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

// get api to get details of specific user
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json({ success: true, user: user });
    } else {
        res.status(404).json({ message: "User not found", success: false });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error", success: false });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
