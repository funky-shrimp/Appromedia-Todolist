CREATE DATABASE IF NOT EXISTS todolist;

\c todolist

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  completed boolean
);

INSERT INTO tasks (name, completed) VALUES
  ('Seed', TRUE);