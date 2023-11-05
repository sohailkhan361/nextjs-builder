import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function NavBar() {
    return (
        <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
            <Image src='/logo.png'
                alt='logo'
                width={100}
                height={100}
            />
            <div className='hidden md:flex gap-5 text-lg font-bold'>
                <Link href={'/'}>
                    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                        Home
                    </h2>
                </Link>
                <Link href={'/show'}>
                    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                        Show
                    </h2>
                </Link>
                <Link href={'/explore'}>
                    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                        Explore
                    </h2>
                </Link>
                <Link href={'/contact-us'}>
                    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
                        Contact Us
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default NavBar