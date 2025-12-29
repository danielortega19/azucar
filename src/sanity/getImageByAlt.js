import { client } from "./sanityClient";

export async function getEventImages() {
  try {
    const data = await client.fetch(`
      *[_type == "event"][0]{
        gallery[]{
          alt,
          "url": asset->url
        }
      }
    `);

    if (!data || !data.gallery) {
      return [];
    }

    return data.gallery;
  } catch (err) {
    console.error("Sanity getEventImages error:", err.message || err);
    if (err.response && err.response.body) {
      console.error("Sanity response body:", err.response.body);
    }
    return [];
  }
}
