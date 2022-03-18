const { deepEqual } = require('assert');
const Database = require('./Database');

const expected = {
    id: 6504,
    name: "Rafaela"
};

describe("No Database Crud in Node.js", () => {
    before(() => {
        Database.createPerson(expected);
        Database.createPerson({
            id: 5,
            name: "Baby"
        })
    });

    it("Should show the person by id", () => {
        const result = Database.showPerson(6504);
        deepEqual(result, expected);
    });

    it("Should create a person", () => {
        const result = Database.createPerson({ id: 333, name: "Yuu" });
        deepEqual(result, true);
    });

    it("Should update a person", () => {
        const result = Database.updatePerson(6504, { name: "Carlinha" });
        deepEqual(result, true);
    });

    it("Should delete a person", () => {
        const result = Database.deletePerson(5);
        deepEqual(result, true);
    });
});