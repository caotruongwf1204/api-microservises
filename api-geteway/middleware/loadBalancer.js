const loadBalancer = (servicePorts, currentPortIndex) => (req, res, next) => {
    const targetPort = servicePorts[currentPortIndex];
    currentPortIndex = (currentPortIndex + 1) % servicePorts.length;
    req.targetPort = targetPort;
    next();
};


module.exports = loadBalancer