"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
    const menu = ["Home", "Shop", "Gifting", "About us", "Blog"];
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setOffset(document.body.scrollTop || document.documentElement.scrollTop)
        }

        // Add scroll listener to the body
        document.addEventListener('scroll', onScroll, { passive: true })

        // Clean up the event listener on unmount
        return () => document.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <header className={`w-full fixed z-1000 transition-all ease-in duration-75 bg-transparent px-4 py-2 lg:px-8 lg:py-2 ${offset > 10 ? "bg-white text-black shadow-xs" : "text-white"}`}>
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/mainLogo.png" width={50} height={50} alt="Kanspital" priority quality={80} />
                    </Link>
                    <nav className="lg:block hidden">
                        <ul className="flex h-full">
                            {menu.map((item, index) => (
                                <Link href="/" key={index}>
                                    <li className={`px-4 py-1 rounded-md font-medium leading-relaxed transition-colors duration-200 ${offset > 10 ? "text-black hover:bg-black/10" : "text-white hover:bg-white/10"}`}>
                                        {item}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <div />
                </div>
            </div>
        </header>
    )
}

export default Header;