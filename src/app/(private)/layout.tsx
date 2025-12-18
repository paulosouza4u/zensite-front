import React from "react";
import Menu from "@public/_components/header";
import Footer from "@public/_components/footer";
import Layout from "@/src/app/(public)/_components/layout";

export default function PrivateLayout({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <Menu/>
            {children}
            <Footer/>
        </Layout>
    );
}
