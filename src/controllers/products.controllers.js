import * as Service from "../services/products.services.js";

export const getAllProducts = async (req, res) => {
  const products = await Service.getAllProducts();
  res.json(products);
};

export const searchProducts = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'El nombre es requerido' });
  }

  const products = await Service.getAllProducts();

  const productsFiltered = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (productsFiltered.length === 0) {
    return res.status(404).json({ error: "No se encontraron productos" });
  }

  res.json(productsFiltered);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Service.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "No existe el producto" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const requiredFields = ['name', 'price', 'categories'];

    const missingFields = requiredFields.filter(field => {
      const value = req.body[field];
      return value === undefined || value === null || value === '';
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Faltan campos obligatorios: ${missingFields.join(', ')}`
      });
    }

    if (typeof req.body.price !== 'number' || req.body.price < 0) {
      return res.status(400).json({ message: 'Precio inválido' });
    }

    if (!Array.isArray(req.body.categories)) {
      return res.status(400).json({ message: 'Categories debe ser un array' });
    }

    await Service.createProduct(req.body);

    res.status(201).json({ message: 'Producto creado exitosamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Service.deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ message: `Producto con ID ${id} eliminado correctamente` });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar un producto" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await Service.updateProduct(id, data);

    if (!updated) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({
      message: "Producto actualizado correctamente",
      ...updated
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
};
