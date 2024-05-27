const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const loadBalancer = require('./middleware/loadBalancer')
const app = express();
const port = 3000;

const chatServicePorts = [3001, 3004, 3003];
const feedServicePorts = [3002, 3005, 3006];

let currentChatPortIndex = 0;
let currentFeedPortIndex = 0;

const chatLoadBalancer = loadBalancer(chatServicePorts, currentChatPortIndex);
const feedLoadBalancer = loadBalancer(feedServicePorts, currentFeedPortIndex);

app.use('/chat', chatLoadBalancer, createProxyMiddleware({
    target: 'http://localhost',
    router: (req) => `http://localhost:${req.targetPort}`,
    pathRewrite: {
        '^/chat': ''
    }
}));

app.use('/feed', feedLoadBalancer, createProxyMiddleware({
    target: 'http://localhost',
    router: (req) => `http://localhost:${req.targetPort}`,
    pathRewrite: {
        '^/feed': ''
    }
}));

app.listen(port, () => {
    console.log(`Dịch vụ API Geteway đang lắng nghe tại http://localhost:${port}`);
});
