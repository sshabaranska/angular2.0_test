/**
 * Import dependencies
 */
import mongoose from 'mongoose'; // Wrapper for interacting with MongoDB

/**
 * Configure database
 */
// Connect to database
// mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/angular2proj'); // Connects to your MongoDB.  Make sure mongod is running!
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
