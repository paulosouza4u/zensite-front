// Client Side Rendering
"use client";

import { useEffect, useState } from "react";

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
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts!</h1>
            <div className="flex flex-col gap-4 mx-2">
                <div>
                    <button className="border rounded p-2" onClick={() => alert("Ok!")}>Btn Teste</button>
                </div>
                {posts.map((post: PostsProps) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md debug">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}