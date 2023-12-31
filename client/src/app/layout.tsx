import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import RootLayoutComponent from "@/components/RootLayout";
import React from "react";
import Link from "next/link";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'THRIVE TRIBE',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const linkStyle = {
        color: "#1E1E1E"
    };
    return (
        <html lang="en">
        <head>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <link rel="stylesheet" href="https://unpkg.com/@vectopus/atlas-icons/style.css"/>
        </head>
        <body>



        <RootLayoutComponent>
            {children}
        </RootLayoutComponent>




        </body>
        </html>
    )
}
