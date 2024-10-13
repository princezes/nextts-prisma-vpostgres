"use client"
import { useRouter } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
export type PostProps = {
    id: string;
    title: string;
    author: {
        name: string;
        email: string;
    } | null;
    content: string;
    published: boolean;
};
export default function Post({ post }: { post: PostProps }) {
    const router = useRouter()
    const authorName = post.author ? post.author.name : "Unknown author";
    return <div className="bg-white p-4 w-full cursor-pointer">
        <div onClick={() => router.push(`/p/${post.id}`)}>
            <h2>{post.title}</h2>
            <small>By {authorName}</small>
            <ReactMarkdown children={post.content} />

        </div>
    </div>;
}
