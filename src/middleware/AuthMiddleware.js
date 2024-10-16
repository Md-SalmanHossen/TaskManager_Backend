const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Retrieve the token from the request headers
    let token = req.headers['token'];
    
    // Check if the token is provided
    if (!token) {
        return res.status(401).json({ status: "unauthorized", message: "Token not provided" });
    }

    // Verify the token
    jwt.verify(token, '1234-xyz', (err, decodedData) => {
        if (err) {
            return res.status(401).json({ status: "unauthorized", message: "Invalid token" });
        } else {
            // Attach email to the request object
            req.email = decodedData['data'];
            next();
        }
    });
};
