// server.js
import express from 'express'
import { createServer } from "http";
import { parse } from 'url';
import next from 'next'


const PORT = process.env.APP_PORT || 4000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

    const server = express();
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/a') {
            app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
            app.render(req, res, '/b', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on http://127.0.0.1:${PORT}`)
    })
})
