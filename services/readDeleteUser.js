const fs = require('fs');

class readDeleteUser {
    constructor() {
        this.filePath = "users.json";
    }

    // Helper function to read users from JSON file
    readUsers() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading users:', err);
            return [];
        }
    }

    // Delete a user by ID
    deleteUser(id) {
        const users = this.readUsers();
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;

        const deletedUser = users.splice(userIndex, 1);
        this.writeUsers(users);
        return deletedUser[0];
    }
}

module.exports = readDeleteUser;
