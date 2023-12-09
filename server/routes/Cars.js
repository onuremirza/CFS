const express = require("express");
const router = express.Router();
const { Cars } = require("../models");

router.get("/", async (req, res) => {
  const listOfCars = await Cars.findAll();
  res.json(listOfCars);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const Car = await Cars.findByPk(id);
  res.json(Car);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Cars.create(post);
  res.json(post);
});

router.delete("/byId/:deleteId", async (req, res) => {
  const deleteId = req.params.deleteId;
  const result = await Cars.destroy({ where: { id: deleteId } });
  res.json(result);
});
router.post("/saled/byId/:id", async (req, res) => {
  const response = req.params.id;
  await Cars.update({ saled: 1 }, { where: { id: response } });
  console.log("Updated.");
});

module.exports = router;
