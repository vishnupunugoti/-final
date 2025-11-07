const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Recipe = require('../models/Recipe');
const Review = require('../models/Review');

// Load environment variables from parent directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const deleteAllRecipes = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/spicetrail', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Delete all reviews first (to maintain referential integrity)
    const reviewsDeleted = await Review.deleteMany({});
    console.log(`${reviewsDeleted.deletedCount} reviews deleted`);

    // Delete all recipes
    const recipesDeleted = await Recipe.deleteMany({});
    console.log(`${recipesDeleted.deletedCount} recipes deleted successfully!`);

    console.log('\nAll recipes and their reviews have been removed from the database.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error deleting recipes:', error);
    process.exit(1);
  }
};

deleteAllRecipes();
