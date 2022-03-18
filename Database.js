const { readFileSync, writeFileSync } = require('fs');

class Database {
    constructor() {
        this.fileName = 'persons.json';
    }

    readFile() {
        const data = readFileSync(this.fileName, { encoding: 'utf8' });
        return JSON.parse(data);
    }

    writeFile(data) {
        writeFileSync(this.fileName, JSON.stringify(data, undefined, "  "));
    }

    showPerson(id) {
        const data = this.readFile();
        const person = data.find(person => person.id === id);
        return person;
    }

    createPerson(person) {
        const data = this.readFile();
        data.push(person);
        this.writeFile(data);
        return true;
    }

    updatePerson(id, dataObject) {
        const data = this.readFile();
        const index = data.findIndex(person => person.id === id);
        if (index === -1) throw Error("Person not found");
        data[index] = {
            ...data[index],
            ...dataObject
        }
        this.writeFile(data);
        return true;
    }

    deletePerson(id) {
        const data = this.readFile();
        if (!id) {
            data.splice(0);
            this.writeFile(data);
        }
        const index = data.findIndex(person => person.id === id);
        if (index === -1) throw Error("Person not found");
        data.splice(index, 1);
        this.writeFile(data);
        return true;
    }

}

module.exports = new Database();

