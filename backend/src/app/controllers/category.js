const sql = require("../../config/db");

const getCategories = async (req, res) => {
  try {
    const categories = await sql`select distinct category from menu`;
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error 500");
  }
};

const getItemsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const item =
      await sql`select name, description, price from menu where category like ${category}`;
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error 500");
  }
};

module.exports = { getItemsByCategory,getCategories };
