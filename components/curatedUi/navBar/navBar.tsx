"use client"

import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
            <div className="max-w-full w-full fixed top-2 left-0 z-100">
                <nav className="h-18 flex justify-between items-center gap-4 bg-white/75 backdrop-blur-lg max-w-[70vw] border border-[#e2e2e2] shadow-lg px-10 rounded-full">
                    <Link href="/" >
                        <House />
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default NavBar

