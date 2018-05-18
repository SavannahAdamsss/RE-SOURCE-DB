const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// GETTTTTTTTT //
app.get("/fe", (request, response) => {
    queries.list().then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/be", (request, response) => {
    queries.list().then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/servers", (request, response) => {
    queries.list().then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/libraries", (request, response) => {
  queries.list().then(item => {
    response.json({item});
  }).catch(console.error);
});

app.get("/fe/:id", (request, response) => {
    queries.read(request.params.id).then(item => {
        item
            ? response.json({item})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.get("/be/:id", (request, response) => {
  queries.read(request.params.id).then(item => {
    item
    ? response.json({item})
    : response.sendStatus(404)
  }).catch(console.error);
});

app.get("/servers/:id", (request, response) => {
  queries.read(request.params.id).then(item => {
    item
    ? response.json({item})
    : response.sendStatus(404)
  }).catch(console.error);
});

app.get("/libraries/:id", (request, response) => {
    queries.read(request.params.id).then(item => {
        item
            ? response.json({item})
            : response.sendStatus(404)
    }).catch(console.error);
});

// POSTTTTTTTTT

app.post("/fe", (request, response) => {
    queries.create(request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.post("/be", (request, response) => {
    queries.create(request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.post("/servers", (request, response) => {
    queries.create(request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.post("/libraries", (request, response) => {
    queries.create(request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

// DELETEEEEE//

app.delete("/fe/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/be/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/servers/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/libraries/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

// PUT //

app.put("/fe/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.put("/be/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.put("/servers/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.put("/libraries/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

// USE //

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
