import express from "express";
import Crypto from "../models/cryptoModel.js";
import Joi from "joi";
const router = express.Router();

const schemaCrypto = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string().min(3).max(255).required(),
  date: Joi.date().required(),
  price: Joi.string().min(3).required(),
  curent_price: Joi.string().min(3).required(),
});

router
  .get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const crypto = await Crypto.getOneById(id);

      res.json(crypto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  .get("/", async (req, res) => {
    try {
      const crypto = await Crypto.getAll();

      res.json(crypto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  .put("/:id", async (req, res) => {
    const crypto = {
      id: req.params.id,
      title: req.body.title,
      date: req.body.date,
      price: req.body.price,
      curent_price: req.body.curent_price,
    };

    try {
      const { error, value } = await schemaCrypto.validate(crypto);
      const cryptoUpdate = await Crypto.updateCrypto(value);
      if (cryptoUpdate) res.json(crypto);
      else res.status(422).json({ message: error.message });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })

  .post("/", async (req, res) => {
    const crypto = {
      title: req.body.title,
      date: req.body.date,
      price: req.body.price,
      curent_price: req.body.curent_price,
    };

    try {
      const { error, value } = await schemaCrypto.validate(crypto);
      const cryptoCreate = await Crypto.createNew(value);
      if (cryptoCreate) {
        const newCrypto = await Crypto.getOneById(cryptoCreate);
        res.json(newCrypto);
      } else res.status(422).json({ message: error.message });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })

  .delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const cryptoDelete = await Crypto.deleteById(id);
      if (cryptoDelete) {
        res.json(`La crypto ${id} a bien été effacée`);
      } else {
        res.status(422).json(`Une erreur est survenue lors de la suppression`);
      }
    } catch (error) {
      res.status(500).json(`Erreur serveur`);
    }
    return res.status(201).end();
  });

export default router;
