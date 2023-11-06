'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { builder } from '@builder.io/sdk';

interface user {
    name: string,
    age: number
}

function NavBar() {
    const [userData, setUserData] = useState<user>({ name: 'User', age: 18 });

    useEffect(() => {
        // GET Builder.io model data created by user
        async function fetchUserData() {
            try {
                const { data } = await builder.get('demo-data', {
                    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY
                }).promise();
                setUserData(data);
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchUserData();
    }, []);


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
            <div className='flex bg-black text-center text-white font-bold rounded-full w-10 h-10 items-center justify-center'>
                {userData.name}
            </div>
        </div>
    )
}

export default NavBar