import client from '../client.js'

export const createPlaylist_Tracks = async () => {
  const sql = `
  INSERT INTO
  VALUES
  RETURNING *
  `

  const { rows: [createdPlaylist_Tracks] } = await client.query(sql, [])
  return createdPlaylist_Tracks
}

