import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0h9p0q4t", // 👈 from sanity.config / manage.sanity.io
  dataset: "production", // or whatever dataset you chose
  apiVersion: "2024-01-01", // any recent date
  useCdn: true, // `true` for faster, cached reads
});
