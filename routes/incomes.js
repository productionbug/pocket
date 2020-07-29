const express = require("express");
const { Router } = require("express");

const router = express.Router();

/**
 * GET REQUEST FOR FETCHING ALL THE INCOMES
 */
router.get("/incomes");

/**
 * GET REQUEST FOR FETCHING AN INDIVIDUAL INCOME
 */
router.get("/income:id");

/**
 * POST REQUEST FOR POSTING AN INDIVIDUAL INCOME
 */

router.post("/income");

/**
 * PUT REQUEST FOR UPDATING AN INDIVIDUAL INCOME INFORMATION
 */

router.put("/income:id");

/**
 * DELETE REQUEST FOR DELETING ALL INCOMES
 */
router.delete("/incomes");

/**
 * DELETE REQUEST FOR DELETING AN INDIVIDUAL INCOME
 */

router.delete("/income:id");
