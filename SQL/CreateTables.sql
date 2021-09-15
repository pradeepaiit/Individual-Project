DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS ratings;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    lastname VARCHAR(200) NOT NULL,
    firstname VARCHAR(200) NOT NULL,
    email_address VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  movie_id INTEGER NOT NULL,
  rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 10),
  user_id INTEGER REFERENCES users (id),
  date_created TIMESTAMPTZ DEFAULT NOW(),
  date_updated TIMESTAMPTZ DEFAULT NOW()
);