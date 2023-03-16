/*
  Warnings:

  - Added the required column `class` to the `pompom_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `pompom_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `old` to the `pompom_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pompom_users" ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "old" INTEGER NOT NULL;
