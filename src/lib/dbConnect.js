import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect = (next) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(next)
};

export default dbConnect

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
