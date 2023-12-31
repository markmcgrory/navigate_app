const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

  // GET ALL
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // GET ONE
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // DELETE
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(result => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // POST
  router.post("/", (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => {
        res.json(result.ops[0]);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // PUT
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    delete updatedData._id;

    collection
      .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
      .then(result => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // Return the router
  return router;
};

module.exports = createRouter;
