// Server Side Rendering
import { Button } from "@/src/components/button";
import Link from "next/link";

export interface BlogProps {
    id: number;
    title: string;
    body: string;
    userId: number;
    views: number
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
            <section className="px-4 md:px-10 py-4">
                <div className="m-2">
                    <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Blog - Posts Fetch Server-Side!</h1>
                    <Button/>
                </div>
                <div className="flex flex-col gap-4 m-2">
                    {data.posts.map(post => (
                        <div key={post.id} className="bg-white p-4 rounded-md">
                            <h2 className="font-bold">{post.title}</h2>
                            <p className="py-2">{post.body}</p>
                            <Link href={`/blog/${post.id}`} className="font-bold hover:text-neutral-500">Ver mais</Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}