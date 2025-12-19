import { BlogProps } from "@public/blog/page";

export default async function DetailPost({ params }: {
    params: Promise<{ postId: string }>
}) {
    const { postId } = await params;
    const response = await fetch(`https://dummyjson.com/posts/${postId}`);
    const data: BlogProps = await response.json();

    return (
        <main>
            <section className="px-4 md:px-10 py-18">
                <div className="bg-white p-12 rounded shadow">
                    <h1 className="text-center my-8 font-bold text-3xl">Detalhes do Post!</h1>
                    <span className="border font-bold p-2 rounded">Id: {postId}</span>
                    <h2 className="text-3xl mt-12">Title: {data.title}</h2>
                    <p className="py-8">{data.body}</p>
                    <p className="py-2">User id: {data.userId}</p>
                    <p className="py-2">Views: {data.views}</p>
                </div>
            </section>
        </main>
    );
}
