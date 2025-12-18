import { BlogProps } from "@public/blog/page";

export default async function DetailPost({ params }: {
    params: Promise<{ postId: string }>
}) {
    const { postId } = await params;

    const response = await fetch(`https://dummyjson.com/posts/${postId}`);
    const data: BlogProps = await response.json();

    return (
        <div className="px-4 md:px-10 py-14 p-4">
            <div className="bg-white p-4 rounded shadow">
                <h1 className="font-bold">Detalhes do Post!</h1>
                <p className="py-2">Id: {postId}</p>
                <h2 className="py-2">Title: {data.title}</h2>
                <p className="py-2">{data.body}</p>
                <p className="py-2">User id: {data.userId}</p>
                <p className="py-2">Views: {data.views}</p>
            </div>
        </div>
    );
}