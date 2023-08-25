const fs = require('fs').promises;

async function readDatabase(path) {
    let data;
    try {
        data = await fs.readFile(path, 'utf8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }
    // Parsing logic
    return parsedData;
}

module.exports = readDatabase;
