DROP TABLE IF EXISTS playlist_tracks
DROP TABLE IF EXISTS playlists
DROP TABLE IF EXISTS tracks

CREATE TABLE playlist_tracks (
id SERIAL PRIMARY KEY,
playlist_id INTEGER NOT NULL REFERENCES tracks(id),
track_id INTEGER NOT NULL REFERENCES playlists(id)
)

CREATE TABLE playlists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
)

CREATE TABLE tracks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  duration_ms INTEGER NOT NULL
)
