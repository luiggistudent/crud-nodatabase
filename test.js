const { deepEqual, ok} = require('assert');
const Database = require('./Database');

const example = {
    id: 1,
    name: "Beatriz Merlin",
    age: 22
};

describe("CRUD less Database", () => {
    it("Should show the person information by id", async () => {
        const expected = example;
        const [result] = await Database.showPerson(expected.id);
        deepEqual(result, expected);
    });
});

