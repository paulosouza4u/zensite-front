import React from "react";
import Layout from "./_components/layout";
import Header from "./_components/header";
import Footer from "./_components/footer";

export default function PublicLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <Header/>
            {children}
            <Footer/>
        </Layout>
    );
}