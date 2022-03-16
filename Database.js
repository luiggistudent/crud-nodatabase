const { readFile } = require('fs');
const { promisify } = require('util');
const readFileSync = promisify(readFile);


class Database {
    constructor() {
        this.fileName = './persons.json';
    }

    async getFileData() {
        const data = await readFileSync(this.fileName, { encoding: "utf8" });
        return JSON.parse(data.toString());
    }

    async showPerson(id) {
        const data = await this.getFileData();
        return data.filter(person => id ? person.id === id : true);
    }
}

module.exports = new Database();