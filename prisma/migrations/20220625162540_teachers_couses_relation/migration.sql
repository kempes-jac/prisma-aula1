/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_teache]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_teache` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teache" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teache_key" ON "courses"("fk_id_teache");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teache_fkey" FOREIGN KEY ("fk_id_teache") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
