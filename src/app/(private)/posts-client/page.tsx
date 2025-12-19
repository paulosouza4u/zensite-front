// Client Side Rendering
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface PostsProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export default function PostsClient() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    return (
        <main>
            <section className="px-4 md:px-10 py-4">
                <div className="m-2">
                    <h1 className="text-center my-12 font-bold text-3xl">Internal Blog - Posts Fetch Client-Side!</h1>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post: PostsProps) => (
                        <div key={post.id} className="bg-white p-4 rounded-md">
                            <h2 className="text-3xl">{post.title}</h2>
                            <p className="py-2">{post.body.length > 100
                                ? `${post.body.substring(0, 100)}...`
                                : post.body
                            }</p>
                            <Link href={`/blog/${post.id}`} className="font-bold hover:text-neutral-500">Ver mais</Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
