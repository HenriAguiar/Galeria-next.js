/*
  Warnings:

  - You are about to drop the column `imagem` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "imagem",
ADD COLUMN     "imagemCard" TEXT NOT NULL DEFAULT '';
