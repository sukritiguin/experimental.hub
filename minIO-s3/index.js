import dotenv from "dotenv";
import { Client } from "minio"; // Correct import statement

// Load environment variables
dotenv.config();

// MinIO client configuration
const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT, 10),
  useSSL: false, // Set to `true` if using HTTPS
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

// Example: List buckets
(async () => {
  try {
    const buckets = await minioClient.listBuckets();
    console.log("Buckets:", buckets);
  } catch (err) {
    console.error("Error listing buckets:", err);
  }
})();
