import { MongoClient, MongoClientOptions } from "mongodb";

const db_url = process.env.DATABASE_URL as string;

const client = new MongoClient(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions);


export async function connect() {
    await client.connect();
    const db = client.db("portfolio");
    return {db, client}
};
