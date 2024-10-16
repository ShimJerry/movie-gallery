import { MongoClient } from "mongodb";

const mongoClientSingleton = () => {
  const url = process.env.MONGODB_URI;
  if (url === undefined) {
    throw new Error("MongoDB URI is missing");
  }
  return new MongoClient(url).connect();
};

declare const globalThis: {
  mongoGlobal: ReturnType<typeof mongoClientSingleton>;
} & typeof global;

const mongo = globalThis.mongoGlobal ?? mongoClientSingleton();

export default mongo;

if (process.env.NODE_ENV !== "production") globalThis.mongoGlobal = mongo;
