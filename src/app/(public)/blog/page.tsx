// Server Side Rendering
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

    return (
        <main>
            <section className="px-4 md:px-10 py-4">
                <div className="m-2">
                    <h1 className="text-center my-12 font-bold text-3xl">External Blog - Posts Fetch Server-Side!</h1>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.posts.map(post => (
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
