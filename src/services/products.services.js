import * as Model from "../models/products.model.js"

export const getAllProducts = async () => {
    return await Model.getAllProducts();
}


export const getProductById = async (id) => {
    return await Model.getProductById(id);
}

export const createProduct = async (data) => {
  try {
    return await Model.createProduct(data);
  } catch (error) {
    console.error("Error en el servicio al crear producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    return await Model.deleteProduct(id);
  } catch (error) {
    throw new Error("Error en el servicio al eliminar producto");
  }
};

export const updateProduct = async (id, data) => {
  try {
    return await Model.updateProduct(id, data);
  } catch (error) {
    throw new Error("Error en el servicio al actualizar producto");
  }
};