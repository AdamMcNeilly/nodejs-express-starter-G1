const fs = require('fs');

class UserService {
    constructor() {
        this.filePath = "users.json";
    }

    createUser(newUser) {
        const users = this.readUsers();
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);
        this.writeUsers(users);
        return newUser;
    }
}

// Create a new user submit
router.post('/add', (req, res) => {
    const newUser = req.body;
    const createdUser = userService.createUser(newUser);
    res.redirect('/users/' + createdUser.id)
  });

module.exports = UserService;