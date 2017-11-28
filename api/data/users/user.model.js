class User {
    constructor(nickname, password, email, phone, country) {
        this.nickname = nickname;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.country = country;
    }
}

module.exports = { User };
