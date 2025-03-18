import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products ORDER BY created_at DESC`;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in getProducts", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct =
      await sql`INSERT INTO products (name, price, image) VALUES (${name}, ${price}, ${image}) RETURNING *`;

    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("Error in createProduct", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getProduct = async (req, res) => {};

export const updateProduct = async (req, res) => {};

export const deleteProduct = async (req, res) => {};
