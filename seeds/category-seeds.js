// require the Category model from models folder
const { Category } = require('../models');
// create variable to list the bullk data
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
// function variable to bulk create using data from categoryData implementing into the Category model. 
const seedCategories = () => Category.bulkCreate(categoryData);
// expoert seedCategories module
module.exports = seedCategories;
