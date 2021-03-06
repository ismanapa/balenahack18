const UserRole = require('./role');
const MY_SURVIVOR_COLOR = require('./colors');

class Player {
    constructor() {
        this.id = 1;
        this.position = {x: 0, y: 0}
        this.role = UserRole.survivor,
        this.color = MY_SURVIVOR_COLOR
    }
};

module.exports = Player;