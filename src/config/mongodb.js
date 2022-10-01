import { MongoClient } from "mongodb";
import { env } from "./environment.js";

const uri = env.MONGODB_URI;
export const connectDB = async () => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  try {
    await client.connect();
    console.log("Connect Successfully");
    await listDatabases(client);
  } finally {
    await client.close();
  }
};

const listDatabases = async (client) => {
  const databaseList = await client.db().admin().listDatabases();
  databaseList.databases.forEach((database) =>
    console.log(`Your database - ${database.name}`)
  );
};
