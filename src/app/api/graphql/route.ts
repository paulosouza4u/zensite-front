import { createYoga, createSchema } from "graphql-yoga";

const yoga = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */ `
            type Product {
                id: ID!
                title: String!
                description: String!
                price: Float!
            }

            type Query {
                products: [Product!]!
            }
        `,

        resolvers: {
            Query: {
                products: async () => {
                    const response = await fetch("https://dummyjson.com/products");
                    const data = await response.json();
                    return data.products;
                },
            },
        },
    }),

    graphqlEndpoint: "/api/graphql",
    fetchAPI: { Response }
});

export { yoga as GET, yoga as POST };