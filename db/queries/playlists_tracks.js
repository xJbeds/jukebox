import client from '../client.js'

export const createPlaylist_Tracks = async (playlistId, trackId) => {
  const sql = `
  INSERT INTO playlists_tracks (playlistId, trackId)
  VALUES ($1, $2)
  RETURNING *
  `

  const { rows: [createdPlaylist_Tracks] } = await client.query(sql, [playlistId, trackId])
  return createdPlaylist_Tracks
}

