import type { Metadata } from "next";
import { GraphQLClient } from "graphql-request";

// Metadata para a página Pricing
export const metadata: Metadata = {
    title: "Pricing - Page Next",
    description: "Página de teste. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // Miniatura de compartilhamento
    openGraph: {
        title: "Pricing - Page Next",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        images: ["https://placehold.co/200x200"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
};

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
}

interface ResponseProducts {
    products: ProductProps[];
}

const client = new GraphQLClient("http://localhost:3000/api/graphql");

export default async function Pricing() {
    const query = `
        query {
            products {
              id
              title
              description
              price
            }
        }
    `;

    const data: ResponseProducts = await client.request(query);

    return (
        <main>
            <section className="px-4 md:px-10 py-4">
                <div className="m-2">
                    <h1 className="text-center my-12 font-bold text-3xl">Products - GraphQL!</h1>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {data.products.map((product: ProductProps) => (
                        <div key={product.id}
                             className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold line-clamp-1">{product.title}</h2>
                                <p className="py-2 text-gray-600 text-sm line-clamp-3">{product.description}</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-2xl font-bold text-neutral-600">${product.price}</p>
                                <button
                                    className="w-full mt-3 bg-neutral-900 text-white py-2 rounded hover:bg-neutral-700 transition-colors">
                                    Selecionar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
