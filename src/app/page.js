import * as React from 'react';

import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  const accounts = [['Jonh@gmail.com', '123'], ['Gabriel@gmail.com', '123']]

  return (
    <main className='h-full h-full flex flex-col lg:flex-row justify-around items-center sm:p-6 lg:p-44'>

      <Image className="h-auto max-w-full flex lg:hidden" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

      <div className='w-full h-full flex flex-col justify-start items-start'>

        <Image className="h-auto max-w-full hidden lg:flex" src={'/Logo.webp'} width={500} height={50} alt="logo" priority />

        <div className='h-full flex flex-col justify-center items-start'>
          <h1 className='my-12 text-white font-medium text-5xl'>Ainda não tem cadastro?</h1>

          <button className="bg-custom_yellow text-custom_blue rounded-full p-2 ps-8 pe-8 focus:ring-2 focus:outline-none focus:ring-white">
            <Link href="/register">Registre-se</Link>
          </button>
        </div>

      </div>

      <div className="w-full h-full bg-custom_yellow rounded-3xl shadow py-6 sm:p-6 md:p-8 lg:ms-20">
        <form className="space-y-20" action="#">
          <h5 className="text-xl font-medium text-custom_blue text-center">LOGIN</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-custom_blue">Your email</label>
            <input type="email" name="email" id="email" className="mb-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-8 opacity-50" placeholder="name@company.com" required />

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-custom_blue">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-8 opacity-50" required />
          </div>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
            <Link href='/panel'>
              <button type="submit" className="w-full text-white bg-custom_blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-8 text-center mb-4">ACESSAR</button>
            </Link>
            <Link href="/forgot_password" className="text-custom_blue hover:underline">Esqueceu a senha?</Link>
          </div>
        </form>
      </div>


    </main>
  );
}
