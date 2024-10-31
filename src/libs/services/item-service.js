const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cria um novo item
async function createItem(data) {
  try {
    const newItem = await prisma.item.create({
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        imagem: data.imagem,
        categoria: data.categoria,
      },
    });
    return newItem;
  } catch (error) {
    console.error('Erro ao criar item:', error);
    throw error;
  }
}

// Obtém todos os itens
async function getAllItems() {
  try {
    const items = await prisma.item.findMany();
    console.log(items)
    return items;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    throw error;
  }
}

// Obtém um item por ID
async function getItemById(id) {
  try {
    const item = await prisma.item.findUnique({
      where: { id: Number(id) },
    });
    return item;
  } catch (error) {
    console.error('Erro ao buscar item por ID:', error);
    throw error;
  }
}

// Atualiza um item por ID
async function updateItem(id, data) {
  try {
    const updatedItem = await prisma.item.update({
      where: { id: Number(id) },
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        imagem: data.imagem,
        categoria: data.categoria,
      },
    });
    return updatedItem;
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
    throw error;
  }
}

// Deleta um item por ID
async function deleteItem(id) {
  try {
    const deletedItem = await prisma.item.delete({
      where: { id: Number(id) },
    });
    return deletedItem;
  } catch (error) {
    console.error('Erro ao deletar item:', error);
    throw error;
  }
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};