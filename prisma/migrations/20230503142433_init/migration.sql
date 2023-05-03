-- CreateTable
CREATE TABLE "CachedResponse" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
