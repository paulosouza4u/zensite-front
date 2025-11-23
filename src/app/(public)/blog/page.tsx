// Server Side Rendering

import { Button } from "@/src/components/button";

interface BlogProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseBlog {
    posts: BlogProps[];
}

export default async function Blog() {

    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseBlog = await response.json();

    //console.log(data);

    return (
        <main>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Blog - Posts!</h1>
            <Button/>
            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md debug">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}