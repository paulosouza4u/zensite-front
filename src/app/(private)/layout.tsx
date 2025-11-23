import React from "react";
import Menu from "@public/_components/header";
import Layout from "@/src/app/(public)/_components/layout";

export default function PrivateLayout({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <Menu/>
            <h1>Private Layout - Sidebar TWO COLUMN</h1>
            {children}
        </Layout>
    );
}
