const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    const data = await students(process.argv[2]);
    const response = `
  This is the list of our students
  Number of students: ${data.students.length}
  Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}
  Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}
`;

    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // Export the Express app
