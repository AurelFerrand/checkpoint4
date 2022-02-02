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
const createNew = (crypto) => {
  const { title, price, date, curent_price } = crypto;
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "INSERT INTO game (title, price, date, curent_price) VALUES (?,?,?,?)",
      [title, price, date, curent_price],
      (err, result) => {
        if (err) reject(err);
        else resolve(result.insertId);
      }
    );
  });
};

// UPDATE
const updateGame = (crypto) => {
  const { title, price, date, curent_price, id } = crypto;
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "UPDATE game SET title = ?, price = ?, date = ?, curent_price =? WHERE id = ?",
      [title, price, date, curent_price, id],
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