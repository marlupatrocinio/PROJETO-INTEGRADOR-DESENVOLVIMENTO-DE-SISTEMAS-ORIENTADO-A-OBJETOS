'use client'
import React from 'react'
import { useState } from 'react';

import Image from "next/image";
import Link from 'next/link';

const page = () => {

    return (
        <main>
            <form action="#">

                <div className='h-full h-full flex flex-col lg:flex-row justify-around items-center'>

                    <Image className="h-auto max-w-full flex lg:hidden" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

                    <div className='w-full h-1/2 flex flex-col justify-center items-center m-12'>

                        <Image className="h-auto w-full hidden lg:flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

                        <div className='h-full w-full space-y-4 flex flex-col mt-6 items-center'>

                            <h1 className='text-2xl font-bold text-white'>SELECIONE UMA OPÇÃO:</h1>

                            <div className='flex flex-row items-center justify-start'>
                                <Link href="/register/enterprise">
                                    <button className='bg-custom_blue border-custom_yellow border-4 h-12 w-12 shadow-sharp shadow-custom_yellow'>

                                    </button>
                                </Link>
                                <p className='ms-6 text-lg font-bold text-white'> PESSOA FÍSICA </p>
                            </div>


                            <div className='flex flex-row items-center justify-center ms-6'>
                                <Link href="/register/personal">
                                    <button className='bg-custom_blue border-custom_yellow border-4 h-12 w-12 shadow-sharp shadow-custom_yellow'>

                                    </button>
                                </Link>
                                <p className='ms-6 text-lg font-bold text-white'> PESSOA JURÍDICA </p>
                            </div>

                        </div>

                    </div>

                    <div className="w-full h-full hidden lg:flex justify-end items-end">
                        <Image className="h-full max-w-full pt-36" src={'/Triangles.png'} width={250} height={250} alt="triangles" />
                    </div>


                </div>
            </form>
        </main>
    )
}

export default page