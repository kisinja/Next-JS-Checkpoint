import React from "react";
import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
    </nav>
);

export default Navbar;