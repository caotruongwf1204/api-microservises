const express = require("express");

const ports = [3002, 3005, 3006];

const createFeedService = (port) => {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello from Chat Feed Instance on port ${port}`);
  });

  app.listen(port, () => {
    console.log(`Feed service instance listening at http://localhost:${port}`);
  });
};

ports.forEach((port) => {
  createFeedService(port);
});
