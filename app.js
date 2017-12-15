const app = require('express')();
const port = normalizePort(process.env.PORT || '3000');
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
app.set('port', port);
app.get('/', (req, res) => res.send('Hello world on Azure!'));
app.listen(port, () => console.log(`Server running on port ${port}`));