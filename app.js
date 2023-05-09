const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const port = process.env.Port || 3000;

//* Parse // traducir
app.use(express.json());
//* To Parse req with urlencoded payload
app.use(express.urlencoded({ extended: false }));

//*ROUTES
app.use('/admin/users', require('./routers/userRouters'));
app.use('/admin/appointments', require('./routers/appoRouters'));
app.use('/auth/', require('./routers/authRouters'))

app.use((req, res, next) => {
    res.status(404).send("404", {
        titulo: 'error 404',
        parrafo: `Page not found`
    })
});

//* Listener
app.listen(port, () => {
    console.log(`Back-end connected from port ${port}`)
})