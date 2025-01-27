const fs = require('fs');

class readWriteUser {
    constructor() {
        this.filePath = "users.json";
    }

    // Helper function to write users to JSON file
    writeUsers(users) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing users:', err);
        }
    }

    // Create a new user
    createUser(newUser) {
        const users = this.readUsers();
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);
        this.writeUsers(users);
        return newUser;
    }
}

module.exports = readWriteUser;
