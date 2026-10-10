const express = require("express");
const { getAll } = require("../controllers/crudFactory");

// Builds a read-only REST router for a given Mongoose model:
//   GET /  -> public, list all
// Content is managed through backend/seed/seed.js (npm run seed).
function buildResourceRouter(Model, sortField = "order") {
  const router = express.Router();
  router.get("/", getAll(Model, sortField));
  return router;
}

module.exports = buildResourceRouter;
