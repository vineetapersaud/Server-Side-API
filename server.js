const express = require('express');
const app = express();
const PORT = 3000;
// Built-in middleware to parse JSON bodies
app.use(express.json());
// Basic root route
app.get('/', (req, res) => {
res.send({ message: 'Welcome to our Express API!' });
});
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});