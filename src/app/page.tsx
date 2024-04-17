import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/5aec52d8-05cc-4f33-a2c0-7c45de921cd3-2je7ul.png",
  "https://utfs.io/f/483ec3b7-e984-4def-8eba-efb571e88728-7zd65c.png",
  "https://utfs.io/f/6e581b8d-ccb3-49e1-b3a9-e1253874a692-pul1mn.png",
  "https://utfs.io/f/2c078e84-70fc-4950-8aa2-888ec7cbedbd-e7a01m.png",
  "https://utfs.io/f/e10cc5a4-7c90-4aa0-927e-48ab3c0963ea-uxmrg8.JPG",
  "https://utfs.io/f/9ef64be2-56aa-44c7-b6e3-51434c1160a5-kywjrg.png"
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}

      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + '-' + idx} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
