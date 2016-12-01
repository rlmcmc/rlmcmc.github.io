DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE parks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE,
  description VARCHAR(255),
  user_id INTEGER REFERENCES users
);


