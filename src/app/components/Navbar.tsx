'use client'
import React, { useState } from 'react';
import { Home, CircleUser, BookUser, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

<CircleUser />

const Navbar: React.FC = () => {
    const [isMobileView, setMobileView] = useState(false);
    const pathname = usePathname();
    const Navlinks = [
        { href: "/", label: "Home", Icon: Home },
        { href: "/about", label: "About", Icon: CircleUser },
        { href: "/contact", label: "Contact", Icon: BookUser }
    ]
    function toggleMobileView() {
        setMobileView(!isMobileView);
    }

    return (
        <header className='sticky top-0 bg-[#222831] w-screen p-4 box-border'>
            {/* Desktop Navbar*/}
            <div className='flex justify-between items-center'>
                <Link href='/' className='text-3xl font-bold'>EverLMS</Link>
                <nav className='sm:flex hidden gap-10'>
                    {Navlinks.map((link) => {
                        const Icon = link.Icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link className={`p-2 rounded-lg ${isActive ? 'bg-[#393E46]' : 'bg-[#222831]'} flex gap-2`} key={link.href} href={link.href} >
                                {link.label}
                                <Icon />
                            </Link>
                        )
                    })}
                </nav>
                <button className='block sm:hidden cursor-pointer'
                    onClick={toggleMobileView}
                >
                    {isMobileView ? <X /> : <Menu />}

                </button>
            </div>

            {isMobileView && (<nav className='mt-4'>
                {Navlinks.map((link) => {
                    const Icon = link.Icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link className={`p-2 rounded-lg ${isActive ? 'bg-[#393E46]' : 'bg-[#222831] my-2'} flex gap-2`} key={link.href} href={link.href}
                            onClick={toggleMobileView}
                        >
                            {link.label}
                            <Icon />
                        </Link>
                    )
                })}

            </nav>)}
        </header>
    )
}

export default Navbar