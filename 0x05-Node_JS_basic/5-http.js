const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        // Replace 'students.csv' with the actual CSV file name
        const csvFileName = 'students.csv';
        
        // Replace 'database_name' with the actual database name
        const dbName = 'database_name';
        
        fs.readFile(csvFileName, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                const lines = data.split('\n');
                const validStudents = lines.filter(line => line.trim() !== '');

                res.end(`This is the list of our students:\n${validStudents.join('\n')}`);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
