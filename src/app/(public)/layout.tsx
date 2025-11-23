import React from "react";
import Layout from "./_components/layout";
import Menu from "./_components/menu";

export default function PublicLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <Menu/>
            {children}
        </Layout>
    );
}