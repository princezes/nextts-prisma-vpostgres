import Post, { PostProps } from "@/components/Post";
import Image from "next/image";
type Props = {
  feed: PostProps[]
}
export default function Home(props: Props) {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="page">
          <h1 className="text-3xl font-bold mb-6">Public Feed</h1>
          <main className="">
            {feed.map((post) => (
              <div key={post.id} className="post">
                <Post post={feed[0]} />
              </div>
            ))}
          </main>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
