module.exports = (req, res, next) => {
    // This middleware function is an example of how authentication middleware works
    // It checks if the user is authenticated before allowing access to routes
 
    // Example: Check if user is authenticated
    const isAuthenticated = true; // Example: You would implement your actual authentication logic here
 
    if (isAuthenticated) {
        // If authenticated, move to the next middleware or route handler
        next();
    } else {
        // If not authenticated, send a 401 Unauthorized status
        res.status(401).json({ error: 'Unauthorized' });
    }
};