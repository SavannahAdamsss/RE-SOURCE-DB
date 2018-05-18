const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(bodyParser.json());
app.use(cors());

// GET //
app.get("/fe", (request, response) => {
    queries.list("fe").then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/be", (request, response) => {
    queries.list("be").then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/servers", (request, response) => {
    queries.list("servers").then(item => {
        response.json({item});
    }).catch(console.error);
});

app.get("/libraries", (request, response) => {
  queries.list("libraries").then(item => {
    response.json({item});
  }).catch(console.error);
});

app.get("/fe/:id", (request, response) => {
    queries.read("fe", request.params.id).then(item => {
        item
            ? response.json({item})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.get("/be/:id", (request, response) => {
  queries.read("be", request.params.id).then(item => {
    item
    ? response.json({item})
    : response.sendStatus(404)
  }).catch(console.error);
});

app.get("/servers/:id", (request, response) => {
  queries.read("servers", request.params.id).then(item => {
    item
    ? response.json({item})
    : response.sendStatus(404)
  }).catch(console.error);
});

app.get("/libraries/:id", (request, response) => {
    queries.read("libraries", request.params.id).then(item => {
        item
            ? response.json({item})
            : response.sendStatus(404)
    }).catch(console.error);
});

// POST //

app.post("/fe", (request, response) => {
    queries.create("fe", request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.post("/be", (request, response) => {
    queries.create("be", request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.post("/servers", (request, response) => {
    queries.create("servers", request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

app.post("/libraries", (request, response) => {
    queries.create("libraries", request.body).then(item => {
        response.status(201).json({item});
    }).catch(console.error);
});

// DELETE //

app.delete("/fe/:id", (request, response) => {
    queries.delete("fe", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/be/:id", (request, response) => {
    queries.delete("be", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/servers/:id", (request, response) => {
    queries.delete("servers", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/libraries/:id", (request, response) => {
    queries.delete("libraries", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

// PUT //

app.put("/fe/:id", (request, response) => {
    queries.update("fe", request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.put("/be/:id", (request, response) => {
    queries.update("be", request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.put("/servers/:id", (request, response) => {
    queries.update("servers", request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

app.put("/libraries/:id", (request, response) => {
    queries.update("libraries", request.params.id, request.body).then(item => {
        response.json({item});
    }).catch(console.error);
});

// USE //

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
