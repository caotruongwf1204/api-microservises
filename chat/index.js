const express = require('express');

const ports = [3001, 3004, 3003];

const createChatService = (port) => {
    const app = express();
    
    app.get('/', (req, res) => {
        res.send(`Hello from Chat Service Instance on port ${port}`);
    });
    
    app.listen(port, () => {
        console.log(`Chat service instance listening at http://localhost:${port}`);
    });
};


ports.forEach(port => {
    createChatService(port);
});
