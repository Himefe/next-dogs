import "./globals.css";
import Header from "@/components/layout/header";
import React from "react";
import { UserContextProvider } from "@/contexts/user";
import { getUserAction } from "@/actions/requests/user";
import Footer from "@/components/layout/footer";
import { type_second } from "@/lib/fonts";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { data: user } = await getUserAction();

    return (
        <html lang="pt-BR">
            <body className={type_second.variable}>
                <UserContextProvider user={user}>
                    <Header />
                    <main className="main-body">{children}</main>
                    <Footer />
                </UserContextProvider>
            </body>
        </html>
    );
}
