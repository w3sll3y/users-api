/*
  Warnings:

  - Added the required column `createdBy` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "data_nasc" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "signo" TEXT NOT NULL,
    "mae" TEXT NOT NULL,
    "pai" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefone_fixo" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "peso" REAL NOT NULL,
    "tipo_sanguineo" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL
);
INSERT INTO "new_User" ("altura", "bairro", "celular", "cep", "cidade", "cor", "cpf", "data_nasc", "email", "endereco", "estado", "id", "idade", "mae", "nome", "numero", "pai", "peso", "rg", "senha", "sexo", "signo", "telefone_fixo", "tipo_sanguineo") SELECT "altura", "bairro", "celular", "cep", "cidade", "cor", "cpf", "data_nasc", "email", "endereco", "estado", "id", "idade", "mae", "nome", "numero", "pai", "peso", "rg", "senha", "sexo", "signo", "telefone_fixo", "tipo_sanguineo" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
