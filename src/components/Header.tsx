"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname()
    const isActive: (pathname: string) => boolean = (pathname) => pathname === pathname;
    let left = (
        <div className="left">
            <Link href="/" data-active={isActive("/")} className="font-bold">

                Feed

            </Link>

        </div>
    );
    let right = null;
    return <div>
        <nav className="flex items-center p-8">
            {left}
            {right}
        </nav>
    </div>;
}
