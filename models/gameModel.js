import dbConnect from "../config/db-config.js";

// READ ONE
const getOneById = (id) => {
  return new Promise((resolve, reject) => {
    dbConnect.query("SELECT * FROM game WHERE id = ?", id, (err, result) => {
      if (err) reject(err);
      else resolve(result[0]);
    });
  });
};

// READ ALL
const getAll = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query("SELECT * FROM game", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

// CREATE
const createNew = (game) => {
  const { name, slug_id } = game;
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "INSERT INTO game (name, slug_id ) VALUES (?, ?)",
      [name, slug_id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result.insertId);
      }
    );
  });
};

// UPDATE
const updateGame = (game) => {
  const { name, slug_id, id } = game;
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "UPDATE game SET name = ?, slug_id = ? WHERE id = ?",
      [name, slug_id, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};
// DELETE
const deleteById = (id) => {
  return new Promise((resolve, reject) => {
    dbConnect.query("DELETE FROM game WHERE id = ?", id, (err, result) => {
      if (err) reject(err);
      else resolve(result.affectedRows);
    });
  });
};

export default { getAll, getOneById, deleteById, createNew, updateGame };
