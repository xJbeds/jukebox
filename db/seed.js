import db from "#db/client";
import { Client } from "pg";
import { createPlaylists } from "./queries/playlists.js"
import { createTracks } from "./queries/tracks.js"
import { createPlaylists_Tracks } from "./queries/playlists_tracks.js";


const syncAndSeed = async () => {
  console.log('CONNECTING TO DB')
  await client.connect()
  console.log('SUCCESSFULLY CONNECTED TO DB')

  console.log('CREATING PLAYLISTS')
  console.log('PLAYLISTS SUCCESSFULLY CREATED')

  console.log('CREATING TRACKS')
  console.log('SUCCESSFULLY CREATED TRACKS')

  console.log('CREATING PLAYLISTS_TRACKS')
  console.log('SUCCESFULLY CREATED PLAYLISTS_TRACKS')

  console.log('DISCONNECTING FROM DB')
  await client.end()
  console.log('SUCCESFULLYU DISCONNECTED FROM DB')
}

syncAndSeed()