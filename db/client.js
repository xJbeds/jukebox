import { Client } from 'pg'
const client = new Client(process.env.DATABASE_URL)
export default client;

//TESTING
//console.log(process.env.DATABASE_URL)
// client.connect()