const app = require('express')();
const port = 3000;
app.get('/', (req, res) => res.send('Hello world on Azure!'));
app.listen(port, () => console.log(`Server running on port ${port}`));