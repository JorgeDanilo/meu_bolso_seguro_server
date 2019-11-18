function User() {
}

User.prototype.setName = function(name) {
    this.name = name;
};

User.prototype.setPassword = function(password) {
    this.password = password;
};

User.prototype.getName = function() {
    return this.name;
};

User.prototype.getPassword = function() {
    return this.password;
};

User.prototype.getUser = function() {
    return {'name': this.name, 'password': this.password};
}

var user = new User();

module.exports = user;