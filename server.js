/* eslint-disable no-console, arrow-parens */
const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const PORT = 8083;

app.prepare()
    .then(() => {
        console.info(`> Listening on http://localhost:${PORT}`);
        express()
            .use(handler)
            .listen(PORT);
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });

/* eslint-enable no-console, arrow-parens */
