const express = require('express');
const studentsModule = require('./3-read_file_async'); // Make sure the module path is correct
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await studentsModule(process.argv[2]); // Make sure to pass the correct database name
    const response = `This is the list of our students\n` +
      `Number of students: ${data.students.length}\n` +
      `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n` +
      `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`;
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
