import client from '../client.js'

export const createTracks = async(trackName) => {
  const sql = `
  INSERT INTO tracks (name)
  VALUES ($1)
  RETURNING *
  `

  const { rows: [ createdTracks ] } = await client.query(sql, [trackName])
  return createdTracks

}