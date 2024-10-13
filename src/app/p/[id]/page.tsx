

import { PostProps } from "@/components/Post";
import React from "react";
import ReactMarkdown from "react-markdown"
export default function PostPage(props: PostProps) {
    const post = {
        id: "1",
        title: "Prisma is the perfect ORM for Next.js",
        content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
        published: false,
        author: {
            name: "Nikolas Burk",
            email: "burk@prisma.io",
        },
    }
    let title = post.title
    if (!post.published) {
        title = `${title} (Draft)`
    }
    return <div>
        <div className="bg-white p-4">
            <h2>{title}</h2>
            <p>By {post?.author?.name || "Unknown author"}</p>
            <ReactMarkdown children={post.content} />
        </div>

    </div>;
}
