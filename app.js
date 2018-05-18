const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/FE", (request, response) => {
    queries.list().then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/FE/:id", (request, response) => {
    queries.read(request.params.id).then(item => {
        item
            ? response.json({item})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/FE", (request, response) => {
    queries.create(request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.delete("/FE/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/FE/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
