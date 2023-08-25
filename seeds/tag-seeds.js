// require the Tag model from models folder
const { Tag } = require('../models');
// list seeds in variable array
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];
// create function seedTags to bulk create seed data from tagData using the Tag model
const seedTags = () => Tag.bulkCreate(tagData);
// export function module
module.exports = seedTags;
