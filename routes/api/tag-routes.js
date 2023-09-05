const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagD = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    if (!tagD) {
      res.status(404).json({ message: "There is no tag with this id" });
      return;
    }
    res.status(200).json(tagD);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagD = await Tag.create(req.body);
    res.status(200).json(tagD);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagD = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!tagD) {
      res.status(404).json({ message: "There is not tag with that id" });
      return;
    }
    res.status(200).json(tagD);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagD = Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagD) {
      res.status(404).json({ message: "There is not tag with that id" });
      return;
    }
    res.status(200).json(tagD);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
