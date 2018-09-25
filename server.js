const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    app.render(req, res, "/index", { simple: "false" });
  });

  server.get("/simple", (req, res) => {
    //console.log(req.query);
    app.render(req, res, "/simple", { simple: "true" });
  });

  //   server.get("*", (req, res) => {
  //     return handle(req, res);
  //   });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
