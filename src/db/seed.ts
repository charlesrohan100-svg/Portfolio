// src/db/seed.ts
import { client, db } from "./index";
import { projects } from "./schema";

async function main() {
  console.log("Seeding projects...");

  await db
    .insert(projects)
    .values([
      {
        slug: "wallistry",
        title: "WALLISTRY",
        description:
          "Bold typography, instant exports, infinite remixes. Build posters that stop the scroll.",
        imageUrl: "/projects/project-wallistry.jpg",
        liveUrl: "https://project-poster-site.vercel.app/",
        displayOrder: 1,
      },
      {
        slug: "streetbite",
        title: "STREETBITE",
        description:
          "Smashed burgers, loaded tots, street wraps and thick shakes — made fresh, served fast, parked somewhere near you.",
        imageUrl: "/projects/project-streetbite.jpg",
        liveUrl: "https://street-bite-dun.vercel.app/",
        displayOrder: 2,
      },
      {
        slug: "tideshift",
        title: "TIDESHIFT",
        description: "Ocean Safety · Turning the tide on ocean plastic.",
        imageUrl: "/projects/project-tideshift.jpg",
        liveUrl: "https://tideshift-blog.vercel.app/#top",
        displayOrder: 3,
      },
    ])
    .onConflictDoNothing();

  console.log("Done. Hanging up the connection...");
  await client.end();
}

main().catch(async (err) => {
  console.error(err);
  await client.end();
  process.exit(1);
});
