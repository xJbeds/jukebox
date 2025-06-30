import db from "#db/client";
import { Client } from "pg";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

const syncAndSeed = async () => {
  console.log('CONNECTING TO DB')
  await client.connect()
  console.log('SUCCESSFULLY CONNECTED TO DB')
}



syncAndSeed()