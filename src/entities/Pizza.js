import { db } from '../config/database.js';
import { fail } from '../validation.js';


/*
.get() : récupérer une seule ligne.

.all() : récupérer plusieurs lignes.
.run() : exécuter une insertion, une modification ou une suppression.
 */
export function findAll() {
  return db.prepare('SELECT * FROM pizzas ORDER BY id').all();
}

export function findById(id) {
  const row = db.prepare(
      'SELECT * FROM pizzas WHERE id = ?'
  ).get(id);
  return row;
}

export function create(data) {
  const rows = db.prepare(
    'INSERT INTO pizzas (name,description,price,imageUrl) VALUES (?,?,?,?)'
  ).run(data.name,data.description,data.price,data.imageUrl);
  return rows;
}

export function update(id, data) {
  const rows = db.prepare(
      'UPDATE pizzas SET name = ?,description = ?,price = ?, imageUrl= ? WHERE id = ?'
  ).run(data.name,data.description,data.price,data.imageUrl,id);
  return rows;
}

export function remove(id) {
  const rows = db.prepare(
      'DELETE FROM pizzas WHERE id = ?'
  ).run(id);
  return rows;
}
