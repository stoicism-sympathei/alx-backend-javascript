const fs = require('fs').promises;

async function readDatabase(path) {
    let data;
    try {
        data = await fs.readFile(path, 'utf8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    const students = data
        .split('\r\n')
        .slice(1)
        .map((studentLine) => studentLine.split(','));

    const studentsByField = {
        CS: [],
        SWE: [],
    };

    for (const student of students) {
        if (student.length >= 4) {
            const firstName = student[0];
            const lastName = student[1];
            const age = student[2];
            const field = student[3];

            if (field === 'CS') {
                studentsByField.CS.push(firstName);
            } else if (field === 'SWE') {
                studentsByField.SWE.push(firstName);
            }
        }
    }

    return studentsByField;
}

module.exports = readDatabase;
