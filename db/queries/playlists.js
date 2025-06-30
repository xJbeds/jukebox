import client from '../client.js'

export const createPlaylist = async(playlistName) => {
  const sql = `
  INSERT INTO playlists (name)
  VALUES ($1)
  RETURNING *
  `
  
  const { rows: [createdPlaylists] } = await client.query(sql, [playlistName])
  return createdPlaylists

}