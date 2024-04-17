import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + '-' + idx} className="w-48">
            <Image className="h-72 w-96" src={image.url} alt="image" width={500} height={400} />
          </div>
        ))}
      </div>
    </main>
  );
}
