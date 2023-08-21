const http = require('http');
const readStudentsData = require('./3-read_file_async');
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentsData = await readStudentsData(process.argv[2]);
      const csStudents = studentsData.csStudents.join(', ');
      const sweStudents = studentsData.sweStudents.join(', ');

      const response = [
        'This is the list of our students',
        `Number of students: ${studentsData.students.length}`,
        `Number of students in CS: ${csStudents.length}. List: ${csStudents}`,
        `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents}`
      ].join('\n');

      res.end(response);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
