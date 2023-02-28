import { MongoClient, MongoClientOptions } from "mongodb";

const db_url =
  "mongodb+srv://abrxao:BzVvd3pBD3l7clpf@portfolio.ca5u4ya.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions);


export async function connect() {
    await client.connect();
    const db = client.db("portfolio");
    return {db, client}
};

