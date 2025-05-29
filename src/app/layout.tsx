import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import React from "react";
import { UserContextProvider } from "@/contexts/user";
import { getUserAction } from "@/actions/requests/user";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default async function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    const { data: user } = await getUserAction();

    return (
        <html lang="pt-BR">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <UserContextProvider user={user}>
                    <Header />
                    <main className="main-body">{children}</main>
                    {modal && modal}
                    <Footer />
                </UserContextProvider>
            </body>
        </html>
    );
}
