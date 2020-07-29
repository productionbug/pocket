const express = require("express");

const router = express.Router();

/**
 * GET REQUEST FOR FETCHING ALL THE EXPENSES
 */
router.get("/expenses");

/**
 * GET REQUEST FOR FETCHING AN INDIVIDUAL EXPENSE
 */
router.get("/expense:id");

/**
 * POST REQUEST FOR POSTING AN INDIVIDUAL EXPENSE
 */

router.post("/expense");

/**
 * PUT REQUEST FOR UPDATING AN INDIVIDUAL EXPENSE INFORMATION
 */

router.put("/expense:id");

/**
 * DELETE REQUEST FOR DELETING ALL EXPENSES
 */
router.delete("/expenses");

/**
 * DELETE REQUEST FOR DELETING AN INDIVIDUAL EXPENSE
 */

router.delete("/expense:id");
