DROP TABLE IF EXISTS movie;
CREATE TABLE IF NOT EXISTS movie(
    id SERIAL PRIMARY KEY,
   moviename VARCHAR(255),
    overview varchar(255),
    comment VARCHAR(255)
);